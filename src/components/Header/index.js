import './index.css'
import {Popup} from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="menu-button"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="nav-container">
            <button
              type="button"
              className="menu-button close"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ul className="nav-card">
              <li>
                <Link className="card" to="/">
                  <AiFillHome />
                  <h1 className="para">Home</h1>
                </Link>
              </li>
              <li>
                <Link className="card" to="/about">
                  <BsInfoCircleFill />
                  <h1 className="para">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
