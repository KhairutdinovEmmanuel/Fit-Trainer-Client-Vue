import { IExercise } from "@/types/Exercise";

export const sortExerciseByPositionField = <
  T extends Pick<IExercise, "position">
>(
  exercises: T[]
) => {
  return exercises.sort((a: T, b: IExercise | T) =>
    a.position > b.position ? 1 : -1
  );
};

export const handleClickButtonUp = <
  T extends Pick<IExercise, "id" | "position">
>(
  exercises: T[],
  exerciseId: string
) => {
  const foundIndex = exercises.findIndex(({ id }) => id === exerciseId);
  if (foundIndex > -1) {
    exercises[foundIndex - 1].position = foundIndex;
    exercises[foundIndex].position = foundIndex - 1;
  }
  return sortExerciseByPositionField(exercises);
};

export const handleClickButtonDown = <
  T extends Pick<IExercise, "id" | "position">
>(
  exercises: T[],
  exerciseId: string
) => {
  const foundIndex = exercises.findIndex(({ id }) => id === exerciseId);
  if (foundIndex > -1) {
    exercises[foundIndex].position = foundIndex + 1;
    exercises[foundIndex + 1].position = foundIndex;
  }
  return sortExerciseByPositionField(exercises);
};

export const handleClickButtonDelete = <T extends Pick<IExercise, "id">>(
  exercises: T[],
  exerciseId: string
) => {
  return exercises.filter(({ id }) => id !== exerciseId);
};
