var Trace = function ( traceName,properties){
    this.id= 123,
    this.traceName = traceName,
    this.properties=  properties
}



var trace1 = new Trace('sampleTrace1', new Map().set('property1','1'))

var trace2 = new Trace('sampleTrace2', new Map().set('property1','2'))


let traceQueue = new Map();

traceQueue.set(Date.now(),trace1).set(Date.now()+1,trace2);

console.log("Number of traces added are " + traceQueue.size)

console.log(traceQueue)