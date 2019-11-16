/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['petstore/ApiClient', 'petstore/mdl/Client', 'petstore/mdl/OuterBoolean', 'petstore/mdl/OuterComposite', 'petstore/mdl/OuterNumber', 'petstore/mdl/OuterString', 'petstore/mdl/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../mdl/Client'), require('../mdl/OuterBoolean'), require('../mdl/OuterComposite'), require('../mdl/OuterNumber'), require('../mdl/OuterString'), require('../mdl/User'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.FakeApi = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.Client, root.SwaggerPetstore.OuterBoolean, root.SwaggerPetstore.OuterComposite, root.SwaggerPetstore.OuterNumber, root.SwaggerPetstore.OuterString, root.SwaggerPetstore.User);
  }
}(this, function(ApiClient, Client, OuterBoolean, OuterComposite, OuterNumber, OuterString, User) {
  'use strict';

  /**
   * Fake service.
   * @module petstore/handler/FakeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeApi. 
   * @alias module:petstore/handler/FakeApi
   * @class
   * @param {module:petstore/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:petstore/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the fakeOuterBooleanSerialize operation.
     * @callback module:petstore/handler/FakeApi~fakeOuterBooleanSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:petstore/mdl/OuterBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {module:petstore/mdl/OuterBoolean} opts.body Input boolean as post body
     * @param {module:petstore/handler/FakeApi~fakeOuterBooleanSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:petstore/mdl/OuterBoolean}
     */
    this.fakeOuterBooleanSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterBoolean;

      return this.apiClient.callApi(
        '/fake/outer/boolean', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fakeOuterCompositeSerialize operation.
     * @callback module:petstore/handler/FakeApi~fakeOuterCompositeSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:petstore/mdl/OuterComposite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:petstore/mdl/OuterComposite} opts.body Input composite as post body
     * @param {module:petstore/handler/FakeApi~fakeOuterCompositeSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:petstore/mdl/OuterComposite}
     */
    this.fakeOuterCompositeSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterComposite;

      return this.apiClient.callApi(
        '/fake/outer/composite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fakeOuterNumberSerialize operation.
     * @callback module:petstore/handler/FakeApi~fakeOuterNumberSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:petstore/mdl/OuterNumber} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {module:petstore/mdl/OuterNumber} opts.body Input number as post body
     * @param {module:petstore/handler/FakeApi~fakeOuterNumberSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:petstore/mdl/OuterNumber}
     */
    this.fakeOuterNumberSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterNumber;

      return this.apiClient.callApi(
        '/fake/outer/number', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fakeOuterStringSerialize operation.
     * @callback module:petstore/handler/FakeApi~fakeOuterStringSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:petstore/mdl/OuterString} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {module:petstore/mdl/OuterString} opts.body Input string as post body
     * @param {module:petstore/handler/FakeApi~fakeOuterStringSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:petstore/mdl/OuterString}
     */
    this.fakeOuterStringSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterString;

      return this.apiClient.callApi(
        '/fake/outer/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testBodyWithQueryParams operation.
     * @callback module:petstore/handler/FakeApi~testBodyWithQueryParamsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:petstore/mdl/User} body 
     * @param {String} query 
     * @param {module:petstore/handler/FakeApi~testBodyWithQueryParamsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testBodyWithQueryParams = function(body, query, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithQueryParams");
      }

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling testBodyWithQueryParams");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/body-with-query-params', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testClientModel operation.
     * @callback module:petstore/handler/FakeApi~testClientModelCallback
     * @param {String} error Error message, if any.
     * @param {module:petstore/mdl/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:petstore/mdl/Client} body client model
     * @param {module:petstore/handler/FakeApi~testClientModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:petstore/mdl/Client}
     */
    this.testClientModel = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testClientModel");
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
      var returnType = Client;

      return this.apiClient.callApi(
        '/fake', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testEndpointParameters operation.
     * @callback module:petstore/handler/FakeApi~testEndpointParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {Blob} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @param {module:petstore/handler/FakeApi~testEndpointParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testEndpointParameters = function(_number, _double, patternWithoutDelimiter, _byte, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling testEndpointParameters");
      }

      // verify the required parameter '_double' is set
      if (_double === undefined || _double === null) {
        throw new Error("Missing the required parameter '_double' when calling testEndpointParameters");
      }

      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter === undefined || patternWithoutDelimiter === null) {
        throw new Error("Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters");
      }

      // verify the required parameter '_byte' is set
      if (_byte === undefined || _byte === null) {
        throw new Error("Missing the required parameter '_byte' when calling testEndpointParameters");
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
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': _number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['_string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['_date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      var authNames = ['http_basic_test'];
      var contentTypes = ['application/xml; charset=utf-8', 'application/json; charset=utf-8'];
      var accepts = ['application/xml; charset=utf-8', 'application/json; charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testEnumParameters operation.
     * @callback module:petstore/handler/FakeApi~testEnumParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:petstore/mdl/String>} opts.enumFormStringArray Form parameter enum test (string array)
     * @param {module:petstore/mdl/String} opts.enumFormString Form parameter enum test (string) (default to -efg)
     * @param {Array.<module:petstore/mdl/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:petstore/mdl/String} opts.enumHeaderString Header parameter enum test (string) (default to -efg)
     * @param {Array.<module:petstore/mdl/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:petstore/mdl/String} opts.enumQueryString Query parameter enum test (string) (default to -efg)
     * @param {module:petstore/mdl/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:petstore/mdl/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {module:petstore/handler/FakeApi~testEnumParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testEnumParameters = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger'],
      };
      var collectionQueryParams = {
        'enum_query_string_array': {
          value: opts['enumQueryStringArray'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      var formParams = {
        'enum_form_string_array': this.apiClient.buildCollectionParam(opts['enumFormStringArray'], 'csv'),
        'enum_form_string': opts['enumFormString'],
        'enum_query_double': opts['enumQueryDouble']
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testInlineAdditionalProperties operation.
     * @callback module:petstore/handler/FakeApi~testInlineAdditionalPropertiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * test inline additionalProperties
     * 
     * @param {Object} param request body
     * @param {module:petstore/handler/FakeApi~testInlineAdditionalPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testInlineAdditionalProperties = function(param, callback) {
      var postBody = param;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testInlineAdditionalProperties");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/inline-additionalProperties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testJsonFormData operation.
     * @callback module:petstore/handler/FakeApi~testJsonFormDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * test json serialization of form data
     * 
     * @param {String} param field1
     * @param {String} param2 field2
     * @param {module:petstore/handler/FakeApi~testJsonFormDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testJsonFormData = function(param, param2, callback) {
      var postBody = null;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testJsonFormData");
      }

      // verify the required parameter 'param2' is set
      if (param2 === undefined || param2 === null) {
        throw new Error("Missing the required parameter 'param2' when calling testJsonFormData");
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
        'param': param,
        'param2': param2
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/jsonFormData', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));