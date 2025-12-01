import image_7b893aa377cc8e8e9eba56bfeae131edb1f44b84 from 'figma:asset/7b893aa377cc8e8e9eba56bfeae131edb1f44b84.png';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgMercedezBenz5306 from "figma:asset/9dff15388d360738156d5fc5efecafe1dc3504e9.png";
import tmrPhoto1 from 'figma:asset/27366be6f3770486be28fe6e7c9d557c6362f17a.png';
import tmrPhoto2 from 'figma:asset/6bf7662003228f658ae66d4d688a8faa7e53650c.png';
import tmrPhoto3 from 'figma:asset/3fc14e889a86ef08f322ee5f1ecbc347d1d182f3.png';
import { useLanguage } from '../App';
import { translations } from '../translations';

export function MinibusSection() {
  const { language } = useLanguage();
  const t = translations.minibusSection[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const busSlides = [
    {
      src: image_7b893aa377cc8e8e9eba56bfeae131edb1f44b84,
      alt: 'Minibus Vehicle'
    },
    {
      src: tmrPhoto1,
      alt: 'Humanitarian aid delivery in Ukraine'
    },
    {
      src: tmrPhoto2,
      alt: 'Team with aid supplies and dog'
    },
    {
      src: tmrPhoto3,
      alt: 'Community engagement in Ukraine'
    }
  ];
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % busSlides.length);
    }, 5000); // Changed from 4000 to 5000ms (5 seconds)
    
    return () => clearInterval(interval);
  }, [busSlides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % busSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + busSlides.length) % busSlides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-[60px] items-start">
          {/* Left: Text */}
          <div className="space-y-[32px]">
            <h2 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[42px]">
              {t.title}
            </h2>
            
            <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
              {t.intro}
            </p>
            
            <div>
              <h3 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[24px] mb-[16px]">
                {t.subtitle}
              </h3>
              
              <div className="space-y-[16px]">
                <div className="flex items-start gap-[16px]">
                  <div className="flex-shrink-0 w-[40px] h-[40px] bg-[#ffea7a] rounded-full flex items-center justify-center">
                    <span className="text-[24px]">🚐</span>
                  </div>
                  <div>
                    <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px]">
                      <strong>{t.item1Title}</strong> {t.item1Text}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[16px]">
                  <div className="flex-shrink-0 w-[40px] h-[40px] bg-[#ffea7a] rounded-full flex items-center justify-center">
                    <span className="text-[24px]">🏥</span>
                  </div>
                  <div>
                    <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px]">
                      <strong>{t.item2Title}</strong> {t.item2Text}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[16px]">
                  <div className="flex-shrink-0 w-[40px] h-[40px] bg-[#ffea7a] rounded-full flex items-center justify-center">
                    <span className="text-[24px]">🔌</span>
                  </div>
                  <div>
                    <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px]">
                      <strong>{t.item3Title}</strong> {t.item3Text}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[16px]">
                  <div className="flex-shrink-0 w-[40px] h-[40px] bg-[#ffea7a] rounded-full flex items-center justify-center">
                    <span className="text-[24px]">🍎</span>
                  </div>
                  <div>
                    <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px]">
                      <strong>{t.item4Title}</strong> {t.item4Text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#3232f9] p-[32px] rounded-lg">
              <h3 className="font-['KyivType_Sans',sans-serif] text-[#ffea7a] text-[24px] mb-[16px]">
                {t.routeTitle}
              </h3>
              <p className="font-['KyivType_Sans',sans-serif] text-white text-[20px]">
                <strong>{t.route}</strong>
              </p>
              <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] mt-[8px]">
                {t.routeText1}
              </p>
              <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] mt-[16px] italic">
                {t.routeText2}
              </p>
            </div>
          </div>
          
          {/* Right: Bus Image */}
          <div className="space-y-[24px]">
            <div className="relative">
              <img
                src={busSlides[currentSlide].src}
                alt={busSlides[currentSlide].alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} color="#3232f9" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={24} color="#3232f9" />
              </button>
              
              {/* Dot Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {busSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-[#3232f9] w-8' 
                        : 'bg-[#3232f9]/30 hover:bg-[#3232f9]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-[#ffea7a] p-[24px] rounded-lg">
              <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[16px] text-center">
                {t.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}