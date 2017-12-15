/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.06.1248
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ApiAuditSuccessResponseDataRows = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiAuditSuccessResponseDataRows model module.
   * @module model/ApiAuditSuccessResponseDataRows
   * @version 9.0.000.06.1248
   */

  /**
   * Constructs a new <code>ApiAuditSuccessResponseDataRows</code>.
   * Object describing one audit line
   * @alias module:model/ApiAuditSuccessResponseDataRows
   * @class
   * @param id {Number} Database ID of Audit log line
   * @param createdat {String} Audit log line create time
   * @param username {String} User name for audit action in domain\\login format
   * @param level {String} Audit level (info, error)
   * @param msg {String} Audit message
   */
  var exports = function(id, createdat, username, level, msg) {
    var _this = this;

    _this['id'] = id;
    _this['createdat'] = createdat;
    _this['username'] = username;
    _this['level'] = level;
    _this['msg'] = msg;

  };

  /**
   * Constructs a <code>ApiAuditSuccessResponseDataRows</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiAuditSuccessResponseDataRows} obj Optional instance to populate.
   * @return {module:model/ApiAuditSuccessResponseDataRows} The populated <code>ApiAuditSuccessResponseDataRows</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createdat')) {
        obj['createdat'] = ApiClient.convertToType(data['createdat'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
      if (data.hasOwnProperty('extradata')) {
        obj['extradata'] = ApiClient.convertToType(data['extradata'], Object);
      }
    }
    return obj;
  }

  /**
   * Database ID of Audit log line
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Audit log line create time
   * @member {String} createdat
   */
  exports.prototype['createdat'] = undefined;
  /**
   * User name for audit action in domain\\login format
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * Audit level (info, error)
   * @member {String} level
   * @default 'info'
   */
  exports.prototype['level'] = 'info';
  /**
   * Audit message
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;
  /**
   * Additional Audit data
   * @member {Object} extradata
   */
  exports.prototype['extradata'] = undefined;



  return exports;
}));


