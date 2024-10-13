import React from 'react'
import './HeaderCarousel.css'
import carousel1 from '../../asset/img/carousel-1.jpg'
// import carousel2 from "../../asset/img/carousel-2.jpg";

const HeaderCarousel = () => {
    return (
        <div>
            {/* Carousel Start  */}

            <div className="header-carousel owl-carousel">
                {/* Carousel 1 */}

                <div className="header-carousel-item">
                    <img
                        src={carousel1}
                        className="img-fluid w-100"
                        alt=""
                    />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row gy-0 gx-5">
                                <div className="col-lg-0 col-xl-5"></div>
                                <div className="col-xl-7 animated fadeInLeft">
                                    <div className="text-sm-center text-md-end">
                                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                                            Welcome To Stocker
                                        </h4>
                                        <h1 className="display-4 text-uppercase text-white mb-4">
                                            Invest your money with higher return
                                        </h1>
                                        <p className="mb-5 fs-5">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy...
                                        </p>
                                        <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
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
                                        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
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

                {/* Carousel 1 */}

                {/* Carousel 2 */}

                {/* <div className="header-carousel-item">
                    <img
                        src={carousel2}
                        className="img-fluid w-100"
                        alt=""
                    />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-12 animated fadeInUp">
                                    <div className="text-center">
                                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                                            Welcome To E-Cycle Solution
                                        </h4>
                                        <h1 className="display-4 text-uppercase text-white mb-4">
                                            Give us the E-Waste, We Give you the Eco-Friendly World.
                                        </h1>
                                        <p className="mb-5 fs-5">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy...
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
                </div> */}

                {/* Carousel 2 */}
            </div>
            {/* Carousel End  */}
        </div>
    )
}

export default HeaderCarousel