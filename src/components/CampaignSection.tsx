import svgPaths from "../imports/svg-e6lg38mun5";
import { useLanguage } from '../App';
import { translations } from '../translations';

function PuzzlePiece() {
  return (
    <div className="absolute opacity-20">
      <svg width="207" height="218" fill="none" preserveAspectRatio="none" viewBox="0 0 207 218">
        <path d={svgPaths.p246ce280} fill="#FFEA7A" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

export function CampaignSection() {
  const { language } = useLanguage();
  const t = translations.campaignSection[language];
  
  return (
    <section className="bg-[#3232f9] py-[80px] relative overflow-hidden">
      {/* Decorative puzzle pieces */}
      <PuzzlePiece />
      <div className="absolute right-0 top-1/4 opacity-20">
        <svg width="207" height="218" fill="none" preserveAspectRatio="none" viewBox="0 0 207 218">
          <path d={svgPaths.p246ce280} fill="#FFEA7A" fillOpacity="0.9" />
        </svg>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <h2 className="font-['KyivType_Sans',sans-serif] text-white text-[42px] mb-[40px] text-center">
          {t.title}
        </h2>
        
        <div className="space-y-[24px] max-w-[900px] mx-auto">
          <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] leading-[1.6]">
            {t.p1}
          </p>
          
          <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] leading-[1.6]">
            {t.p2}
          </p>
          
          <p className="font-['KyivType_Sans',sans-serif] text-white text-[18px] leading-[1.6]">
            {t.p3}
          </p>
          
          <div className="bg-[#ffea7a] p-[32px] rounded-lg mt-[40px]">
            <a 
              href="https://vitsche.org/donate/#donate"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[20px] text-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}