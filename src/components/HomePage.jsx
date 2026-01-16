import { useNavigate } from 'react-router-dom'
import Header from './Header'

function HomePage() {
  const navigate = useNavigate()

  const handleCTAClick = () => {
    navigate('/career-type')
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Fixed Glass Header */}
      <Header />
      
      {/* Spacer for fixed header - 58px mobile, 68px desktop */}
      <div style={{ height: '58px' }} className="sm:hidden"></div>
      <div style={{ height: '68px' }} className="hidden sm:block"></div>
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            ROI Calculator
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            See your earning potential and how it changes when you upskill in Industrial Automation & Robotics
          </p>

          {/* Skills Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 text-sm sm:text-base text-gray-600 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="px-3 py-1 rounded-md bg-white/60 backdrop-blur-sm border border-gray-200/50">PLC</span>
            <span className="text-golden-orange-500">•</span>
            <span className="px-3 py-1 rounded-md bg-white/60 backdrop-blur-sm border border-gray-200/50">SCADA</span>
            <span className="text-golden-orange-500">•</span>
            <span className="px-3 py-1 rounded-md bg-white/60 backdrop-blur-sm border border-gray-200/50">Robotics</span>
            <span className="text-golden-orange-500">•</span>
            <span className="px-3 py-1 rounded-md bg-white/60 backdrop-blur-sm border border-gray-200/50">Industrial IoT</span>
            <span className="text-golden-orange-500">•</span>
            <span className="px-3 py-1 rounded-md bg-white/60 backdrop-blur-sm border border-gray-200/50">Automation Systems</span>
          </div>

          {/* Primary CTA */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleCTAClick}
              className="golden-button text-base sm:text-lg mb-3"
            >
              See My Career ROI →
            </button>
            <p className="text-sm text-gray-500 mb-4">
              Takes less than 2 minutes
            </p>
            <p className="text-xs text-gray-400">
              An Incanto Dynamics Initiative
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why This Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-golden-orange-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-golden-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Industrial Data</h3>
              <p className="text-sm text-gray-600">Based on actual hiring trends and salary benchmarks</p>
            </div>

            <div className="glass-panel rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-golden-orange-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-golden-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Skill-Based Ceilings</h3>
              <p className="text-sm text-gray-600">Higher salary potential with specialized automation skills</p>
            </div>

            <div className="glass-panel rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-golden-orange-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-golden-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Demand-Driven Roles</h3>
              <p className="text-sm text-gray-600">Clear upgrade path to high-demand automation positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>© 2024 Incanto Dynamics Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

