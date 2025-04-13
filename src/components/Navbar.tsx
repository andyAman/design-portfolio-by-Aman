
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from './ui/switch';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved dark mode preference
    return localStorage.getItem('darkMode') === 'enabled';
  });
  const isMobile = useIsMobile();

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      
      // Also update the mobile toggle if it exists
      const mobileToggle = document.getElementById('darkModeToggleMobile');
      if (mobileToggle && mobileToggle instanceof HTMLInputElement) {
        mobileToggle.checked = true;
      }
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      
      // Also update the mobile toggle if it exists
      const mobileToggle = document.getElementById('darkModeToggleMobile');
      if (mobileToggle && mobileToggle instanceof HTMLInputElement) {
        mobileToggle.checked = false;
      }
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-navy-800">Portfolio<span className="text-teal-500">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <div className="flex items-center space-x-2">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Switch checked={darkMode} onCheckedChange={handleDarkModeToggle} />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="flex items-center space-x-1 mr-2">
            {darkMode ? 
              <Moon className="h-[1.2rem] w-[1.2rem] text-navy-800" /> : 
              <Sun className="h-[1.2rem] w-[1.2rem] text-navy-800" />
            }
            <Switch 
              checked={darkMode} 
              onCheckedChange={handleDarkModeToggle}
              className="scale-75" // Using className for styling instead of size prop
            />
          </div>
          <button 
            className="text-navy-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-navy-800 py-2 hover:text-teal-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
