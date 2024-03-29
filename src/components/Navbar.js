import React from 'react'
import {Link} from "react-router-dom";


export default function Navbar(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.aboutus}</Link>
        </li>
        
       
      </ul>
      
      <div className={`form-check form-switch ms-auto text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} onChange={(e)=>{}} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {capitalize(props.mode === 'light' ? 'dark' : 'light')} mode</label>
      </div>
    </div>
  </div>
</nav>
    
  )
}
// Navbar.PropTypes={
//     title: PropTypes.string,
//     aboutus: PropTypes.string
// }
Navbar.defaultProps={
    title:'Set Title here',
    aboutus:'About us Here'
}