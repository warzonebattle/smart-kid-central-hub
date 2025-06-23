
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, User, MapPin, Calendar } from 'lucide-react';

const timetableData = {
  student: {
    name: 'Arjun Sharma',
    class: '8th Grade',
    section: 'A'
  },
  schedule: {
    Monday: [
      { time: '08:00-08:45', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: '201' },
      { time: '08:45-09:30', subject: 'English', teacher: 'Mr. Rajesh Kumar', room: '105' },
      { time: '09:30-09:45', subject: 'Break', teacher: '', room: '' },
      { time: '09:45-10:30', subject: 'Hindi', teacher: 'Mrs. Sunita Gupta', room: '203' },
      { time: '10:30-11:15', subject: 'Science', teacher: 'Mrs. Kavitha Reddy', room: '301' },
      { time: '11:15-12:00', subject: 'Social Studies', teacher: 'Mr. Amit Verma', room: '204' },
      { time: '12:00-12:45', subject: 'Lunch Break', teacher: '', room: '' },
      { time: '12:45-13:30', subject: 'Computer Science', teacher: 'Mrs. Neha Agarwal', room: '401' },
      { time: '13:30-14:15', subject: 'Physical Education', teacher: 'Mr. Ravi Singh', room: 'Playground' }
    ],
    Tuesday: [
      { time: '08:00-08:45', subject: 'Science', teacher: 'Mrs. Kavitha Reddy', room: '301' },
      { time: '08:45-09:30', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: '201' },
      {

 time: '09:30-09:45', subject: 'Break', teacher: '', room: '' },
      { time: '09:45-10:30', subject: 'English', teacher: 'Mr. Rajesh Kumar', room: '105' },
      { time: '10:30-11:15', subject: 'Hindi', teacher: 'Mrs. Sunita Gupta', room: '203' },
      { time: '11:15-12:00', subject: 'Art & Craft', teacher: 'Ms. Meera Joshi', room: '302' },
      { time: '12:00-12:45', subject: 'Lunch Break', teacher: '', room: '' },
      { time: '12:45-13:30', subject: 'Social Studies', teacher: 'Mr. Amit Verma', room: '204' },
      { time: '13:30-14:15', subject: 'Music', teacher: 'Mrs. Asha Bhatt', room: 'Music Room' }
    ],
    Wednesday: [
      { time: '08:00-08:45', subject: 'English', teacher: 'Mr. Rajesh Kumar', room: '105' },
      { time: '08:45-09:30', subject: 'Science', teacher: 'Mrs. Kavitha Reddy', room: '301' },
      { time: '09:30-09:45', subject: 'Break', teacher: '', room: '' },
      { time: '09:45-10:30', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: '201' },
      { time: '10:30-11:15', subject: 'Computer Science', teacher: 'Mrs. Neha Agarwal', room: '401' },
      { time: '11:15-12:00', subject: 'Hindi', teacher: 'Mrs. Sunita Gupta', room: '203' },
      { time: '12:00-12:45', subject: 'Lunch Break', teacher: '', room: '' },
      { time: '12:45-13:30', subject: 'Social Studies', teacher: 'Mr. Amit Verma', room: '204' },
      { time: '13:30-14:15', subject: 'Library Period', teacher: 'Mrs. Lakshmi Nair', room: 'Library' }
    ],
    Thursday: [
      { time: '08:00-08:45', subject: 'Hindi', teacher: 'Mrs. Sunita Gupta', room: '203' },
      { time: '08:45-09:30', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: '201' },
      { time: '09:30-09:45', subject: 'Break', teacher: '', room: '' },
      { time: '09:45-10:30', subject: 'Science', teacher: 'Mrs. Kavitha Reddy', room: '301' },
      { time: '10:30-11:15', subject: 'English', teacher: 'Mr. Rajesh Kumar', room: '105' },
      { time: '11:15-12:00', subject: 'Physical Education', teacher: 'Mr. Ravi Singh', room: 'Playground' },
      { time: '12:00-12:45', subject: 'Lunch Break', teacher: '', room: '' },
      { time: '12:45-13:30', subject: 'Computer Science', teacher: 'Mrs. Neha Agarwal', room: '401' },
      { time: '13:30-14:15', subject: 'Social Studies', teacher: 'Mr. Amit Verma', room: '204' }
    ],
    Friday: [
      { time: '08:00-08:45', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: '201' },
      { time: '08:45-09:30', subject: 'Hindi', teacher: 'Mrs. Sunita Gupta', room: '203' },
      { time: '09:30-09:45', subject: 'Break', teacher: '', room: '' },
      { time: '09:45-10:30', subject: 'English', teacher: 'Mr. Rajesh Kumar', room: '105' },
      { time: '10:30-11:15', subject: 'Science', teacher: 'Mrs. Kavitha Reddy', room: '301' },
      { time: '11:15-12:00', subject: 'Art & Craft', teacher: 'Ms. Meera Joshi', room: '302' },
      { time: '12:00-12:45', subject: 'Lunch Break', teacher: '', room: '' },
      { time: '12:45-13:30', subject: 'Social Studies', teacher: 'Mr. Amit Verma', room: '204' },
      { time: '13:30-14:15', subject: 'Assembly', teacher: 'All Teachers', room: 'Main Hall' }
    ],
    Saturday: [
      { time: '08:00-08:45', subject: 'Science', teacher: 'Mrs. Kavitha Reddy', room: '301' },
      { time: '08:45-09:30', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: '201' },
      { time: '09:30-09:45', subject: 'Break', teacher: '', room: '' },
      { time: '09:45-10:30', subject: 'English', teacher: 'Mr. Rajesh Kumar', room: '105' },
      { time: '10:30-11:15', subject: 'Hindi', teacher: 'Mrs. Sunita Gupta', room: '203' },
      { time: '11:15-12:00', subject: 'Sports', teacher: 'Mr. Ravi Singh', room: 'Playground' }
    ]
  }
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const currentDaySchedule = timetableData.schedule[selectedDay as keyof typeof timetableData.schedule];
  
  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'Mathematics': 'bg-blue-100 text-blue-800',
      'English': 'bg-green-100 text-green-800',
      'Hindi': 'bg-orange-100 text-orange-800',
      'Science': 'bg-purple-100 text-purple-800',
      'Social Studies': 'bg-yellow-100 text-yellow-800',
      'Computer Science': 'bg-pink-100 text-pink-800',
      'Physical Education': 'bg-red-100 text-red-800',
      'Art & Craft': 'bg-indigo-100 text-indigo-800',
      'Music': 'bg-teal-100 text-teal-800',
      'Library Period': 'bg-gray-100 text-gray-800',
      'Assembly': 'bg-cyan-100 text-cyan-800',
      'Sports': 'bg-lime-100 text-lime-800'
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  const isBreakOrLunch = (subject: string) => {
    return subject === 'Break' || subject === 'Lunch Break';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Class Timetable</h1>
        <p className="text-gray-600">{timetableData.student.name} - Class {timetableData.student.class}, Section {timetableData.student.section}</p>
      </div>

      {/* Day Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Select Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? 'default' : 'outline'}
                onClick={() => setSelectedDay(day)}
                className="flex-1 sm:flex-none"
              >
                {day}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timetable for Selected Day */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {selectedDay} Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentDaySchedule.map((period, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  isBreakOrLunch(period.subject) 
                    ? 'bg-gray-50 border-l-4 border-gray-300' 
                    : 'bg-white border border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-2 min-w-[120px]">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-sm font-medium text-gray-700">
                    {period.time}
                  </span>
                </div>
                
                {isBreakOrLunch(period.subject) ? (
                  <div className="flex-1">
                    <Badge variant="secondary" className="text-sm">
                      {period.subject}
                    </Badge>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <Badge className={getSubjectColor(period.subject)}>
                          {period.subject}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{period.teacher}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{period.room}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Time</th>
                  {days.map((day) => (
                    <th key={day} className="text-left p-2 font-medium min-w-[120px]">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableData.schedule.Monday.map((_, timeIndex) => (
                  <tr key={timeIndex} className="border-b">
                    <td className="p-2 font-mono text-xs text-gray-600">
                      {timetableData.schedule.Monday[timeIndex].time}
                    </td>
                    {days.map((day) => {
                      const daySchedule = timetableData.schedule[day as keyof typeof timetableData.schedule];
                      const period = daySchedule[timeIndex];
                      return (
                        <td key={day} className="p-2">
                          {period ? (
                            isBreakOrLunch(period.subject) ? (
                              <Badge variant="secondary" className="text-xs">
                                {period.subject}
                              </Badge>
                            ) : (
                              <div className="space-y-1">
                                <Badge className={`${getSubjectColor(period.subject)} text-xs`}>
                                  {period.subject}
                                </Badge>
                                <div className="text-xs text-gray-500">
                                  {period.room}
                                </div>
                              </div>
                            )
                          ) : (
                            <span className="text-gray-300">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Teacher Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Teacher Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from(new Set(
              Object.values(timetableData.schedule)
                .flat()
                .filter(period => period.teacher && !isBreakOrLunch(period.subject))
                .map(period => period.teacher)
            )).map((teacher, index) => {
              const subjects = Array.from(new Set(
                Object.values(timetableData.schedule)
                  .flat()
                  .filter(period => period.teacher === teacher)
                  .map(period => period.subject)
              ));
              
              return (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900 mb-2">{teacher}</div>
                  <div className="space-y-1">
                    {subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="outline" className="text-xs mr-1">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
