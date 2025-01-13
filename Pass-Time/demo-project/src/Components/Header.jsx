import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header({title}) {
  return (
    <div id='div'>
        <ul id='ul'>
            <li><p>{title}</p></li>
            <Link to={'/'}><li className='a'>Home</li></Link>
            <Link to={'/About'}><li className='a'>About</li></Link>
            <li><input type="text" id='search' placeholder='Search🔍'/></li>
            <li><button id='btn2'>Search</button></li>
        </ul>
    </div>
  )
}

const defaultProps={
  title:"My Todo List",
}

// Header.propTypes={
//   title: PropTypes.string
// }


