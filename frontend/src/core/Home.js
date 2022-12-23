import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import "./css/home.css"

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

    const imgHomePage = () => {
        return (
            <div className="img-home">
                <img src="https://phunugioi.com/wp-content/uploads/2021/11/Background-banner-1.jpg" alt="img-home" />
            </div>
        )
    }


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
            <Search />
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;
