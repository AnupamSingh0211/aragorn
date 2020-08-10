import Trace from './Trace';

 class Aragorn {
   
     traceMap = new Map<String, Trace>();
     
    startTrace( traceKey : string){

        if (this.traceMap.has(traceKey)) {
            this.traceMap.delete(traceKey)
        }
        const traceObj = new Trace(name);
        this.traceMap.set(traceKey, traceObj)
        traceObj.start()

    
    }
     stopTrace(traceKey: string,){

        if ( this.traceMap.has(traceKey)) {
            const traceObj = this.traceMap.get(traceKey)
            traceObj.stop()
            this.traceMap.delete(traceKey)
        }
        
    }

      clearAllTrace(){
        console.log('Aragorn');
        return '1234d56';
    }
}

export default new Aragorn();






