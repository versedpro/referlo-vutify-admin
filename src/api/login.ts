/**
 * Vuetify theme options.
 */
import { userAdmin, userEditor } from "@/api/mock";

/**
 * Login by email and password
 *
 * @param {String} email user email
 * @param {String} password user password
 */
export const loginByEmail = async (email, password) => {
  console.log(`[loginByEmail] email ${email}`);
  let user = {};
  try {
    if (userEditor.email === email && userEditor.password === password) {
      user = userEditor;
    } else if (userAdmin.email === email && userAdmin.password === password) {
      user = userAdmin;
    }
    if (!user || !user["token"]) {
      throw new Error("User is not found");
    }
  } catch (err) {
    console.warn(`[loginByEmail] ${err}`);
  }
  return { user };
};

/**
 * Login by email and password
 *
 * @param {String} email user email
 * @param {String} password user password
 */
export const loginByPhone = async (phone, password) => {
  console.log(`[loginByPhone] email ${phone}`);
  let user = {};
  try {
    if (userEditor.phone === phone && userEditor.password === password) {
      user = userEditor;
    } else if (userAdmin.phone === phone && userAdmin.password === password) {
      user = userAdmin;
    }
    if (!user || !user["token"]) {
      throw new Error("User is not found");
    }
  } catch (err) {
    console.warn(`[loginByPhone] ${err}`);
  }
  return { user };
};

/**
 * Get user information by token
 *
 * @param {String} token user token
 */
export const getUserInfo = async token => {
  console.log(`[getUserInfo] token ${token}`);
  let user = {};
  try {
    if (!token) {
      throw new Error("Invalid token");
    }

    if (token === userAdmin.token) {
      user = userAdmin;
    } else {
      user = userEditor;
    }
  } catch (err) {
    console.warn(`[getUserInfo] ${err}`);
  }
  return { user };
};

/**
 * Get user information by token
 *
 * @param {String} token user token
 */
export const confirmAccess = async (phone, password) => {
  console.log(`[confirmAccess] password ${password}`);
  try {
    if (userEditor.phone === phone && userEditor.password === password) {
      return true;
    } else if (userAdmin.phone === phone && userAdmin.password === password) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(`[confirmAccess] ${err}`);
  }
};

