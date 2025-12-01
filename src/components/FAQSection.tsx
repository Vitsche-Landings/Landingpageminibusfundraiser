import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { translations } from '../translations';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white border-2 border-[#3232f9] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-[32px] py-[24px] flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[18px] text-left">
          {question}
        </span>
        <ChevronDown 
          className={`flex-shrink-0 ml-[16px] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={24}
          color="#3232f9"
        />
      </button>
      
      {isOpen && (
        <div className="px-[32px] pb-[24px]">
          <p className="font-['KyivType_Sans',sans-serif] text-[#333] text-[16px] leading-[1.6]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const { language } = useLanguage();
  const t = translations.faqSection[language];
  
  return (
    <section id="faq" className="bg-white py-[80px]">
      <div className="max-w-[900px] mx-auto px-8">
        <h2 className="font-['KyivType_Sans',sans-serif] text-[#3232f9] text-[42px] mb-[40px] text-center">
          {t.title}
        </h2>
        
        <div className="space-y-[16px]">
          {t.faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
