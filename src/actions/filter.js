import createAction from './actionCreator'

export const SELECT_BRAND = 'SELECT_BRAND'
export const SELECT_TYPE = 'SELECT_TYPE'
export const SELECT_SORT = 'SELECT_SORT'
export const RESET_ALL = 'RESET_ALL'

export const selectBrands = brands => createAction(SELECT_BRAND, brands)
export const selectTypes = types => createAction(SELECT_TYPE, types)
export const selectSort = sortOrder => createAction(SELECT_SORT, sortOrder)
export const resetFilters = () => createAction(RESET_ALL)