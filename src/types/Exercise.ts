export interface IExercise {
  id: string;
  name: string;
  measurement: string;
  position: number;
}

export interface IExerciseWorkout {
  id: string;
  countRepeat: number;
  countMeasurement: number;
  position: number;
  exercise: IExercise;
}
