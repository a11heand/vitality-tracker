/*
Filename: Complex_Math_Calculations.js

Description:
This code performs complex mathematical calculations including matrix operations, polynomial evaluations, and advanced statistical analysis.

Author: John Doe
Date: 2022-10-15
*/

// Matrix Operations
function addMatrices(matrix1, matrix2) {
  if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
    throw new Error("Matrices dimensions must match");
  }

  const resultMatrix = [];
  for (let i = 0; i < matrix1.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < matrix1[0].length; j++) {
      resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return resultMatrix;
}

function multiplyMatrices(matrix1, matrix2) {
  if (matrix1[0].length !== matrix2.length) {
    throw new Error("Invalid dimensions for matrix multiplication");
  }

  const resultMatrix = [];
  for (let i = 0; i < matrix1.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      resultMatrix[i][j] = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return resultMatrix;
}

// Polynomial Evaluation
function evaluatePolynomial(coefficients, x) {
  let result = 0;
  for (let i = 0; i < coefficients.length; i++) {
    result += coefficients[i] * Math.pow(x, i);
  }
  return result;
}

// Advanced Statistical Analysis
function calculateMean(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}

function calculateStandardDeviation(numbers) {
  const mean = calculateMean(numbers);
  const sumOfSquaredDifferences = numbers.reduce((accumulator, currentValue) => {
    const difference = currentValue - mean;
    return accumulator + (difference * difference);
  }, 0);
  const variance = sumOfSquaredDifferences / numbers.length;
  return Math.sqrt(variance);
}

// Usage examples
console.log(addMatrices([[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]));
console.log(multiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]));
console.log(evaluatePolynomial([1, -3, 2], 2));
console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateStandardDeviation([1, 2, 3, 4, 5]));