import image_27366be6f3770486be28fe6e7c9d557c6362f17a from 'figma:asset/27366be6f3770486be28fe6e7c9d557c6362f17a.png';
import image_0e1a3e91855c3a5d312497729f27440afddb1400 from 'figma:asset/0e1a3e91855c3a5d312497729f27440afddb1400.png';
import image_8016ec1b088bfa24d64cb83e3b24ff4b08a8abe3 from 'figma:asset/8016ec1b088bfa24d64cb83e3b24ff4b08a8abe3.png';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../App';
import { translations } from '../translations';

export function InfoSection() {
  const { language } = useLanguage();
  const t = translations.infoSection[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const mapSlides = [
    {
      src: image_8016ec1b088bfa24d64cb83e3b24ff4b08a8abe3,
      alt: 'Ukraine Map'
    },
    {
      src: image_27366be6f3770486be28fe6e7c9d557c6362f17a,
      alt: 'Ukraine Regional Map'
    },
    {
      src: image_0e1a3e91855c3a5d312497729f27440afddb1400,
      alt: 'Regional Map'
    }
  ];
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mapSlides.length);
    }, 5000); // Changed from 4000 to 5000ms (5 seconds)
    
    return () => clearInterval(interval);
  }, [mapSlides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mapSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mapSlides.length) % mapSlides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <section id="info" className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[42px] mb-[40px] text-center">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-[60px] items-start">
          {/* Left: Text */}
          <div className="space-y-[24px]">
            <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
              {t.p1}
            </p>
            
            <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
              {t.p2}
            </p>
            
            <ul className="space-y-[12px] pl-[24px]">
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6] list-disc">
                {t.bullet1}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6] list-disc">
                {t.bullet2}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6] list-disc">
                {t.bullet3}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6] list-disc">
                {t.bullet4}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6] list-disc">
                {t.bullet5}
              </li>
            </ul>
            
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[20px] leading-[1.6] pt-[16px]">
              <strong>{t.highlight}</strong>
            </p>
            
            <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
              {t.p3}
            </p>
          </div>
          
          {/* Right: Map/Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src={mapSlides[currentSlide].src}
                alt={mapSlides[currentSlide].alt}
                className="w-full h-auto rounded-lg shadow-lg"
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
                {mapSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-[#3232f9] w-8' 
                        : 'bg-[#3232f9]/30 hover:bg-[#3232f9]/50'
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