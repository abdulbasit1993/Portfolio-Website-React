import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://assets.materialup.com/uploads/cfe42246-e49f-4166-91ce-246e253eae27/preview.jpg"
            alt=""
          />
          <h3>Weather App</h3>
        </div>
      </div>
    </div>
  );
}
