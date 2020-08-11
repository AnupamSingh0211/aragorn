class Trace {
  key: string = null;
  startTime: number = null;
  duration: number = null;
  properties: any = null;
  constructor(key: string, properties: any = null) {
    this.key = key;
    this.properties = properties;
  }

  start() {
    this.startTime = Date.now();
  }

  stop() {
    this.duration = Date.now() - this.startTime;
  }
}
export default Trace;
