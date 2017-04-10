import React, {
  Component
} from 'react'
import {
  Col,
  Row
} from 'react-bootstrap'

import PostCard from './PostCard.js'
import SearchForm from 'components/SearchForm'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const IntercomBgUrl = require('../assets/IntercomBg.jpg')
const IntercomAutherUrl = require('../assets/authorImage.jpg')
const featurePostImageUrl = require('../assets/featuredPost1.jpg')
class BottomPlayer extends React.Component {
  static propTypes = {
    visible: React.PropTypes.bool
  };

  render () {
    let component
    if (this.props.visible) {
      component = <div className='buttomPlayer'>I'm the Player in bottom</div>
    }
    return (
      <ReactCSSTransitionGroup
        transitionName='bottomAudioPlayer'
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}>
        {component}
      </ReactCSSTransitionGroup>
    )
  }
}
class Intercom extends Component {
  static propTypes = {
    requestPostCardsData: React.PropTypes.func.isRequired,
    postCardsData: React.PropTypes.array,
    isShowButtonPlayer: React.PropTypes.bool,
    setSearchCategoryValue: React.PropTypes.func,
    searchCategoryValue: React.PropTypes.string,
    requestSearchNews: React.PropTypes.func,
    toggleButtomPlayer: React.PropTypes.func
  };

  componentWillMount (props) {
    this.props.requestPostCardsData()
  }

  renderPostCards (props) {
    if (this.props.postCardsData) {
      const postCardsData = this.props.postCardsData
      return postCardsData.map((p, index) => {
        return (
          <Col
            key={index} lg={4} md={6} sm={6} xs={12}>
            <PostCard
              postCardAbstract={p.abstract}
              imgUrl={p.image}
              postCardTitle={p.title}
              avaterUrl={p.avater}
              toggleButtomPlayer={this.props.toggleButtomPlayer}
              avaterName={p.autherName} />
          </Col>
        )
      })
    }
  }

  render () {
    return (
      <div className='pageLayout'>
        <SearchForm
          setSearchCategoryValue={this.props.setSearchCategoryValue}
          searchCategoryValue={this.props.searchCategoryValue}
          requestSearchNews={this.props.requestSearchNews}
        />
        <div className='navBar'>
          <div className='navCategoryWrapper'>
            <ul>
              <li>CUSTOMER SUPPORT</li>
              <li>DESIGN</li>
              <li>MARKETING</li>
              <li>PRODUCT MANAGEMENT</li>
              <li>START UPS</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={'heroImageWraper'}>
            <img src={IntercomBgUrl} className='heroImage' />
          </div>
          <div className='heroContainer'>
            <div className='heroContainerInner'>
              <h1>Announcing the Inside Intercom World Tour 2017</h1>
              <div>
                Over the next 6 months, Des Traynor, Paul Adams, Sian
                Townsend and more will be sharing the failures and successes
                they"'"ve learned building Intercom across Europe, North America and Australia.
              </div>
              <div className='autherImageWraper' />
              <img src={IntercomAutherUrl} className='autherImage' />
              <a className='autherName'>MEGAN SHERIDAN</a>
            </div>
          </div>
        </div>
        <div className='contentContainer'>
          <div className='featuredPost'>
            <img src={featurePostImageUrl} className='featuredPostimage' />
            <div className='featuredPostContentWraper'>
              <div className='featuredPostContent'>
                <h1>Hello Announcing the Inside Intercom World Tour 2017</h1>
                <div>
                  Over the next 6 months, Des Traynor, Paul Adams,
                  Sian Townsend and more will be sharing the failures and successes
                  they"'"ve learned building Intercom across Europe, North America and Australia.
                </div>
              </div>
            </div>
          </div>
          <div className='featuredSidebar'>
            here is the side bar
          </div>
        </div>
        <div className='normalPostContainer'>
          <Row>
            {this.renderPostCards()}
          </Row>
        </div>
        < BottomPlayer visible={this.props.isShowButtonPlayer} />
      </div >
    )
  }
}
export default Intercom
