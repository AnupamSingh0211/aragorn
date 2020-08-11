import Trace from './Trace';

 class Aragorn {

    traceMap = new Map<String, Trace>();

    logsEnabled = false;

    enableLogs( logsEnabled : boolean){
        this.logsEnabled= logsEnabled;
    }
     
    startTrace( traceKey : string)
    {
    const startTraceFailed = 'Aragon is unable to start Trace : Trace Key ';

     if (!traceKey )  throw new ReferenceError().name = startTraceFailed + 'Undefined';
     if(typeof traceKey !== 'string') throw new TypeError().name = startTraceFailed + 'should be string'
        
     if (traceKey && this.traceMap.has(traceKey)) {
            this.traceMap.delete(traceKey)
        }

        const traceObj = new Trace(traceKey);
        this.traceMap.set(traceKey, traceObj)
        traceObj.start()

        if(this.logsEnabled)
        console.log(' Aragorn has started the trace : Event = ' + traceKey);      
        
    }

    stopTrace(traceKey: string,fn){

    const stopTraceFailed = 'Aragon is unable to stop Trace : Trace Key ';


    if (!traceKey )  throw new ReferenceError().name = stopTraceFailed + 'Undefined';
    if(typeof traceKey !== 'string') throw new TypeError().name = stopTraceFailed + 'should be string'
    if(!this.traceMap.has(traceKey)) throw new Error().name = stopTraceFailed + 'Missing'

        const traceObj = this.traceMap.get(traceKey)
        traceObj.stop()
        this.traceMap.delete(traceKey)

        if(this.logsEnabled)
        console.log(' Aragorn has finshed the trace : Event = ' + traceObj.name + ' Event Duration = '+ traceObj.duration); 

        fn(traceObj.name,traceObj.duration)       
    }

      clearAllTrace(){
        delete this.traceMap
    }
}

export default new Aragorn();






