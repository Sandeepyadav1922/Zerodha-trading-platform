import { useFormik } from "formik";
import { useState } from "react";
import api from "./Api";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username Required";
  }

  if (!values.password) {
    errors.password = "Password Required";
  }

  return errors;
};

function SignIn() {
  let [msg, setMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        await api.post("/login", {
          username: values.username,
          password: values.password,
        });
        window.location.href = "https://zerodhaappdashboard.netlify.app";
      } catch (err) {
        setMsg("Invalid Username OR Password");
      }
    },
  });
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="signup-container">
        <form onSubmit={formik.handleSubmit}>
          {msg && <p style={{ color: "red" }}>{msg}</p>}
          <label htmlFor="username">Username</label>
          <input
            class="form-control"
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          ) : null}
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            class="form-control"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          <br />
          <br />
          <button
            className="btn"
            style={{ backgroundColor: "#636ccb", color: "#fff" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
