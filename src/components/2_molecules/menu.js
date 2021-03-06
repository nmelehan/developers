import React from "react";
// import PropTypes from "prop-types";
import { Link } from "gatsby";

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? {
        className:
          "main-nav-link text-BaseNavGrey hover:text-white relative active"
      }
    : null;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    const { menuLinks } = this.props;
    const { menuOpen } = this.state;

    return (
      <>
        <button
          aria-label="mobile menu button"
          id="menu-icon"
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => this.toggleMenu()}
        >
          <span className="bar top" />
          <span className="bar middle" />
          <span className="bar bottom" />
        </button>
        <nav
          id="main-menu"
          role="menu"
          className={`main-nav ${menuOpen ? "open" : ""}`}
          aria-expanded="false"
        >
          {menuLinks.map(link => (
            <Link
              key={link.name}
              to={link.link}
              className="main-nav-link text-BaseNavGrey hover:text-white relative"
              role="menuitem"
              activeClassName="active"
              getProps={link === "/" ? undefined : isPartiallyActive}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </>
    );
  }
}

// Menu.propTypes = {
//   menuLinks: PropTypes.array.isRequired
// };

export default Menu;
