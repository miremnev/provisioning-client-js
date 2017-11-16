/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.1086
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddUserData', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/DeleteUserData', 'model/GetUsersSuccessResponse', 'model/UpdateUserData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddUserData'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/DeleteUserData'), require('../model/GetUsersSuccessResponse'), require('../model/UpdateUserData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.UsersApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.AddUserData, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.DeleteUserData, root.ProvisioningApi.GetUsersSuccessResponse, root.ProvisioningApi.UpdateUserData);
  }
}(this, function(ApiClient, AddUserData, ApiErrorResponse, ApiSuccessResponse, DeleteUserData, GetUsersSuccessResponse, UpdateUserData) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 9.0.000.00.1086
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new user
     * The POST operation will create a new CfgPerson object in configuration server and configure related objects
     * @param {module:model/AddUserData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.addUserWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addUser");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new user
     * The POST operation will create a new CfgPerson object in configuration server and configure related objects
     * @param {module:model/AddUserData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.addUser = function(body) {
      return this.addUserWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove user
     * This operation will delete the specified CfgPerson and connected with it CfgAgentLogin, CfgPlace, CfgDN objects in configuration server.
     * @param {String} dbid User DBID
     * @param {module:model/DeleteUserData} deleteUserData Delete user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deleteUserWithHttpInfo = function(dbid, deleteUserData) {
      var postBody = deleteUserData;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling deleteUser");
      }

      // verify the required parameter 'deleteUserData' is set
      if (deleteUserData === undefined || deleteUserData === null) {
        throw new Error("Missing the required parameter 'deleteUserData' when calling deleteUser");
      }


      var pathParams = {
        'dbid': dbid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/users/{dbid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove user
     * This operation will delete the specified CfgPerson and connected with it CfgAgentLogin, CfgPlace, CfgDN objects in configuration server.
     * @param {String} dbid User DBID
     * @param {module:model/DeleteUserData} deleteUserData Delete user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deleteUser = function(dbid, deleteUserData) {
      return this.deleteUserWithHttpInfo(dbid, deleteUserData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the logged in user
     * The GET operation will fetch specified CfgPerson object  of the logged in user from configuration server
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getCurrentUserWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/users/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the logged in user
     * The GET operation will fetch specified CfgPerson object  of the logged in user from configuration server
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getCurrentUser = function() {
      return this.getCurrentUserWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user
     * The GET operation will fetch specified CfgPerson object from configuration server
     * @param {String} dbid User DBID or string &#39;me&#39; or &#39;skills&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getUserWithHttpInfo = function(dbid) {
      var postBody = null;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling getUser");
      }


      var pathParams = {
        'dbid': dbid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/users/{dbid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user
     * The GET operation will fetch specified CfgPerson object from configuration server
     * @param {String} dbid User DBID or string &#39;me&#39; or &#39;skills&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getUser = function(dbid) {
      return this.getUserWithHttpInfo(dbid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read users
     * The GET operation will fetch CfgPerson objects from configuration server, possible with filters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of users to fetch
     * @param {Number} opts.offset Skip first N matches
     * @param {module:model/String} opts.order Sort results ascending/descending
     * @param {String} opts.sortBy comma-separated list of fields to sort on, supported: firstName,lastName,userName 
     * @param {module:model/String} opts.filterName Users filter name
     * @param {String} opts.filterParameters Part of users first or last name, if filterName: FirstNameOrLastNameMatches specified. 
     * @param {String} opts.roles Only fetch users with specified wwe roles, comma-separated. Supported: ROLE_AGENT,ROLE_ADMIN,ROLE_SUPERVISOR 
     * @param {String} opts.skills Only fetch users with specified skills, comma-separated. 
     * @param {Boolean} opts.userEnabled Fetch only enabled or disabled users.
     * @param {module:model/String} opts.userValid Fetch only valid or invalid users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getUsersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'sortBy': opts['sortBy'],
        'filterName': opts['filterName'],
        'filterParameters': opts['filterParameters'],
        'roles': opts['roles'],
        'skills': opts['skills'],
        'userEnabled': opts['userEnabled'],
        'userValid': opts['userValid'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read users
     * The GET operation will fetch CfgPerson objects from configuration server, possible with filters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of users to fetch
     * @param {Number} opts.offset Skip first N matches
     * @param {module:model/String} opts.order Sort results ascending/descending
     * @param {String} opts.sortBy comma-separated list of fields to sort on, supported: firstName,lastName,userName 
     * @param {module:model/String} opts.filterName Users filter name
     * @param {String} opts.filterParameters Part of users first or last name, if filterName: FirstNameOrLastNameMatches specified. 
     * @param {String} opts.roles Only fetch users with specified wwe roles, comma-separated. Supported: ROLE_AGENT,ROLE_ADMIN,ROLE_SUPERVISOR 
     * @param {String} opts.skills Only fetch users with specified skills, comma-separated. 
     * @param {Boolean} opts.userEnabled Fetch only enabled or disabled users.
     * @param {module:model/String} opts.userValid Fetch only valid or invalid users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getUsers = function(opts) {
      return this.getUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update user
     * This operation will update the specified CfgPerson object in configuration server. Almost the same set of attributes as \&quot;POST\&quot;.
     * @param {String} dbid User DBID
     * @param {module:model/UpdateUserData} updateUserData Update user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.updateUserWithHttpInfo = function(dbid, updateUserData) {
      var postBody = updateUserData;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling updateUser");
      }

      // verify the required parameter 'updateUserData' is set
      if (updateUserData === undefined || updateUserData === null) {
        throw new Error("Missing the required parameter 'updateUserData' when calling updateUser");
      }


      var pathParams = {
        'dbid': dbid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/users/{dbid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update user
     * This operation will update the specified CfgPerson object in configuration server. Almost the same set of attributes as \&quot;POST\&quot;.
     * @param {String} dbid User DBID
     * @param {module:model/UpdateUserData} updateUserData Update user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.updateUser = function(dbid, updateUserData) {
      return this.updateUserWithHttpInfo(dbid, updateUserData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
