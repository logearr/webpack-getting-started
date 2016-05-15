import React, {Component} from 'react'
import config from '../config.json';
import styles from '../sass/Greeter.scss';
import template from '../jade/Greeter.jade'

console.log(styles)

class Greeter extends Component {
  render() {
      return template({
        styles: styles,
        config: config
      })
  }
}

export default Greeter
