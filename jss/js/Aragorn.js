"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trace_1 = require("./Trace");
var Aragorn = /** @class */ (function () {
    function Aragorn() {
        this.traceMap = new Map();
    }
    Aragorn.prototype.startTrace = function (traceKey) {
        if (this.traceMap.has(traceKey)) {
            this.traceMap.delete(traceKey);
        }
        var traceObj = new Trace_1.default(name);
        this.traceMap.set(traceKey, traceObj);
        traceObj.start();
    };
    Aragorn.prototype.stopTrace = function (traceKey) {
        if (this.traceMap.has(traceKey)) {
            var traceObj = this.traceMap.get(traceKey);
            traceObj.stop();
            this.traceMap.delete(traceKey);
        }
    };
    Aragorn.prototype.clearAllTrace = function () {
        console.log('Aragorn');
        return '1234d56';
    };
    return Aragorn;
}());
exports.default = new Aragorn();
//# sourceMappingURL=Aragorn.js.map