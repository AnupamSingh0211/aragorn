"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trace_1 = require("./Trace");
var Aragorn = /** @class */ (function () {
    function Aragorn() {
        this.traceMap = new Map();
    }
    Aragorn.prototype.startTrace = function (traceKey) {
        var startTraceFailed = 'Aragon is unable to start Trace : Trace Key ';
        if (traceKey) {
            if (typeof traceKey === 'string') {
                if (traceKey && this.traceMap.has(traceKey)) {
                    this.traceMap.delete(traceKey);
                }
                var traceObj = new Trace_1.default(traceKey);
                this.traceMap.set(traceKey, traceObj);
                traceObj.start();
            }
            else
                throw new TypeError().name = startTraceFailed + 'should be string';
        }
        else
            throw new ReferenceError().name = startTraceFailed + 'Undefined';
    };
    Aragorn.prototype.stopTrace = function (traceKey, fn) {
        var stopTraceFailed = 'Aragon is unable to stop Trace : Trace Key ';
        if (traceKey) {
            if (typeof traceKey === 'string') {
                if (this.traceMap.has(traceKey)) {
                    var traceObj = this.traceMap.get(traceKey);
                    traceObj.stop();
                    this.traceMap.delete(traceKey);
                    fn(traceObj.name, traceObj.duration);
                }
                else
                    throw new Error().name = stopTraceFailed + 'Missing';
            }
            else
                throw new TypeError().name = stopTraceFailed + 'should be string';
        }
        else
            throw new ReferenceError().name = stopTraceFailed + 'Undefined';
    };
    Aragorn.prototype.clearAllTrace = function () {
        console.log('map');
        delete this.traceMap;
    };
    return Aragorn;
}());
exports.default = new Aragorn();
//# sourceMappingURL=Aragorn.js.map