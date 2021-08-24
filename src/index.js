"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var BaseConfig = /** @class */ (function () {
    function BaseConfig() {
    }
    BaseConfig.prototype.request = function (config) {
        var method = config.method, url = config.url, data = config.data;
        return new Promise(function (resolve, reject) {
            var XML = new XMLHttpRequest();
            try {
                XML.open(method, url, true);
                XML.send(data);
                XML.onreadystatechange = function () {
                    if (XML.readyState === 4 && XML.status === 200) {
                        // XML.responseText
                        resolve(XML.response);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    BaseConfig.prototype.get = function (url, config) {
        return this.request(__assign({ url: url, method: 'GET' }, config));
    };
    BaseConfig.prototype.patch = function (url, config) {
        return this.request(__assign({ url: url, method: 'POST' }, config));
    };
    BaseConfig.prototype["delete"] = function (url, config) {
        return this.request(__assign({ url: url, method: 'DELETE' }, config));
    };
    BaseConfig.prototype.post = function (url, data, config) {
        return this.request(__assign({ url: url, data: data, method: 'POST' }, config));
    };
    BaseConfig.prototype.put = function (url, data, config) {
        return this.request(__assign({ url: url, data: data, method: 'PUT' }, config));
    };
    return BaseConfig;
}());
var Axios = /** @class */ (function (_super) {
    __extends(Axios, _super);
    function Axios() {
        return _super.call(this) || this;
    }
    return Axios;
}(BaseConfig));
var axios = new Axios();
exports["default"] = axios;
