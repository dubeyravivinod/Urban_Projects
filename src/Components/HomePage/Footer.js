import styles from '../../Css/styles.css'

export default function Footer() {
    return(
        <div className='Footer'>
            <div className='AboutUs'>
                <h3>About Us</h3>
                <h4>Support Center</h4>
                <h4>Customer Support</h4>
                <h4>About Us</h4>
                <h4>Copytright</h4>
            </div>
            <div className='Info'>
                <h3>Our Information</h3>
                <h4>Return Policy</h4>
                <h4>Privacy Policy</h4>
                <h4>Terms & Conditions</h4>
                <h4>Site Map</h4>
            </div>
            <div className='Account'>
                <h3>My Account</h3>
                <h4>Press Inquiries</h4>
                <h4>Social Media</h4>
                <h4>Directories</h4>
                <h4>Images & B-roll</h4>
            </div>
            <div className='Contact'>
                <h3>Contact</h3>
                <h4>Facebook</h4>
                <h4>LinkedIn</h4>
                <h4>Instagram</h4>
            </div>
        </div>
    );
}