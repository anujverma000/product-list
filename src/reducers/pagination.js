import { NEXT_PAGE, PREV_PAGE, RESET_PAGINATION } from '../actions/pagination'

const initialState = {
  currentPage: 0
}

const pagination = (state = initialState, action) => {
  switch (action.type) {
    
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      }
    
    case RESET_PAGINATION:
      return initialState
    
    default:
      return state
  }
}

export default pagination