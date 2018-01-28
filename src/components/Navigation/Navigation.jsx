import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { slide as Menu } from 'react-burger-menu';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header className="no-underline">
        <div className={styles.wrapper}>
          <Link to="/">
              {config.siteTitle} – digital product designer
          </Link>
          <nav className={styles.navigation}>
            <span>
              <Link to="/" activeClassName="active">
                Work
              </Link>
              <Link to="/information" activeClassName="active">
                Information
              </Link>
            </span>
          </nav>
        </div>
      </header>
    );
  }
}