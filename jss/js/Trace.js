"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trace = /** @class */ (function () {
    function Trace(key, properties) {
        if (properties === void 0) { properties = null; }
        this.key = null;
        this.startTime = null;
        this.duration = null;
        this.properties = null;
        this.key = key;
        this.startTime;
        this.duration;
        this.properties = properties;
    }
    Trace.prototype.start = function () {
        this.startTime = Date.now();
    };
    Trace.prototype.stop = function () {
        this.duration = Date.now() - this.startTime;
    };
    return Trace;
}());
exports.default = Trace;
//# sourceMappingURL=Trace.js.map