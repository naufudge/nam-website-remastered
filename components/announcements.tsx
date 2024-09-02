import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';

const Announcements = () => {
  return (
    <div className="py-10">
        <h1 className="text-center text-xl font-semibold mb-2">Announcements</h1>
        <div className="mx-auto w-fit mb-8"><hr className='h-1 w-20 rounded-full bg-blue-900' /></div>
        <div className="grid grid-cols-4 gap-10">
        <Card className="bg-gradient-to-b from-indigo-100 to-transparent drop-shadow-md">
            <CardHeader><CardTitle className="text-xl">Shaheedhunge Dhuvas 2024</CardTitle></CardHeader>
            <CardDescription className="px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia interdum rhoncus. Sed sed ultricies lacus.</CardDescription>
            <CardFooter className='mt-3 text-[#64748b]'><CalendarDays className='mr-2' color='#64748b' size={20} /><p className="text-sm">1 month ago</p></CardFooter>
        </Card>

        <Card className="bg-gradient-to-b from-indigo-100 to-transparent drop-shadow-md">
            <CardHeader><CardTitle className="text-xl">BeruFoiy</CardTitle></CardHeader>
            <CardDescription className="px-5 text-justify">A handbook of traditional Maldivian drumming for ceremonial occasions.</CardDescription>
            <CardFooter className='mt-3 text-[#64748b]'><CalendarDays className='mr-2' color='#64748b' size={20} /><p className="text-sm">1 month ago</p></CardFooter> 
        </Card>

        <Card className="bg-gradient-to-b from-indigo-100 to-transparent drop-shadow-md">
            <CardHeader><CardTitle className="text-xl">Colors of Maldivian Schools</CardTitle></CardHeader>
            <CardDescription className="px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia interdum rhoncus. Sed sed ultricies lacus.</CardDescription>
            <CardFooter className='mt-3 text-[#64748b]'><CalendarDays className='mr-2' color='#64748b' size={20} /><p className="text-sm">1 month ago</p></CardFooter>
        </Card>
        
        </div>
    </div>
  )
}

export default Announcements
