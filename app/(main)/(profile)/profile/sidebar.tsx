import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SettingSidebar() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className="border-none">
        <Button variant={'outline'} className="justify-between py-6 w-full">
          Profile
        </Button>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'justify-between py-6'
          )}
        >
          Is it styled?
        </AccordionTrigger>
        <AccordionContent className="ps-4 pt-4 space-y-4">
          <Button variant={'outline'} className="w-full justify-start">
            Yes
          </Button>
          <Button variant={'outline'} className="w-full justify-start">
            No
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'justify-between py-6'
          )}
        >
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="ps-4 pt-4 space-y-4">
          <Button variant={'outline'} className="w-full justify-start">
            Yes
          </Button>
          <Button variant={'outline'} className="w-full justify-start">
            No
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
