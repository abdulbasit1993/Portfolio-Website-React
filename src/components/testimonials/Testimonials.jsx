import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              className="user"
              src="https://images.assetsdelivery.com/compings_v2/luismolinero/luismolinero1909/luismolinero190917934.jpg"
              alt=""
            />
            <img className="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            veritatis est quos itaque omnis.
          </div>
          <div className="bottom">
            <h3>Alex</h3>
            <h4>CEO of BrightSphere</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
