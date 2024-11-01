import React from 'react'
import commonData from '../../Data/CommonData.js'
import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png'
import './Footer.css'

const Footer = () => {
  return (
    //  Footer Start
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5 border-start-0 border-end-0" style={{border:  "1px solid", borderColor: 'rgb(255, 255, 255, 0.08)'}}>
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="footer-item">
                            <a href="index.html" class="p-0">
                              <h4 class="text-white"><img src={MainLogo} alt="MainLogo" style={{width: 300}} /></h4>
                            </a>
                          <p class="mb-4">{ commonData[0].footerContent}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Quick Links</h4>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Feature</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Attractions</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Tickets</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Blog</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                        </div>
                    </div>
                    {/* <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Support</h4>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Disclaimer</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Support</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> FAQ</a>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Help</a>
                        </div>
                    </div> */}
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Contact Info</h4>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-map-marker-alt text-primary me-3"></i>
                              <p class="text-white mb-0">{commonData[0].primaryAddress }</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-envelope text-primary me-3"></i>
                                {/* <p class="text-white mb-0"><Link href='/'>dsf</Link> </p> */}
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa fa-phone-alt text-primary me-3"></i>
                              <p class="text-white mb-0">{commonData[0].primaryContact}</p>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <i class="fab fa-firefox-browser text-primary me-3"></i>
                              <p class="text-white mb-0">{commonData[0].secondaryContact}</p>
                            </div>
                            <div class="d-flex">
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i class="fab fa-facebook-f text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i class="fab fa-twitter text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i class="fab fa-instagram text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-0" href="/"><i class="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      // Footer End
  )
}

export default Footer