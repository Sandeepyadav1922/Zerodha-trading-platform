import { Route, Routes } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";

import { GeneralContextProvider } from "./GeneralContext";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = ({user}) => {

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
      <WatchList/>
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={user}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="*" element={<h2>Page Not Found</h2>}/>
        </Routes>
        
      </div>
    </div>
  );
};

export default Dashboard;