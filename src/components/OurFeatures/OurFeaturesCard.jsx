import React from 'react'

const OurFeaturesCard = ({ title, description, link, fontLogo }) => {
    return (
        <div class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="feature-item p-4">
                <div class="feature-icon p-4 mb-4">
                    {fontLogo}
                </div>
                <h4>{ title }</h4>
                <p class="mb-4">{description}
                </p>
                <a class="btn btn-primary rounded-pill py-2 px-4" href="/">{ link }</a>
            </div>
        </div>
    )
}

export default OurFeaturesCard