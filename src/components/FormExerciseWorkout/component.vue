<template>
  <div class="d-flex flex-wrap">
    <div class="d-flex col-sm-12 col-md-8">
      <div class="col-3">
        <v-select
          :value="value.exercise"
          :items="options"
          label="Exercise name"
          @input="handleChangeExerciseExercise"
        />
      </div>
      <div class="col-4">
        <v-text-field
          :value="value.countRepeat"
          label="Repeats"
          @input="handleChangeExerciseCountRepeat"
        />
      </div>
      <div class="col-4">
        <v-text-field
          :value="value.countMeasurement"
          label="Measurement"
          @input="handleChangeExerciseCountMeasurement"
        />
      </div>
      <div class="col-1">
        {{ value.exercise && value.exercise.measurement }}
      </div>
    </div>

    <div class="col-sm-12 col-md-4">
      <button-group-exercise
        :id="value.id"
        :position="value.position"
        :min-position="minPosition"
        :max-position="maxPosition"
        @handle-click-button-up="$emit('handle-click-button-up', $event)"
        @handle-click-button-down="$emit('handle-click-button-down', $event)"
        @handle-click-button-delete="
          $emit('handle-click-button-delete', $event)
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import ButtonGroupExercise from "@/components/ButtonGroupExercise/component.vue";
import { ISelectOptions } from "@/types/ComponentsFieldsForm";
import { IExercise, IExerciseWorkout } from "@/types/Exercise";

@Component({
  name: "form-exercise-workout",
  components: { ButtonGroupExercise },
})
export default class FormExerciseWorkout extends Vue {
  @Prop()
  private readonly value!: IExerciseWorkout;

  @Prop()
  private readonly options!: ISelectOptions<IExercise>;

  @Prop()
  private readonly minPosition!: number;

  @Prop()
  private readonly maxPosition!: number;

  private selectedExercise: IExercise | null = null;

  @Emit("input")
  private handleChangeExerciseExercise(exercise: IExercise) {
    this.selectedExercise = exercise;
    return { ...this.value, exercise };
  }

  @Emit("input")
  private handleChangeExerciseCountRepeat(countRepeat: string) {
    return { ...this.value, countRepeat: +countRepeat };
  }

  @Emit("input")
  private handleChangeExerciseCountMeasurement(countMeasurement: string) {
    return { ...this.value, countMeasurement: +countMeasurement };
  }
}
</script>
