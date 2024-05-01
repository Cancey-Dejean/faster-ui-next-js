import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Item = {
  title: string;
  content: React.ReactNode;
};

export type AccordionBlockProps = {
  data: Item[];
};

export function AccordionBlock({ data }: AccordionBlockProps) {
  return (
    <Accordion type="single" collapsible className="flex w-full flex-col gap-2">
      {data &&
        data.map((item, i) => (
          <AccordionItem
            value={`item-${i}`}
            className=" rounded-[10px] border-0 bg-white [&[data-state=open]]:shadow-sm"
            key={i}
          >
            <AccordionTrigger className="px-6 py-6 text-[18px] font-bold hover:no-underline [&[data-state=open]]:!pb-4">
              <span>{item.title}</span>
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-4 [&_a]:font-bold [&_a]:text-[#2B2B2B]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
