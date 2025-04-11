interface IconPath {
  fillRule?: string,
  clipRule?: string,
  d: string
}

interface IconPaths {
  [key: string]: IconPath
}

export const navigation = {
  caratLeft: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1.27366 6.63536C0.556475 7.40378 0.556475 8.59622 1.27366 9.36464L6.70657 15.1856C7.11761 15.626 7.81572 15.626 8.22676 15.1856C8.5996 14.7861 8.5996 14.1662 8.22676 13.7668L2.84444 8L8.22676 2.23323C8.5996 1.83376 8.5996 1.21386 8.22676 0.814387C7.81572 0.373985 7.11761 0.373985 6.70657 0.814387L1.27366 6.63536Z'
  },
  caratRight: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M14.7263 9.36464C15.4435 8.59622 15.4435 7.40378 14.7263 6.63536L9.29343 0.814388C8.88239 0.373986 8.18428 0.373986 7.77324 0.814388C7.4004 1.21386 7.4004 1.83376 7.77324 2.23323L13.1556 8L7.77324 13.7668C7.4004 14.1662 7.4004 14.7861 7.77324 15.1856C8.18428 15.626 8.88239 15.626 9.29343 15.1856L14.7263 9.36464Z'
  },
  close: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M8 6.46364L1.85455 0.318192C1.4303 -0.106063 0.742445 -0.106062 0.318191 0.318192C-0.106063 0.742446 -0.106064 1.4303 0.318191 1.85455L6.46364 8L0.318191 14.1454C-0.106063 14.5697 -0.106062 15.2576 0.318192 15.6818C0.742446 16.1061 1.4303 16.1061 1.85455 15.6818L8 9.53636L14.1454 15.6818C14.5697 16.1061 15.2576 16.1061 15.6818 15.6818C16.1061 15.2576 16.1061 14.5697 15.6818 14.1454L9.53636 8L15.6818 1.85455C16.1061 1.4303 16.1061 0.742445 15.6818 0.318191C15.2576 -0.106063 14.5697 -0.106064 14.1454 0.318191L8 6.46364Z'
  },
  doubleLeft: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1.27367 9.36464C0.556482 8.59622 0.556482 7.40378 1.27367 6.63536L6.70658 0.814386C7.11762 0.373985 7.81573 0.373985 8.22677 0.814387C8.59961 1.21386 8.59961 1.83376 8.22677 2.23323L2.84445 8L8.22677 13.7668C8.59961 14.1662 8.59961 14.7861 8.22677 15.1856C7.81573 15.626 7.11762 15.626 6.70658 15.1856L1.27367 9.36464ZM11.7066 15.1856L6.27367 9.36464C5.55648 8.59622 5.55648 7.40378 6.27367 6.63536L11.7066 0.814386C12.1176 0.373985 12.8157 0.373985 13.2268 0.814387C13.5996 1.21386 13.5996 1.83376 13.2268 2.23323L7.84445 8L13.2268 13.7668C13.5996 14.1662 13.5996 14.7861 13.2268 15.1856C12.8157 15.626 12.1176 15.626 11.7066 15.1856Z'
  },
  doubleRight: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M14.7263 6.63536C15.4435 7.40378 15.4435 8.59622 14.7263 9.36464L9.29342 15.1856C8.88238 15.626 8.18427 15.626 7.77323 15.1856C7.40039 14.7861 7.40039 14.1662 7.77323 13.7668L13.1555 8L7.77323 2.23323C7.4004 1.83376 7.4004 1.21386 7.77323 0.814387C8.18427 0.373986 8.88238 0.373986 9.29342 0.814387L14.7263 6.63536ZM4.29342 0.814386L9.72633 6.63536C10.4435 7.40378 10.4435 8.59622 9.72633 9.36464L4.29342 15.1856C3.88238 15.626 3.18427 15.626 2.77323 15.1856C2.40039 14.7861 2.40039 14.1662 2.77323 13.7668L8.15555 8L2.77323 2.23323C2.40039 1.83376 2.40039 1.21385 2.77323 0.814386C3.18427 0.373985 3.88238 0.373985 4.29342 0.814386Z' 
  },
  arrowDown: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M8.8891 8.25301C8.49858 8.64353 7.86542 8.64353 7.47489 8.25301L1.11093 1.88904C0.720407 1.49852 0.720407 0.865355 1.11093 0.474831C1.50146 0.0843067 2.13462 0.0843067 2.52514 0.474831L8.182 6.13169L13.8389 0.474831C14.2294 0.0843067 14.8625 0.0843067 15.2531 0.474831C15.6436 0.865355 15.6436 1.49852 15.2531 1.88904L8.88969 8.25242C8.8895 8.25261 8.8893 8.25281 8.8891 8.25301Z'
  },
  arrowUp: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M8.8891 0.475022C8.49858 0.0844979 7.86542 0.0844978 7.47489 0.475022L1.11093 6.83898C0.720407 7.22951 0.720407 7.86267 1.11093 8.2532C1.50146 8.64372 2.13462 8.64372 2.52514 8.2532L8.182 2.59634L13.8389 8.2532C14.2294 8.64372 14.8625 8.64372 15.2531 8.2532C15.6436 7.86267 15.6436 7.22951 15.2531 6.83898L8.88969 0.475609C8.8895 0.475413 8.8893 0.475218 8.8891 0.475022Z'
  },
  kebab: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: "M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2Z M14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4Z"
  }
} as IconPaths

export default navigation