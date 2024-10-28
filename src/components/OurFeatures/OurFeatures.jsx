import React from 'react'
import './OurFeatures.css'
import OurFeaturesCard from './OurFeaturesCard';

const OurFeatures = (props) => {
    const ourFeaturesData = [
        {
            title: 'Trash Management',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
            link: 'Learn More',
            fontLogo: <i class="fas fa-trash fa-4x text-primary"></i>
        },
        {
            title: 'Recycle',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
            link: 'Learn More',
            fontLogo: <i class="fas fa-recycle fa-4x text-primary"></i>
        },
        {
            title: 'E Waste',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
            link: 'Learn More',
            fontLogo: <i class="fas fa-dumpster-fire fa-4x text-primary"></i>
        },
        // {
        //     title: 'Investment Bank',
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...",
        //     link: 'Learn More',
        //     fontLogo: <i class="fas fa-chart-line fa-4x text-primary"></i>
        // },
    ]
    return (
        // Features Start 
        <div class="container-fluid feature pb-5">
            <div class="container pb-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                    <h4 class="text-primary">Our Features</h4>
                    <h1 class="display-5 mb-4">Connecting businesses, ideas, and people for greater impact.</h1>
                    <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div class="row g-4">
                    {
                        ourFeaturesData.map((feature, index) =>
                            <OurFeaturesCard title={feature.title} description={feature.description} link={feature.link} fontLogo={ feature.fontLogo} />
                        )
                    }

                </div>
            </div>
        </div>
        // Features End 
    )
}

export default OurFeatures