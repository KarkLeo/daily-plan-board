import axios from "axios";

export const registerUser = async (fullName, email, password) => {
  try {
    let res = await axios.post("http://localhost:1337/auth/local/register", {
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
    let res = await axios.post("http://localhost:1337/auth/local", {
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
    let res = await axios.get("http://localhost:1337/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
