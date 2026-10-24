import React from 'react';
import { useState } from 'react';
import arrow from '../assets/img/arr-back.png';


export default function Renderer({ block }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const miniMarkdown = (text) => {
    if (typeof text != 'string') return text;

    const rules = [
      '\\*\\*\\*.*?\\*\\*\\*', // 3 asteriskes = bold + italic
      '\\*\\*.*?\\*\\*',       // 2 asteriskes = bold
      '\\*.*?\\*',             // 1 asterisk = italic
      '\\`.*?\\`',             // 1 backtick = in-line dose
      '\\==.*?\\=='            // 2 equals = important
    ];
    const regex = new RegExp(`(${rules.join('|')})`, 'g');
    const parts = text.split(regex)

    return parts.map((part, index) => {
      if (part.startsWith('***') && part.endsWith('***')) {
        const formatedValue = part.slice(3, -3);
        return (
          <span key={index} className="font-bold italic">
            {formatedValue}
          </span>
        )
      }

      if (part.startsWith('**') && part.endsWith('**')) {
        const formatedValue = part.slice(2, -2);
        return (
          <span key={index} className="font-bold">
            {formatedValue}
          </span>
        )
      }

      if (part.startsWith('*') && part.endsWith('*')) {
        const formatedValue = part.slice(1, -1);
        return (
          <span key={index} className="italic">
            {formatedValue}
          </span>
        )
      }

      if (part.startsWith('`') && part.endsWith('`')) {
        const formatedValue = part.slice(1, -1);
        return (
          <span key={index} className="inline-block italic font-medium p-[3px_10px_3px_8px] md:p-[5px_12px_5px_8px] rounded-[8px] bg-[#DCE8F0] text-[#123A54]">
            {formatedValue}
          </span>
        )
      }

      if (part.startsWith('==') && part.endsWith('==')) {
        const formatedValue = part.slice(2, -2);
        return (
          <span key={index} className="inline-block text-center p-[3px_5px] md:p-[2px_10px_2px_8px] rounded-[8px] bg-[#F8D2D2] text-[#6B2A2A]">
            {formatedValue}
          </span>
        )
      }

      return part;
    })
  };

  const RenderList = (({ listData }) => {
    const Tag = listData.type;

    return (
      <Tag className={`${listData.type === 'ol' ? "ol-list" : "ul-list"} w-full px-[15px] md:px-[30px] font-roboto text-xs md:text-base leading-tight md:leading-snug text-[#0D4764]`}>
        {listData.content.map((item, index) => (
          <li key={index}>
            { miniMarkdown(item.text) }

            {item.sublist && (
              <RenderList listData={item.sublist} />
            )}
          </li>
        ))}
      </Tag>
    )
  })


  if (!block) return (null);

  switch (block.type) {
    case 'conditions':
      return (
        <div className="self-start flex flex-col justify-start items-start gap-2 w-[95%] p-[10px_15px] rounded-[10px] bg-[#E8F4FB] shadow-[0_2px_6px_rgba(26,74,107,0.3)]">
          <div className="flex justify-start items-center gap-2 w-full">
            <h2 className="text-left font-roboto font-bold text-sm md:text-base leading-tight md:leading-snug text-[#0D4764]">
              Параметры процедуры
            </h2>
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-[9px] h-[9px] md:w-[10px] md:h-[10px]"
            >
              <img
                src={arrow}
                alt=""
                className={`transition-all duration-300 ${
                  isCollapsed ? "-rotate-90" : "-rotate-180"
                }`}
              />
            </button>
          </div>

          {isCollapsed && block.content.map((item, index) => (
            <div
              key={index}
              className={`flex flex-wrap gap-x-2 gap-y-1 m-[3px_0_0_5px] overflow-hidden transition-all duration-300 ${
                isCollapsed
                  ? "max-h-fit opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h3 className="w-full text-left font-roboto font-bold text-xs md:text-sm leading-tight md:leading-snug text-[#0D4764]">
                {item.title}
              </h3>
              <div className="border-l-[2px] border-[#7EC8E3]">

                {item.text && (
                  <p className="w-[90%] pl-[10px] text-left font-roboto text-xs md:text-sm leading-tight md:leading-snug text-[#0D4764]">
                    { miniMarkdown(item.text) }
                  </p>
                )}

                {item.list && (
                  <RenderList listData={item.list} />
                )}
              </div>
            </div>
          ))}
        </div>
      );

    case 'warning':
      return (
        <p className="mt-[10px] p-[8px_10px] md:p-[10px_50px] w-fit rounded-[8px] bg-[#F8D2D2] text-center font-roboto text-xs md:text-base leading-tight md:leading-snug text-[#6B2A2A] shadow-[0_2px_6px_rgba(26,74,107,0.3)]">
          <span className="font-medium text-[#8B2E2E]">Важно:</span> { miniMarkdown(block.text) }
        </p>
      );

    case 'text':
      return (
        <p className="mt-[10px] w-full text-left font-roboto text-xs md:text-base leading-tight md:leading-snug text-[#0D4764]">
          { miniMarkdown(block.text) }
        </p>
      );

    case 'img':
      return (
        <img
          src={`${import.meta.env.BASE_URL}${block.src}`}
          alt={block.alt}
          className="w-[90%] md:w-[70%] lg:w-[50%]"
        />
      );

    case 'ul':
    case 'ol':
      return <RenderList listData={block} />
  }
}