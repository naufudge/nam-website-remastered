import React from 'react';
import { Calendar } from "@/components/ui/calendar";

const HistoryToday = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        // <div className='w-screen h-screen overflow-hidden bg-blue-50 mx-auto'>
        <div className='w-fit mx-auto'>
        <h1 className="text-center text-xl font-semibold mb-2">Today in History</h1>
        <div className="mx-auto w-fit mb-8"><hr className='h-1 w-20 rounded-full bg-blue-900' /></div>
            <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"/>
        </div>
        // </div>
    )
}

export default HistoryToday
