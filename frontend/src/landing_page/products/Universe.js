function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-lg-4 col-md-6 p-3 mt-lg-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted mt-3" style={{fontSize: "13px"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-lg-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "240px" }}
          />
          <p className="text-small text-muted mt-4" style={{fontSize: "13px"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-lg-5">
          <img src="media/images/tijori.svg" style={{ width: "140px" }} />
          <p className="text-small text-muted mt-3" style={{fontSize: "13px"}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-lg-5">
          <img src="media/images/streakLogo.png" style={{ width: "170px" }} />
          <p className="text-small text-muted mt-3" style={{fontSize: "13px"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-lg-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "210px" }}
          />
          <p className="text-small text-muted mt-3" style={{fontSize: "13px"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-lg-5">
          <img src="media/images/dittoLogo.png" style={{ width: "140px" }} />
          <p className="text-small text-muted mt-3" style={{fontSize: "13px"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "10em", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
