import { connect } from 'react-redux'
import {
  requestPostCardsData,
  toggleButtomPlayer,
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
}

const mapStateToProps = (state) => {
  const {
    postCardsData,
    isShowButtonPlayer,
    searchCategoryValue
  } = state.intercom
  return {
    postCardsData,
    isShowButtonPlayer,
    searchCategoryValue
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intercom)
