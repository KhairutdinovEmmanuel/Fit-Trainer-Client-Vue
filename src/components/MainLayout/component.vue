<template>
  <div class="main-layout">
    <sidebar class="main-layout-sidebar" :sidebar-menu="sidebarMenu" />
    <main class="main-layout-content">
      <app-header :title="title" class="main-layout-content-header" />
      <article class="main-layout-content-page">
        <slot />
      </article>
      <app-footer
        :sidebar-menu="sidebarMenu"
        class="main-layout-content-footer"
      />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Sidebar from "@/components/Sidebar";
import { ISidebarMenuItem } from "@/components/Sidebar/types";

@Component({
  name: "main-layout",
  components: { Sidebar, AppFooter, AppHeader },
})
export default class MainLayout extends Vue {
  @Prop({ default: "Default prop title" })
  private readonly title!: string;

  @Prop({ default: () => [] })
  private readonly sidebarMenu!: ISidebarMenuItem[];
}
</script>

<style lang="scss" src="./styles.scss" scoped />
