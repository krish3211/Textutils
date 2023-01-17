import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar bg-${props.mode}`}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="/">
                    <img src={props.logo} alt="Logo" width="50" height="35" className="d-inline-block align-text-top" />
                    <label className={`mx-3 text-${props.mode==='light' ? 'dark' : 'light'}`}>Textuils</label>
                </a>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.togglmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode==='light' ? 'dark' : 'light'}`} htmlFor ="flexSwitchCheckDefault">Mode</label>
                </div>
            </div>
        </nav>
    </div>
  )
}
