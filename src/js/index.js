import aragorn  from './Aragorn';

const trace = aragorn.trace('CUSTOM_TRACE_NAME');
trace.start();
// code that you want to trace
trace.stop();

console.log('index');

