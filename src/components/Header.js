import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

const Header = (props) => {
  const { owner } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{owner}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// setting default props if nothing is passed
Header.defaultProps = {
  owner: "My contact"
};

Header.prototypes = {
  owner: PropTypes.string.isRequired,
}
export default Header;