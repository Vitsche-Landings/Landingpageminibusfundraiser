import image_cb6a1bebabe595b53e476332dcad15223dab579a from 'figma:asset/cb6a1bebabe595b53e476332dcad15223dab579a.png';
import svgPaths from "../imports/svg-e6lg38mun5";
import img02Ba1 from "figma:asset/dc2df5d8cb4464c8fa18fea7f2166eee21f3a09b.png";
import { useLanguage } from '../App';

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

function LogoGroup() {
  return (
    <div className="flex items-center gap-[20px]">
      <Vitsche />
      <div className="h-[19.768px] w-[19.768px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p112bd200} fill="#3232F9" />
        </svg>
      </div>
      <div className="h-[100px] relative w-[340px]">
        <img alt="TMR Logo" className="h-full w-auto object-contain" src={image_cb6a1bebabe595b53e476332dcad15223dab579a} />
      </div>
    </div>
  );
}

export function Navigation() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <nav className="bg-[#ffea7a] sticky top-0 w-full z-50">
      <div className="max-w-[1400px] mx-auto px-8 py-[30px] flex items-center justify-between">
        <LogoGroup />
        
        <div className="flex items-center gap-[24px]">
          {/* Language Switcher */}
          <div className="flex gap-[8px] items-center">
            <button
              onClick={() => setLanguage('de')}
              className={`font-['KyivType_Sans',sans-serif] text-[18px] px-[12px] py-[4px] rounded transition-all ${
                language === 'de' 
                  ? 'bg-[#3232f9] text-[#ffea7a]' 
                  : 'text-[#3232f9] hover:opacity-70'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`font-['KyivType_Sans',sans-serif] text-[18px] px-[12px] py-[4px] rounded transition-all ${
                language === 'en' 
                  ? 'bg-[#3232f9] text-[#ffea7a]' 
                  : 'text-[#3232f9] hover:opacity-70'
              }`}
            >
              EN
            </button>
          </div>
          
          <a 
            href="https://vitsche.org/donate/#donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3232f9] px-[32px] py-[8px] hover:opacity-90 transition-opacity"
          >
            <span className="font-['KyivType_Sans',sans-serif] text-[20px] text-[#ffea7a]">
              {language === 'de' ? 'Spenden' : 'Donate'}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
