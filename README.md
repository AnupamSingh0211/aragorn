# Aragorn
![The Strider](images/aragorn.jpg)


A Simple Java Script Library, to track events in our JS codebases.

<br>
Tracking time taken by a piece of code is always a piece of pride for  devs and mystery for product guys.

And easiest way to track perfromance of some UI/ BE event is to calculate the time taken from the starting and ending point of the event.

Aragorn help the JS dev to implement this easily in his code base by just asking to start and stop an event when needed and araogorn the legendary tracer will do the rest and will either return the time elapsed for an event or will throw a cautionary error warning for the mortals to correct his/her request.


Its usage is very simple , import aragorn wherever you want to avail his services.

```javascript
import Aragorn from './Aragorn';
```

<br>
Now,state your event which you want to track 

```javascript
{
Aragorn.startTrace('CUSTOM_EVENT_NAME');
//code block you want to trace
}
```

<br>

<br>
Now,stop the tracking when you done

```javascript
{
//code block you want to trace
Aragorn.stopTrace('CUSTOM_EVENT_NAME',printEventDuration)
}
```

Note: Aragorn also takes a function when you are ask him to stop the trace, 

<br>
<br>
Aragorn will return details like event name and event duration for you to use.

```javascript
function printEventDuration( eventName ,duration){
     console.log("Event : " +eventName + " Duration:" + duration);
}
```

<br>

<br>

## Use Cases

#### Use Case 1 : values of event name is given with delay

```
Aragorn.startTrace('CUSTOM_EVENT_1');
//add delay then stop
setTimeout(() => { Aragorn.stopTrace('CUSTOM_EVENT_1',printEventDuration)},2000);
```
---
#### Case 2 : values of event name simply
```
Aragorn.startTrace('CUSTOM_EVENT_2');
//piece of code you want to track for time
Aragorn.stopTrace('CUSTOM_EVENT_2',printEventDuration)
```
---
#### Case 3 : clear all exisiting traces
```
Aragorn.clearAllTrace();
```
---

## Edge Cases

#### Case 1  : event stop is called incorrectly before starting the trace
```
Aragorn.stopTrace('CUSTOM_EVENT_3',printEventDuration) //reference error will be thrown 
Aragorn.stopTrace(122,printEventDuration) //type error will be thrown
```
---

#### Case 2  : event start is  is called multiple times before 

Eg 
```
let count = 5;
var myVar = setInterval(startIntervalTimer, 1000);

function startIntervalTimer() {
    if (--count === 0) {
    console.log('Stop Trace Called')
    Aragorn.stopTrace('CUSTOM_EVENT_4',printEventDuration);
    stopIntervalTimer();
    }
    else {
        console.log('Start trace started called ' + (5 - count) + ' time');
        Aragorn.startTrace('CUSTOM_EVENT_4');
    }
  }
  
  function stopIntervalTimer() {
    clearInterval(myVar);
  }
```
---
#### Case 3  : null is passed as key to start or stop trace
```
  Aragorn.startTrace(null); // Reference error will be thrown

  Aragorn.stopTrace(null);  // Reference error will be thrown
```
---
