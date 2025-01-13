import React from 'react'
import './Footer.css'

export default function Footer() {
    let footerStyle={
        position: "absolute",
        width: "100%",
    }
  return (
    <footer style={footerStyle}>
        <p className='copy'>Copyright &copy; TwoDuos.com</p>
    </footer>
    
  )
}
