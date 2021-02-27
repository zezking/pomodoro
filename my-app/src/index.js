import React from 'react';
import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './index.css';

class Navigation extends React.Component {
    render(){
       return ( <div class="navigation">
        <nav>
          <a href="">pomodoro</a>
          <a href="">short break</a>
          <a href="">long break</a>
        </nav>
      </div>);
    }
}