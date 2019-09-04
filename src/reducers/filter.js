import { SELECT_BRAND } from '../actions/filter'

const initialState = {
  brands: []
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BRAND:
      return {
        ...state,
        brands: action.payload
      }
    default:
      return state
  }
}

export default filter