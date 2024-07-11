import React from 'react';
import { Calendar } from "@/components/ui/calendar";

const HistoryToday = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='w-fit mx-auto'>
        <h1 className="text-center text-2xl font-semibold mb-2">Today in History</h1>
        <div className="mx-auto w-fit mb-8"><hr className='h-1 w-24 rounded-full bg-blue-900' /></div>
            <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"/>
        </div>
    )
}

export default HistoryToday
