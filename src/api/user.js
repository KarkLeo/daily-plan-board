import axios from "axios";
import config from "../config";

export const registerUser = async (fullName, email, password) => {
  try {
    let res = await axios.post(`${config.API_URL}/auth/local/register`, {
      username: fullName,
      email: email,
      password: password,
    });

    return {
      token: res.data.jwt,
      user: res.data.user,
    };
  } catch (err) {
    return err;
  }
};

export const loginUser = async (email, password) => {
  try {
    let res = await axios.post(`${config.API_URL}/auth/local`, {
      identifier: email,
      password: password,
    });
    return {
      token: res.data.jwt,
      user: res.data.user,
    };
  } catch (err) {
    return err;
  }
};

export const testToken = async (token) => {
  try {
    let res = await axios.get(`${config.API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
