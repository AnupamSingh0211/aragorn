class Trace {
    key = null;
    startTime = null;
    duration = null;
    properties = null;
    constructor(key, properties = null) {
      this.key = key;
      this.startTime;
      this.duration;
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
  