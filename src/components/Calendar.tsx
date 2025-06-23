
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, BookOpen, Trophy, Users, AlertCircle } from 'lucide-react';

const calendarEvents = [
  { date: '2024-01-20', title: 'Mathematics Unit Test', type: 'exam', color: 'bg-red-100 text-red-800' },
  { date: '2024-01-22', title: 'Republic Day Celebration', type: 'holiday', color: 'bg-orange-100 text-orange-800' },
  { date: '2024-01-25', title: 'Science Fair', type: 'event', color: 'bg-blue-100 text-blue-800' },
  { date: '2024-01-26', title: 'Republic Day Holiday', type: 'holiday', color: 'bg-orange-100 text-orange-800' },
  { date: '2024-01-28', title: 'Parent-Teacher Meeting', type: 'meeting', color: 'bg-green-100 text-green-800' },
  { date: '2024-02-02', title: 'Hindi Recitation Competition', type: 'event', color: 'bg-purple-100 text-purple-800' },
  { date: '2024-02-05', title: 'Class 8 Field Trip', type: 'event', color: 'bg-blue-100 text-blue-800' },
  { date: '2024-02-10', title: 'Term End Examinations Begin', type: 'exam', color: 'bg-red-100 text-red-800' }
];

const upcomingEvents = calendarEvents.slice(0, 5);

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'exam':
        return <BookOpen className="w-4 h-4" />;
      case 'event':
        return <Trophy className="w-4 h-4" />;
      case 'meeting':
        return <Users className="w-4 h-4" />;
      case 'holiday':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const eventDates = calendarEvents.map(event => new Date(event.date));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Academic Calendar</h1>
        <p className="text-gray-600">Stay updated with school events, exams, and holidays</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Academic Calendar 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              modifiers={{
                eventDay: eventDates
              }}
              modifiersStyles={{
                eventDay: { 
                  backgroundColor: '#dbeafe',
                  color: '#2563eb',
                  fontWeight: 'bold'
                }
              }}
            />
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="mt-1">
                    {getEventIcon(event.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {new Date(event.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <Badge className={event.color}>
                    {event.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                View Exam Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                PTM Appointments
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Trophy className="w-4 h-4 mr-2" />
                Competition Registration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Event Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Event Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
              <BookOpen className="w-5 h-5 text-red-600" />
              <div>
                <div className="font-medium text-red-800">Examinations</div>
                <div className="text-sm text-red-600">Tests & Finals</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
              <Trophy className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium text-blue-800">Events</div>
                <div className="text-sm text-blue-600">Competitions & Fairs</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <Users className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-medium text-green-800">Meetings</div>
                <div className="text-sm text-green-600">PTM & Conferences</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <div>
                <div className="font-medium text-orange-800">Holidays</div>
                <div className="text-sm text-orange-600">School Breaks</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
