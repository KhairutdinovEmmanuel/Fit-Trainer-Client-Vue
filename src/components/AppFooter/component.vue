<template>
  <v-footer class="app-footer">
    <div class="app-footer-navigation">
      <div
        v-for="item of sidebarMenu"
        class="app-footer-navigation-item"
        :key="item.name"
      >
        <router-link :to="item.name" class="navigation-item-link">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ISidebarMenuItem } from "@/components/Sidebar/types";

@Component({ name: "app-footer" })
export default class AppFooter extends Vue {
  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];
}
</script>

<style lang="scss" src="./styles.scss" scoped />
