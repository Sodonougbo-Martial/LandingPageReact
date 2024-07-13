import React from 'react';
import './style.css';

function Hero() {
  return (
    <div className="hero">
        <div className="text">
            <div className='medium-separated'>
                <p className='Medium'>Medium length display headline</p>
                <p className='Separated'>Separated they live in Bookmarks right at the coast of the famous Semantics, large language </p>

            </div>

            <div className='action-people'>
                <button>Action</button>
                <p>5,000 people like you have purchased this product!</p>

            </div>

        </div>


        <div className="image">
            <img src="./assets/img.png" alt="" />
        </div>

    </div>
  );
}

export default Hero;
