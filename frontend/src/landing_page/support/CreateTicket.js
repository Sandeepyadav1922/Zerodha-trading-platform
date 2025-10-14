import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-lg-8 text-center mt-3 support-container">
          <select className="select">
            <option selected>Account Opening</option>
            <option value="1">Resident individual</option>
            <option value="2">Minor</option>
            <option value="3">Non Resident Indian (NIR)</option>
            <option value="4">Company, Partnership, HUF and LLP</option>
            <option value="5">Glossary</option>
          </select>
          <select className="select">
            <option selecte>Your Zerodha Account</option>
            <option value="1">Your Profile</option>
            <option value="2">Account modification</option>
            <option value="3">Client Master Report (CMR) and Depository participant (DP)</option>
            <option value="4">Nomination</option>
            <option value="5">Transfer and Conversion of Securities</option>
          </select>
          <select className="select">
            <option selecte>Kite</option>
            <option value="1">IPO</option>
            <option value="2">Trading FAQs</option>
            <option value="3">Margin Trading Facility (MTF) and Margins</option>
            <option value="4">Chats and Orders</option>
            <option value="5">Alerts and Nudges</option>
            <option value="6">General</option>
          </select>
          <select className="select">
            <option selecte>Funds</option>
            <option value="1">Add money</option>
            <option value="2">Withdraw money</option>
            <option value="3">Add bank accounts</option>
            <option value="4">eMandates</option>
          </select>
          <select className="select">
            <option selecte>Console</option>
            <option value="1">Portfolio</option>
            <option value="2">Corporate actions</option>
            <option value="3">Funds statement</option>
            <option value="4">Reports</option>
            <option value="5">Profile</option>
            <option value="6">Segments</option>
          </select>
          <select className="select">
            <option selecte>Coin</option>
            <option value="1">Mutual funds</option>
            <option value="2">National Pension Scheme(NPS)</option>
            <option value="3">Fixed Deposite(FD)</option>
            <option value="4">Features on Coin</option>
            <option value="5">Payments and Orders</option>
            <option value="6">General</option>
          </select>
        </div>
        <div className="col-3 support-left">
          <div className="support-link">
            <ul>
                <Link to="/support">
                <li>
                Current Takeovers and Delisting - October 2025
                </li>
                </Link>
                <Link to="/support">
                <li>
                Surveillance measure on scrips - October 2025
                </li>
                </Link>
            </ul>
          </div>
          <div className="support-bottom mt-5">
            <h5 style={{padding: "16px", backgroundColor: "#ececec"}}>Quick links</h5>
            <ol className="quick-lists">
              <Link to="/support" style={{textDecoration: "none"}}>
              <li>Track account opening</li>
              </Link>
              </ol>
              <ol start="2" className="quick-lists">
                <Link to="/support" style={{textDecoration: "none"}}>
              <li>Track Segments activation</li>
              </Link>
              </ol>
              <ol start="3" className="quick-lists">
                <Link to="/support" style={{textDecoration: "none"}}>
              <li>Intraday margins</li>
              </Link>
              </ol>
              <ol start="4" className="quick-lists">
                <Link to="/support" style={{textDecoration: "none"}}>
              <li>Kite user manual</li>
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
