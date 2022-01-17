<template>
  <div class="ma-2 d-flex">
    <v-btn
      :disabled="position === 0"
      large
      class="ma-1"
      color="primary"
      @click="handleClickButtonUp"
    >
      <v-icon size="20"> mdi-arrow-up</v-icon>
    </v-btn>
    <v-btn
      :disabled="position === maxPosition"
      large
      class="ma-1"
      color="primary"
      @click="handleClickButtonDown"
    >
      <v-icon size="20"> mdi-arrow-down</v-icon>
    </v-btn>
    <v-btn large class="ma-1" color="primary" @click="handleClickButtonDelete">
      <v-icon size="20"> mdi-close-circle</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";

@Component({
  name: "button-group-exercise",
})
export default class ButtonGroupExercise extends Vue {
  @Prop()
  private readonly id!: string;

  @Prop()
  private readonly position!: number;

  @Prop()
  private readonly maxPosition!: number;

  @Emit("handle-click-button-up")
  private handleClickButtonUp(): string {
    return this.id;
  }

  @Emit("handle-click-button-down")
  private handleClickButtonDown(): string {
    return this.id;
  }

  @Emit("handle-click-button-delete")
  private handleClickButtonDelete(): string {
    return this.id;
  }
}
</script>
