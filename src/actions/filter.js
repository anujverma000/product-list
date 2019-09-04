import createAction from './actionCreator'

export const SELECT_BRAND = 'SELECT_BRAND'
export const SELECT_TYPE = 'SELECT_TYPE'
export const RESET_ALL = 'RESET_ALL'

export const selectBrands = brands => createAction(SELECT_BRAND, brands)
export const selectTypes = types => createAction(SELECT_TYPE, types)
export const resetFilters = () => createAction(RESET_ALL)