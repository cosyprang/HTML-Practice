import React from 'react'
import '../core-ui/Card.css'

function Card() {
  return (
    <>
        <div className="grid-card-container">
            <div className="grid-card-1">
                <img src="https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="tailor-pic" />
                <div className="grid-card-text-wrapper">
                    <a href="#">Tailor Sweing</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur amet fuga velit temporibus odit illo sunt aperiam distinctio placeat harum?</p>
                </div>
            </div>
            <div className="grid-card-2">
                <img src="https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Measurement" />
                <div className="grid-card-text-wrapper">
                    <a href="#">Measurement</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus neque omnis corporis tenetur! Ullam dolor sunt molestiae voluptates ab!</p>
                </div>
            </div>
            <div className="grid-card-3">
                <img src="https://images.unsplash.com/photo-1628068311627-0f5abce65050?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ready-made" />
                <div className="grid-card-text-wrapper">
                    <a href="#">Ready-mode</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi, ad eligendi possimus ipsa enim nostrum soluta iure numquam nemo?</p>               
                </div>
            </div>
        </div>
    </>
  )
}

export default Card