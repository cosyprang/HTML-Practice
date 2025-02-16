import React from 'react'
import Nav from './Nav';
import goBack from '../test';

function About() {
  return (
    <>
        <Nav />
        <div>About</div>
        <p>This is About Page</p>
        <button onClick={goBack}>Go Back</button>
    </>
    
  )
}

export default About;