import { loginByEmail, loginByPhone, getUserInfo, confirmAccess } from "@/api/login";

const user = {
  state: {
    token: "",
    roles: [],
    user: "",
    name: "",
    phone: "",
    avatar: "",
    status: "",
    code: "",
    introduction: "",
    setting: {
      articlePlatform: []
    }
  },

  getters: {
    token: (state) => state.token,
    roles: (state) => state.roles,
    name: (state) => state.name,
    user: (state) => state.user,
    phone: (state) => state.phone,
    avatar: (state) => state.avatar,
    status: (state) => state.status,
    introduction: (state) => state.introduction,
    setting: (state) => state.setting
  },

  mutations: {
    SET_USER_INFO: (state, payload) => {
      if (payload.logout) {
        state.token = "";
        state.roles = [];
        state.user = "";
        state.name = "";
        (state.phone = ""), (state.avatar = "");
        state.code = "";
      } else {
        state.token = payload.token || state.token;
        state.roles = payload.roles || state.roles;
        state.user = payload.user || state.user;
        state.name = payload.name || state.name;
        state.phone = payload.phone || state.phone;
        state.avatar = payload.avatar || state.avatar;
        state.code = payload.code || state.code;
      }
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_CONFIRM: (state, value) => {
      state.confirmPassword = value;
    }
  },

  actions: {
    // Login user
    LoginByEmail: async ({ commit, dispatch }, payload) => {
      try {
        const response = await loginByEmail(payload.email.trim(), payload.password);
        console.log("[vuex.user] LoginByEmail", payload, response);
        await commit("SET_TOKEN", response.user["token"]);
        await commit("SET_USER_INFO", response.user);
        await dispatch("GenerateRoutes", response.user);
      } catch (err) {
        console.warn("[vuex.user] LoginByEmail", err);
      }
    },

    LoginByPhone: async ({ commit, dispatch }, payload) => {
      try {
        const response = await loginByPhone(payload.phone.trim(), payload.password);
        console.log("[vuex.user] LoginByPhone", payload, response);
        await commit("SET_TOKEN", response.user["token"]);
        await commit("SET_USER_INFO", response.user);
        await dispatch("GenerateRoutes", response.user);
      } catch (err) {
        console.warn("[vuex.user] LoginByEmail", err);
      }
    },

    GetUserInfo: async ({ commit, state }) => {
      console.log("[vuex.user] GetUserInfo");
      try {
        const response = await getUserInfo(state.token);

        // Since mockjs does not support custom status codes, it can only be hacked like this
        if (!response) {
          throw new Error("Verification failed, please login again.");
        }

        // Verify returned roles are a non-null array
        if (response.user["roles"] && response.user["roles"].length === 0) {
          throw new Error("getInfo: roles must be a non-null array!");
        }

        commit("SET_USER_INFO", response.user);
      } catch (err) {
        console.warn("[vuex.user] GetUserInfo", err);
      }
    },

    LogOut: async ({ commit }) => {
      try {
        console.log("[vuex.user] LogOut");
        await commit("SET_USER_INFO", { logout: true });
      } catch (err) {
        console.warn("[vuex.user] LogOut", err);
      }
    },

    ConfirmAccess: async ({ commit, state }, payload) => {
      try {
        const response = await confirmAccess(payload.phone, payload.password);
        console.log("[vuex.user] Confirm password", payload, response);
        if (response) {
          await commit("SET_CONFIRM", true);
        } else {
          await commit("SET_CONFIRM", false);
        }
      } catch (error) {
        console.warn("[vuex.user] Confirm Access", error);
      }
    }

    // Dynamically modify permissions
    /* ChangeRoles: async ({ commit, dispatch }, role) => {
      try {
        console.log('[vuex.user] ChangeRoles', role);
        await commit('SET_TOKEN', role);
        const data = await getUserInfo(role);
        await commit('SET_USER_INFO', data);
        // Redraw the side menu after dynamically modifying the permissions
        await dispatch('GenerateRoutes', data);
      } catch (err) {
        console.warn('[vuex.user] ChangeRoles', err);
      }
    }, */
  }
};

export default user;
