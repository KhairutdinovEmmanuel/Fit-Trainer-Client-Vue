<template>
  <main-layout :title="title" :sidebar-menu="sidebarMenu">
    <card-page
      card-header-title="Profile"
      card-header-subtitle="It's your profile, you can him editing"
    >
      <v-form class="form-profile" @submit.prevent="handleSubmit">
        <div>
          <div class="d-flex flex-row justify-space-between">
            <div class="col-sm-12 col-md-4">
              <v-avatar size="150">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <div class="pt-2 pb-2" v-if="editProfile">
                <v-file-input
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="Avatar"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-8">
              <div v-if="editProfile">
                <v-text-field
                  v-for="field of fields"
                  :key="field"
                  class="form-authorization-field"
                  v-model="values[field]"
                  :label="formatNameFieldToLabel(field)"
                />
              </div>
              <div v-else>
                <p v-for="field of fields" :key="field" class="subtitle-1">
                  <span class="body-1"
                    >{{ formatNameFieldToLabel(field) }}:
                  </span>
                  <span class="body-1">{{ values[field] }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <v-card-actions class="justify-end">
          <v-btn v-if="editProfile" type="submit" color="primary">
            update
          </v-btn>
          <v-btn type="button" color="primary" @click="toggleEditProfile">
            {{ editProfile ? "cancel" : "edit" }}
          </v-btn>
        </v-card-actions>
      </v-form>
    </card-page>
  </main-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MainLayout from "../components/MainLayout";
import { ISidebarMenuItem } from "@/components/Sidebar/types";
import CardPage from "@/components/CardPage/component.vue";
import { formatNameFieldToLabel } from "@/utils/heplerString";

@Component({
  name: "profile",
  components: { CardPage, MainLayout },
})
export default class Profile extends Vue {
  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly sidebarMenu!: ISidebarMenuItem[];

  private editProfile = false;
  private readonly fields: string[] = ["name", "surname"];

  private values: Record<string, string> = {
    name: "",
    surname: "",
    avatar: "",
  };

  private toggleEditProfile() {
    this.editProfile = !this.editProfile;
  }

  private formatNameFieldToLabel(nameField: string): string {
    return formatNameFieldToLabel(nameField);
  }

  private handleSubmit(target: any) {
    console.log(target);
  }
}
</script>
