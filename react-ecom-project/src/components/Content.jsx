import React from 'react'
import '../core-ui/Content.css'

function Content() {
  return (
    <>
        <section className="container">
            <div className="container-wrapper">
                <div className="content-info">
                    <h1 class='display-1'>We make cloths</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam consequuntur repellat incidunt sit rem suscipit esse quas sapiente dolor.</p>
                    <a href='#' className='content-btn'>Our Services</a>
                </div>
                <div className="content-pic">
                    <img src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="content-pic" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Content