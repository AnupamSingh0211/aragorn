"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trace = /** @class */ (function () {
    function Trace(name) {
        this.name = null;
        this.startTime = null;
        this.duration = null;
        this.name = name;
        this.startTime;
        this.duration;
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