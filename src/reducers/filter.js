import { SELECT_BRAND, SELECT_TYPE, RESET_ALL } from '../actions/filter'

const initialState = {
  brands: [],
  types: []
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    
    case SELECT_BRAND:
      return {
        ...state,
        brands: action.payload
      }

    case SELECT_TYPE:
      return {
        ...state,
        types: action.payload
      }
      
    case RESET_ALL:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default filter