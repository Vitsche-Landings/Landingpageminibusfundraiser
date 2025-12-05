import image_581c9b4d13761bc2265a87d0da60f619f78e1513 from 'figma:asset/581c9b4d13761bc2265a87d0da60f619f78e1513.png';
import svgPaths from "../imports/svg-e6lg38mun5";
import img02Ba1 from "figma:asset/dc2df5d8cb4464c8fa18fea7f2166eee21f3a09b.png";
import { useLanguage } from '../App';
import { translations } from '../translations';

function Vitsche() {
  return (
    <div className="h-[23.742px] relative w-[156.882px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 24">
        <g>
          <path d={svgPaths.pe149370} fill="#3232F9" />
          <path d={svgPaths.p2aac3d80} fill="#3232F9" />
          <path d={svgPaths.p61222c0} fill="#3232F9" />
          <path d={svgPaths.p18cfd380} fill="#3232F9" />
          <path d={svgPaths.p7a87b00} fill="#3232F9" />
          <path d={svgPaths.p24818f00} fill="#3232F9" />
          <path d={svgPaths.p19ba3e80} fill="#3232F9" />
        </g>
      </svg>
    </div>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const t = translations.footer[language];
  
  return (
    <footer className="bg-[#ffea7a] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-[60px] mb-[40px]">
          {/* Column 1: Logos */}
          <div className="space-y-[24px]">
            <Vitsche />
            <div className="flex items-center gap-[16px]">
              <div className="h-[20px] w-[20px] flex-shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p112bd200} fill="#3232F9" />
                </svg>
              </div>
              <div className="h-[40px] w-[140px]">
                <img alt="TMR Logo" className="h-full w-full object-contain object-left" src={image_581c9b4d13761bc2265a87d0da60f619f78e1513} />
              </div>
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[20px] mb-[16px]">
              {t.navTitle}
            </h3>
            <div className="space-y-[12px]">
              <a href="#info" className="block font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[16px] hover:underline">
                {t.info}
              </a>
              <a href="#faq" className="block font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[16px] hover:underline">
                {t.faq}
              </a>
            </div>
          </div>
          
          {/* Column 3: Social Media */}
          <div>
            <h3 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[20px] mb-[16px]">
              {t.socialTitle}
            </h3>
            <div className="space-y-[12px]">
              <a href="https://instagram.com/karstenfuhrken" target="_blank" rel="noopener noreferrer"
                 className="block font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[16px] hover:underline">
                Instagram @karstenfuhrken
              </a>
          
            </div>
          </div>
        </div>
        
        {/* Transparency Section - Full Width */}
        <div className="mb-[40px] bg-white/50 p-[24px] rounded-lg border-2 border-[#3232f9]">
          <h3 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[20px] mb-[12px]">
            {t.transparencyTitle}
          </h3>
          <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px] leading-[1.6] mb-[8px]">
            {t.transparency}
          </p>
          <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px] leading-[1.6]">
            {t.nonprofit}
          </p>
        </div>
        
        <div className="border-t-2 border-[#3232f9] pt-[24px] text-center">
          <p className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[14px]">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}