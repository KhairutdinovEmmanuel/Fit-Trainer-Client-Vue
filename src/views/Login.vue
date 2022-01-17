<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page
      class="card-page"
      card-header-title="Sign into Fit Trainer App"
      card-header-subtitle="Please, enter your email and password"
    >
      <div class="container-form-login">
        <form-authorization
          class="form-login"
          description-submit="first time user? sing up"
          :description-submit-to="{ name: 'register' }"
          @submit="handleSubmit"
        />
      </div>
    </card-page>
  </main-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MainLayout from "@/components/MainLayout/component.vue";
import FormAuthorization from "@/components/FormAuthorization/component.vue";
import CardPage from "@/components/CardPage/component.vue";
import { ISidebarMenuItem } from "@/components/Sidebar/types";

@Component({
  name: "login",
  components: { CardPage, FormAuthorization, MainLayout },
})
export default class Login extends Vue {
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

  .container-form-login {
    display: flex;

    .form-login {
      max-width: 350px;
      flex: 1 1 300px;
    }
  }
}
</style>
