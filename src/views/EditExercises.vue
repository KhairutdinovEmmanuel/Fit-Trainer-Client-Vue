<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page card-header-title="Edit Exercises">
      <form-exercise
        v-for="exercise of exercises"
        :key="exercise.id"
        :value="exercise"
        :options="optionsMeasurement"
        :min-position="exercises[0].position"
        :max-position="exercises[exercises.length - 1].position"
        @input="handleChangeExercise"
        @handle-click-button-up="handleClickButtonUp"
        @handle-click-button-down="handleClickButtonDown"
        @handle-click-button-delete="handleClickButtonDelete"
      />
    </card-page>
  </main-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import MainLayout from "../components/MainLayout";
import CardPage from "@/components/CardPage/component.vue";
import FormExercise from "@/components/FormExercise";
import { ISelectOptions } from "@/types/ComponentsFieldsForm";
import { ISidebarMenuItem } from "@/components/Sidebar/types";
import { IExercise } from "@/types/Exercise";
import {
  handleClickButtonUp,
  handleClickButtonDown,
  handleClickButtonDelete,
} from "@/utils/handlersNavigationExercise";

@Component({
  name: "edit-exercises",
  components: { CardPage, MainLayout, FormExercise },
})
export default class EditExercises extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  @Prop()
  private readonly optionsMeasurement!: ISelectOptions<string>[];

  private exercises: IExercise[] = [
    {
      id: "1",
      name: "",
      measurement: "",
      position: 0,
    },
    {
      id: "2",
      name: "",
      measurement: "",
      position: 1,
    },
    {
      id: "3",
      name: "",
      measurement: "",
      position: 2,
    },
  ];

  @Emit("input")
  private handleChangeExercise(exercise: IExercise) {
    const exercises = this.exercises;
    for (const index in exercises) {
      if (exercises[index].id === exercise.id) {
        exercises[index].name = exercise.name;
        exercises[index].measurement = exercise.measurement;
      }
    }
  }

  private handleClickButtonUp(exerciseId: string) {
    this.exercises = handleClickButtonUp(this.exercises, exerciseId);
  }

  private handleClickButtonDown(exerciseId: string) {
    this.exercises = handleClickButtonDown(this.exercises, exerciseId);
  }

  private handleClickButtonDelete(exerciseId: string) {
    this.exercises = handleClickButtonDelete(this.exercises, exerciseId);
  }
}
</script>
