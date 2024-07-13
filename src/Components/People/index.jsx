import React from 'react';
import './style.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function People() {
  return (
    <div className="people">
        <div className="people-review">
            <div className="text-A">
                <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
            </div>

            <div className="profils-card">
                <img src="./assets/image.png" alt="" />
                <div className="name-reseau">
                    <div className="name">
                        <p>Name Surname</p>
                        
                    </div>

                    <div className="description-reseau">
                        <div className="description">
                            <p>Description</p>
                        </div>

                        <div className="reseau">
                            <FaFacebookSquare />
                            <FaTwitter />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="round-togle">
            <div className="elipse-togle" id='elipse-togle1'>
            </div>
            <div className="elipse-togle" id='elipse-togle2'>
            </div>
            <div className="elipse-togle" id='elipse-togle3'>
            </div>
        </div>


        <div className="people-review" id='people-review2'>
            <div className="text-A">
                <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
            </div>

            <div className="profils-card">
                <img src="./assets/image.png" alt="" />
                <div className="name-reseau">
                    <div className="name">
                        <p>Name Surname</p>
                        
                    </div>

                    <div className="description-reseau">
                        <div className="description">
                            <p>Description</p>
                        </div>

                        <div className="reseau">
                            <FaFacebookSquare />
                            <FaTwitter />
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="people-review" id='people-review3'>
            <div className="text-A">
                <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
            </div>

            <div className="profils-card">
                <img src="./assets/image.png" alt="" />
                <div className="name-reseau">
                    <div className="name">
                        <p>Name Surname</p>
                        
                    </div>

                    <div className="description-reseau">
                        
                        <div className="description">
                            <p>Description</p>
                        </div>
                        

                        <div className="reseau">
                            <FaFacebookSquare />
                            <FaTwitter />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        

    </div>
  );
}

export default People;
