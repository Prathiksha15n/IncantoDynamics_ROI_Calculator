import { useNavigate, useLocation } from 'react-router-dom'
import IncantoLogo from './IncantoLogo'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 h-[58px] sm:h-[68px]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <IncantoLogo />
        </div>
        {/* Right: Home Navigation */}
        <div>
          <button
            onClick={handleHomeClick}
            className="text-sm font-medium text-gray-700 hover:text-golden-orange-500"
            style={{ textDecoration: 'none' }}
          >
            Home
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

