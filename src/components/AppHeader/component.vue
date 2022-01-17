<template>
  <v-app-bar class="app-header">
    <h1 class="app-header-title">
      {{ title }}
    </h1>
    <v-btn @click="toggleTheme" icon>
      <v-icon> mdi-theme-light-dark </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon> mdi-account </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Inject, Prop } from "vue-property-decorator";
import { Theme } from "vuetify/types/services/theme";

@Component({ name: "app-header" })
export default class AppHeader extends Vue {
  @Prop()
  private readonly title!: string;

  @Inject("theme")
  private readonly theme!: Theme;

  private toggleTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    console.log(this.theme.dark);
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped />
