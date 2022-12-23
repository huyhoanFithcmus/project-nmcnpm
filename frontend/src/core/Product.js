import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';
import '../core/css/product.css'
import Footer from './Footer';
import Card_LC from './Card_landscape';

const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <Layout
            title={product && product.name}
            description={product && product.description && product.description.substring(0, 100)}
            className="container-fluid"
        >
            <div className="col">
                {/* black background  */}
                <div className="course-banner">
                    <div className="course-banner__bg">
                        <div className="course-banner__content">
                            {/* <h1 className="course-banner__title">{product && product.name}</h1>
                            <p className="course-banner__desc">{product && product.description && product.description.substring(0, 100)}</p> */}
                            <div className="course-banner__btn">
                                {/* <a href="#" className="btn btn--green">Đăng ký</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* course introduction */}
            < div className="row" >
                <div className="col-8">
                    {/* course introduction */}
                    <div className="course-intro">
                        <div className="course-intro__img">
                            <img src={product &&
                                product.image &&
                                product.image.url} alt="" />
                        </div>
                        <div className="course-intro__content">
                            <h2 className="course-intro__title">{product && product.name}</h2>
                            <p className="course-intro__desc">{product && product.description}</p>
                            <div className="course-intro__info">
                                <div className="course-intro__info-item">
                                    <span className="course-intro__info-label">Giảng viên:</span>
                                    <span className="course-intro__info-text">Nguyễn Văn A</span>

                                </div>
                                <div className="course-intro__info-item">
                                    <span className="course-intro__info-label">Thời lượng:</span>
                                    <span className="course-intro__info-text">30 giờ</span>
                                </div>
                                <div className="course-intro__info-item">
                                    <span className="course-intro__info-label">Học phí:</span>
                                    <span className="course-intro__info-text">1.000.000 VNĐ</span>
                                </div>
                            </div>
                            {/* 5 star using boostrap */}
                            <div className="course-intro__rating">
                                <div className="course-intro__rating-item">
                                    <span className="course-intro__rating-label">Đánh giá:</span>
                                    <span className="course-intro__rating-text">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="course-intro__rating-item">
                                    <span className="course-intro__rating-label">Số lượng học viên:</span>
                                    <span className="course-intro__rating-text">100</span>
                                </div>
                            </div>
                            {/* button add to cart */}
                            <div className="course-intro__btn">
                                {/* button add to cart */}
                                {/* <a href="#" className="btn btn--green" >Đăng ký</a> */}
                            </div>

                        </div>
                    </div>
                    {/* course content */}
                    <div className="course-content">
                        <div className="course-content__header">
                            <h3 className="course-content__title">Nội dung khóa học</h3>
                        </div>
                        <div className="course-content__body">
                            <div className="course-content__item">
                                <div className="course-content__item-header">
                                    <h4 className="course-content__item-title">Bài 1: Giới thiệu</h4>
                                </div>
                                <div className="course-content__item-body">
                                    <p className="course-content__item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                                </div>
                            </div>
                            <div className="course-content__item">
                                <div className="course-content__item-header">
                                    <h4 className="course-content__item-title">Bài 2: Giới thiệu</h4>
                                </div>
                                <div className="course-content__item-body">
                                    <p className="course-content__item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    {/* related courses */}
                    <div className="course-content__footer">
                            <h3 className="course-content__title">Khóa học liên quan</h3>
                            <div className="course-content__related">
                                <div className="course-content__related-item">
                                    {/* card related with course name */}
                                    {relatedProduct.map((p, i) => (
                                        <div className="mb-3" key={i}>
                                            <Card_LC product={p} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-4 card-2">
                    {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>
            </div >
            {Footer()}
        </Layout >

    );
};

export default Product;
