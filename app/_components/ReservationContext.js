'use client'

import { createContext, useState, useContext } from 'react'

const ReservationContext = createContext()

const initialState = { from: undefined, to: undefined }

export function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState)

  function resetRange() {
    setRange(initialState)
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservationContext() {
  const context = useContext(ReservationContext)

  if (context === undefined) new Error('you try use context outside provider')

  return context
}
