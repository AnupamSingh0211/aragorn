import Aragorn from './Aragorn';


console.log("======================Trace Sample Start==========================" );


//Case 1 when correct values of event name is given
Aragorn.startTrace('CUSTOM_EVENT_1');
//add delay then stop
setTimeout(() => { Aragorn.stopTrace('CUSTOM_EVENT_1',printEventDuration)},2000);



//Case 2 when correct values of event name 
// Aragorn.startTrace('CUSTOM_EVENT_2');
// //piece of code you want to track for time
// Aragorn.stopTrace('CUSTOM_EVENT_2',printEventDuration)



//Case 3 When an event stop is called without start
// Aragorn.stopTrace('CUSTOM_EVENT_3',printEventDuration) // generic error will be thrown 
// Aragorn.stopTrace(122,printEventDuration) //type error will be thrown





// Case 4 when a trace is started a multiple times before being stoped
//expted behaviour, overwrite the old trace obj and create a new trace


// let count = 5;
// var myVar = setInterval(startIntervalTimer, 1000);

// function startIntervalTimer() {
//     if (--count === 0) {
//     console.log('Stop Trace Called')
//     Aragorn.stopTrace('CUSTOM_EVENT_4',printEventDuration);
//     stopIntervalTimer();
//     }
//     else {
//         console.log('Start trace started called ' + (5 - count) + ' time');
//         Aragorn.startTrace('CUSTOM_EVENT_4');
//     }
//   }
  
//   function stopIntervalTimer() {
//     clearInterval(myVar);
//   }



  //case 5 when  null is passed as key in start or stop  trace

//   Aragorn.startTrace(null); // Reference error will be thrown

//   Aragorn.stopTrace(null);  // Reference error will be thrown

  //Case 6  to clear all traces
  //Aragorn.clearAllTrace();

  


function printEventDuration( eventName ,duration){
     console.log("Event : " +eventName + " Duration:" + duration);
}

console.log("======================Trace Sample Start==========================" );

