//create the central tracer when initialized

//map and release 





// export const trace()
// {


// }


function name(params) {
    
} trace (name )
{
    return  new Trace(name);
}

var Trace = function(name) {
    this.name = name;
}

Trace.prototype.start  = function() {
    console.log('start trace'+ this.name);
};

Trace.prototype.stop  = function() {
    console.log('stop trace'+ this.name);
};







