
import './Banner.css';


const Banner = ({bannerImageSrc, greeting }) => {

    // const { bannerImageSrc, greeting } = props;

    return (
        <div className="banner">
            <img src={bannerImageSrc} alt="" />
            <div>
                <h1>{ greeting}</h1>
                <p>I'm hasan from Düsseldorf</p>
            </div>
        </div>
    )
}

Banner.defaultProps = {
    bannerImageSrc: "https://www.visittheusa.de/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-05/23b0b0b9caaa07ee409b693da9bf9003.jpeg?itok=wcs97iyf",
    greeting : 'Hi FBW44-1'
}


export default Banner;
