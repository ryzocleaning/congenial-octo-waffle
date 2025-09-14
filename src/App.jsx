import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Sparkles, Leaf, Building, Users, Recycle, HeartPulse, CheckCircle, ArrowRight, Mail, Shield, Menu, X } from 'lucide-react'
import './App.css'

// Email popup component
function EmailPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Get Your Quote</h3>
          <p className="text-gray-600 mb-6">Contact us for a customised cleaning solution</p>
          <a 
            href="mailto:admin@ryzocleaning.com"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            admin@ryzocleaning.com
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  // Smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openEmailPopup = () => {
    setIsEmailPopupOpen(true);
  };

  const closeEmailPopup = () => {
    setIsEmailPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Ryzo Cleaning</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection('eco-friendly')} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Eco-Friendly</button>
            <button onClick={() => scrollToSection('our-work')} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Our Work</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</button>
          </div>

          <Button 
            onClick={openEmailPopup}
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6"
          >
            Request Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('eco-friendly')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Eco-Friendly</button>
              <button onClick={() => scrollToSection('our-work')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Our Work</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          
          <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">Premium Cleaning Services</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow">Detailed & done right, naturally</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={openEmailPopup}
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 h-12"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Professional<br/>Cleaning</h2>
              <p className="text-lg text-gray-700 mb-8">We provide reliable, high-quality cleaning services using eco-friendly products that are safe for your family, pets, and the environment. With a strong focus on sustainability and customer satisfaction, we deliver exceptional results you can trust.</p>
              <Button 
                onClick={openEmailPopup}
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 h-12"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Professional Cleaning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-[250px] text-center transform rotate-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">Clean spaces. Clean planet.</p>
                <div className="flex justify-center space-x-4">
                  <Building className="w-8 h-8 text-blue-600" />
                  <Leaf className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eco-Friendly Section */}
        <section id="eco-friendly" className="py-16 sm:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              Environmentally Conscious
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Eco-Friendly Cleaning</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">We're committed to protecting your health and our planet with sustainable cleaning practices and non-toxic, biodegradable products.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Products</h3>
                <p className="text-gray-600">Plant-based, biodegradable cleaning solutions</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safe for Family</h3>
                <p className="text-gray-600">Non-toxic formulas safe for children and pets</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Recycle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
                <p className="text-gray-600">Eco-friendly methods and recyclable packaging</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartPulse className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health Focused</h3>
                <p className="text-gray-600">Improving indoor air quality and wellness</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Our Services</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">Comprehensive eco-friendly cleaning solutions for every space and occasion</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Commercial Cleaning */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Commercial Cleaning" 
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Commercial Cleaning</h3>
                <p className="text-gray-700 mb-6">Professional office and commercial space cleaning services using eco-friendly products to maintain a pristine, healthy work environment.</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Green certified products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Advanced air purification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Waste reduction
                  </li>
                </ul>
              </div>

              {/* Event Cleaning */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Event Cleaning" 
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Event Cleaning</h3>
                <p className="text-gray-700 mb-6">Pre and post-event cleaning services with sustainable practices to ensure your venue is spotless whilst minimising environmental impact.</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Biodegradable supplies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Recycling programmes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Energy efficient
                  </li>
                </ul>
              </div>

              {/* Residential Cleaning */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Residential Cleaning" 
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Residential Cleaning</h3>
                <p className="text-gray-700 mb-6">Thorough home cleaning services using natural, non-toxic products to keep your living space comfortable, healthy, and environmentally safe.</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Pet & child safe
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Allergen reduction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Natural ingredients
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section id="our-work" className="py-16 sm:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Our Work</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">Take a look at our sustainable cleaning projects and transformations</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Green Office Space" 
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Green Office Space</h3>
                <p className="text-gray-700 mb-6">Sustainable cleaning practices for a healthier, more productive work environment.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
                  <Leaf className="w-4 h-4 mr-2" />
                  Eco-Certified
                </span>
                <div className="mt-4">
                  <Button className="bg-white text-gray-800 px-6 border border-gray-200 hover:bg-gray-50">
                    View Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80" 
                  alt="Eco-Luxury Residence" 
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Eco-Luxury Residence</h3>
                <p className="text-gray-700 mb-6">Maintaining pristine homes with natural, non-toxic cleaning solutions.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
                  <Leaf className="w-4 h-4 mr-2" />
                  100% Natural
                </span>
                <div className="mt-4">
                  <Button className="bg-white text-gray-800 px-6 border border-gray-200 hover:bg-gray-50">
                    View Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1540518614846-7eded47ee3bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80" 
                  alt="Sustainable Event Venue" 
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Sustainable Event Venue</h3>
                <p className="text-gray-700 mb-6">Ensuring venues are spotless with minimal environmental impact.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
                  <Leaf className="w-4 h-4 mr-2" />
                  Zero Waste
                </span>
                <div className="mt-4">
                  <Button className="bg-white text-gray-800 px-6 border border-gray-200 hover:bg-gray-50">
                    View Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">Ready to experience eco-friendly cleaning? Contact us for a customised, sustainable solution tailored to your needs.</p>
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <a 
                href="mailto:admin@ryzocleaning.com"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg font-medium">admin@ryzocleaning.com</span>
              </a>
            </div>
            
            <div className="pt-8">
              <Button 
                onClick={openEmailPopup}
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-12"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Ryzo Cleaning</span>
              </div>
              
              <div className="text-center md:text-right space-y-2">
                <p className="text-gray-600 text-sm">© 2024 Ryzo Cleaning. Sustainable cleaning services you can trust.</p>
                <div className="flex items-center justify-center md:justify-end space-x-4 text-xs text-emerald-600">
                  <span className="flex items-center">
                    <Leaf className="w-3 h-3 mr-1" />
                    Eco-Certified
                  </span>
                  <span className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Family Safe
                  </span>
                  <span className="flex items-center">
                    <Recycle className="w-3 h-3 mr-1" />
                    Sustainable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Email Popup */}
      <EmailPopup isOpen={isEmailPopupOpen} onClose={closeEmailPopup} />
    </div>
  )
}

export default App

