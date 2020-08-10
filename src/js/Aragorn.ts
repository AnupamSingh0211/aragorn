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

     if (traceKey ) 
        {
            if(typeof traceKey === 'string')
                {   
                    if (traceKey && this.traceMap.has(traceKey)) {
                        this.traceMap.delete(traceKey)
                    }
                    const traceObj = new Trace(traceKey);
                    this.traceMap.set(traceKey, traceObj)
                    traceObj.start()

                    if(this.logsEnabled)
                    console.log(' Aragorn has started the trace : Event = ' + traceKey);
                }       
            else throw new TypeError().name = startTraceFailed + 'should be string'
        }    
        else throw new ReferenceError().name = startTraceFailed + 'Undefined'   
    }

    stopTrace(traceKey: string,fn){

    const stopTraceFailed = 'Aragon is unable to stop Trace : Trace Key ';

        if (traceKey ) 
        {
            if(typeof traceKey === 'string')
                {   
                   if(this.traceMap.has(traceKey))
                      {
                        const traceObj = this.traceMap.get(traceKey)
                        traceObj.stop()
                        this.traceMap.delete(traceKey)

                        if(this.logsEnabled)
                        console.log(' Aragorn has finshed the trace : Event = ' + traceObj.name + ' Event Duration = '+ traceObj.duration); 

                        fn(traceObj.name,traceObj.duration)
                     }
                    else throw new Error().name = stopTraceFailed + 'Missing'
                }       
            else throw new TypeError().name = stopTraceFailed + 'should be string'
        }    
        else throw new ReferenceError().name = stopTraceFailed + 'Undefined'
    }

      clearAllTrace(){
        delete this.traceMap
    }
}

export default new Aragorn();






