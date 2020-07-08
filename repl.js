/* Bootstrapped repl for rapid prototyping */
const repl = require("repl");

// Common imports I seem to use a lot
const fs = require("fs");
const path = require("path");

const moop = 'Hello World!';

function initializeContext(context) {
  context.moop = moop;
}

// Start repl
// ---------------------------------------------------------------------------
const r = repl.start({
  prompt: "my-repl > ",
});
initializeContext(r.context);

r.on("reset", initializeContext);
