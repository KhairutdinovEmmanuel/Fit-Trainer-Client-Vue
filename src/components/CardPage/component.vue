<template>
  <v-card class="card-page">
    <section
      v-if="cardHeaderTitle || cardHeaderSubtitle"
      class="card-page-header"
    >
      <v-card-title v-if="cardHeaderTitle" class="card-page-header-title">
        {{ cardHeaderTitle }}
      </v-card-title>
      <v-card-subtitle
        v-if="cardHeaderSubtitle"
        class="card-page-header-subtitle"
      >
        {{ cardHeaderSubtitle }}
      </v-card-subtitle>
    </section>
    <section class="card-page-content">
      <slot />
    </section>
    <section v-if="$slots.hasOwnProperty('card-footer')">
      <slot name="card-footer" />
    </section>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "card-page",
})
export default class CardPage extends Vue {
  @Prop({ default: null })
  private readonly cardHeaderTitle!: string;

  @Prop({ default: null })
  private readonly cardHeaderSubtitle!: string;

  created() {
    console.log(this.$slots);
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped />
