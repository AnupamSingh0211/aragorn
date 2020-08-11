import Trace from './Trace';

class Aragorn {
  private static instance: Aragorn;

  traceMap = new Map<string, Trace>();

  logsEnabled = false;

  static getInstance(): Aragorn {
    if (!Aragorn.instance) {
      Aragorn.instance = new Aragorn();
    }
    return Aragorn.instance;
  }

  enableLogs(logsEnabled: boolean) {
    this.logsEnabled = logsEnabled;
  }

  startTrace(traceKey: string, traceProperties?: Map<string, object>) {
    const startTraceFailed = 'Aragon is unable to start Trace : Trace Key ';

    if (!traceKey) throw new ReferenceError(startTraceFailed + 'Undefined');
    if (typeof traceKey !== 'string') throw new TypeError(startTraceFailed + 'should be string');

    if (traceKey && this.traceMap.has(traceKey)) {
      this.traceMap.delete(traceKey);
    }

    const traceObj = new Trace(traceKey, traceProperties);
    this.traceMap.set(traceKey, traceObj);
    traceObj.start();

    if (this.logsEnabled) console.log(' Aragorn has started the trace : Event = ' + traceKey);
  }

  stopTrace(traceKey: string, fn: any) {
    const stopTraceFailed = 'Aragon is unable to stop Trace : Trace Key ';

    if (!traceKey) throw new ReferenceError(stopTraceFailed + 'Undefined');
    if (typeof traceKey !== 'string') throw new TypeError(stopTraceFailed + 'should be string');
    if (!this.traceMap.has(traceKey)) throw new Error(stopTraceFailed + 'Missing');

    const traceObj = this.traceMap.get(traceKey);
    traceObj.stop();
    this.traceMap.delete(traceKey);

    if (this.logsEnabled)
      console.log(
        ' Aragorn has finshed the trace : Event = ' + traceObj.key + ' Event Duration = ' + traceObj.duration,
      );

    fn(traceObj);
  }

  clearAllTrace() {
    delete this.traceMap;
  }
}

export default Aragorn.getInstance();
