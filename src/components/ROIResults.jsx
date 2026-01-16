import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from './Header'
import { calculateROI } from '../utils/roiCalculator'

function ROIResults() {
  const navigate = useNavigate()
  const location = useLocation()
  const { careerType, currentSalary, selectedSkills } = location.state || {}

  const [roiData, setRoiData] = useState(null)

  useEffect(() => {
    if (!careerType) {
      navigate('/career-type')
      return
    }

    // Calculate ROI (all 5 categories are always applied)
    const result = calculateROI(careerType, currentSalary, selectedSkills || [])
    setRoiData(result)
  }, [careerType, currentSalary, selectedSkills, navigate])

  if (!roiData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-golden-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Fixed Glass Header */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div style={{ height: '58px' }} className="sm:hidden"></div>
      <div style={{ height: '68px' }} className="hidden sm:block"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-golden-orange-100/80 backdrop-blur-sm border border-golden-orange-200/50 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-golden-orange-700">
              Your ROI Results
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Your Career ROI Analysis
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            See how upskilling with Incanto Dynamics transforms your earning potential
          </p>
        </div>

        {/* ROI Comparison Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Current ROI */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              {careerType === 'professional' ? 'Your Current ROI' : 'Current ROI (Today)'}
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    {careerType === 'professional' ? 'Current Annual Salary' : 'Starting Salary'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-800">₹{roiData.currentROI} LPA</span>
                </div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden mt-3 sm:mt-4">
                  <div 
                    className="h-full bg-gray-400 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (roiData.currentROI / roiData.postProgramROI) * 100)}%` }}
                  ></div>
                </div>
              </div>
              {careerType === 'professional' && (
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    This is your entered current salary, unchanged.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Post-Program ROI */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border-2 border-golden-orange-200 animate-slide-up relative" style={{ animationDelay: '0.2s' }}>
            {/* Title - Mobile: centered, Desktop: left-aligned with badge */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center md:text-left mb-3 md:mb-0">Final Predicted Salary</h2>
              {/* Badge - Desktop: beside title */}
              <span className="hidden md:inline-block px-3 py-1 rounded-full bg-golden-orange-100 text-golden-orange-700 text-sm font-semibold">
                +₹{roiData.salaryIncrease} LPA
              </span>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <span className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">After Completing Program</span>
                  <span className="text-2xl sm:text-3xl font-bold text-golden-orange-600 text-center sm:text-right">₹{roiData.postProgramROI} LPA</span>
                </div>
                {/* Badge - Mobile: below salary */}
                <div className="flex justify-center md:hidden mt-3">
                  <span className="px-3 py-1 rounded-full bg-golden-orange-100 text-golden-orange-700 text-xs font-semibold">
                    +₹{roiData.salaryIncrease} LPA
                  </span>
                </div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden mt-3 sm:mt-4">
                  <div 
                    className="h-full bg-golden-orange-500 rounded-full transition-all duration-500" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-gray-200 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Total Salary Increase</p>
                <p className="text-base sm:text-lg font-semibold text-golden-orange-600">
                  +₹{roiData.salaryIncrease} LPA ({roiData.percentageIncrease}%)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Added Hike (Breakdown by Category)</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Your salary increased by <span className="font-bold text-golden-orange-600">₹{roiData.salaryIncrease} LPA</span> because completing the Incanto Dynamics program adds all 5 core skill categories:
          </p>
          
          <div className="space-y-2 sm:space-y-3">
            {roiData.roiBreakdown.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 px-3 sm:px-4 bg-white/50 rounded-lg border border-gray-100 gap-2">
                <span className="text-sm sm:text-base text-gray-700 font-medium break-words">{item.category}</span>
                <span className="text-golden-orange-600 font-semibold text-base sm:text-lg whitespace-nowrap">+₹{item.addedROI.toFixed(1)} LPA</span>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 px-3 sm:px-4 bg-golden-orange-50 rounded-lg border-2 border-golden-orange-200 mt-3 sm:mt-4 gap-2">
              <span className="text-base sm:text-lg text-gray-800 font-bold">Total Added Hike</span>
              <span className="text-golden-orange-600 font-bold text-lg sm:text-xl whitespace-nowrap">+₹{roiData.totalCategoryROI} LPA</span>
            </div>
          </div>
        </div>

        {/* Why ROI Increased */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Why Your ROI Increased</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
            Incanto Dynamics' program closes skill gaps by providing hands-on training in Industrial Automation & Robotics. 
            Each skill category you master directly maps to high-demand roles in the industry, increasing your market value.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            The program bridges the gap between theoretical knowledge and industry-ready skills, making you immediately 
            valuable to employers in automation and robotics sectors.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="golden-button"
          >
            Calculate Again
          </button>
          <button
            onClick={() => {
              if (careerType === 'professional') {
                navigate('/salary-input', { state: { careerType } })
              } else {
                navigate('/skills', { state: { careerType } })
              }
            }}
            className="golden-button-outline"
          >
            Modify Inputs
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ROIResults
