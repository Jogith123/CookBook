import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar(){
  const { user, logout } = useAuth()
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-r from-primary-700 via-primary-600 to-rose-500/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm text-white">
        <Link to="/" className="font-semibold tracking-tight">
          <span className="rounded-full bg-white/10 px-2 py-1 text-xs uppercase tracking-[0.18em] text-amber-100">Cook</span>
          <span className="ml-1 font-bold">Book</span>
        </Link>
        <nav className="flex items-center gap-4">
          <NavLink
            to="/recipes"
            className={({isActive})=> isActive
              ? 'rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium shadow-sm'
              : 'text-white/80 hover:text-white'
            }
          >
            All Recipes
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/my-recipes"
                className={({isActive})=> isActive
                  ? 'rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium shadow-sm'
                  : 'text-white/80 hover:text-white'
                }
              >
                My Recipes
              </NavLink>
              <NavLink
                to="/add"
                className={({isActive})=> isActive
                  ? 'rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium shadow-sm'
                  : 'text-white/80 hover:text-white'
                }
              >
                Add Recipe
              </NavLink>
            </>
          )}
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <NavLink to="/profile" className="text-xs text-white/80 hover:text-white">{user.name}</NavLink>
              <button
                onClick={logout}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-white/20"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-xs text-white/80 hover:text-white">Login</NavLink>
              <NavLink
                to="/register"
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary-700 shadow-sm hover:bg-amber-50"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
