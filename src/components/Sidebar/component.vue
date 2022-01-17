<template>
  <v-card class="sidebar" tile>
    <v-list class="sidebar-navigation" dense>
      <v-subheader class="sidebar-navigation-subheader">
        <div class="d-flex justify-center">
          <img
            width="32"
            height="32"
            src="logo.png"
            class="navigation-subheader-logo"
            alt="Navigation subheader logo"
          />
          <span class="navigation-subheader-title">FIT TRAINER</span>
        </div>
        <span class="navigation-subheader-bottom-underline" />
      </v-subheader>
      <v-list-item-group class="sidebar-navigation-list-menu" color="primary">
        <v-list-item
          v-for="item of sidebarMenu"
          :key="item.name"
          :class="{
            'navigation-list-menu-item': true,
            'navigation-list-menu-active-item': $route.name === item.name,
          }"
        >
          <router-link class="list-menu-item-link" :to="{ name: item.name }">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1" v-text="item.title" />
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="sidebar-background-other" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ISidebarMenuItem } from "@/components/Sidebar/types";

@Component({ name: "sidebar" })
export default class Sidebar extends Vue {
  @Prop({ required: true })
  private readonly sidebarMenu!: ISidebarMenuItem[];
}
</script>

<style lang="scss" src="./styles.scss" scoped />
