import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../core/css/best_seller.css';

const BestSellerBanner = () => {
  return (
    <div className="best-seller-banner">
        <div className="container">
            <div className="row">
                <div className="center">
                    <div className="best-seller-banner-content">
                        <h2>Best Seller</h2>
                        <p>Learn to code with our best selling course. This course is designed for beginners and will teach you the basics of coding.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default BestSellerBanner;
