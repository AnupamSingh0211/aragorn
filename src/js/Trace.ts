class Trace {
    name = null;
    startTime = null;
    duration = null;
    constructor(name) {
      this.name = name;
      this.startTime;
      this.duration;
    }
  
    start() {
      this.startTime = Date.now();
    }
  
    stop() {
      this.duration = Date.now() - this.startTime;
    }
  }
  export default Trace;
  