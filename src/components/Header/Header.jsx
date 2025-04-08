import React,{useState} from 'react'
import '../Header/Header.css'

function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
      };
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };
    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
      };
    
  return (
    <div>
        <div className="Header1">
            <div className="Header11"><a href="#"><img src="public/logo.png" alt="" /></a></div>
            <div className="Header12">
                <ul><li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Landscape</a></li>
                <li onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave} className="dropdown"><a href="#">Build</a></li>
                <li><a href="#">Maintenance</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">CONTACT</a></li>
                <button>052 240 5544</button>
                </ul>
                <ul className={`dropdown-menu dropdown ${isDropdownVisible ? 'visible' : ''}`}    onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}>
                    <li><a href="#">Swimming Pool Contractors</a></li>
                    <li><a href="#">Water Features</a></li>
                    <li><a href="#">Outdoor Amenities</a></li>
                    <li><a href="#">Soft Landscaping</a></li>
                    <li><a href="#">Irrigation</a></li>
                    <li><a href="#">Landscape Light</a></li>
                    <li><a href="#">Interior Fit Out</a></li>
                    <li><a href="#">BBQ,Fire and & Pizza Oven</a></li>
                    <li><a href="#">Renovation</a></li>
                    <li><a href="#">Wellness</a></li>
                    <li><a href="#">Automated Pergola</a></li>
                    <li><a href="#">Deep Ocean Aquarium</a></li>
                    <li><a href="#">Fiber Optic Lights</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header