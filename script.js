// Define a function to calculate the number of liters of water needed to fill a pool
const calculateWaterNeeded = (length, width, depth) => {
  // Convert the dimensions from centimeters to meters
  const lengthInMeters = length / 100;
  const widthInMeters = width / 100;
  const depthInMeters = depth / 100;

  // Calculate the volume of the pool in cubic meters
  const volumeInMeters = lengthInMeters * widthInMeters * depthInMeters;

  // Calculate the number of liters of water needed to fill the pool
  const litersNeeded = volumeInMeters * 1000;

  // Return the result
  return litersNeeded;
}

// Prompt the user for the dimensions of the pool
const length = prompt('Enter the length of the pool in centimeters:');
const width = prompt('Enter the width of the pool in centimeters:');
const depth = prompt('Enter the depth of the pool in centimeters:');

// Calculate the number of liters of water needed to fill the pool
const litersNeeded = calculateWaterNeeded(length, width, depth);

// Print the result to the console
console.log(`You will need ${litersNeeded} liters of water to fill the pool.`);
