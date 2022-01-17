<template>
  <div class="d-flex flex-wrap">
    <div class="d-flex col-sm-12 col-md-7">
      <div class="col-7">
        <v-text-field
          :value="value.name"
          label="Exercises name"
          @input="handleChangeExerciseName"
        />
      </div>
      <div class="col-5">
        <v-select
          :value="value.measurement"
          :items="options"
          label="Measurement type"
          @input="handleChangeExerciseMeasurement"
        />
      </div>
    </div>

    <div class="col-sm-12 col-md-5">
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
import { IExercise } from "@/types/Exercise";

@Component({
  name: "form-exercise",
  components: { ButtonGroupExercise },
})
export default class FormExercise extends Vue {
  @Prop()
  private readonly value!: IExercise;

  @Prop()
  private readonly options!: ISelectOptions<string>;

  @Prop()
  private readonly minPosition!: number;

  @Prop()
  private readonly maxPosition!: number;

  @Emit("input")
  private handleChangeExerciseName(name: string) {
    return { ...this.value, name };
  }

  @Emit("input")
  private handleChangeExerciseMeasurement(measurement: string) {
    return { ...this.value, measurement };
  }
}
</script>
