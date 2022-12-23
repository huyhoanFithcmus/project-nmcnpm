import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../core/css/new_arrivals.css';

const NewArrivals = () => {
    return (
        <div className="new-arrivals">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="new-arrivals-content">
                            <h2>New Arrivals</h2>
                            <h3>Learn to Code</h3>
                            <p>Learn to code with our best selling course. This course is designed for beginners and will teach you the basics of coding.</p>
                            {/* <a href="#" className="btn btn-primary">Learn More</a> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="new-arrivals-image">
                            <img src="https://source.unsplash.com/600x400/?coding" alt="New Arrivals" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default NewArrivals;


