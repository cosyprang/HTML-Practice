import React from 'react'
import "../core-ui/Footer.css"


function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container-grid">
                    <div className="footer-grid-item-1">
                        <div className="footer-grid-wrapper">
                            <h1>Tailor.</h1>
                        </div>
                    </div>
                    <div className="footer-grid-item-2">
                        <div className="footer-grid-wrapper">
                            <h6>LONDON</h6>
                            <span><a href="#" className='footer-email'>newbusiness@weareimpero.com</a></span>
                            <p>+44 20 7998 7571 <br /> Unit 306, Metropolitan Wharf, <br /> 
                            70 Wapping Wall, London E1W 3SS</p>
                            <a href="#">See on map</a>
                        </div>
                    </div>
                    <div className="footer-grid-item-3">
                        <div className="footer-grid-wrapper">
                            <p>WANT TO BE THE SMARTEST <br /> IN YOUR OFFICE?</p>
                            <a href="#">SIGN UP FOR OUR NEWSLETTER</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer