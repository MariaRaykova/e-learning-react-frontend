import { Link } from "react-router-dom";

const ModuleSale = () => {
  return (
    <div class="cta-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="cta-content bg-img background-overlay"
              style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
            >
              <div class="h-100 d-flex align-items-center justify-content-end">
                <div class="cta--text">
                  <h6>-60%</h6>
                  <h2 style={{ color: "white" }}>Best Offers</h2>
                  <a href="#" class="btn essence-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModuleSale;
