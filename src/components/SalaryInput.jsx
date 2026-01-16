import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from './Header'

function SalaryInput() {
  const navigate = useNavigate()
  const location = useLocation()
  const careerType = location.state?.careerType || 'professional'
  
  const [currentSalary, setCurrentSalary] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (careerType !== 'professional') {
      navigate('/career-type')
    }
  }, [careerType, navigate])

  const handleSalaryChange = (e) => {
    const value = e.target.value
    
    // Allow only numbers and one decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCurrentSalary(value)
      setError('')
    }
  }

  const handleContinue = () => {
    const salary = parseFloat(currentSalary)
    
    if (!currentSalary || isNaN(salary) || salary <= 0) {
      setError('Please enter a valid salary')
      return
    }

    if (salary < 1 || salary > 100) {
      setError('Please enter a salary between 1 and 100 LPA')
      return
    }

    navigate('/skills', {
      state: {
        careerType,
        currentSalary: salary
      }
    })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Fixed Glass Header */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div style={{ height: '58px' }} className="sm:hidden"></div>
      <div style={{ height: '68px' }} className="hidden sm:block"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-golden-orange-100/80 backdrop-blur-sm border border-golden-orange-200/50 mb-6">
            <span className="text-xs sm:text-sm font-medium text-golden-orange-700">
              Step 2 of 4
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Current Salary
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your current annual salary to calculate your ROI accurately
          </p>
        </div>

        {/* Salary Input */}
        <div className="glass-panel rounded-2xl p-8 mb-8 animate-slide-up">
          <label htmlFor="salary" className="block text-lg font-semibold text-gray-800 mb-4">
            What is your current annual salary (LPA)?
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg font-medium">
              ₹
            </span>
            <input
              type="text"
              id="salary"
              value={currentSalary}
              onChange={handleSalaryChange}
              placeholder="e.g., 5.5"
              className={`w-full pl-10 pr-4 py-4 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden-orange-500 transition-all ${
                error ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg font-medium">
              LPA
            </span>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
          <p className="mt-4 text-sm text-gray-500">
            Enter your salary in Lakhs Per Annum (e.g., 5.5 for ₹5.5 LPA)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate('/career-type')}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            ← Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!currentSalary || parseFloat(currentSalary) <= 0}
            className={`golden-button ${
              !currentSalary || parseFloat(currentSalary) <= 0
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            Continue →
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SalaryInput

