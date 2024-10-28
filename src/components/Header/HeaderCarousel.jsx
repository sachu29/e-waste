import React from 'react'
import './HeaderCarousel.css'
import carousel2 from "../../asset/img/e-waste-Main-logo.jpg";

const HeaderCarousel = () => {
    const carouselData = [
        {
            carouselHeader: "Welcome To E-Cycle Solution",
            carouselHeaderSecond: "We are here to change the world.",
            carouselDescription: "We recycle the e-waste to make the world green and the better place to live."
        }
    ]
    return (
        <>
            <div className="header-carousel owl-carousel">
                <div className="header-carousel-item position-relative">
                    <img
                        src={carousel2}
                        className="img-fluid w-100"
                        alt=""
                    />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row g-2 g-md-3 g-lg-5">
                                <div className="col-12 animated fadeInUp">
                                    <div className="text-center">
                                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                                            {carouselData[0].carouselHeader}
                                        </h4>
                                        <h1 className="display-4 text-uppercase text-white mb-4">
                                            {carouselData[0].carouselHeaderSecond}
                                        </h1>
                                        <p className="mb-5 fs-5">
                                            {carouselData[0].carouselDescription}
                                        </p>
                                        <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                            <a
                                                className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                                                href="/"
                                            >
                                                <i className="fas fa-play-circle me-2"></i> Watch
                                                Video
                                            </a>
                                            <a
                                                className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                                                href="/"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="text-white me-2">Follow Us:</h2>
                                            <div className="d-flex justify-content-end ms-2">
                                                <a
                                                    className="btn btn-md-square btn-light rounded-circle me-2"
                                                    href="/"
                                                >
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a
                                                    className="btn btn-md-square btn-light rounded-circle mx-2"
                                                    href="/"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a
                                                    className="btn btn-md-square btn-light rounded-circle mx-2"
                                                    href="/"
                                                >
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                <a
                                                    className="btn btn-md-square btn-light rounded-circle ms-2"
                                                    href="/"
                                                >
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCarousel