import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
// import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
   
    return (
        <footer>
            <p>Visit My Github Page</p>
            <span>
                <a href='https://github.com/ronyfr3'>
                    <AiFillGithub/>
                </a>
            </span>
        </footer>
    )
}

export default Footer