<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page
      class="card-page"
      card-header-title="Register with Fit Trainer App"
      card-header-subtitle="Please, enter your email and password"
    >
      <div class="container-form-register">
        <form-authorization
          class="form-register"
          layout="register"
          title-submit="Sign up"
          description-submit="already have an account? sing in"
          :description-submit-to="{ name: 'login' }"
          @submit="handleSubmit"
        />
      </div>
    </card-page>
  </main-layout>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "@/components/MainLayout/component.vue";
import { Component, Prop } from "vue-property-decorator";
import { ISidebarMenuItem } from "@/components/Sidebar/types";
import FormAuthorization from "@/components/FormAuthorization/component.vue";
import CardPage from "@/components/CardPage/component.vue";

@Component({
  name: "register",
  components: { CardPage, FormAuthorization, MainLayout },
})
export default class Register extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  private handleSubmit(values: Record<string, string>) {
    console.log(values);
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.card-page {
  max-width: 600px;
  flex: 1 1 300px;

  @media (min-width: map-get($breakpoints, md)) {
    max-width: 80%;
  }

  @media (min-width: map-get($breakpoints, lg)) {
    max-width: 70%;
  }

  @media (min-width: map-get($breakpoints, xl)) {
    max-width: 60%;
  }

  .container-form-register {
    display: flex;

    .form-register {
      max-width: 350px;
      flex: 1 1 300px;
    }
  }
}
</style>
