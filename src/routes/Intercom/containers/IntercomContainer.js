import { connect } from 'react-redux'
import {
  requestPostCardsData,
  toggleButtomPlayer,
  toggleSearchForm,
  setSearchCategoryValue,
  setSearchLanguageValue,
  requestSearchNews
} from 'redux/modules/intercom'

import Intercom from '../components/Intercom'

const mapDispatchToProps = {
  requestPostCardsData,
  toggleButtomPlayer,
  setSearchCategoryValue,
  setSearchLanguageValue,
  requestSearchNews
  // toggleSearchForm,
}

const mapStateToProps = (state) => {
  const {
    postCardsData,
    isShowButtonPlayer,
    searchCategoryValue
    // isRenderSearchForm,
    // searchLanguageValue
  } = state.intercom
  return {
    postCardsData,
    isShowButtonPlayer,
    searchCategoryValue
    // isRenderSearchForm,
    // searchLanguageValue
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intercom)
