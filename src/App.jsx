import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import CareerTypeSelection from './components/CareerTypeSelection'
import SalaryInput from './components/SalaryInput'
import SkillsSelection from './components/SkillsSelection'
import ROIResults from './components/ROIResults'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career-type" element={<CareerTypeSelection />} />
        <Route path="/salary-input" element={<SalaryInput />} />
        <Route path="/skills" element={<SkillsSelection />} />
        <Route path="/results" element={<ROIResults />} />
      </Routes>
    </Router>
  )
}

export default App

