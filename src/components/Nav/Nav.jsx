import './Nav.css'
import Carousel from "react-elastic-carousel"
import img1 from "../../assets/ImagesCarousel/img1.jpg"
import img2 from "../../assets/ImagesCarousel/img2.png"
import img3 from "../../assets/ImagesCarousel/img3.webp"
import img4 from "../../assets/ImagesCarousel/img4.jpg"

function Nav(props) {
    return(
        <div className="navBox">
            <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={9000}>
                <img className='imgCarousel' src={img3} alt="" />
                <img className='imgCarousel' src={img2} alt="" />
                <img className='imgCarousel' src={img1} alt="" />
                <img className='imgCarousel' src={img4} alt="" />
            </Carousel>
        </div>
    )
}

export default Nav