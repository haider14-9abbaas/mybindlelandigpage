import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import AboutApp from './components/AboutApp';
import InstallApp from './components/InstallApp';
import DonateSection from './components/DonateSection';
import UserReviews from './components/UserReviews';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const fullText = 'MY BINDLE';

  useEffect(() => {
    const handleLoad = () => {
     
      setTimeout(() => setIsLoading(false), 2500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex items-center justify-center bg-white z-50 fixed top-0 left-0">
          <h1 className="text-4xl font-bold text-[#ff5349] font-mono tracking-widest">
            {fullText.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-char-reveal"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {char}
              </span>
            ))}
            <span className="inline-block animate-dots ml-1">...</span>
          </h1>
        </div>
      ) : (
        <>
          <Header />
          <HeroSection />
          <Features />
          <AboutApp />
          <InstallApp />
          <DonateSection />
          <UserReviews />
          <Footer />
        </>
      )}
      <style>{`@keyframes charReveal {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
}

.animate-char-reveal {
  animation: infinite charReveal 1s ease-out forwards; 
  opacity: 0; 
}

@keyframes dots {
  0%, 20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-dots {
  animation: dots 1.5s infinite alternate;
}`}</style>
    </>
  );
}

export default App;