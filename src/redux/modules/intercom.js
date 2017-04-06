import {
  createAction,
  handleActions
} from 'redux-actions'
import request from 'superagent'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_POSTCARDS_DATA = 'REQUEST_POSTCARDS_DATA'
export const TOGGLE_BUTTOM_PLAYER = 'TOGGLE_BUTTOM_PLAYER'
// been set this value in component's local state : searchForm.js
// export const TOGGLE_SEARCHFORM = 'TOGGLE_SEARCHFORM'
export const SET_CATEGORY_VALUE = 'SET_CATEGORY_VALUE'
export const SET_LANGUAGE_VALUE = 'SET_LANGUAGE_VALUE'
export const SEARCH_NEWS = 'SEARCH_NEWS'
const INIT_INTERCOM_STATE = {
  postCardsData: [],
  isShowButtonPlayer: false,
  isRenderSearchForm: false,
  searchCategoryValue: '',
  searchLanguageValue: ''
}

// ------------------------------------
// Actions
// ------------------------------------
const searchNews = createAction(SEARCH_NEWS)
const requestPostCardsdata = createAction(REQUEST_POSTCARDS_DATA)
const toggleButtomPlayerAction = createAction(TOGGLE_BUTTOM_PLAYER)
// const toggleSearchFormAction = createAction(TOGGLE_SEARCHFORM)
export const setSearchCategoryValue = createAction(SET_CATEGORY_VALUE)
export const setSearchLanguageValue = createAction(SET_LANGUAGE_VALUE)

export function toggleButtomPlayer () {
  return (dispatch, getState) => {
    dispatch(toggleButtomPlayerAction())
  }
}

export function requestSearchNews (searchParams) {
  return (dispatch, getState) => {
    let fetching = progressFetchNews(searchParams)
    fetching.then(result => {
      if (result) {
        console.log(result.body.sources)
        const postCardsData = result.body.sources.map((p) => {
          return ({
            abstract: p.description,
            title: p.name,
            image: p.urlsToLogos.small,
            autherName: p.url,
            postCardTitle: p.category
          })
        })
        dispatch(requestPostCardsdata(postCardsData))
      }
    })
  }
}

function progressFetchNews (searchParams) {
  return new Promise((resolve, reject) => {
    console.log('searchParams', searchParams)
    const apiUrl = `https://newsapi.org/v1/sources?category=${searchParams.category}`
    request.get(apiUrl).end((err, res) => {
      if (res) {
        console.log(res)
        resolve(res)
        return
      }
      if (err) {
        reject(err)
        console.log('error', err)
        return
      }
    })
  })
}

export function toggleSearchForm () {
  return (dispatch, getState) => {
    dispatch(toggleSearchFormAction())
  }
}
export function requestPostCardsData () {
  return (dispatch, getState) => {
    let fetching = progressFetchPostCardsdata()
    fetching.then(result => {
      if (result) {
        dispatch(requestPostCardsdata(result.body))
      }
    })
  }
}

function progressFetchPostCardsdata () {
  return new Promise((resolve, reject) => {
    const apiUrl = 'http://localhost:4000/api/data'
    request.get(apiUrl).end((err, res) => {
      if (res) {
        resolve(res)
        return
      }
      if (err) {
        reject(err)
        console.log('error', err)
        return
      }
    })
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const intercomReducer = handleActions({
  REQUEST_POSTCARDS_DATA: (state, action) => Object.assign({}, state, {
    postCardsData: action.payload
  }),
  TOGGLE_BUTTOM_PLAYER: (state, action) => Object.assign({}, state, {
    isShowButtonPlayer: !state.isShowButtonPlayer
  }),
  // TOGGLE_SEARCHFORM: (state, action) => Object.assign({}, state, {
  //   isRenderSearchForm: !state.isRenderSearchForm
  // }),
  SET_CATEGORY_VALUE: (state, action) => Object.assign({}, state, {
    searchCategoryValue: action.payload
  }),
  SET_LANGUAGE_VALUE: (state, action) => Object.assign({}, state, {
    searchLanguageValue: action.payload
  })
}, INIT_INTERCOM_STATE)

export default intercomReducer
