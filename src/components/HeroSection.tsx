import image_c23e65e5991123a9bf68767e05ecb23dc556cbbf from 'figma:asset/c23e65e5991123a9bf68767e05ecb23dc556cbbf.png';
import image_96e0e38c8d26881474b626922c1fd6143864be86 from 'figma:asset/96e0e38c8d26881474b626922c1fd6143864be86.png';
import image_07c442a5eb49a9661b1701c05e5577ce4366f46f from 'figma:asset/07c442a5eb49a9661b1701c05e5577ce4366f46f.png';
import image_4bb53793aac0b760409c3b8ea697d8c2fb7dcf90 from 'figma:asset/4bb53793aac0b760409c3b8ea697d8c2fb7dcf90.png';
import image_d9370d203db73f0983d357a3652577148a7b3839 from 'figma:asset/d9370d203db73f0983d357a3652577148a7b3839.png';
import image_8f8d4748f9d15ab9d7a47f69bd18880e62060e9d from 'figma:asset/8f8d4748f9d15ab9d7a47f69bd18880e62060e9d.png';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../App';

export function HeroSection() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      src: image_4bb53793aac0b760409c3b8ea697d8c2fb7dcf90,
      alt: 'Humanitarian Bus'
    },
    {
      src: image_96e0e38c8d26881474b626922c1fd6143864be86,
      alt: 'Humanitarian Aid Workers'
    },
    {
      src: image_07c442a5eb49a9661b1701c05e5577ce4366f46f,
      alt: 'Medical Volunteers Team'
    },
    {
      src: image_c23e65e5991123a9bf68767e05ecb23dc556cbbf,
      alt: 'Relief Workers Community'
    }
  ];
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const content = {
    de: {
      headline: 'Ein humanitärer Minibus für Odesa–Mykolajiw–Cherson',
      subheadline: 'Wir sammeln 20.000 €, um Evakuierungen und lebenswichtige Hilfslieferungen im Süden der Ukraine zu sichern.',
      bullet1: 'täglich im Einsatz',
      bullet2: 'sichere Evakuierungen',
      bullet3: 'Versorgung entlegener Dörfer',
      button: 'Jetzt Spenden',
      link: 'Mehr über das Projekt erfahren',
      imageAlt: 'Humanitärer Bus'
    },
    en: {
      headline: 'A Humanitarian Minibus for Odesa–Mykolaiv–Kherson',
      subheadline: 'We are raising €20,000 to secure evacuations and vital aid deliveries in southern Ukraine.',
      bullet1: 'in operation daily',
      bullet2: 'safe evacuations',
      bullet3: 'supply to remote villages',
      button: 'Donate Now',
      link: 'Learn more about the project',
      imageAlt: 'Humanitarian Bus'
    }
  };
  
  const t = content[language];
  
  return (
    <section className="bg-[#3232f9] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-[60px] items-center">
          {/* Left: Text Content */}
          <div className="space-y-[24px]">
            <h1 className="font-['KyivType_Sans',sans-serif] text-white text-[40px] leading-[1.1]">
              {t.headline}
            </h1>
            
            <h2 className="font-['KyivType_Sans',sans-serif] text-white text-[20px] leading-[1.4] opacity-90">
              {t.subheadline}
            </h2>
            
            <div className="space-y-[12px] pt-[16px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#ffea7a]"></div>
                <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px]">{t.bullet1}</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#ffea7a]"></div>
                <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px]">{t.bullet2}</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#ffea7a]"></div>
                <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px]">{t.bullet3}</p>
              </div>
            </div>
            
            <div className="flex gap-[20px] items-center pt-[24px]">
              <a 
                href="https://vitsche.org/donate/#donate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffea7a] px-[40px] py-[14px] hover:opacity-90 transition-opacity"
              >
                <span className="font-['KyivType_Sans',sans-serif] text-[20px] text-[#3232f9] uppercase">{t.button}</span>
              </a>
              <a href="#info" className="font-['KyivType_Sans',sans-serif] text-white text-[18px] underline hover:opacity-70 transition-opacity">
                {t.link}
              </a>
            </div>
          </div>
          
          {/* Right: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[19px]">
              <ImageWithFallback
                src={heroSlides[currentSlide].src}
                alt={heroSlides[currentSlide].alt}
                className="w-full h-auto rounded-[19px]"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} color="#3232f9" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} color="#3232f9" />
              </button>
              
              {/* Dot Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-[#ffea7a] w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}