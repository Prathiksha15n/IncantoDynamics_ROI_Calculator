// ROI Calculation Logic
// ALL 5 categories are ALWAYS applied to EVERY user

// The 5 core skill categories from Incanto Dynamics program
// Each category has a strong ROI impact (0.75 - 2.0 LPA range)
const INCANTO_CATEGORIES = {
  'Industrial Automation & Control Systems': 1.2,
  'Robotics & Motion Engineering': 1.8,
  'Sensors, Instrumentation & Field Integration': 1.0,
  'Smart Manufacturing': 0.9,
  'IoT & NFC for Control Systems': 1.1,
}

// Skill to Category Mapping (for reference)
// Skills are mapped to the 5 core categories
const SKILL_TO_CATEGORY = {
  // Industrial Automation & Control Systems
  'plc-programming': 'Industrial Automation & Control Systems',
  'logic-architecture': 'Industrial Automation & Control Systems',
  'scada-configuration': 'Industrial Automation & Control Systems',
  'hmi-design': 'Industrial Automation & Control Systems',
  'automation-integration': 'Industrial Automation & Control Systems',
  'control-panel-design': 'Industrial Automation & Control Systems',
  'electrical-systems': 'Industrial Automation & Control Systems',
  'hydraulics-pneumatics': 'Industrial Automation & Control Systems',
  
  // Robotics & Motion Engineering
  'robotics-vision': 'Robotics & Motion Engineering',
  'robot-motion-kinematics': 'Robotics & Motion Engineering',
  
  // Sensors, Instrumentation & Field Integration
  'sensor-instrumentation': 'Sensors, Instrumentation & Field Integration',
  'field-device-interfacing': 'Sensors, Instrumentation & Field Integration',
}

// Base salary for freshers
const FRESHER_BASE_SALARY = 3.5

// Get all category ROIs (always returns all 5 categories)
const getAllCategoryROIs = () => {
  const breakdown = {}
  let totalROI = 0
  
  Object.keys(INCANTO_CATEGORIES).forEach(category => {
    const categoryROI = INCANTO_CATEGORIES[category]
    breakdown[category] = categoryROI
    totalROI += categoryROI
  })
  
  return {
    total: totalROI,
    breakdown
  }
}

// Main calculation function
export const calculateROI = (careerType, currentSalary, selectedSkills) => {
  // Get all 5 category ROIs (always applied)
  const allCategoryROIs = getAllCategoryROIs()
  
  // Calculate current ROI
  // For freshers: base salary
  // For professionals: their entered salary (unchanged)
  const currentROI = careerType === 'fresher' 
    ? FRESHER_BASE_SALARY 
    : (currentSalary || FRESHER_BASE_SALARY)
  
  // Final ROI = Current ROI + All 5 category ROIs
  const postProgramROI = currentROI + allCategoryROIs.total
  
  // Calculate breakdown for explanation
  const roiBreakdown = Object.keys(allCategoryROIs.breakdown).map(category => ({
    category,
    addedROI: allCategoryROIs.breakdown[category]
  }))
  
  return {
    currentROI: parseFloat(currentROI.toFixed(1)),
    postProgramROI: parseFloat(postProgramROI.toFixed(1)),
    salaryIncrease: parseFloat((postProgramROI - currentROI).toFixed(1)),
    percentageIncrease: parseFloat((((postProgramROI - currentROI) / currentROI) * 100).toFixed(1)),
    roiBreakdown,
    baseSalary: parseFloat(currentROI.toFixed(1)),
    totalCategoryROI: parseFloat(allCategoryROIs.total.toFixed(1))
  }
}
