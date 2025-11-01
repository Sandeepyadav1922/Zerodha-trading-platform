import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
// import api from "./api";
import axios from "axios";

const Home = () => {

let [user, setUser] = useState(null);

useEffect(() => {
    axios.get('https://zerodha-backend-r6zl.onrender.com/auth', {withCredentials: true})
      .then(res => {
        if(res) {
        setUser(res.data.user);
        console.log("user is logged in");
        } else {
          console.log("User not logged in")
        }
      })
      .catch(err => {
        alert(err.response.data.message);
        console.log("Error : ", err.response.data.message);
        setUser(null);
      });
  }, []);

  if(!user) {
    return <p>Yor Are Not Logged In</p>
  }

  return (
    <>
      <TopBar user={user}/>
      <Dashboard user={user}/>
    </>
  );
};

export default Home;