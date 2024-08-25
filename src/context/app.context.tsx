import { createContext } from "react"
import { User } from "../types/user"
import { useState } from "react"
import { getProfileFromLS } from "../utils/local"
interface initialAppContextIF {
  isAuthenticated: boolean
  profile: User | null
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  setProfile: React.Dispatch<React.SetStateAction<User | null>>,
  reset: () => void
}
// const initialAppContext = {
//   isAuthenticated: false,
//   profile: null,
//   setIsAuthenticated: () => null,
//   setProfile: null,
//   reset: () => void
// }

export const getInitialAppContext: () => initialAppContextIF = () => ({
  isAuthenticated: false,
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  extendedPurchases: [],
  setExtendedPurchases: () => null,
  reset: () => null
})
const initialAppContexts = getInitialAppContext()
export const AppContext = createContext<initialAppContextIF>(initialAppContexts)

export const AppProvider = ({
  children,
  defaultValue = initialAppContexts
}: {
  children: React.ReactNode
  defaultValue?: initialAppContextIF
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated)
  // const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchase[]>(defaultValue.extendedPurchases)
  const [profile, setProfile] = useState<User | null>(defaultValue.profile)

  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
  }
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        reset
      }
      }
    >
      {children}
    </AppContext.Provider>
  )
}

