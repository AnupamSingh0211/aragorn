
 class Trace {

    constructor(){
        this.name = name;
        this.startTime;
        this.duration;
    }


}

Trace.prototype.start  = function() {
    
    this.startTime = Date.now();
    console.log('start trace'+ this.name + Date.now());
};

Trace.prototype.stop  = function() {
    this.duration = Date.now() - this.startTime ;
    console.log('stop trace'+ this.name + this.duration );
};

export default Trace;
