import { useFormik } from "formik";
import { useState } from "react";
// import api from "./Api";
import axios from "axios";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username Required';
   }

   if (!values.email) {
     errors.email = 'Email Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   if (!values.password) {
     errors.password = 'Password Required';
   }
 
   return errors;
 };

function Signup() {
  let [msg, setMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setMsg("");
        try {
            await axios.post("https://zerodha-backend-r6zl.onrender.com/signup", {
            username: values.username,
            email: values.email,
            password: values.password
        }, {withCredentials: true});
      window.location.href = "https://zerodha-dashboard-o1pv.onrender.com";
        } catch(err) {
          console.log(err.response.data.error)
          setMsg(err.response.data.error);
        }
    }
  });

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="signup-container">
        <form onSubmit={formik.handleSubmit}>
          {msg && <p style={{color: "red"}}>{msg}</p>}
            <label htmlFor="username">Username</label>
       <input
         class="form-control"
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}
       <br/><br/>
       <label htmlFor="email">Email Address</label>
       <input
         class="form-control"
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
       <br/><br/>
       <label htmlFor="password">Password</label>
       <input
         class="form-control"
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null}
       <br/><br/>
       <button className="btn" style={{backgroundColor: "#636ccb", color: "#fff"}} type="submit">Submit</button>
       <br/><br/>
        </form>
      </div>
    </div>
  );
}

export default Signup;
