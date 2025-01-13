import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <div>
        <ul>
            <li><p>{props.title}</p></li>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><input type="text" value="Search🔍" /></li>
            <li><button>Search</button></li>
        </ul>
    </div>
  )
}

Header.defaultProps={
  title:"My Todo List"
}

Header.propTypes={
  title: PropTypes.string
}