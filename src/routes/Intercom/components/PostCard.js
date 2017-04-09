import React, {
  Component,
  PropTypes
} from 'react'
import './PostCard.css'
import PlayArrow from 'react-icons/lib/md/play-arrow'

export default class PostCard extends Component {

  static propTypes = {
    imgUrl: PropTypes.string,
    postCardTitle: PropTypes.string,
    postCardAbstract: PropTypes.string,
    avaterUrl: PropTypes.string,
    avaterName: PropTypes.string,
    toggleButtomPlayer: PropTypes.func
  };
  handleClick = () => {
    this.props.toggleButtomPlayer()
  }
  render () {
    const { imgUrl,
      postCardTitle,
      postCardAbstract,
      avaterUrl,
      avaterName
    } = this.props

    return (
      <div className='singlePostContainer'>
        <div className='singlePost'>
          <img src={imgUrl} className='singlePostimage' />
          <div className='singlePostContentWraper'>
            <div className='postContent'>
              <div className='audioIconWraper' onClick={this.handleClick}>
                <PlayArrow size={35} className='audioIcon' />
              </div>
              <h1>{postCardTitle}</h1>
              <div>
                {postCardAbstract}
              </div>
              { avaterUrl ? <div className='avaterImageWraper'>
                <img src={avaterUrl} className='avaterImage' />
              </div>
               : null}
              <a className='avaterName' href={avaterName}>{avaterName}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
