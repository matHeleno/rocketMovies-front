import { createContext, useContext, useState } from "react"

import { api } from "../services/api"

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {

  const [data, setData] = useState({})

  async function signIn({email, password}) {
    
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({user , token})
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel entrar.")
      }
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <AuthContext.Provider value={{ signIn, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }