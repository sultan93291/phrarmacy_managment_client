import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useSelector } from "react-redux";

const UserCalendar = ({ userBirthDate, onDateChange }) => {
  // Parse the incoming date string into a Date object
  const parseDate = (dateString) => {
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

  const loggedInUser = useSelector(
    (state) => state.loggedInuserSlice.loggedInUserData
  );
  const [date, setDate] = useState(
    parseDate(userBirthDate ? userBirthDate : loggedInUser.date_of_birth)
  );

  useEffect(() => {
    if (onDateChange) {
      onDateChange(date); // Notify parent about the selected date
    }
  }, [date, onDateChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal py-5 md:py-6 xl:py-6 2xl:py-8 text-base",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="pl-5">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
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
