import { IExerciseWorkout } from "@/types/Exercise";

export interface IWorkout {
  id: string;
  date: string;
  exercises: IExerciseWorkout[];
}
