import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import api from "./api";

const Home = () => {

let [user, setUser] = useState(null);

useEffect(() => {
    api.get('/authenticate')
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