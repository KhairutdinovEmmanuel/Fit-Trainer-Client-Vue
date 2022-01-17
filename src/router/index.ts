import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Verify from "@/views/Verify.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import Dashboard from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import CreateExercise from "@/views/CreateExercise.vue";
import EditExercises from "@/views/EditExercises.vue";
import CreateWorkout from "@/views/CreateWorkout.vue";
import EditWorkout from "@/views/EditWorkout.vue";
import {
  PUBLIC_SIDEBAR_MENU,
  PRIVATE_SIDEBAR_MENU,
} from "@/constants/sidebarMenu";
import { OPTIONS_MEASUREMENT } from "@/constants/optionMeasurement";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: {
      title: "Sign In",
      sidebarMenu: PUBLIC_SIDEBAR_MENU,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    props: {
      title: "Sign up",
      sidebarMenu: PUBLIC_SIDEBAR_MENU,
    },
  },
  {
    path: "/verify",
    name: "verify",
    component: Verify,
    props: {
      title: "Verify",
      sidebarMenu: PUBLIC_SIDEBAR_MENU,
    },
  },
  {
    path: "/change-password",
    name: "change-password",
    component: ChangePassword,
    props: {
      title: "Change Password",
      publicSidebarMenu: PUBLIC_SIDEBAR_MENU,
      privateSidebarMenu: PRIVATE_SIDEBAR_MENU,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    props: {
      title: "Profile",
      sidebarMenu: PRIVATE_SIDEBAR_MENU,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    props: {
      title: "Dashboard",
      sidebarMenu: PRIVATE_SIDEBAR_MENU,
    },
  },
  {
    path: "/create-exercise",
    name: "create-exercise",
    component: CreateExercise,
    props: {
      title: "Create Exercise",
      sidebarMenu: PRIVATE_SIDEBAR_MENU,
      optionsMeasurement: OPTIONS_MEASUREMENT,
    },
  },
  {
    path: "/edit-exercises",
    name: "edit-exercises",
    component: EditExercises,
    props: {
      title: "Edit Exercises",
      sidebarMenu: PRIVATE_SIDEBAR_MENU,
      optionsMeasurement: OPTIONS_MEASUREMENT,
    },
  },
  {
    path: "/create-workout/:date",
    name: "create-workout",
    component: CreateWorkout,
    props: {
      title: "Create Workout",
      sidebarMenu: PRIVATE_SIDEBAR_MENU,
    },
  },
  {
    path: "/edit-workout/:date",
    name: "edit-workout",
    component: EditWorkout,
    props: {
      title: "Edit Workout",
      sidebarMenu: PRIVATE_SIDEBAR_MENU,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
