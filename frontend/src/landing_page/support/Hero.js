
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
    <div className="pt-5 mb-4" id="supportWrapper">
      <h1 style={{opacity: "0.8",}}>Support Portal</h1>
      <a className="btn btn-primary" href="/support" role="button">My Tickets</a>
    </div>
    <div className=" row m-3 support-input">
        <div className="col-10 mb-5">
          <input placeholder="Eg. How do I open my account, How di I activate F&O"/>
        </div>
        </div>
    </section>
  );
}

export default Hero;