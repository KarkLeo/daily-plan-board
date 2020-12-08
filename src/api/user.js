import axios from "axios";

let process = {
  env: {
    REACT_APP_API_URL: "https://todos-dpb-dev.herokuapp.com",
  },
};

export const registerUser = async (fullName, email, password) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/local/register`,
      {
        username: fullName,
        email: email,
        password: password,
      }
    );

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
    let res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, {
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
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
