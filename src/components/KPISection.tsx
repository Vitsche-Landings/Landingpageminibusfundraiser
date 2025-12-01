import { useLanguage } from '../App';

export function KPISection() {
  const { language } = useLanguage();
  
  const content = {
    de: {
      raised: 'gesammelt in den ersten Tagen',
      goal: 'Ziel',
      avgDonation: 'durchschnittliche Spende',
      smallestDonation: 'Kleinstspende',
      largestDonation: 'größte Spende',
      footer: 'Ihre Unterstützung hält humanitäre Routen offen.'
    },
    en: {
      raised: 'raised in the first days',
      goal: 'Goal',
      avgDonation: 'average donation',
      smallestDonation: 'smallest donation',
      largestDonation: 'largest donation',
      footer: 'Your support keeps humanitarian routes open.'
    }
  };
  
  const t = content[language];
  
  return (
    <section className="bg-[#ffea7a] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-8">
        
        {/* Grid of Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
          <div className="bg-white border-2 border-[#3232f9] p-[16px] md:p-[32px] text-center">
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[28px] md:text-[42px] leading-[1.1] mb-[8px] whitespace-nowrap">
              20.000€
            </p>
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px] md:text-[16px]">
              {t.goal}
            </p>
          </div>
          
          <div className="bg-white border-2 border-[#3232f9] p-[16px] md:p-[32px] text-center">
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[28px] md:text-[42px] leading-[1.1] mb-[8px] whitespace-nowrap">
              75€
            </p>
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px] md:text-[16px]">
              {t.avgDonation}
            </p>
          </div>
          
          <div className="bg-white border-2 border-[#3232f9] p-[16px] md:p-[32px] text-center">
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[28px] md:text-[42px] leading-[1.1] mb-[8px] whitespace-nowrap">
              4€
            </p>
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px] md:text-[16px]">
              {t.smallestDonation}
            </p>
          </div>
          
          <div className="bg-white border-2 border-[#3232f9] p-[16px] md:p-[32px] text-center">
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[28px] md:text-[42px] leading-[1.1] mb-[8px] whitespace-nowrap">
              1.500€
            </p>
            <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px] md:text-[16px]">
              {t.largestDonation}
            </p>
          </div>
        </div>
        
        <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[18px] text-center mt-[32px] italic">
          {t.footer}
        </p>
      </div>
    </section>
  );
}