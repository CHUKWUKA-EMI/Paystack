"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios = __importStar(require("axios"));
var Paystack = /** @class */ (function () {
    function Paystack(secretKey) {
        this.axiosFetch = axios.default;
        this.secretKey = secretKey;
    }
    Paystack.prototype.resolveAccountNumber = function (account_number, bank_code) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, status_1, statusText, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/bank/resolve?account_number=" + account_number + "&bank_code=" + bank_code;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.get(url, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_1 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_1, message: statusText, data: data }];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, {
                                status: error_1.response.status,
                                message: error_1.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.resolveCard = function (cardNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, status_2, statusText, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/decision/bin/" + cardNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.get(url, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_2 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_2, message: statusText, data: data }];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, {
                                status: error_2.response.status,
                                message: error_2.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.createPlan = function (name, interval, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var url, payload, response, status_3, statusText, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/plan";
                        payload = { name: name, interval: interval, amount: amount * 100 };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.post(url, payload, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_3 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_3, message: statusText, data: data }];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, {
                                status: error_3.response.status,
                                message: error_3.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.fetchPlan = function (plan_code) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, status_4, statusText, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/plan/" + plan_code;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.get(url, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_4 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_4, message: statusText, data: data }];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, {
                                status: error_4.response.status,
                                message: error_4.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.updatePlan = function (plan_code, name, interval, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var url, payload, response, status_5, statusText, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/plan/" + plan_code;
                        payload = { name: name, interval: interval, amount: amount * 100 };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.put(url, payload, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_5 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_5, message: statusText, data: data }];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, {
                                status: error_5.response.status,
                                message: error_5.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.createSubscription = function (email, amount, reference, plan_code, invoice_limit) {
        return __awaiter(this, void 0, void 0, function () {
            var url, payload, response, status_6, statusText, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/transaction/initialize";
                        payload = {
                            email: email,
                            amount: amount * 100,
                            reference: reference,
                            plan: plan_code,
                            invoice_limit: invoice_limit,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.post(url, payload, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_6 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_6, message: statusText, data: data }];
                    case 3:
                        error_6 = _a.sent();
                        return [2 /*return*/, {
                                status: error_6.response.status,
                                message: error_6.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.initializeTransaction = function (email, amount, reference) {
        return __awaiter(this, void 0, void 0, function () {
            var url, payload, response, status_7, statusText, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/transaction/initialize";
                        payload = {
                            email: email,
                            amount: amount * 100,
                            reference: reference,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.post(url, payload, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_7 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_7, message: statusText, data: data }];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, {
                                status: error_7.response.status,
                                message: error_7.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Paystack.prototype.verifyPayment = function (reference) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, status_8, statusText, data, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.paystack.co/transaction/verify/" + reference;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosFetch.get(url, {
                                headers: {
                                    Authorization: "Bearer " + this.secretKey,
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        status_8 = response.status, statusText = response.statusText, data = response.data;
                        return [2 /*return*/, { status: status_8, message: statusText, data: data }];
                    case 3:
                        error_8 = _a.sent();
                        return [2 /*return*/, {
                                status: error_8.response.status,
                                message: error_8.response.data.message,
                                data: {},
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Paystack;
}());
exports.default = Paystack;
