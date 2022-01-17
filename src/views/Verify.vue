<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page
      card-header-title="Email verification to finish registration with Fit-Trainer App"
      card-header-subtitle="Please, confirm email address"
    >
      <form-authorization
        class="form-register"
        :layout="layoutForm"
        :title-submit="titleSubmitForm"
        description-submit="already have an account? sing in"
        :description-submit-to="{ name: 'login' }"
        @submit="handleSubmit"
      />
    </card-page>
  </main-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MainLayout from "../components/MainLayout";
import { ISidebarMenuItem } from "@/components/Sidebar/types";
import CardPage from "@/components/CardPage/component.vue";
import FormAuthorization from "@/components/FormAuthorization/component.vue";

@Component({
  name: "verify",
  components: { FormAuthorization, CardPage, MainLayout },
})
export default class Verify extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  private layoutForm = "verify-send-confirm-code";
  private titleSubmitForm = "Send message";

  private handleSubmit(target: any) {
    console.log(target);
    this.layoutForm = "verify-finish";
    this.titleSubmitForm = "verify email";
  }
}
</script>
