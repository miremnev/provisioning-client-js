/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.877
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
    root.ProvisioningApi.LoginData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LoginData model module.
   * @module model/LoginData
   * @version 9.0.000.00.877
   */

  /**
   * Constructs a new <code>LoginData</code>.
   * @alias module:model/LoginData
   * @class
   * @param domainUsername {String} User unique login in form: domain.com\\login 
   * @param password {String} Password as plain text. 
   */
  var exports = function(domainUsername, password) {
    var _this = this;

    _this['domain_username'] = domainUsername;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>LoginData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginData} obj Optional instance to populate.
   * @return {module:model/LoginData} The populated <code>LoginData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domain_username')) {
        obj['domain_username'] = ApiClient.convertToType(data['domain_username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * User unique login in form: domain.com\\login 
   * @member {String} domain_username
   * @default 'domain.com\login'
   */
  exports.prototype['domain_username'] = 'domain.com\login';
  /**
   * Password as plain text. 
   * @member {String} password
   * @default 'password'
   */
  exports.prototype['password'] = 'password';



  return exports;
}));


