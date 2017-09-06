/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.877
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.OperationsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse) {
  'use strict';

  /**
   * Operations service.
   * @module api/OperationsApi
   * @version 9.0.000.00.877
   */

  /**
   * Constructs a new OperationsApi. 
   * @alias module:api/OperationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get skills of users
     * The GET operation will return CfgSkill objects actually linked with existing CfgPerson objects
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId Async IO ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getUsedSkillsAsyncWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_aioId': opts['aioId']
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
        '/operations/get-used-skills', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get skills of users
     * The GET operation will return CfgSkill objects actually linked with existing CfgPerson objects
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId Async IO ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getUsedSkillsAsync = function(opts) {
      return this.getUsedSkillsAsyncWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read users
     * The GET operation will fetch CfgPerson objects from configuration server, possible with filters
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId Async IO ID
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getUsersAsyncWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_aioId': opts['aioId'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'sortBy': opts['sortBy'],
        'filterName': opts['filterName'],
        'filterParameters': opts['filterParameters'],
        'roles': opts['roles'],
        'skills': opts['skills'],
        'userEnabled': opts['userEnabled'],
        'userValid': opts['userValid']
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
        '/operations/get-users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read users
     * The GET operation will fetch CfgPerson objects from configuration server, possible with filters
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId Async IO ID
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getUsersAsync = function(opts) {
      return this.getUsersAsyncWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
