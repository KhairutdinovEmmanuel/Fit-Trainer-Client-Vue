<template>
  <v-form class="form-authorization" @submit.prevent="handleSubmit">
    <v-text-field
      v-for="field of templateLayout[layout]"
      :key="field"
      class="form-authorization-field"
      v-model="values[field]"
      :label="formatNameFieldToLabel(field)"
    />

    <div class="form-authorization-actions">
      <v-btn type="submit" class="btn-submit">
        {{ titleSubmit }}
      </v-btn>
      <router-link
        v-if="!!descriptionSubmitTo"
        :to="descriptionSubmitTo"
        class="btn-description btn-description-with-link"
      >
        {{ descriptionSubmit }}
      </router-link>
      <span v-else class="btn-description">
        {{ descriptionSubmit }}
      </span>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import { PropLayoutTypes } from "@/components/FormAuthorization/index";
import { formatNameFieldToLabel } from "@/utils/heplerString";

@Component({
  name: "form-authorization",
  components: {},
})
export default class FormAuthorization extends Vue {
  @Prop({ default: "login" })
  private readonly layout!: PropLayoutTypes;

  @Prop({ default: "Sign in" })
  private readonly titleSubmit!: string;

  @Prop({ default: "Description submit" })
  private readonly descriptionSubmit!: string;

  @Prop()
  private readonly descriptionSubmitTo!: Record<string, string>;

  private values = {
    email: "",
    password: "",
    repeatPassword: "",
    confirmCode: "",
  };

  private readonly templateLayout: Record<string, string[]> = {
    login: ["email", "password"],
    register: ["email", "password", "repeatPassword"],
    "verify-send-confirm-code": ["email"],
    "verify-finish": ["email", "confirmCode"],
    "change-password": ["email", "confirmCode", "password", "repeatPassword"],
  };

  private formatNameFieldToLabel(nameField: string): string {
    return formatNameFieldToLabel(nameField);
  }

  @Emit()
  private handleSubmit() {
    const layout: string = this.layout;
    const values: Record<string, string> = this.values;
    const valuesSubmit: Record<string, string> = {};
    const templateLayout = this.templateLayout[layout];
    for (const elem of templateLayout) {
      valuesSubmit[elem] = values[elem];
    }
    this.$emit("submit", valuesSubmit);
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped />
