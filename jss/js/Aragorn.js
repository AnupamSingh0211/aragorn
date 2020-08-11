"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trace_1 = require("./Trace");
var Aragorn = /** @class */ (function () {
    function Aragorn() {
        this.traceMap = new Map();
        this.logsEnabled = false;
    }
    Aragorn.getInstance = function () {
        if (!Aragorn.instance) {
            Aragorn.instance = new Aragorn();
        }
        return Aragorn.instance;
    };
    Aragorn.prototype.enableLogs = function (logsEnabled) {
        this.logsEnabled = logsEnabled;
    };
    Aragorn.prototype.startTrace = function (traceKey, traceProperties) {
        var startTraceFailed = 'Aragon is unable to start Trace : Trace Key ';
        if (!traceKey)
            throw new ReferenceError(startTraceFailed + 'Undefined');
        if (typeof traceKey !== 'string')
            throw new TypeError(startTraceFailed + 'should be string');
        if (traceKey && this.traceMap.has(traceKey)) {
            this.traceMap.delete(traceKey);
        }
        var traceObj = new Trace_1.default(traceKey, traceProperties);
        this.traceMap.set(traceKey, traceObj);
        traceObj.start();
        if (this.logsEnabled)
            console.log(' Aragorn has started the trace : Event = ' + traceKey);
    };
    Aragorn.prototype.stopTrace = function (traceKey, fn) {
        var stopTraceFailed = 'Aragon is unable to stop Trace : Trace Key ';
        if (!traceKey)
            throw new ReferenceError(stopTraceFailed + 'Undefined');
        if (typeof traceKey !== 'string')
            throw new TypeError(stopTraceFailed + 'should be string');
        if (!this.traceMap.has(traceKey))
            throw new Error(stopTraceFailed + 'Missing');
        var traceObj = this.traceMap.get(traceKey);
        traceObj.stop();
        this.traceMap.delete(traceKey);
        if (this.logsEnabled)
            console.log(' Aragorn has finshed the trace : Event = ' + traceObj.key + ' Event Duration = ' + traceObj.duration);
        fn(traceObj);
    };
    Aragorn.prototype.clearAllTrace = function () {
        delete this.traceMap;
    };
    return Aragorn;
}());
exports.default = Aragorn.getInstance();
//# sourceMappingURL=Aragorn.js.map