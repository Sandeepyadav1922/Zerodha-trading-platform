import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import api from "./api";

const Home = () => {

let [user, setUser] = useState(null);

useEffect(() => {
    api.get('/auth')
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