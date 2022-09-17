import React from 'react'
import Slider from "react-slick";

const Intro = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            {/* <Slider {...settings}>
                <div>
                    <h3 className='imgslide'><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"></img></h3>
                </div>
            </Slider> */}
        </>
    )
}

export default Intro