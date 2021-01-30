import React from 'react';
import Navbar from '../components/Navbar'
import HomeImg from '../Resources/HomeImg.jpg'
import {Link} from 'react-router-dom' 

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home_content">
                <img src={HomeImg} alt="Home" className="back_img"></img>
                <Link to="/img" className="home_btn_img" style={{textDecoration: "none", fontSize: "20px"}}>Upload Img</Link>
                <Link to="/video" className="home_btn_video" style={{textDecoration: "none", fontSize: "20px"}}>Video</Link>
            </div>
        </div>
    )
}

export default Home;