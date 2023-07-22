import express, { Request, Response } from 'express';
import calculateBmi from './bmiCalculator';
import { calculateExercises, ExerciseResult } from './exerciseCalculator';

const app = express();
const port = 3002;

app.get('/bmi', (req: Request, res: Response) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    return res.status(400).json({ error: 'Invalid height or weight provided' });
  }

  const bmiMessage: string = calculateBmi(height, weight);
  return res.json({ bmi: bmiMessage });
});

app.post('/exercises', (req: Request, res: Response) => {
  const { exerciseHours, target } = req.body;

  if (!Array.isArray(exerciseHours) || exerciseHours.some(isNaN) || target === undefined || isNaN(target)) {
    return res.status(400).json({ error: 'Invalid exercise data provided' });
  }

  const exerciseResult: ExerciseResult = calculateExercises(exerciseHours, target);
  return res.json(exerciseResult);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


