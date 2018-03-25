const brain = require('brain.js');

var net = new brain.NeuralNetwork();

console.log("The following neural network implements an XOR (exclusive OR) logical operation, where the output will be true when the inputs are neither all false or all true.");
console.log("Training the model...");
net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);

console.log("Evaluating [1, 1] against the model (should approach 0)...");
console.log(net.run([1, 1]));

console.log("Evaluating [1, 0] against the model (should approach 1)...");
console.log(net.run([1, 0]));
