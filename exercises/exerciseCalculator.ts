interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  function calculateExercises(exerciseHours: number[], target: number): ExerciseResult {
    const periodLength: number = exerciseHours.length;
    const trainingDays: number = exerciseHours.filter(hours => hours > 0).length;
    const totalHours: number = exerciseHours.reduce((total, hours) => total + hours, 0);
    const average: number = totalHours / periodLength;
    const success: boolean = average >= target;
  
    let rating: number;
    let ratingDescription: string;
  
    if (success) {
      rating = 3;
      ratingDescription = 'great job! You met your target!';
    } else if (average >= target - 1) {
      rating = 2;
      ratingDescription = 'not too bad but could be better';
    } else {
      rating = 1;
      ratingDescription = 'you should try to exercise more';
    }
  
    const result: ExerciseResult = {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average,
    };
  
    return result;
  }
  

  const exerciseHours: number[] = [3, 0, 2, 4.5, 0, 3, 1];
  const targetHours: number = 2;
  
  const exerciseResult: ExerciseResult = calculateExercises(exerciseHours, targetHours);
  console.log(exerciseResult);
  export { calculateExercises, ExerciseResult };
  