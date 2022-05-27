/** Events
 * 
 * Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters")
 *  emit named events that cause Function objects ("listeners") to be called.
 */
 const EventEmitter = require('events');

 class MyEmitter extends EventEmitter {}
 
 const myEmitter = new MyEmitter();
//  myEmitter.on('event', () => {
//    console.log('an event occurred!');
//  });
//  console.log(myEmitter.emit('event') );

// myEmitter.on('event', function(a, b) {
//     console.log(a, b, this, this === myEmitter);
// // Prints:
// //     a b MyEmitter {
// //       domain: null,
// //       _events: { event: [Function] },
// //       _eventsCount: 1,
// //       _maxListeners: undefined } true
// });
// myEmitter.emit('event', 'a', 'b');
// console.log(myEmitter);

// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this); // Prints: a b {}
// });
// myEmitter.emit('event', 'a', 'b');



/**
 * Asynchronous vs. synchronous#
The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate,
 listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:
 */


//  myEmitter.on('event', (a, b) => {
//     setImmediate(() => {
//       console.log('this happens asynchronously');
//     });
//   });
//   console.log(myEmitter.emit('event', 'a', 'b'));
// const t =myEmitter.emit('event', 'a', 'b');
// console.log(t); // true
// myEmitter.emit('event', 'a', 'b');


//When a listener is registered using the eventEmitter.on() method, that listener is invoked every time the named event is emitted.
// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');// Prints: 1
// myEmitter.emit('event');// Prints: 2

// Error Events

//myEmitter.emit('error', new Error('whoops!')); // throw er; // Unhandled 'error' event


// myEmitter.on('error', (err) => {
//   console.error('whoops! there was an error');
// });
// myEmitter.emit('error',);
// // Prints: whoops! there was an error

// const ee = new EventEmitter();
// ee.on('something', async (value) => {
//   throw new Error('kaboom');
// });
// ee.emit('something');


myEmitter.on('event', function firstListener() {
    console.log('Helloooo! first listener');
  });
  // Second listener
  myEmitter.on('event', function secondListener(arg1, arg2) {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
  });
  // Third listener
  myEmitter.on('event', function thirdListener(...args) {
    // const parameters = args.join(', ');
    console.log(`event with parameters ${args} in third listener`);
  });
  
  console.log(myEmitter.listeners('event'));
  myEmitter.emit('event', 1, 2, 3, 4, 5);

// //emitter.eventNames()

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames()); //[ 'foo', 'bar', Symbol(symbol) ]

