import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

let [user, setUser] = useState(null);

useEffect(() => {
    axios.get('https://zerodha-trading-platform-backend.onrender.com/authenticate')
      .then(res => {
        setUser(res.data.user);
      })
      .catch(err => {
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