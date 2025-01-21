import { HomeIcon, UserCircleIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const VerticalNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 h-full transition delay-900 w-16 flex flex-col items-center  py-20 shadow-lg
      ${isScrolled ? "text-black bg-transparent" : "bg-gradient-to-lr from-purple-600 to-purple-100 text-white"}
    `}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      <div className="space-y-8 relative z-20">
        {/* Home */}
        <a href="#home" className="flex flex-col items-center group">
        <Link to='/'>
          <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>

</div></Link>
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore
          </span>
        </a>

        {/* About */}
        <a href="#about" className="flex flex-col items-center group"><Link to='/Dashboard'>
          <div className="w-8 h-8  group-hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>

</div></Link>
          
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Dashboard
          </span>
        </a>

<a href="#services" className="flex flex-col items-center group">
<Link to='/Services'>        <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
</svg>


</div></Link><span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Create
          </span>
        </a>

        {/* Keeda */}
        <a href="https://github.com/GauravPawar101" rel='noreferrer' target='_blank' className="flex flex-col items-center group">
        <Link to=''>
        <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"><FaGithub className='text-2xl' />


</div></Link><span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Github
          </span>
        </a>

        {/* Contact */}
        <a href="#contact" className="flex flex-col items-center group">
        <Link to='/Contact'><div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

</div></Link><span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Contact
          </span>
        </a>
      </div>
    </nav>
  );
};

export default VerticalNav;
