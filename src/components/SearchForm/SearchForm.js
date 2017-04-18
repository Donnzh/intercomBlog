import React, {
  Component,
  PropTypes
} from 'react'
import {
  FormGroup,
  FormControl,
  Col,
  Button
} from 'react-bootstrap'
import SearchIcon from 'react-icons/lib/md/search'
import './SearchForm.scss'
export default class SearchForm extends Component {
  static propTypes = {
    isRenderSearchForm2: PropTypes.bool,
    setSearchCategoryValue: PropTypes.func,
    searchCategoryValue: React.PropTypes.string,
    requestSearchNews: React.PropTypes.func,
  // setSearchLanguageValue: React.PropTypes.func
  // searchLanguageValue: React.PropTypes.string,
  // toggleSearchForm: PropTypes.func,
  };

  constructor (props) {
    super(props)
    this.state = { isRenderSearchForm2: false }
  }

  handleToggleClick = () => {
    this.setState({
      isRenderSearchForm2: !this.state.isRenderSearchForm2
    })
  }

  handleSearch = () => {
    const searchParams = {
      category: this.props.searchCategoryValue,
      // language: this.props.searchLanguageValue
    }
    this.props.requestSearchNews(searchParams)
    this.setState({
      isRenderSearchForm2: !this.state.isRenderSearchForm2
    })
  }
  handleCategoryChange = (e) => {
    this.props.setSearchCategoryValue(e.target.value)
  }
  // handleLanguageChange = (e) => {
  //   this.props.setSearchLanguageValue(e.target.value)
  // }

  renderSearchForm (props) {
    if (this.state.isRenderSearchForm2) {
      return (
        <div className='searchFromWraper'>
          <div className='searchFromlocator'>
            <form className='searchFrom'>
              <FormGroup controlId='formHorizontalText'>
                <Col smOffset={4} sm={4}>
                  <FormControl
                    type='text'
                    className='searchInput'
                    placeholder='Category, like: business, entertainment, gaming...'
                    onChange={this.handleCategoryChange}
                  />
                </Col>
              </FormGroup>
              {/* <Row>
               <div>OR</div>
               </Row> */}
              {/* <FormGroup controlId='formHorizontalPassword'>
                <Col cozmponentClass={ControlLabel} smOffset={4} sm={1}>
                 language
                 </Col>
                <Col smOffset={4} sm={4}>
                  <FormControl
                    className='searchInput'
                    type='text'
                    placeholder='en, de, fr ...'
                    onChange={this.handleLanguageChange} />
                </Col>
              </FormGroup> */}

              <FormGroup>
                <Col smOffset={4} sm={4} className='buttonWraper'>
                  <Button
                    className='searchButton'
                    onClick={this.handleSearch}>
                    Search
                  </Button>
                </Col>
              </FormGroup>
            </form>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <div
          className='searchIcon'
          onClick={this.handleToggleClick}>
          <SearchIcon size={30} />
        </div>
        {this.renderSearchForm()}
      </div>
    )
  }
}
