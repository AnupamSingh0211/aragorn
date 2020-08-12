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
    this.startTime = performance.now();
  }

  stop() {
    this.duration = Math.floor(performance.now() - this.startTime);
  }
}
export default Trace;
