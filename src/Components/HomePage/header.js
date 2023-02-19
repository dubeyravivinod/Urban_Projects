import logo from './logo.png'
import styles from '../../Css/styles.css'

export default function Header() {
    return (
        <div className='Header'>
            <img src={logo} alt="logo" />
            <div className='menus' >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button className='enquire' type='submit'> Enquire Now </button>
        </div>
    );
}