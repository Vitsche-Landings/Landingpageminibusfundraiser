import image_d0482c32eece11fd0a3e2c3e006a35b541c8be92 from 'figma:asset/d0482c32eece11fd0a3e2c3e006a35b541c8be92.png';
import image_6bf7662003228f658ae66d4d688a8faa7e53650c from 'figma:asset/6bf7662003228f658ae66d4d688a8faa7e53650c.png';
import image_8dd3635f569321d1db5ecb404d7c6aef0a425242 from 'figma:asset/8dd3635f569321d1db5ecb404d7c6aef0a425242.png';
import karstenAllaPhoto from 'figma:asset/11a4b6de3608267a49e51f4d5de3010a7fdfdff7.png';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image_c6447d82f90ff1dfd8094ff6d4757cfbd129f973 from 'figma:asset/c6447d82f90ff1dfd8094ff6d4757cfbd129f973.png';
import newPhoto1 from 'figma:asset/69eb80535972634c70a96126033bc6d507c901be.png';
import newPhoto2 from 'figma:asset/89386305d7b23b249aa5faa01e5d14efaaa582f5.png';
import newPhoto3 from 'figma:asset/58a5d91e13b1d33070e35a19ddfa12374975d140.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../App';
import { translations } from '../translations';

export function PartnerSection() {
  const { language } = useLanguage();
  const t = translations.partnerSection[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLinkedInSlide, setCurrentLinkedInSlide] = useState(0);
  
  const slides = [
    {
      src: image_d0482c32eece11fd0a3e2c3e006a35b541c8be92,
      alt: "TMR Team"
    },
    {
      src: newPhoto1,
      alt: "Volunteers working together"
    },
    {
      src: newPhoto2,
      alt: "Humanitarian aid workers"
    },
    {
      src: newPhoto3,
      alt: "Community helpers organizing"
    }
  ];
  
  const linkedInPosts = [
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7379500854925774849?collapsed=1",
      height: "895"
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275925178369413120?collapsed=1",
      height: "895"
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7274881784981405698?collapsed=1",
      height: "645"
    }
  ];
  
  // Auto-scroll photo slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Auto-scroll LinkedIn posts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLinkedInSlide((prev) => (prev + 1) % linkedInPosts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [linkedInPosts.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const nextLinkedInSlide = () => {
    setCurrentLinkedInSlide((prev) => (prev + 1) % linkedInPosts.length);
  };
  
  const prevLinkedInSlide = () => {
    setCurrentLinkedInSlide((prev) => (prev - 1 + linkedInPosts.length) % linkedInPosts.length);
  };
  
  const goToLinkedInSlide = (index: number) => {
    setCurrentLinkedInSlide(index);
  };
  
  return (
    <section className="bg-[#f5f5f5] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[42px] mb-[40px] text-center">
          {t.title}
        </h2>
        
        <div className="space-y-[32px] max-w-[900px] mx-auto">
          <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
            {t.p1}
          </p>
          
          <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
            {t.p2}
          </p>
          
          <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] leading-[1.6]">
            {t.p3}
          </p>
          
          {/* Partner Images Slideshow - moved up here */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="w-full h-[400px] object-cover transition-opacity duration-500"
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
            </div>
            
            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
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
          
          <div className="bg-white border-2 border-[#3232f9] p-[32px] rounded-lg">
            <h3 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[24px] mb-[16px]">
              {t.workTitle}
            </h3>
            <ul className="space-y-[12px] pl-[24px]">
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] list-disc">
                {t.work1}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] list-disc">
                {t.work2}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] list-disc">
                {t.work3}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] list-disc">
                {t.work4}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] list-disc">
                {t.work5}
              </li>
              <li className="font-['KyivType_Sans',sans-serif] text-[#333] text-[18px] list-disc">
                {t.work6}
              </li>
            </ul>
          </div>
          
          <div className="bg-[#3232f9] p-[32px] rounded-lg">
            <h3 className="font-['KyivType_Sans',sans-serif] text-[#ffea7a] text-[24px] mb-[16px]">
              {t.coordinatorTitle}
            </h3>
            <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] leading-[1.6]">
              {t.coordinator1}
            </p>
            <p className="font-['KyivType_Sans',sans-serif] text-white text-[20px] leading-[1.6] mt-[16px]">
              <strong>{t.coordinator1Highlight}</strong>
            </p>
            
            {/* Karsten and Alla Photo - moved inside coordinator box */}
            <div className="relative rounded-lg overflow-hidden shadow-lg mt-[24px]">
              <ImageWithFallback
                src={karstenAllaPhoto}
                alt="Karsten Fuhrken and Alla Ponomarchuk in front of humanitarian aid truck"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="font-['KyivType_Sans',sans-serif] text-white text-[16px]">
                  Karsten Fuhrken (TMR) und Alla Ponomarchuk (Tut i Zaraz Razom) vor einem Hilfsgütertransport
                </p>
              </div>
            </div>
            
            <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] leading-[1.6] mt-[24px]">
              {t.coordinator2}
            </p>
            <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] leading-[1.6] mt-[16px]">
              {t.coordinator3}
            </p>
          </div>
        </div>
        
        {/* LinkedIn Embedded Post */}
        <div className="mt-[60px] flex justify-center">
          <div className="w-full max-w-[504px] relative">
            <iframe 
              key={currentLinkedInSlide}
              src={linkedInPosts[currentLinkedInSlide].url} 
              height={linkedInPosts[currentLinkedInSlide].height} 
              width="504" 
              frameBorder="0" 
              allowFullScreen
              title={`Embedded LinkedIn post ${currentLinkedInSlide + 1}`}
              className="w-full rounded-lg shadow-lg"
            />
            
            {/* Navigation Arrows - Desktop */}
            <button
              onClick={prevLinkedInSlide}
              className="hidden md:block absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous LinkedIn post"
            >
              <ChevronLeft size={24} color="#3232f9" />
            </button>
            
            <button
              onClick={nextLinkedInSlide}
              className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Next LinkedIn post"
            >
              <ChevronRight size={24} color="#3232f9" />
            </button>
            
            {/* Navigation Arrows - Mobile (Inside iframe area) */}
            <button
              onClick={prevLinkedInSlide}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous LinkedIn post"
            >
              <ChevronLeft size={20} color="#3232f9" />
            </button>
            
            <button
              onClick={nextLinkedInSlide}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Next LinkedIn post"
            >
              <ChevronRight size={20} color="#3232f9" />
            </button>
          </div>
        </div>
        
        {/* Dot Navigation for LinkedIn */}
        <div className="flex justify-center gap-2 mt-6">
          {linkedInPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToLinkedInSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentLinkedInSlide === index 
                  ? 'bg-[#3232f9] w-8' 
                  : 'bg-[#3232f9]/30 hover:bg-[#3232f9]/50'
              }`}
              aria-label={`Go to LinkedIn post ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="space-y-[32px] max-w-[900px] mx-auto mt-[60px]">
          <div className="bg-[#ffea7a] p-[24px] rounded-lg">
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[16px] mb-[12px]">
              <strong>{t.instagram}</strong>
            </p>
            <div className="flex flex-wrap gap-[12px]">
              <a href="https://instagram.com/karstenfuhrken" target="_blank" rel="noopener noreferrer" 
                 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] hover:underline">
                @karstenfuhrken
              </a>
              <span className="font-['KyivType_Sans',sans-serif] text-[#3232f9]">•</span>
              <a href="https://www.instagram.com/go_tut_i_zaraz_razom" target="_blank" rel="noopener noreferrer" 
                 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] hover:underline">
                @go_tut_i_zaraz_razom ({t.allaInstagram})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}