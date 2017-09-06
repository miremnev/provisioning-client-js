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
    define(['ApiClient', 'model/ApiAuditSuccessResponseDataRows'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiAuditSuccessResponseDataRows'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ApiAuditSuccessResponseData = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiAuditSuccessResponseDataRows);
  }
}(this, function(ApiClient, ApiAuditSuccessResponseDataRows) {
  'use strict';




  /**
   * The ApiAuditSuccessResponseData model module.
   * @module model/ApiAuditSuccessResponseData
   * @version 9.0.000.00.877
   */

  /**
   * Constructs a new <code>ApiAuditSuccessResponseData</code>.
   * @alias module:model/ApiAuditSuccessResponseData
   * @class
   * @param rows {Array.<module:model/ApiAuditSuccessResponseDataRows>} 
   */
  var exports = function(rows) {
    var _this = this;

    _this['rows'] = rows;
  };

  /**
   * Constructs a <code>ApiAuditSuccessResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiAuditSuccessResponseData} obj Optional instance to populate.
   * @return {module:model/ApiAuditSuccessResponseData} The populated <code>ApiAuditSuccessResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rows')) {
        obj['rows'] = ApiClient.convertToType(data['rows'], [ApiAuditSuccessResponseDataRows]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ApiAuditSuccessResponseDataRows>} rows
   */
  exports.prototype['rows'] = undefined;



  return exports;
}));


