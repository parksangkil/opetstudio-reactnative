'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <Link to={'/about'}>About</Link>
      </div>
    );
  }
}
