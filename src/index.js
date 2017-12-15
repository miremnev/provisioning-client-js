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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddUserData', 'model/AddUserDataWwe', 'model/ApiAsyncSuccessResponse', 'model/ApiAsyncSuccessResponseStatus', 'model/ApiAuditSuccessResponse', 'model/ApiAuditSuccessResponseData', 'model/ApiAuditSuccessResponseDataRows', 'model/ApiErrorResponse', 'model/ApiErrorResponseStatus', 'model/ApiSuccessResponse', 'model/ApiSuccessResponseStatus', 'model/DeleteUserData', 'model/ExportFileData', 'model/ExportFileDataFilterParameters', 'model/ExportFileResponse', 'model/ExportFileResponseData', 'model/ExportStatusResponse', 'model/ExportStatusResponseData', 'model/Extension', 'model/GetImportStatusResponse', 'model/GetImportStatusResponseData', 'model/GetImportStatusResponseStatus', 'model/GetObjectsSuccessResponse', 'model/GetObjectsSuccessResponseData', 'model/GetOptionsResponse', 'model/GetOptionsResponseData', 'model/GetUsersSuccessResponse', 'model/GetUsersSuccessResponseData', 'model/GetUsersSuccessResponseStatus', 'model/InitProvData', 'model/LoginSuccessResponse', 'model/LoginSuccessResponseData', 'model/ModifyOptionsData', 'model/Skill', 'model/UpdateOptionsData', 'model/UpdateUserData', 'model/UpdateUserDataWwe', 'api/AuditApi', 'api/DocumentationApi', 'api/ExportApi', 'api/ImportApi', 'api/ObjectsApi', 'api/OperationsApi', 'api/OptionsApi', 'api/SessionApi', 'api/SystemApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddUserData'), require('./model/AddUserDataWwe'), require('./model/ApiAsyncSuccessResponse'), require('./model/ApiAsyncSuccessResponseStatus'), require('./model/ApiAuditSuccessResponse'), require('./model/ApiAuditSuccessResponseData'), require('./model/ApiAuditSuccessResponseDataRows'), require('./model/ApiErrorResponse'), require('./model/ApiErrorResponseStatus'), require('./model/ApiSuccessResponse'), require('./model/ApiSuccessResponseStatus'), require('./model/DeleteUserData'), require('./model/ExportFileData'), require('./model/ExportFileDataFilterParameters'), require('./model/ExportFileResponse'), require('./model/ExportFileResponseData'), require('./model/ExportStatusResponse'), require('./model/ExportStatusResponseData'), require('./model/Extension'), require('./model/GetImportStatusResponse'), require('./model/GetImportStatusResponseData'), require('./model/GetImportStatusResponseStatus'), require('./model/GetObjectsSuccessResponse'), require('./model/GetObjectsSuccessResponseData'), require('./model/GetOptionsResponse'), require('./model/GetOptionsResponseData'), require('./model/GetUsersSuccessResponse'), require('./model/GetUsersSuccessResponseData'), require('./model/GetUsersSuccessResponseStatus'), require('./model/InitProvData'), require('./model/LoginSuccessResponse'), require('./model/LoginSuccessResponseData'), require('./model/ModifyOptionsData'), require('./model/Skill'), require('./model/UpdateOptionsData'), require('./model/UpdateUserData'), require('./model/UpdateUserDataWwe'), require('./api/AuditApi'), require('./api/DocumentationApi'), require('./api/ExportApi'), require('./api/ImportApi'), require('./api/ObjectsApi'), require('./api/OperationsApi'), require('./api/OptionsApi'), require('./api/SessionApi'), require('./api/SystemApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, AddUserData, AddUserDataWwe, ApiAsyncSuccessResponse, ApiAsyncSuccessResponseStatus, ApiAuditSuccessResponse, ApiAuditSuccessResponseData, ApiAuditSuccessResponseDataRows, ApiErrorResponse, ApiErrorResponseStatus, ApiSuccessResponse, ApiSuccessResponseStatus, DeleteUserData, ExportFileData, ExportFileDataFilterParameters, ExportFileResponse, ExportFileResponseData, ExportStatusResponse, ExportStatusResponseData, Extension, GetImportStatusResponse, GetImportStatusResponseData, GetImportStatusResponseStatus, GetObjectsSuccessResponse, GetObjectsSuccessResponseData, GetOptionsResponse, GetOptionsResponseData, GetUsersSuccessResponse, GetUsersSuccessResponseData, GetUsersSuccessResponseStatus, InitProvData, LoginSuccessResponse, LoginSuccessResponseData, ModifyOptionsData, Skill, UpdateOptionsData, UpdateUserData, UpdateUserDataWwe, AuditApi, DocumentationApi, ExportApi, ImportApi, ObjectsApi, OperationsApi, OptionsApi, SessionApi, SystemApi, UsersApi) {
  'use strict';

  /**
   * The_provisioning_service_will_be_used_to_create_objects_in_configuration_server_in_a_way_that_is_consistent_with_the_BEC_model_The_users_resource_will_be_used_to_perform_CRUD_operations_on_config_server_person_objects__Note_that_this_API_will_extend_the_low_level_configuration_server_API_to_add_additional_functionality_that_will_allow_persons_to_be_created_in_a_way_that_makes_them_immediately_useable_in_BEC__Operations_on_this_resource_may_result_in_other_configuration_objects_being_modified_as_well_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ProvisioningApi = require('index'); // See note below*.
   * var xxxSvc = new ProvisioningApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ProvisioningApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ProvisioningApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ProvisioningApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 9.0.000.06.1248
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddUserData model constructor.
     * @property {module:model/AddUserData}
     */
    AddUserData: AddUserData,
    /**
     * The AddUserDataWwe model constructor.
     * @property {module:model/AddUserDataWwe}
     */
    AddUserDataWwe: AddUserDataWwe,
    /**
     * The ApiAsyncSuccessResponse model constructor.
     * @property {module:model/ApiAsyncSuccessResponse}
     */
    ApiAsyncSuccessResponse: ApiAsyncSuccessResponse,
    /**
     * The ApiAsyncSuccessResponseStatus model constructor.
     * @property {module:model/ApiAsyncSuccessResponseStatus}
     */
    ApiAsyncSuccessResponseStatus: ApiAsyncSuccessResponseStatus,
    /**
     * The ApiAuditSuccessResponse model constructor.
     * @property {module:model/ApiAuditSuccessResponse}
     */
    ApiAuditSuccessResponse: ApiAuditSuccessResponse,
    /**
     * The ApiAuditSuccessResponseData model constructor.
     * @property {module:model/ApiAuditSuccessResponseData}
     */
    ApiAuditSuccessResponseData: ApiAuditSuccessResponseData,
    /**
     * The ApiAuditSuccessResponseDataRows model constructor.
     * @property {module:model/ApiAuditSuccessResponseDataRows}
     */
    ApiAuditSuccessResponseDataRows: ApiAuditSuccessResponseDataRows,
    /**
     * The ApiErrorResponse model constructor.
     * @property {module:model/ApiErrorResponse}
     */
    ApiErrorResponse: ApiErrorResponse,
    /**
     * The ApiErrorResponseStatus model constructor.
     * @property {module:model/ApiErrorResponseStatus}
     */
    ApiErrorResponseStatus: ApiErrorResponseStatus,
    /**
     * The ApiSuccessResponse model constructor.
     * @property {module:model/ApiSuccessResponse}
     */
    ApiSuccessResponse: ApiSuccessResponse,
    /**
     * The ApiSuccessResponseStatus model constructor.
     * @property {module:model/ApiSuccessResponseStatus}
     */
    ApiSuccessResponseStatus: ApiSuccessResponseStatus,
    /**
     * The DeleteUserData model constructor.
     * @property {module:model/DeleteUserData}
     */
    DeleteUserData: DeleteUserData,
    /**
     * The ExportFileData model constructor.
     * @property {module:model/ExportFileData}
     */
    ExportFileData: ExportFileData,
    /**
     * The ExportFileDataFilterParameters model constructor.
     * @property {module:model/ExportFileDataFilterParameters}
     */
    ExportFileDataFilterParameters: ExportFileDataFilterParameters,
    /**
     * The ExportFileResponse model constructor.
     * @property {module:model/ExportFileResponse}
     */
    ExportFileResponse: ExportFileResponse,
    /**
     * The ExportFileResponseData model constructor.
     * @property {module:model/ExportFileResponseData}
     */
    ExportFileResponseData: ExportFileResponseData,
    /**
     * The ExportStatusResponse model constructor.
     * @property {module:model/ExportStatusResponse}
     */
    ExportStatusResponse: ExportStatusResponse,
    /**
     * The ExportStatusResponseData model constructor.
     * @property {module:model/ExportStatusResponseData}
     */
    ExportStatusResponseData: ExportStatusResponseData,
    /**
     * The Extension model constructor.
     * @property {module:model/Extension}
     */
    Extension: Extension,
    /**
     * The GetImportStatusResponse model constructor.
     * @property {module:model/GetImportStatusResponse}
     */
    GetImportStatusResponse: GetImportStatusResponse,
    /**
     * The GetImportStatusResponseData model constructor.
     * @property {module:model/GetImportStatusResponseData}
     */
    GetImportStatusResponseData: GetImportStatusResponseData,
    /**
     * The GetImportStatusResponseStatus model constructor.
     * @property {module:model/GetImportStatusResponseStatus}
     */
    GetImportStatusResponseStatus: GetImportStatusResponseStatus,
    /**
     * The GetObjectsSuccessResponse model constructor.
     * @property {module:model/GetObjectsSuccessResponse}
     */
    GetObjectsSuccessResponse: GetObjectsSuccessResponse,
    /**
     * The GetObjectsSuccessResponseData model constructor.
     * @property {module:model/GetObjectsSuccessResponseData}
     */
    GetObjectsSuccessResponseData: GetObjectsSuccessResponseData,
    /**
     * The GetOptionsResponse model constructor.
     * @property {module:model/GetOptionsResponse}
     */
    GetOptionsResponse: GetOptionsResponse,
    /**
     * The GetOptionsResponseData model constructor.
     * @property {module:model/GetOptionsResponseData}
     */
    GetOptionsResponseData: GetOptionsResponseData,
    /**
     * The GetUsersSuccessResponse model constructor.
     * @property {module:model/GetUsersSuccessResponse}
     */
    GetUsersSuccessResponse: GetUsersSuccessResponse,
    /**
     * The GetUsersSuccessResponseData model constructor.
     * @property {module:model/GetUsersSuccessResponseData}
     */
    GetUsersSuccessResponseData: GetUsersSuccessResponseData,
    /**
     * The GetUsersSuccessResponseStatus model constructor.
     * @property {module:model/GetUsersSuccessResponseStatus}
     */
    GetUsersSuccessResponseStatus: GetUsersSuccessResponseStatus,
    /**
     * The InitProvData model constructor.
     * @property {module:model/InitProvData}
     */
    InitProvData: InitProvData,
    /**
     * The LoginSuccessResponse model constructor.
     * @property {module:model/LoginSuccessResponse}
     */
    LoginSuccessResponse: LoginSuccessResponse,
    /**
     * The LoginSuccessResponseData model constructor.
     * @property {module:model/LoginSuccessResponseData}
     */
    LoginSuccessResponseData: LoginSuccessResponseData,
    /**
     * The ModifyOptionsData model constructor.
     * @property {module:model/ModifyOptionsData}
     */
    ModifyOptionsData: ModifyOptionsData,
    /**
     * The Skill model constructor.
     * @property {module:model/Skill}
     */
    Skill: Skill,
    /**
     * The UpdateOptionsData model constructor.
     * @property {module:model/UpdateOptionsData}
     */
    UpdateOptionsData: UpdateOptionsData,
    /**
     * The UpdateUserData model constructor.
     * @property {module:model/UpdateUserData}
     */
    UpdateUserData: UpdateUserData,
    /**
     * The UpdateUserDataWwe model constructor.
     * @property {module:model/UpdateUserDataWwe}
     */
    UpdateUserDataWwe: UpdateUserDataWwe,
    /**
     * The AuditApi service constructor.
     * @property {module:api/AuditApi}
     */
    AuditApi: AuditApi,
    /**
     * The DocumentationApi service constructor.
     * @property {module:api/DocumentationApi}
     */
    DocumentationApi: DocumentationApi,
    /**
     * The ExportApi service constructor.
     * @property {module:api/ExportApi}
     */
    ExportApi: ExportApi,
    /**
     * The ImportApi service constructor.
     * @property {module:api/ImportApi}
     */
    ImportApi: ImportApi,
    /**
     * The ObjectsApi service constructor.
     * @property {module:api/ObjectsApi}
     */
    ObjectsApi: ObjectsApi,
    /**
     * The OperationsApi service constructor.
     * @property {module:api/OperationsApi}
     */
    OperationsApi: OperationsApi,
    /**
     * The OptionsApi service constructor.
     * @property {module:api/OptionsApi}
     */
    OptionsApi: OptionsApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The SystemApi service constructor.
     * @property {module:api/SystemApi}
     */
    SystemApi: SystemApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
