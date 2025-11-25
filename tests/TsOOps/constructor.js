"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var test_1 = require("@playwright/test");
var salesforce = /** @class */ (function () {
    function salesforce(tpage) {
        this.LPage = tpage;
    }
    salesforce.prototype.loadPage = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LPage.goto(url)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.LPage.waitForSelector("#username", { state: "visible" })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    salesforce.prototype.enterCredential = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LPage.locator("#username").fill(username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.LPage.locator("#password").fill(password)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    salesforce.prototype.clickLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LPage.locator("#Login").click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    salesforce.prototype.getTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LPage.title()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    salesforce.prototype.closeBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LPage.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return salesforce;
}());
function basic() {
    return __awaiter(this, void 0, void 0, function () {
        var browser, context, page, sf, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, test_1.chromium.launch({ headless: false, timeout: 700000 })];
                case 1:
                    browser = _c.sent();
                    return [4 /*yield*/, browser.newContext()];
                case 2:
                    context = _c.sent();
                    return [4 /*yield*/, context.newPage()];
                case 3:
                    page = _c.sent();
                    sf = new salesforce(page);
                    return [4 /*yield*/, sf.loadPage("https://login.salesforce.com/?locale=in")];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, sf.enterCredential("kaavya.priya.kp@testleaf.com", "Sales@200418")];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, sf.clickLogin()];
                case 6:
                    _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, sf.getTitle()];
                case 7:
                    _b.apply(_a, [_c.sent()]);
                    return [4 /*yield*/, sf.closeBrowser()];
                case 8:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
basic();
