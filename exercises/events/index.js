// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

// As object, order is unimportant
class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => fn());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]) {
      this.events[eventName] = [];
    }
  }
}

module.exports = Events;

// class Events {
//   constructor() {
//     this.events = [];
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     const existingEvent = this.events.find(event => event.eventName === eventName);
//     if (existingEvent) {
//       existingEvent.callbacks.push(callback);
//     } else {
//       const newEvent = {
//         eventName,
//         callbacks: [callback],
//       };
//       this.events.push(newEvent);
//     }
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     const triggeredEvent = this.events.find(event => event.eventName === eventName);
//     if (triggeredEvent) {
//       triggeredEvent.callbacks.forEach(fn => fn());
//     }
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     const triggeredEvent = this.events.find(event => event.eventName === eventName);
//     if (triggeredEvent) {
//       triggeredEvent.callbacks = [];
//     }
//   }
// }
