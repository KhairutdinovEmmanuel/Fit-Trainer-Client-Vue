import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#aa00af",
        secondary: "#00abc1",
        background: "#f5f5f5",
        backgroundCard: "#ffffff",
        fontColorPrimary: "#aa00af",
        fontColorOnBackground: "#616161",
      },
      dark: {
        primary: "#aa00af",
        secondary: "#1e1e1e",
        background: "#333333",
        backgroundCard: "#1e1e1e",
        fontColorPrimary: "#f5f5f5",
        fontColorOnBackground: "#ffffff",
      },
    },
    options: {
      customProperties: true,
    },
  },
});
