import React, {
Component
} from 'react'
import {
IndexLink,
Link
} from 'react-router'
import './Header.scss'
class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div>
          <div className='header'>
            <div className='headerContentWraper'>
              <div className='headerIconleft1' />
              <p className='titleText'>
                ANNOUNCING THE INSIDE INTERCOM WORLD TOUR 2017</p>
              <p className='subscribeText'>
                here is the search parts, it has an email input
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
