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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.GetUsersSuccessResponseStatusData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUsersSuccessResponseStatusData model module.
   * @module model/GetUsersSuccessResponseStatusData
   * @version 9.0.000.00.877
   */

  /**
   * Constructs a new <code>GetUsersSuccessResponseStatusData</code>.
   * @alias module:model/GetUsersSuccessResponseStatusData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetUsersSuccessResponseStatusData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUsersSuccessResponseStatusData} obj Optional instance to populate.
   * @return {module:model/GetUsersSuccessResponseStatusData} The populated <code>GetUsersSuccessResponseStatusData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [Object]);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], Object);
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * List of user objects fetched if dbid parameter is absent.
   * @member {Array.<Object>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * User object fetched if dbid parameter is a person DBID or 'me'.
   * @member {Object} user
   */
  exports.prototype['user'] = undefined;
  /**
   * Total number of users. Available if dbid parameter is absent.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;



  return exports;
}));


