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
    define(['ApiClient', 'model/ApiAuditSuccessResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiAuditSuccessResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ApiAuditSuccessResponse = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiAuditSuccessResponseData);
  }
}(this, function(ApiClient, ApiAuditSuccessResponseData) {
  'use strict';




  /**
   * The ApiAuditSuccessResponse model module.
   * @module model/ApiAuditSuccessResponse
   * @version 9.0.000.00.1086
   */

  /**
   * Constructs a new <code>ApiAuditSuccessResponse</code>.
   * @alias module:model/ApiAuditSuccessResponse
   * @class
   * @param code {Number} Zero code meaning success
   * @param data {module:model/ApiAuditSuccessResponseData} 
   */
  var exports = function(code, data) {
    var _this = this;

    _this['code'] = code;
    _this['data'] = data;
  };

  /**
   * Constructs a <code>ApiAuditSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiAuditSuccessResponse} obj Optional instance to populate.
   * @return {module:model/ApiAuditSuccessResponse} The populated <code>ApiAuditSuccessResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiAuditSuccessResponseData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * Zero code meaning success
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {module:model/ApiAuditSuccessResponseData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


