<template>
  <v-progress-circular indeterminate size="32" color="green" />
</template>

<script lang="js">
import Vue from 'vue';
import {Component} from "vue-property-decorator";

@Component({
  name: 'home',
})
export default class Home extends Vue {
  created() {
    console.log(this.routes);
  }
}
</script>
