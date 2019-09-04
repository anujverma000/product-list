import createAction from './actionCreator'

export const SELECT_BRAND = 'SELECT_BRAND'

export const selectBrands = brands => createAction(SELECT_BRAND, brands)