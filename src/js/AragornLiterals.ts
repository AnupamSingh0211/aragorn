// import Trace from "./Trace";


// var Aragorn = (function () {

//     // Instance stores a reference to the Aragorn
//     var instance;
  
//     function init() {
  
//       // Singleton
  
//       // Private methods and variables

//       const traceMap = new Map(); 
//       const logsEnabled = false;
  
//       return {
  
//         // Get the Singleton instance if one exists
//          // or create one if it doesn't
//         getInstance: function () {

//         if ( !instance ) {
//           instance = init();
//         }
  
//         return instance;
//       },

//         enableLogs: function(logsEnabled: boolean) {
//             this.logsEnabled = logsEnabled;
//           },

//           startTrace: function(traceKey: string) {
//             const startTraceFailed = "Aragon is unable to start Trace : Trace Key ";
        
//             if (!traceKey) throw new ReferenceError(startTraceFailed + "Undefined");
//             if (typeof traceKey !== "string")
//               throw new TypeError(startTraceFailed + "should be string");
        
//             if (traceKey && this.traceMap.has(traceKey)) {
//               this.traceMap.delete(traceKey);
//             }
        
//             const traceObj = new Trace(traceKey);
//             this.traceMap.set(traceKey, traceObj);
//             traceObj.start();
        
//             if (this.logsEnabled)
//               console.log(" Aragorn has started the trace : Event = " + traceKey);
//           },
        
//           stopTrace: function(traceKey: string, fn) {
//             const stopTraceFailed = "Aragon is unable to stop Trace : Trace Key ";
        
//             if (!traceKey) throw new ReferenceError(stopTraceFailed + "Undefined");
//             if (typeof traceKey !== "string")
//               throw new TypeError(stopTraceFailed + "should be string");
//             if (!this.traceMap.has(traceKey))
//               throw new Error(stopTraceFailed + "Missing");
        
//             const traceObj = this.traceMap.get(traceKey);
//             traceObj.stop();
//             this.traceMap.delete(traceKey);
        
//             if (this.logsEnabled)
//               console.log(
//                 " Aragorn has finshed the trace : Event = " +
//                   traceObj.name +
//                   " Event Duration = " +
//                   traceObj.duration
//               );
        
//             fn(traceObj.name, traceObj.duration);
//           },
        
//           clearAllTrace: function() {
//             delete this.traceMap;
//           }
//       };
//     }
// })();

// export default Aragorn;


