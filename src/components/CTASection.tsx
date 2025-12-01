import { useLanguage } from '../App';
import { translations } from '../translations';

export function CTASection() {
  const { language } = useLanguage();
  const t = translations.ctaSection[language];
  
  return (
    <section className="bg-[#3232f9] py-[80px]">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        <h2 className="font-['KyivType_Sans',sans-serif] text-white text-[48px] leading-[1.2] mb-[32px]">
          {t.title}
        </h2>
        
        <a
          href="https://vitsche.org/donate/#donate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ffea7a] px-[60px] py-[18px] hover:opacity-90 transition-opacity"
        >
          <span className="font-['KyivType_Sans',sans-serif] text-[24px] text-[#3232f9] uppercase">
            {t.button}
          </span>
        </a>
        
        <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] mt-[32px] opacity-90">
          {t.subtitle}
        </p>
      </div>
    </section>
  );
}
