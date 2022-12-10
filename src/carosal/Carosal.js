import React from 'react'
import './carosal.css';
import load_image from '../assets/f-faces.png';
export default function Carosal() {
    return (
        <div>
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={load_image} alt="d" />
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={load_image} />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={load_image} />
                    <div className="text">Caption Three</div>
                </div>


                <a className="prev" >&#10094;</a>
                <a className="next" >&#10095;</a>
            </div>
            <br />


            <div >
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}
