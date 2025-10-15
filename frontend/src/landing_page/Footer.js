import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-3">
          <div className="col-lg-3" style={{marginTop: "2rem"}}>
            <img src="media/images/logo.svg" alt="footer-img" style={{ width: "180px",}} />
            <p className="mt-3" style={{fontSize: "14px", opacity: "0.8"}}>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="footer-apps">
              <Link to="/" style={{color: "black"}}>
              <i style={{marginLeft: "0px"}} class="fa-brands fa-x-twitter"></i>
              </Link>
              <Link to="/" style={{color: "black"}}>
              <i class="fa-brands fa-square-facebook"></i>
              </Link>
              <Link to="/" style={{color: "black"}}>
              <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="/" style={{color: "black"}}>
              <i class="fa-brands fa-linkedin-in"></i>
              </Link>
              <hr style={{opacity: "0.1"}}/>
              <Link to="/" style={{color: "black"}}>
              <i style={{marginLeft: "0px"}} class="fa-brands fa-youtube"></i>
              </Link>
              <Link to="/" style={{color: "black"}}>
              <i class="fa-brands fa-whatsapp"></i>
              </Link>
              <Link to="/" style={{color: "black"}}>
              <i class="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 footer-links">
            <h5 style={{marginTop: "2rem"}}>Account</h5>
            <br />
            <a href="/">Open demat account</a>
            <br /><br />
            <a href="/">Minor demat account</a>
            <br /><br />
            <a href="/">NRI demat account</a>
            <br /><br />
            <a href="/">Commodity</a>
            <br /><br />
            <a href="/">Dematerialisation</a>
            <br /><br />
            <a href="/">Fund transfer</a>
            <br /><br />
            <a href="/">MTF</a>
            <br /><br />
            <a href="/">Referral program</a>
            <br />
          </div>
          <div className="col-lg-2 footer-links">
            <h5 style={{marginTop: "2rem"}}>Support</h5>
            <br />
            <a href="/">Contact us</a>
            <br /><br />
            <a href="/">Support portal</a>
            <br /><br />
            <a href="/">How to file a complaint?</a>
            <br /><br />
            <a href="/">Status of your complaints</a>
            <br /><br />
            <a href="/">Bulletin</a>
            <br /><br />
            <a href="/">Circular</a>
            <br /><br />
            <a href="/">Z-Connect blog</a>
            <br /><br />
            <a href="/">Downloads</a>
            <br />
          </div>
          <div className="col-lg-2 footer-links">
            <h5 style={{marginTop: "2rem"}}>Company</h5>
            <br />
            <a href="/">About</a>
            <br /><br />
            <a href="/">Philosophy</a>
            <br /><br />
            <a href="/">Press & media</a>
            <br /><br />
            <a href="/">Careers</a>
            <br /><br />
            <a href="/">Zerodha Cares (CSR)</a>
            <br /><br />
            <a href="/">Zerodha.tech</a>
            <br /><br />
            <a href="/">Open source</a>
            <br />
          </div>
          <div className="col-lg-2 footer-links">
            <h5 style={{marginTop: "2rem"}}>Quick links</h5>
            <br />
            <a href="/">Upcoming IPOs</a>
            <br /><br />
            <a href="/">Brokerage charges</a>
            <br /><br />
            <a href="/">Market holidays</a>
            <br /><br />
            <a href="/">Economic calendar</a>
            <br /><br />
            <a href="/">Calculators</a>
            <br /><br />
            <a href="/">Markets</a>
            <br /><br />
            <a href="/">Sectors</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;