
function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={imageURL} alt="right-img" style={{width: "100%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;