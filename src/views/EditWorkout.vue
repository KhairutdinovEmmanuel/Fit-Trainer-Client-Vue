<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page card-header-title="Edit Workout">
      <v-card-actions>
        <v-btn class="pl-4 pr-4" color="primary" large> add exercise</v-btn>
      </v-card-actions>
      <form-exercise-workout
          v-for="exercise of workout.exercises"
          :key="exercise.id"
          :value="exercise"
          :options="options"
          :min-position="workout.exercises[0].position"
          :max-position="workout.exercises[workout.exercises.length - 1].position"
          @input="handleChangeExercise"
          @handle-click-button-up="handleClickButtonUp"
          @handle-click-button-down="handleClickButtonDown"
          @handle-click-button-delete="handleClickButtonDelete"
      />
      <v-card-actions>
        <v-btn class="pl-4 pr-4" color="primary" large> update workout</v-btn>
      </v-card-actions>
    </card-page>
  </main-layout>
</template>
<script lang="ts">
import Vue from "vue";
import {Component, Emit, Prop} from "vue-property-decorator";
import MainLayout from "../components/MainLayout";
import CardPage from "../components/CardPage";
import FormExerciseWorkout from "../components/FormExerciseWorkout";
import {ISidebarMenuItem} from "@/components/Sidebar/types";
import {IWorkout} from "@/types/Workout";
import {ISelectOptions} from "@/types/ComponentsFieldsForm";
import {IExercise, IExerciseWorkout} from "@/types/Exercise";
import {
  handleClickButtonUp,
  handleClickButtonDown,
  handleClickButtonDelete,
} from "@/utils/handlersNavigationExercise";

@Component({
  name: "edit-workout",
  components: {MainLayout, CardPage, FormExerciseWorkout},
})
export default class EditWorkout extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  private workout: Pick<IWorkout, "date" | "exercises"> = {
    date: "2022-01-18",
    exercises: [
      {
        id: "1",
        countRepeat: 2,
        countMeasurement: 3,
        position: 0,
        exercise: {
          id: "1",
          name: "Exercise #1",
          measurement: "kg",
          position: 0,
        },
      },
      {
        id: "2",
        countRepeat: 2,
        countMeasurement: 3,
        position: 1,
        exercise: {
          id: "2",
          name: "Exercise #2",
          measurement: "time",
          position: 1,
        },
      },
      {
        id: "3",
        countRepeat: 2,
        countMeasurement: 3,
        position: 2,
        exercise: {
          id: "3",
          name: "Exercise #3",
          measurement: "km",
          position: 0,
        },
      },
    ],
  };

  private options: ISelectOptions<IExercise>[] = [
    {
      text: "Exercise #1",
      value: {
        id: "1",
        name: "Exercise #1",
        measurement: "kg",
        position: 0,
      },
    },
    {
      text: "Exercise #2",
      value: {
        id: "2",
        name: "Exercise #2",
        measurement: "time",
        position: 1,
      },
    },
    {
      text: "Exercise #3",
      value: {
        id: "3",
        name: "Exercise #3",
        measurement: "km",
        position: 0,
      },
    },
  ];

  @Emit("input")
  private handleChangeExercise(exercise: IExerciseWorkout) {
    const exercises = this.workout.exercises;
    for (const index in exercises) {
      if (exercises[index].id === exercise.id) {
        exercises[index].exercise = exercise.exercise;
        exercises[index].countRepeat = exercise.countRepeat;
        exercises[index].countMeasurement = exercise.countMeasurement;
      }
    }
  }

  private handleClickButtonUp(exerciseId: string) {
    this.workout.exercises = handleClickButtonUp<IExerciseWorkout>(
        this.workout.exercises,
        exerciseId
    );
  }

  private handleClickButtonDown(exerciseId: string) {
    this.workout.exercises = handleClickButtonDown<IExerciseWorkout>(
        this.workout.exercises,
        exerciseId
    );
  }

  private handleClickButtonDelete(exerciseId: string) {
    this.workout.exercises = handleClickButtonDelete<IExerciseWorkout>(
        this.workout.exercises,
        exerciseId
    );
  }
}
</script>
