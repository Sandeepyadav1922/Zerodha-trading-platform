
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-lg-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <h5 style={{fontWeight: "400", marginTop: "1rem"}}>GST</h5>
            <li>
              Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
            </li>
            <h5 style={{fontWeight: "400", marginTop: "1rem"}}>SEBI Charges</h5>
            <li>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
            <h5 style={{fontWeight: "400", marginTop: "1rem"}}>DP (Depository participant) charges</h5>
            <li>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;