import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from './Header'

function SkillsSelection() {
  const navigate = useNavigate()
  const location = useLocation()
  const { careerType, currentSalary } = location.state || {}
  
  const [selectedSkills, setSelectedSkills] = useState([])

  // Skills list
  const skills = [
    { id: 'plc-programming', name: 'PLC Programming' },
    { id: 'logic-architecture', name: 'Logic Architecture' },
    { id: 'scada-configuration', name: 'SCADA System Configuration' },
    { id: 'hmi-design', name: 'HMI Design' },
    { id: 'automation-integration', name: 'Automation System Integration' },
    { id: 'robotics-vision', name: 'Robotics Vision' },
    { id: 'robot-motion-kinematics', name: 'Robot Motion Planning & Kinematics' },
    { id: 'electrical-systems', name: 'Electrical Systems Engineering' },
    { id: 'control-panel-design', name: 'Control Panel Designing' },
    { id: 'field-device-interfacing', name: 'Field Device Interfacing' },
    { id: 'hydraulics-pneumatics', name: 'Hydraulics & Pneumatics Systems' },
    { id: 'sensor-instrumentation', name: 'Sensor Integration & Instrumentation' },
  ]

  const toggleSkill = (skillId) => {
    setSelectedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    )
  }

  const handleContinue = () => {
    // Skills selection is optional - user can proceed with or without selecting skills
    navigate('/results', {
      state: {
        careerType,
        currentSalary,
        selectedSkills
      }
    })
  }

  useEffect(() => {
    if (!careerType) {
      navigate('/career-type')
    }
  }, [careerType, navigate])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Fixed Glass Header */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div style={{ height: '58px' }} className="sm:hidden"></div>
      <div style={{ height: '68px' }} className="hidden sm:block"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-golden-orange-100/80 backdrop-blur-sm border border-golden-orange-200/50 mb-6">
            <span className="text-xs sm:text-sm font-medium text-golden-orange-700">
              {careerType === 'professional' ? 'Step 3 of 4' : 'Step 2 of 3'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the skills you currently have. This helps us understand your starting point.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
            {/* Note: Completing the Incanto Dynamics program will add all 5 core skill categories to your profile. */}
          </p>
        </div>

        {/* Skills Selection - Tag Chips */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {skills.map((skill) => (
              <button
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={`px-5 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedSkills.includes(skill.id)
                    ? 'bg-golden-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 hover:border-golden-orange-300 hover:bg-golden-orange-50'
                }`}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Skills Count */}
        {selectedSkills.length > 0 && (
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">
              {selectedSkills.length} skill{selectedSkills.length > 1 ? 's' : ''} selected
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              if (careerType === 'professional') {
                navigate('/salary-input', { state: { careerType } })
              } else {
                navigate('/career-type')
              }
            }}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            ← Back
          </button>
          <button
            onClick={handleContinue}
            className="golden-button"
          >
            Calculate ROI →
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SkillsSelection
