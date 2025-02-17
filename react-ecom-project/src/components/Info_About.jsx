import React from 'react'
import '../core-ui/Info_About.css'

function Info_About() {
  return (
    <>
        <div className="info-about-container">
            <div className="info-about-container-wrapper">
                <div className="info-about-pic-container">
                    <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='suit' alt="suit-pic" />
                    <img src="https://images.unsplash.com/photo-1708234114270-16a791390e8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='tailor-person' alt="tailor-person-pic" />
                </div>
                <div className="info-text-container">
                    <div className="info-text-wrapper">
                        <h1>About our tailor house</h1>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut.</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae pariatur consequatur beatae, eligendi nesciunt ipsam!</p>
                        <a href="#">More about us</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info_About