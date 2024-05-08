import { EventEmitter, on } from "events";

const myEmitter = new EventEmitter();

function greetHandler() {
  console.log("Hello Hello");
}

function goodbyeHandler() {
  console.log("Bye Bye");
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit the events
myEmitter.emit("greet");
myEmitter.emit("goodbye");

// Error Handling
myEmitter.on("error", (err) => {
  console.log("Error Occurred", err);
});

// Simulate Error
myEmitter.emit("error", new Error("Something went Wrong"));
