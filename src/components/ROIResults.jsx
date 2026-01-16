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
      
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-golden-orange-100/80 backdrop-blur-sm border border-golden-orange-200/50 mb-6">
            <span className="text-xs sm:text-sm font-medium text-golden-orange-700">
              Your ROI Results
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Career ROI Analysis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how upskilling with Incanto Dynamics transforms your earning potential
          </p>
        </div>

        {/* ROI Comparison Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Current ROI */}
          <div className="glass-panel rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {careerType === 'professional' ? 'Your Current ROI' : 'Current ROI (Today)'}
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {careerType === 'professional' ? 'Current Annual Salary' : 'Starting Salary'}
                  </span>
                  <span className="text-3xl font-bold text-gray-800">₹{roiData.currentROI} LPA</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div 
                    className="h-full bg-gray-400 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (roiData.currentROI / roiData.postProgramROI) * 100)}%` }}
                  ></div>
                </div>
              </div>
              {careerType === 'professional' && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    This is your entered current salary, unchanged.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Post-Program ROI */}
          <div className="glass-panel rounded-2xl p-8 border-2 border-golden-orange-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Final Predicted Salary</h2>
              <span className="px-3 py-1 rounded-full bg-golden-orange-100 text-golden-orange-700 text-sm font-semibold">
                +₹{roiData.salaryIncrease} LPA
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">After Completing Program</span>
                  <span className="text-3xl font-bold text-golden-orange-600">₹{roiData.postProgramROI} LPA</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div 
                    className="h-full bg-golden-orange-500 rounded-full transition-all duration-500" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Total Salary Increase</p>
                <p className="text-lg font-semibold text-golden-orange-600">
                  +₹{roiData.salaryIncrease} LPA ({roiData.percentageIncrease}%)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="glass-panel rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Added Hike (Breakdown by Category)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your salary increased by <span className="font-bold text-golden-orange-600">₹{roiData.salaryIncrease} LPA</span> because completing the Incanto Dynamics program adds all 5 core skill categories:
          </p>
          
          <div className="space-y-3">
            {roiData.roiBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 px-4 bg-white/50 rounded-lg border border-gray-100">
                <span className="text-gray-700 font-medium">{item.category}</span>
                <span className="text-golden-orange-600 font-semibold text-lg">+₹{item.addedROI.toFixed(1)} LPA</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4 px-4 bg-golden-orange-50 rounded-lg border-2 border-golden-orange-200 mt-4">
              <span className="text-gray-800 font-bold text-lg">Total Added Hike</span>
              <span className="text-golden-orange-600 font-bold text-xl">+₹{roiData.totalCategoryROI} LPA</span>
            </div>
          </div>
        </div>

        {/* Why ROI Increased */}
        <div className="glass-panel rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Why Your ROI Increased</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Incanto Dynamics' program closes skill gaps by providing hands-on training in Industrial Automation & Robotics. 
            Each skill category you master directly maps to high-demand roles in the industry, increasing your market value.
          </p>
          <p className="text-gray-700 leading-relaxed">
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
