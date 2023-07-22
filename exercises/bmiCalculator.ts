   export default function calculateBmi(heightInCentimeters: number, weightInKilograms: number): string {

    const heightInMeters: number = heightInCentimeters / 100;
  

    const bmi: number = weightInKilograms / (heightInMeters * heightInMeters);
  

    let message: string;
  
    if (bmi < 18.5) {
      message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      message = "Overweight";
    } else {
      message = "Obese";
    }
  
    return message;
  }
  

  const height = 500;
  const weight = 74; 
  
  const bmiMessage: string = calculateBmi(height, weight);
  console.log(`BMI Result: ${bmiMessage}`);
  