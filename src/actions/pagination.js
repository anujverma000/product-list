import createAction from './actionCreator'

export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const RESET_PAGINATION = 'RESET_PAGINATION'

export const goNext = () => createAction(NEXT_PAGE)
export const goPrev = () => createAction(PREV_PAGE)
export const resetPagination = () => createAction(RESET_PAGINATION)