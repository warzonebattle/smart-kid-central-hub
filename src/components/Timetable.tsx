
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';

export const Timetable: React.FC = () => {
  const timeSlots = [
    '8:00 - 8:45',
    '8:45 - 9:30',
    '9:30 - 10:15',
    '10:15 - 10:30', // Break
    '10:30 - 11:15',
    '11:15 - 12:00',
    '12:00 - 12:45',
    '12:45 - 1:30', // Lunch
    '1:30 - 2:15',
    '2:15 - 3:00',
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const timetableData = {
    Monday: [
      { subject: 'Mathematics', teacher: 'Mr. Smith', room: '101' },
      { subject: 'English', teacher: 'Ms. Johnson', room: '205' },
      { subject: 'Science', teacher: 'Dr. Brown', room: 'Lab-1' },
      { subject: 'Break', type: 'break' },
      { subject: 'History', teacher: 'Mr. Davis', room: '303' },
      { subject: 'Geography', teacher: 'Ms. Wilson', room: '204' },
      { subject: 'Art', teacher: 'Ms. Garcia', room: 'Art Room' },
      { subject: 'Lunch', type: 'break' },
      { subject: 'PE', teacher: 'Coach Taylor', room: 'Gym' },
      { subject: 'Music', teacher: 'Mr. Martinez', room: 'Music Room' },
    ],
    Tuesday: [
      { subject: 'Science', teacher: 'Dr. Brown', room: 'Lab-1' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', room: '101' },
      { subject: 'English', teacher: 'Ms. Johnson', room: '205' },
      { subject: 'Break', type: 'break' },
      { subject: 'Geography', teacher: 'Ms. Wilson', room: '204' },
      { subject: 'History', teacher: 'Mr. Davis', room: '303' },
      { subject: 'Computer Science', teacher: 'Mr. Lee', room: 'Lab-2' },
      { subject: 'Lunch', type: 'break' },
      { subject: 'Art', teacher: 'Ms. Garcia', room: 'Art Room' },
      { subject: 'Study Hall', teacher: 'Various', room: 'Library' },
    ],
    Wednesday: [
      { subject: 'English', teacher: 'Ms. Johnson', room: '205' },
      { subject: 'Science', teacher: 'Dr. Brown', room: 'Lab-1' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', room: '101' },
      { subject: 'Break', type: 'break' },
      { subject: 'PE', teacher: 'Coach Taylor', room: 'Gym' },
      { subject: 'Music', teacher: 'Mr. Martinez', room: 'Music Room' },
      { subject: 'History', teacher: 'Mr. Davis', room: '303' },
      { subject: 'Lunch', type: 'break' },
      { subject: 'Geography', teacher: 'Ms. Wilson', room: '204' },
      { subject: 'Computer Science', teacher: 'Mr. Lee', room: 'Lab-2' },
    ],
    Thursday: [
      { subject: 'Mathematics', teacher: 'Mr. Smith', room: '101' },
      { subject: 'History', teacher: 'Mr. Davis', room: '303' },
      { subject: 'English', teacher: 'Ms. Johnson', room: '205' },
      { subject: 'Break', type: 'break' },
      { subject: 'Science', teacher: 'Dr. Brown', room: 'Lab-1' },
      { subject: 'Art', teacher: 'Ms. Garcia', room: 'Art Room' },
      { subject: 'Geography', teacher: 'Ms. Wilson', room: '204' },
      { subject: 'Lunch', type: 'break' },
      { subject: 'Computer Science', teacher: 'Mr. Lee', room: 'Lab-2' },
      { subject: 'PE', teacher: 'Coach Taylor', room: 'Gym' },
    ],
    Friday: [
      { subject: 'Science', teacher: 'Dr. Brown', room: 'Lab-1' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', room: '101' },
      { subject: 'Geography', teacher: 'Ms. Wilson', room: '204' },
      { subject: 'Break', type: 'break' },
      { subject: 'English', teacher: 'Ms. Johnson', room: '205' },
      { subject: 'Music', teacher: 'Mr. Martinez', room: 'Music Room' },
      { subject: 'History', teacher: 'Mr. Davis', room: '303' },
      { subject: 'Lunch', type: 'break' },
      { subject: 'PE', teacher: 'Coach Taylor', room: 'Gym' },
      { subject: 'Study Hall', teacher: 'Various', room: 'Library' },
    ],
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      Mathematics: 'bg-blue-100 text-blue-800 border-blue-200',
      Science: 'bg-green-100 text-green-800 border-green-200',
      English: 'bg-purple-100 text-purple-800 border-purple-200',
      History: 'bg-orange-100 text-orange-800 border-orange-200',
      Geography: 'bg-teal-100 text-teal-800 border-teal-200',
      Art: 'bg-pink-100 text-pink-800 border-pink-200',
      PE: 'bg-red-100 text-red-800 border-red-200',
      Music: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Computer Science': 'bg-gray-100 text-gray-800 border-gray-200',
      'Study Hall': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    };
    return colors[subject as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Weekly Timetable</h1>
        <p className="text-gray-600">Your schedule for Class 8-A</p>
      </div>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Class Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-6 gap-2 mb-4">
                <div className="font-semibold text-center py-2 bg-gray-100 rounded-lg">Time</div>
                {days.map((day) => (
                  <div key={day} className="font-semibold text-center py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    {day}
                  </div>
                ))}
              </div>

              {/* Time slots */}
              {timeSlots.map((time, timeIndex) => (
                <div key={time} className="grid grid-cols-6 gap-2 mb-2">
                  <div className="text-sm font-medium text-center py-3 bg-gray-50 rounded-lg flex items-center justify-center">
                    {time}
                  </div>
                  {days.map((day) => {
                    const classInfo = timetableData[day as keyof typeof timetableData][timeIndex];
                    const isBreak = classInfo?.type === 'break';
                    
                    return (
                      <div key={`${day}-${timeIndex}`} className="min-h-[60px]">
                        {isBreak ? (
                          <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                            <span className="text-sm text-gray-600 font-medium">{classInfo.subject}</span>
                          </div>
                        ) : (
                          <div className={`h-full p-2 rounded-lg border-2 ${getSubjectColor(classInfo.subject)} hover:shadow-md transition-shadow cursor-pointer`}>
                            <div className="text-xs font-bold mb-1">{classInfo.subject}</div>
                            <div className="text-xs opacity-80 mb-1">{classInfo.teacher}</div>
                            <div className="flex items-center gap-1 text-xs opacity-70">
                              <MapPin className="w-3 h-3" />
                              {classInfo.room}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Classes */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Today's Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {timetableData.Monday.filter(cls => cls.type !== 'break').slice(0, 4).map((classInfo, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge className={getSubjectColor(classInfo.subject)}>
                    {classInfo.subject}
                  </Badge>
                  <div>
                    <div className="font-medium">{classInfo.teacher}</div>
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {classInfo.room}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {timeSlots[index]}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
