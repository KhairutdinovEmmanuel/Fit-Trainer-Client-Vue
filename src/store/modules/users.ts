import { ActionContext } from "vuex";

export interface UserModuleState {
  email: string | null;
  name: string | null;
  surname: string | null;
  avatar: string | null;
}

export type ContextActionUserModule = ActionContext<UserModuleState, any>;

export default {
  state: {
    email: null,
    name: null,
    surname: null,
    avatar: null,
  },
  actions: {
    async fetchUserProfile(context: ContextActionUserModule) {},
  },
  mutations: {},
  getters: {},
};
