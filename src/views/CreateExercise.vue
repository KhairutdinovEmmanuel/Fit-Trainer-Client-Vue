<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page
      card-header-title="Create new exercise"
      card-header-subtitle="Please, add a new exercise name and measurement type"
    >
      <v-form @submit.prevent="handleSubmit">
        <v-text-field v-model="values.name" label="Exercise Name" />
        <v-select v-model="values.measurement" :items="optionsMeasurement" label="Measurement type" />
        <v-card-actions class="pa-0 pt-3">
          <v-btn type="submit" class="pl-5 pr-5" color="primary" large>
            create exercise
          </v-btn>
        </v-card-actions>
      </v-form>
    </card-page>
  </main-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MainLayout from "../components/MainLayout";
import { ISidebarMenuItem } from "@/components/Sidebar/types";
import CardPage from "@/components/CardPage/component.vue";
import { ISelectOptions } from "@/types/ComponentsFieldsForm";

@Component({
  name: "create-exercise",
  components: { CardPage, MainLayout },
})
export default class CreateExercise extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  @Prop()
  private readonly optionsMeasurement!: ISelectOptions<string>[];

  private values = {
    name: "",
    measurement: "",
  };

  private handleSubmit() {
    console.log(this.values);
  }

  created() {
    console.log(this.optionsMeasurement);
  }
}
</script>
