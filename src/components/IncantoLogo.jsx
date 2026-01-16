import logoImage from '../assets/incantologo.png'

function IncantoLogo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Incanto Dynamics" 
        className="h-[52px] sm:h-[54px] lg:h-[55px] w-auto"
      />
    </div>
  )
}

export default IncantoLogo

