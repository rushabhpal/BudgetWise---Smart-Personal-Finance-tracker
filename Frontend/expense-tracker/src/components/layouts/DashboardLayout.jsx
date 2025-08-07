import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import Navbar from './Navbar.jsx'
import SideMenu from './SideMenu.jsx'
import { toast } from 'react-hot-toast'

const DashboardLayout = ({ children }) => {
  const { user, setUser } = useContext(UserContext)
  const location = useLocation()
  const navigate = useNavigate()

  const getActiveMenu = () => {
    const path = location.pathname
    if (path.includes('/income')) return 'Income'
    if (path.includes('/expense')) return 'Expense'
    if (path.includes('/dashboard') || path === '/') return 'Dashboard'
    return ''
  }

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?')
    if (!confirmed) return

    localStorage.removeItem('token')
    setUser(null)
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <div className="w-full max-w-screen overflow-x-hidden min-h-screen">
      <Navbar activeMenu={getActiveMenu()} onLogout={handleLogout} />

      {user && (
        <div className="flex h-[calc(100vh-61px)] overflow-hidden">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={getActiveMenu()} onLogout={handleLogout} />
          </div>

          <div className="grow mx-5 overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout

