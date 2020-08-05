//  import aragorn  from './Aragorn';

 function Trace(name) {
    this.name = name;
    this.startTime;
    this.duration;
}

Trace.prototype.start  = function() {
    
    this.startTime = Date.now();
    console.log('start trace'+ this.name + Date.now());
};

Trace.prototype.walk = function(){};

Trace.prototype.stop  = function() {
    this.duration = this.startTime - Date.now();

    console.log('stop trace'+ this.name + this.duration );
};

const customTrace = new Trace('PAGE_INT');
customTrace.start();
setTimeout(() => { customTrace.stop();}, 1000);


// const customTrace = new Trace('API_LOADED');
// customTrace.start();
// setTimeout(() => { customTrace.stop();}, 1000);



// const customTrace = new Trace('RESPONSE_PARSE');
// customTrace.start();
// setTimeout(() => { customTrace.stop();}, 1000);


// const customTrace = new Trace('RESPONSE_TRANSFORM');
// customTrace.start();
// setTimeout(() => { customTrace.stop();}, 1000);



// const customTrace = new Trace('PAGE_BIND');
// customTrace.start();
// setTimeout(() => { customTrace.stop();}, 1000);

