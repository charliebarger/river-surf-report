import {
  AccordionItem as Item,
  AccordionItemProps,
} from '@szhsin/react-accordion';
import ChevronSVG from '@/assets/images/chevron-up.svg';

// must be wrapped in an accordian component from @szhsin/react-accordion
export function AccordionItem({ header, ...rest }: AccordionItemProps) {
  return (
    <Item
      {...rest}
      className={'overflow-hidden rounded'}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <ChevronSVG
            className={`ml-auto transition-transform duration-200 ease-out  ${
              isEnter && 'rotate-180'
            }`}
          />
        </>
      )}
      buttonProps={{
        className: ({ isEnter }) =>
          `bg-primaryColor text-white text-lg font-bold flex items-center w-full p-4 text-left ${
            isEnter && 'bg-[#0daadc]'
          }`,
      }}
      contentProps={{
        className: `transition-height duration-200 ease-out `,
      }}
      panelProps={{ className: '   flex flex-col gap-[2px] bg-slate-200 ' }}
    />
  );
}
