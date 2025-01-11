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

const UserCalendar = ({ userBirthDate }) => {
  const parseDate = dateString => {
    if (!dateString) {
      console.error("Invalid or missing date string");
      return new Date(); 
    }

    try {
      const [day, month, year] = dateString.split("/").map(Number); 
      return new Date(year, month - 1, day); 
    } catch (error) {
      console.error("Error parsing date string:", error);
      return new Date(); 
    }
  };
  const [date, setDate] = useState(parseDate(userBirthDate));
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
