import styles from '../../Css/styles.css'
import image1 from '../../Images/1.png'
import image2 from '../../Images/2.png'
import image3 from '../../Images/3.png'
import image4 from '../../Images/4.png'
import image5 from '../../Images/5.png'
import image6 from '../../Images/6.png'
import image7 from '../../Images/7.png'
import image8 from '../../Images/8.png'
import image9 from '../../Images/9.png'
import image10 from '../../Images/10.png'
import image11 from '../../Images/11.png'
import image12 from '../../Images/12.png'

export default function Projects() {
    return (
        <div className='ProjectDiv'>
            <h1>Our Projects</h1>
            <div className='GridView'>
                <img src={image1} alt="1" />
                <img src={image2} alt="2" />
                <img src={image3} alt="3" />
                <img src={image4} alt="4" />
                <img src={image5} alt="5" />
                <img src={image6} alt="6" />
                <img src={image7} alt="7" />
                <img src={image8} alt="8" />
                <img src={image9} alt="9" />
                <img src={image10} alt="10" />
                <img src={image11} alt="11" />
                <img src={image12} alt="12" />
            </div>
        </div>
    );
}