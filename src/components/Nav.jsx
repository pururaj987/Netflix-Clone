import React , {useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const [show , handleShow] = useState(false);

    const history = useHistory();

    const transitionNav = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll" , transitionNav);
        return () => window.removeEventListener("scroll" , transitionNav);
    } , []);

    return (
        <div className = {`nav ${show && `nav-black`}`}>
            <div className = "nav-contents">
                <img
                onClick = {() => history.push("/")}
                className = "nav-logo"
                src = "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt = "" 
                />

                <img
                onClick = {() => history.push("/profile")}
                className = "nav-avatar"
                src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt = "" 
                />
            </div>
        </div>
    )
}

export default Nav;
