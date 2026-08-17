import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // Reemplazá esto con tu lógica real de autenticación contra tu backend Spring Boot
  const [isAdmin, setIsAdmin] = useState(false)

  const login = async (username, password) => {
    // TODO: conectar con POST /login de tu backend
    // const res = await fetch('/api/login', { method:'POST', body: JSON.stringify({username, password}) })
    // if (res.ok) setIsAdmin(true)

    // Por ahora: credenciales hardcodeadas para demo
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    // TODO: llamar a /logout de tu backend
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
