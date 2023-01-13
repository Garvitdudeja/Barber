import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './CrouselArrows';
//Css for the Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';


const dataMale = [{
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/xbigwesx-mid-fade-haircut-crop-beard-mens-hair-2018-768x959.jpg",
    title: "Crop Haircut + Medium Fade"
},
{
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/barber.josh_.o.p-high-fade-haircut-sweep-back-shaved-line-2018-600x600.jpg",
    title: "Pompadour Fade"
}, {
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/majesticbarber_-very-short-haircuts-for-men-buzz-cut-high-skin-bald-fade-600x600.jpg",
    title: "High Bald Fade Haircut"
}, {
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/diego_djdgaf-burst-fade-haircut-thick-crop-shaved-lines-600x600.jpg",
    title: "Burst Fade Haircut"
}, {
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/mellow_mikey-pompadour-haircut-burst-fade-768x614.jpg",
    title: "Pomp Fade"
}, {
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/patty_cuts-danny-swift-garcia-temple-fade-haircut-line-up-e1516901052340-768x782.jpg",
    title: "Buzz + Quick Fade"
}, {
    image: "https://www.menshairstyletrends.com/wp-content/uploads/2018/01/rumbarber-low-fade-haircut-slick-back-2018-600x600.jpg",
    title: "Slicked Back Hair + Low Bald Fade"
},]

const dataFemale = [{
    image: "https://i2.wp.com/www.hadviser.com/wp-content/uploads/2020/02/12-long-shaggy-bob-haircut-B56DTa0BthM.jpg?resize=1080%2C1234&ssl=1",
    title: "Tousled Lob Haircut"
}, {
    image: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2020/02/1-trending-hairstyle-for-women-CNfIfNdDDYf.jpg?w=580&ssl=1",
    title: "Wavy Cut with Curtain Bangs"
}, {
    image: "https://i1.wp.com/www.hadviser.com/wp-content/uploads/2020/02/2-short-trendy-bob-B42RYXnFLyy.jpg?w=583&ssl=1",
    title: "Textured Haircut"
}, {
    image: "https://i1.wp.com/www.hadviser.com/wp-content/uploads/2021/08/1-long-haircut-with-layers-and-highlights-CUfIAwoMmcm.jpg?w=523&ssl=1",
    title: "Layers and Highlights"
}, {
    image: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2020/02/6-inverted-bob-hairstyle-CQnMvD8hlfa.jpg?w=558&ssl=1",
    title: "Two Tier Inverted Bob"
}, {
    image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/long-layers-with-bangs/16-long-layered-asilhouette-cut.jpg?w=473&ssl=1",
    title: "Silhouette Cut"
}, {
    image: "https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/long-layers-with-bangs/13-long-feathered-hair-with-side-bangs.jpg?w=486&ssl=1",
    title: "Feathered Face-Framing Layers"
}, {
    image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/long-layers-with-bangs/17-layered-cut-with-swoopy-bangs-for-long-hair.jpg?w=485&ssl=1",
    title: "Choppy Cut with Swoopy Bangs"
},]



function MaleSectionLarge(props) {
    const {typeP} = useParams();
    const [gender, setGender] = useState("male")

    useEffect(() => {
        if (typeP) {
            setGender(typeP)
            console.log(gender)
        };
    })

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (<>
    <div className='w-4/5 m-auto'>
        <h3 className='ml-28 pt-3 font-medium'>Inspiration For Your Haircut</h3>
          <div className='mt-8'>
        <Slider {...settings} >
            {(gender === 'male' ? dataMale : dataFemale).map((one) => {
                return (<>
                    <div>
                        <div className='w-48 h-48 m-auto '>
                            <img src={one.image} alt="img" className='h-full w-full rounded-full' />
                        </div>
                        <h6 className='text-center pt-2 font-medium'>{one.title}</h6>
                    </div>
                </>)

            })}
        </Slider>
        </div>
        </div>

    </>
    )
}

const MaleSection = (props) => {
    var category = props.category;
    console.log(category);
    return (<>
        <div className='hidden lg:inline w-4/5'>
        <MaleSectionLarge  category={category} /></div>
    </>)
}

export default MaleSection