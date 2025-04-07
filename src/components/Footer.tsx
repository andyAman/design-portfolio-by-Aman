
import { ArrowUpIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">Aman<span className="text-teal-500">.</span></a>
            <p className="mt-2 text-white/70 max-w-md">
              Creating beautiful digital experiences through design and development.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <nav className="flex gap-6">
              <a href="#home" className="text-white/80 hover:text-teal-500 transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-teal-500 transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-teal-500 transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-teal-500 transition-colors">Contact</a>
            </nav>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-teal-500 hover:bg-teal-600 rounded-full transition-colors self-center"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Aman. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            {['twitter', 'linkedin', 'dribbble', 'instagram'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-white/60 hover:text-teal-500 transition-colors"
                aria-label={`Follow on ${social}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {social === 'twitter' && (
                    <>
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </>
                  )}
                  {social === 'linkedin' && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </>
                  )}
                  {social === 'dribbble' && (
                    <>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </>
                  )}
                  {social === 'instagram' && (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </>
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
