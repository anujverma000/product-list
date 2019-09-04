const break_point = {
  mobile: 425,
  tablet: 768
}

export const MOBILE = `(max-width: ${ break_point.mobile }px)`

export const TABLET = `(min-width: ${ break_point.mobile +1 }px) and (max-width: ${ break_point.tablet })`

export const DESKTOP = `(min-width: ${ break_point.tablet+1 }px)`
