/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
  /**
   *  Write your code here 👇🏼
   */
  const BMI = (weight * 100) / (height ** 2 / 100);

  /**
   * Stop making changes here!
   */
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState;
  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI < 24.9) {
    BMIState = "healthy";
  } else if (BMI < 29.9) {
    BMIState = "overweight";
  } else {
    BMIState = "obese";
  }
  /**
   * Stop making changes here!
   */
  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState = "not healthy";
  if (BMI >= 19 && BMI <= 24 && age >= 19 && age <= 24) {
    BMIState = "healthy";
    console.log(BMIState);
  } else if (BMI >= 20 && BMI <= 25 && age >= 25 && age <= 34) {
    BMIState = "healthy";
    console.log(BMIState);
  } else if (BMI >= 21 && BMI <= 26 && age >= 35 && age <= 44) {
    BMIState = "healthy";
    console.log(BMIState);
  } else if (BMI >= 22 && BMI <= 27 && age >= 45 && age <= 54) {
    BMIState = "healthy";
    console.log(BMIState);
  } else if (BMI >= 23 && BMI <= 28 && age >= 55 && age <= 64) {
    BMIState = "healthy";
    console.log(BMIState);
  } else if (BMI >= 24 && BMI <= 29 && age > 65) {
    BMIState = "healthy";
    console.log(BMIState);
  } else BMIState = "not healthy";

  return BMIState;

  /**
   * Stop making changes here!
   */
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
