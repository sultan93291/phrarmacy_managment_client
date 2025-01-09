import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { useState } from 'react';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';

const UserCalendar = () => {
  const [date, setDate] = useState(Date());
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            ' w-full justify-start text-left font-normal py-8 text-base ',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span className='pl-5'>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto  ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default UserCalendar;
