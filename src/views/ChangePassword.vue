<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page
      card-header-title="Change password"
      card-header-subtitle="Please, enter email address, confirm code and new password"
    >
      <form-authorization
        class="change-password"
        layout="change-password"
        title-submit="change password"
        description-submit="first time user? sing up"
        :description-submit-to="{ name: 'register' }"
        @submit="handleSubmit"
      />
    </card-page>
  </main-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MainLayout from "../components/MainLayout";
import CardPage from "../components/CardPage";
import FormAuthorization from "../components/FormAuthorization";
import { ISidebarMenuItem } from "@/components/Sidebar/types";

@Component({
  name: "change-password",
  components: { MainLayout, CardPage, FormAuthorization },
})
export default class ChangePassword extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly publicSidebarMenu!: ISidebarMenuItem[];

  @Prop()
  private readonly privateSidebarMenu!: ISidebarMenuItem[];

  private sidebarMenu: ISidebarMenuItem[] = [];

  private handleSubmit(target: any) {
    console.log(target);
  }
}
</script>
