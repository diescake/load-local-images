// action types
export const Type = {
  INCREMENT_CONNECTION: 'NETWORK/INCREMENT_CONNECTION',
  DECREMENT_CONNECTION: 'NETWORK/DECREMENT_CONNECTION',
} as const

// bound action creator interfaces
export type DispatchIncrementConnection = () => void
export type DispatchDecrementConnection = () => void

// action creators
export const incrementConnection = () => ({
  type: Type.INCREMENT_CONNECTION,
})

export const decrementConnection = () => ({
  type: Type.DECREMENT_CONNECTION,
})

export type NetworkAction = ReturnType<typeof incrementConnection> | ReturnType<typeof decrementConnection>
