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
    root.ProvisioningApi.Skill = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Skill model module.
   * @module model/Skill
   * @version 9.0.000.00.877
   */

  /**
   * Constructs a new <code>Skill</code>.
   * @alias module:model/Skill
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Skill</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Skill} obj Optional instance to populate.
   * @return {module:model/Skill} The populated <code>Skill</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Skill level. Should be a positive integer number in numeric or string format. If level is equal to '' the skill will be unassigned.
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * Skill name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


