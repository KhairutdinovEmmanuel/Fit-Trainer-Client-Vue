<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <v-date-picker
      :value="dates"
      :allowed-dates="allowedDates"
      color="primary"
      multiple
    />
  </main-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ISidebarMenuItem } from "@/components/Sidebar/types";
import MainLayout from "@/components/MainLayout";

@Component({
  name: "dashboard",
  components: { MainLayout },
})
export default class Dashboard extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  private readonly dates: string[] = [];

  // allowed only weekday
  private allowedDates(date: string) {
    const numberDay = new Date(date).getDay();
    return numberDay >= 1 && numberDay < 6;
  }

  created() {
    console.log(this.title);
  }
}
</script>

<style></style>
