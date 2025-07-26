export default function Navbar() {
    return (
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          {/* Logo / Name */}
          <a href="/" className="font-bold text-xl text-gray-900">
            James Sheng
          </a>
  
          {/* Navigation Links */}
          <div className="space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
