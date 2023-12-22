// Define the cost function for linear regression
function costFunction(x, y, theta) {
  // x is an array of input values
  // y is an array of output values
  // theta is an array of parameters [slope, intercept]
  let m = x.length; // number of data points
  let sum = 0; // initialize the sum of squared errors
  for (let i = 0; i < m; i++) {
    // for each data point, calculate the prediction and the error
    let prediction = theta[0] * x[i] + theta[1];
    let error = prediction - y[i];
    // add the squared error to the sum
    sum += error * error;
  }
  // return the average of the sum of squared errors
  return sum / (2 * m);
}

// Define the gradient descent function for linear regression
function gradientDescent(x, y, theta, alpha, iterations) {
  // x is an array of input values
  // y is an array of output values
  // theta is an array of parameters [slope, intercept]
  // alpha is the learning rate
  // iterations is the number of steps to update the parameters
  let m = x.length; // number of data points
  let costHistory = []; // array to store the cost function values
  for (let i = 0; i < iterations; i++) {
    // for each iteration, update the parameters and calculate the cost
    let newTheta = []; // array to store the new parameters
    let sum0 = 0; // initialize the sum of the partial derivative with respect to theta0
    let sum1 = 0; // initialize the sum of the partial derivative with respect to theta1
    for (let j = 0; j < m; j++) {
      // for each data point, calculate the prediction and the error
      let prediction = theta[0] * x[j] + theta[1];
      let error = prediction - y[j];
      // add the product of the error and the input value to the sum0
      sum0 += error * x[j];
      // add the error to the sum1
      sum1 += error;
    }
    // calculate the new values of theta0 and theta1 by subtracting the product of the learning rate and the average of the sums from the old values
    newTheta[0] = theta[0] - alpha * sum0 / m;
    newTheta[1] = theta[1] - alpha * sum1 / m;
    // update the parameters with the new values
    theta = newTheta;
    // calculate the cost function with the new parameters and store it in the cost history array
    let cost = costFunction(x, y, theta);
    costHistory.push(cost);
  }
  // return the final parameters and the cost history array
  return [theta, costHistory];
}

// Define some sample data
let x = [1, 2, 3, 4, 5]; // input values
let y = [2, 4, 6, 8, 10]; // output values

// Define some initial parameters
let theta = [0, 0]; // [slope, intercept]
let alpha = 0.01; // learning rate
let iterations = 1000; // number of steps

// Run gradient descent and get the final parameters and the cost history
let [finalTheta, costHistory] = gradientDescent(x, y, theta, alpha, iterations);

// Print the results
console.log("Final parameters:", finalTheta);
console.log("Final cost:", costHistory[costHistory.length - 1]);
