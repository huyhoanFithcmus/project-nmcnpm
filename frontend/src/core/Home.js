import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import ImageSlider from './slider';
import "./css/home.css"
import Footer from './Footer';
import BestSellerBanner from './best_seller';
import NewArrivals from './new_arrivals';

const footer = () => (

    <footer class="page-footer font-small blue">
    

      <div class="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="/"> SELL SOURCES</a>
      </div>

    
    </footer>

);

const carosel = () => (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg" alt="First slide"></img>
                <div class="carousel-caption d-none d-md-block">
                    <h1>SELL SOURCES</h1>
                    <h2>A place to learn the amazing world</h2>
                </div>
            </div>
        </div>
    </div>
);

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };



    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);



    return (
        <Layout
            title="SELL COURSES"
            className="container-fluid"
            description=""
        >
            {ImageSlider()}
            <Search />
            {/* <h2 className="mb-4">New Arrivals</h2> */}
            {NewArrivals()}
            <div className="row product-1">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            {/* <h2 className="mb-4">Best Sellers</h2> */}
            {BestSellerBanner()}
            <div className="row product-1">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            {Footer()}
        </Layout>
    );
};

export default Home;
