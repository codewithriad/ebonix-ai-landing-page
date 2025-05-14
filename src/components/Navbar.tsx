
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="py-6 md:py-8 relative z-20">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {theme === 'light' ? (
            <img src="/lovable-uploads/78d8ce93-f811-46b3-b085-fb0f153d6bce.png" alt="Ebonix" className="h-10" />
          ) : (
            <img src="/lovable-uploads/87abc730-fee0-47c5-8c7d-6136b234230e.png" alt="Ebonix" className="h-10" />
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="gradient-bg font-medium px-6">Get Started</Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button
            className="flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-background border-t border-ebonix-gray-medium transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <div className="container-custom flex flex-col space-y-6">
          <div className="flex flex-col space-y-3">
            <NavLinks />
          </div>
          <Button className="gradient-bg font-medium">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const { theme } = useTheme();
  const linkClass = theme === 'dark' ? 
    "text-ebonix-white hover:text-ebonix-purple-light transition-colors" : 
    "text-ebonix-black hover:text-ebonix-purple transition-colors";

  return (
    <>
      <a href="#features" className={linkClass}>Features</a>
      <a href="#pricing" className={linkClass}>Pricing</a>
      <a href="#about" className={linkClass}>About</a>
      <div className="relative group">
        <button className={`flex items-center ${linkClass}`}>
          Resources <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
