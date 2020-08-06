import Aragorn from './Aragorn';

const customTrace = Aragorn.prototype.trace('PAGE_INIT');
customTrace.start();
setTimeout(() => { customTrace.stop();}, 2000);

console.log("imported module" + Aragorn.prototype.classname());




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

