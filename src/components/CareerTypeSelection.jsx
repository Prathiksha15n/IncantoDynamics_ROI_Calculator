import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function CareerTypeSelection() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState(null)

  const handleSelect = (type) => {
    setSelectedType(type)
    setTimeout(() => {
      if (type === 'professional') {
        navigate('/salary-input', { state: { careerType: type } })
      } else {
        navigate('/skills', { state: { careerType: type } })
      }
    }, 300)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Fixed Glass Header */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div style={{ height: '58px' }} className="sm:hidden"></div>
      <div style={{ height: '68px' }} className="hidden sm:block"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-golden-orange-100/80 backdrop-blur-sm border border-golden-orange-200/50 mb-6">
            <span className="text-xs sm:text-sm font-medium text-golden-orange-700">
              Step 1 of 3
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Select Your Career Stage
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the option that best describes your current situation
          </p>
        </div>

        {/* Career Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Fresher / Student Card */}
          <div
            onClick={() => handleSelect('fresher')}
            className={`glass-panel rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in ${
              selectedType === 'fresher' ? 'ring-2 ring-golden-orange-500' : ''
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-golden-orange-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-golden-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Fresher / Student
              </h3>
              <p className="text-gray-600 mb-6">
                Engineering students or recent graduates looking to enter the automation industry
              </p>
              <div className="inline-flex items-center text-golden-orange-500 font-medium">
                Select →
              </div>
            </div>
          </div>

          {/* Working Professional Card */}
          <div
            onClick={() => handleSelect('professional')}
            className={`glass-panel rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in ${
              selectedType === 'professional' ? 'ring-2 ring-golden-orange-500' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-golden-orange-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-golden-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Working Professional
              </h3>
              <p className="text-gray-600 mb-6">
                Early-career professionals seeking to upskill and advance in automation & robotics
              </p>
              <div className="inline-flex items-center text-golden-orange-500 font-medium">
                Select →
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CareerTypeSelection

