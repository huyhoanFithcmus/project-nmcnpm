// this is card but wider
import React from 'react';
// using bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// card for sell courses

const CardV2 = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src="https://img.freepik.com/premium-photo/global-business-network-businessman-touching-global-network-data-exchanges-big-data_34200-433.jpg?w=1060"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Sell courses</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        {/* two buttons in the lines */}
        <a href="#" className="btn btn-primary">
          remove from cart
        </a>
      </div>
    </div>
  );
}

export default CardV2;
