import svgPaths from "./svg-hv8ld8lnft";
import img02Ba1 from "figma:asset/dc2df5d8cb4464c8fa18fea7f2166eee21f3a09b.png";
import imgMercedezBenz5306 from "figma:asset/9dff15388d360738156d5fc5efecafe1dc3504e9.png";
import imgPicPeterWittkampBg1 from "figma:asset/e07dca98ee6b2d0e49a581e24f888b3bb482f958.png";
import imgEnnoLenzeBg2 from "figma:asset/4362dda8e9c95fc547f6bd8f44fabcf2df6cb1da.png";
import img2PicFranDaviesBg051 from "figma:asset/4735f4c917fe49cd44fbbfa790541b00723f7870.png";
import imgFrankBg3 from "figma:asset/7f39019f7b8c499b1e8360366bc13f206b52bd18.png";
import imgPicChrisHagemannBg2 from "figma:asset/4459cf17707610f954e9ba7423171c6f25a240d0.png";
import imgPicRebeccaHarmsBg3 from "figma:asset/33c66c9dab81ddd5cdcb502bee045bf0964386b8.png";
import imgTillMayerBg2 from "figma:asset/55a7c8642d8b1bd225ad33c30111f9edb514779a.png";
import imgPicSimonVautBg2 from "figma:asset/f2d5d2a117dccf40da81bb47182b9a03455010c8.png";
import imgPatrickHeinemannPvD52 from "figma:asset/03b7a725df991dd95a5f57a20ad2cf5e8fddd374.png";
import imgFabianHoffmannBg2 from "figma:asset/82602265a39937a5e6328f57fc6afe3a89a91eb3.png";
import img4297825409541543193783845367743314291521762N2 from "figma:asset/367f0017a12d43cccda95a2c97b6a5ab09b3a2ce.png";
import { imgMercedezBenz05305, imgMercedezBenz05304, imgEnnoLenzeBg1, imgFrankBg2, imgPicChrisHagemannBg1, imgPicRebeccaHarmsBg2, imgTillMayerBg1, imgPicSimonVautBg1, imgPatrickHeinemannPvD51, imgFabianHoffmannBg1, img4297825409541543193783845367743314291521762N1 } from "./svg-pmibh";

function Notch() {
  return <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Notch" />;
}

function NetworkSignalLight() {
  return (
    <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Network Signal /Â Light">
          <path clipRule="evenodd" d={svgPaths.p1f162900} fill="var(--fill-0, #D1D1D6)" fillRule="evenodd" id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1d5dbe40} fill="var(--fill-0, #D1D1D6)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p18019e00} fill="var(--fill-0, #D1D1D6)" fillRule="evenodd" id="Path_3" />
          <path clipRule="evenodd" d={svgPaths.p342c3400} fill="var(--fill-0, #3C3C43)" fillOpacity="0.18" fillRule="evenodd" id="Empty Bar" />
          <path clipRule="evenodd" d={svgPaths.p1f162900} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_4" />
          <path clipRule="evenodd" d={svgPaths.p1d5dbe40} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_5" />
          <path clipRule="evenodd" d={svgPaths.p18019e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_6" />
        </g>
      </svg>
    </div>
  );
}

function WiFiSignalLight() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="WiFi Signal / Light">
          <path d={svgPaths.p3dc48e00} fill="var(--fill-0, black)" id="Path" />
          <path d={svgPaths.p3b3c95f0} fill="var(--fill-0, black)" id="Path_2" />
          <path d={svgPaths.p932c700} fill="var(--fill-0, black)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function BatteryLight() {
  return (
    <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 14">
        <g id="Battery / Light">
          <path d={svgPaths.p5709d00} fill="var(--fill-0, #3C3C43)" fillOpacity="0.6" id="Rectangle 23" />
          <path clipRule="evenodd" d={svgPaths.p2587880} fill="var(--fill-0, #3C3C43)" fillOpacity="0.6" fillRule="evenodd" id="Rectangle 21 (Stroke)" />
          <rect fill="var(--fill-0, black)" height="8" id="Rectangle 20" rx="1" width="19" x="2" y="3" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center right-[27px] top-[16px]" data-name="Status Icons">
      <NetworkSignalLight />
      <WiFiSignalLight />
      <BatteryLight />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute right-[71px] size-[6px] top-[8px]" data-name="Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Indicator"></g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[15px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 15">
        <g id="9:41">
          <g id="9:41_2">
            <path d={svgPaths.p309cf100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1285b880} fill="var(--fill-0, black)" />
            <path d={svgPaths.pa9bea00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1d3f77f0} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TimeLight() {
  return (
    <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Time / Light">
      <Component />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[44px] ml-0 mt-0 overflow-clip relative w-[390px]" data-name="Status Bar">
      <Notch />
      <StatusIcons />
      <Indicator />
      <TimeLight />
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <StatusBar />
    </div>
  );
}

function UAverstarkerIn() {
  return (
    <div className="h-[18.529px] relative shrink-0 w-[180px]" data-name="UAverstärker_in 2.0:">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 19">
        <g id="UAverstÃ¤rker_in 2.0:">
          <path d={svgPaths.p22ef8880} fill="var(--fill-0, #3232F9)" id="Vector" />
          <path d={svgPaths.p349c0b00} fill="var(--fill-0, #3232F9)" id="Vector_2" />
          <path d={svgPaths.p1bfe9d00} fill="var(--fill-0, #3232F9)" id="Vector_3" />
          <path d={svgPaths.p3ef14f00} fill="var(--fill-0, #3232F9)" id="Vector_4" />
          <path d={svgPaths.p25e83100} fill="var(--fill-0, #3232F9)" id="Vector_5" />
          <path d={svgPaths.p3281aa00} fill="var(--fill-0, #3232F9)" id="Vector_6" />
          <path d={svgPaths.p36a84a80} fill="var(--fill-0, #3232F9)" id="Vector_7" />
          <path d={svgPaths.p8f9a400} fill="var(--fill-0, #3232F9)" id="Vector_8" />
          <path d={svgPaths.pc985bc0} fill="var(--fill-0, #3232F9)" id="Vector_9" />
          <path d={svgPaths.p2f815b00} fill="var(--fill-0, #3232F9)" id="Vector_10" />
          <path d={svgPaths.p27c49a00} fill="var(--fill-0, #3232F9)" id="Vector_11" />
          <path d={svgPaths.p1d353300} fill="var(--fill-0, #3232F9)" id="Vector_12" />
          <path d={svgPaths.p3c209120} fill="var(--fill-0, #3232F9)" id="Vector_13" />
          <path d={svgPaths.p2fbdd600} fill="var(--fill-0, #3232F9)" id="Vector_14" />
          <path d={svgPaths.p38bb0280} fill="var(--fill-0, #3232F9)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#3232f9] box-border content-stretch flex gap-[10px] items-start px-[22px] py-[8px] relative shrink-0">
      <p className="font-['KyivType_Sans:Black',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#ffea7a] text-[20px] text-nowrap whitespace-pre">Spenden</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[37px] items-end relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ffea7a] h-[80px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[20px] py-[30px] relative w-full">
          <UAverstarkerIn />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Vitsche() {
  return (
    <div className="[grid-area:1_/_1] h-[18.363px] ml-0 mt-[3.87px] relative w-[121.336px]" data-name="Vitsche">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 19">
        <g id="Vitsche">
          <path d={svgPaths.p205be530} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1ab4daf0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p20621480} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p29fd6980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p53258b0} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pe6e9200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2f183100} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Vitsche />
      <div className="[grid-area:1_/_1] ml-[137.16px] mt-[5.41px] relative size-[15.289px]" data-name="+">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3d2ce900} fill="var(--fill-0, white)" id="+" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[25.523px] ml-[168.44px] mt-0 relative w-[87.564px]" data-name="02_BA 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.7%] left-[-1.34%] max-w-none top-0 w-[102.67%]" src={img02Ba1} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[251.651px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23.594px_10.111px] mask-size-[361px_84.258px] ml-[-23.59px] mt-[-10.11px] relative w-[503.677px]" data-name="mercedez benz 0530 5" style={{ maskImage: `url('${imgMercedezBenz05305}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMercedezBenz5306} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[259.14px] mt-[61.04px] place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[251.651px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[282.734px_70.777px] mask-size-[30.332px_30.333px] ml-[-282.73px] mt-[-70.78px] relative w-[503.677px]" data-name="mercedez benz 0530 4" style={{ maskImage: `url('${imgMercedezBenz05304}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMercedezBenz5306} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[89.88px] mt-[61.04px] place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[251.651px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[282.734px_70.777px] mask-size-[30.332px_30.333px] ml-[-282.73px] mt-[-70.78px] relative w-[503.677px]" data-name="mercedez benz 0530 4" style={{ maskImage: `url('${imgMercedezBenz05304}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMercedezBenz5306} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] ml-[306.6px] mt-[37.83px] relative size-[9.08px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group 14">
          <circle cx="4.53986" cy="4.53986" fill="var(--fill-0, white)" id="Ellipse 3" r="4.53986" />
          <path d={svgPaths.p143384f0} fill="var(--fill-0, #FF3600)" id="+" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] ml-[328.3px] mt-[37.83px] relative size-[9.08px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group 15">
          <circle cx="4.53986" cy="4.53986" fill="var(--fill-0, white)" id="Ellipse 3" r="4.53986" />
          <path d={svgPaths.p2f3c2880} fill="var(--fill-0, #FF3600)" id="+" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] ml-[137.1px] mt-[37.83px] relative size-[9.08px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group 14">
          <circle cx="4.53986" cy="4.53986" fill="var(--fill-0, white)" id="Ellipse 3" r="4.53986" />
          <path d={svgPaths.p2339b900} fill="var(--fill-0, #FF3600)" id="+" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] ml-[158.8px] mt-[37.83px] relative size-[9.08px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group 15">
          <circle cx="4.53986" cy="4.53986" fill="var(--fill-0, white)" id="Ellipse 3" r="4.53986" />
          <path d={svgPaths.p1162300} fill="var(--fill-0, #FF3600)" id="+" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group12 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.65px] mt-[7.95px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[43.856px] ml-0 mt-0 relative w-[35.095px]" data-name="pic_Peter Wittkamp_BG 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPicPeterWittkampBg1} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[1.08px] mt-[1.19px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[47.786px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.086px_-1.193px] mask-size-[39.324px_39.379px] ml-0 mt-0 relative w-[39.487px]" data-name="Enno Lenze_BG 1" style={{ maskImage: `url('${imgEnnoLenzeBg1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEnnoLenzeBg2} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[59.75px] mt-[12.35px] place-items-start relative" data-name="Mask group">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[38.141px] ml-0 mt-0 relative w-[44.163px]" data-name="2_pic_Fran_Davies_BG_05 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2PicFranDaviesBg051} />
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[77.04px] mt-[13.61px] place-items-start relative">
      <Group8 />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[175.47px] mt-[13.93px] place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[64.834px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.613px_1.757px] mask-size-[36.164px_38.364px] ml-[-7.61px] mt-[-1.76px] relative w-[42.414px]" data-name="Frank_BG 2" style={{ maskImage: `url('${imgFrankBg2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrankBg3} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[-10.77px] mt-[-4.27px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[50.418px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.77px_4.268px] mask-size-[32.074px_39.307px] ml-0 mt-0 relative w-[39.614px]" data-name="Pic_Chris_Hagemann_BG 1" style={{ maskImage: `url('${imgPicChrisHagemannBg1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPicChrisHagemannBg2} />
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[34.59px] mt-[12.35px] place-items-start relative" data-name="Mask group">
      <Group6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[0.11px] mt-[0.24px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[54.951px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.113px_-0.237px] mask-size-[39.047px_38.166px] ml-0 mt-0 relative w-[38.742px]" data-name="Pic_Rebecca_Harms_BG 2" style={{ maskImage: `url('${imgPicRebeccaHarmsBg2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPicRebeccaHarmsBg3} />
      </div>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[188.36px] mt-[14.24px] place-items-start relative" data-name="Mask group">
      <Group9 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[-3.2px] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.199px_0px] mask-size-[41.758px_39.585px] ml-0 mt-0 relative size-[44.715px]" data-name="Till Mayer_BG 1" style={{ maskImage: `url('${imgTillMayerBg1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTillMayerBg2} />
      </div>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[206.6px] mt-[12.67px] place-items-start relative" data-name="Mask group">
      <Group13 />
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[2.16px] mt-[-1.67px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[46.632px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.156px_1.665px] mask-size-[32.391px_40.88px] ml-0 mt-0 relative w-[47.153px]" data-name="pic_Simon_Vaut_BG 1" style={{ maskImage: `url('${imgPicSimonVautBg1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPicSimonVautBg2} />
      </div>
    </div>
  );
}

function MaskGroup8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[266.66px] mt-[11.41px] place-items-start relative" data-name="Mask group">
      <Group17 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[2.72px] mt-[1.4px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[54.715px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.723px_-1.404px] mask-size-[40.105px_40.881px] ml-0 mt-0 relative w-[36.739px]" data-name="PatrickHeinemann_PvD-5 1" style={{ maskImage: `url('${imgPatrickHeinemannPvD51}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.3%] left-[-11.53%] max-w-none top-[-12.3%] w-[111.56%]" src={imgPatrickHeinemannPvD52} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[39.31px] mt-[10.78px] place-items-start relative" data-name="Mask group">
      <Group5 />
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[-3.43px] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.434px_0px] mask-size-[44.352px_39.64px] ml-0 mt-0 relative size-[50.273px]" data-name="Fabian Hoffmann_BG 1" style={{ maskImage: `url('${imgFabianHoffmannBg1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFabianHoffmannBg2} />
      </div>
    </div>
  );
}

function MaskGroup10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[249.68px] mt-[12.67px] place-items-start relative" data-name="Mask group">
      <Group11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[0.03px] place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[41.116px] items-center justify-center ml-0 mt-0 relative w-[46.131px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[41.116px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.002px_-0.029px] mask-size-[46.133px_37.778px] relative w-[46.131px]" data-name="429782540_954154319378384_5367743314291521762_n 1" style={{ maskImage: `url('${img4297825409541543193783845367743314291521762N1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.77%] left-[-0.05%] max-w-none top-0 w-[100.11%]" src={img4297825409541543193783845367743314291521762N2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[224.21px] mt-[14.56px] place-items-start relative" data-name="Mask group">
      <Group10 />
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group14 />
      <Group15 />
      <MaskGroup3 />
      <Group16 />
      <MaskGroup4 />
      <MaskGroup5 />
      <MaskGroup6 />
      <MaskGroup7 />
      <MaskGroup8 />
      <MaskGroup9 />
      <MaskGroup10 />
      <MaskGroup11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[251px] items-center relative shrink-0 w-full">
      <Group />
      <Group18 />
      <p className="font-['KyivType_Sans:Medium',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white w-[min-content]">Wir sammeln 30.000 Euro für einen großen medizinischen Bus für das Krankenhaus an der Front im Osten der Ukraine zu sammeln.</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[99.177px] items-center justify-center ml-[31.91px] mt-[6.5px] relative w-[231.59px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[99.177px] relative w-[231.59px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 100">
              <path d={svgPaths.p21e59bf0} fill="var(--fill-0, #FFEA7A)" id="Vector 16" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[101.469px] items-center justify-center ml-[27px] mt-0 relative w-[230.5px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[101.469px] relative w-[230.5px]">
            <div className="absolute inset-[-3.2%_-0.43%_-0.99%_-0.43%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 233 106">
                <path d={svgPaths.p3f5e33f0} fill="var(--fill-0, white)" id="Vector 17" stroke="var(--stroke-0, #1743E1)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-[18.5px] relative w-[238px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['KyivType_Sans:Heavy',sans-serif] leading-[1.1] not-italic relative text-[#3232f9] text-[18px] w-[238px]">Vielen Dank für Ihre Unterstützung!</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ffea7a] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[36px] items-center justify-center leading-[1.2] not-italic px-[50px] py-[20px] relative text-[#1743e1] w-full">
          <p className="font-['KyivType_Sans:Black',sans-serif] relative shrink-0 text-[32px] text-center text-nowrap uppercase whitespace-pre">34866,14€</p>
          <p className="font-['KyivType_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-[108px]">gesammelt in 2 Tagen</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center leading-[1.2] not-italic p-[10px] relative size-full text-[#1743e1] text-center">
          <p className="font-['KyivType_Sans:Black',sans-serif] min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]">460</p>
          <p className="font-['KyivType_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-[117px]">Gesamtzahl der Spender</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center not-italic p-[10px] relative size-full text-[#1743e1] text-center">
          <p className="font-['KyivType_Sans:Black',sans-serif] leading-[1.2] relative shrink-0 text-[24px] uppercase w-full">75,79€</p>
          <div className="font-['KyivType_Sans:Bold',sans-serif] leading-[1.2] relative shrink-0 text-[16px] w-full">
            <p className="mb-0">durchschnittliche</p>
            <p>Spende</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] h-[96px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center leading-[1.2] not-italic p-[10px] relative size-full text-[#1743e1] text-center">
          <p className="font-['KyivType_Sans:Black',sans-serif] min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]">1€</p>
          <p className="font-['KyivType_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-[151px]">Kleinstspende</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center leading-[1.2] not-italic p-[10px] relative size-full text-[#1743e1] text-center">
          <p className="font-['KyivType_Sans:Black',sans-serif] relative shrink-0 text-[24px] uppercase w-full">2 000€</p>
          <p className="font-['KyivType_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-full">größte Spende</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] h-[83px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-start mb-[-12px] relative shrink-0 w-full z-[1]">
      <Frame5 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col isolate items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full">
      <div className="flex items-center justify-center leading-[0] mb-[-12px] relative shrink-0 z-[2]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group19 />
        </div>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[35px] items-center left-0 px-[20px] py-0 top-[24px] w-[393px]">
      <Frame />
      <Frame15 />
    </div>
  );
}

function IPhone() {
  return (
    <div className="bg-[#3232f9] h-[772px] overflow-clip relative shrink-0 w-full" data-name="iPhone 16 - 1">
      <Frame10 />
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Group20 />
      <Frame4 />
      <IPhone />
    </div>
  );
}