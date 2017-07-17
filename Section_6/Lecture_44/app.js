/*
  libuv deals with events coming from the operating system.
  Inside of it, there is a queue of completed events and a
  event loop, which is used by libuv for checking the queue
  that something has happened. Whenever it detects something
  has finished, we calls the correspondent callback. This process
  is commonly called "Event Driven Non-blocking I/O in V8 Javascript".

  Non-blocking: doing other things without stopping your program.
*/

