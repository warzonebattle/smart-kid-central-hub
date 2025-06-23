
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, IndianRupee, TrendingUp, Clock, Bell, Star } from 'lucide-react';

const dashboardData = {
  student: {
    name: 'Arjun Sharma',
    class: '8th Grade',
    section: 'A',
    rollNumber: 15
  },
  attendance: {
    percentage: 87,
    daysPresent: 156,
    totalDays: 180
  },
  marks: {
    latest: [
      { subject: 'Mathematics', marks: 89, total: 100, grade: 'A' },
      { subject: 'English', marks: 92, total: 100, grade: 'A+' },
      { subject: 'Science', marks: 85, total: 100, grade: 'A' },
      { subject: 'Hindi', marks: 88, total: 100, grade: 'A' }
    ],
    average: 88.5
  },
  upcomingClasses: [
    { subject: 'Mathematics', time: '09:00 AM', teacher: 'Mrs. Priya Sharma', room: '201' },
    { subject: 'English', time: '10:30 AM', teacher: 'Mr. Rajesh Kumar', room: '105' },
    { subject: 'Science', time: '12:00 PM', teacher: 'Mrs. Kavitha Reddy', room: '301' }
  ],
  fees: {
    totalDue: 15000,
    dueDate: '2024-02-15'
  },
  notifications: [
    { title: 'Parent-Teacher Meeting', date: '2024-01-28', type: 'meeting' },
    { title: 'Mathematics Unit Test', date: '2024-01-20', type: 'exam' },
    { title: 'Science Fair Registration', date: '2024-01-25', type: 'event' }
  ]
};

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {dashboardData.student.name}!</h1>
        <p className="text-blue-100">Class {dashboardData.student.class}, Section {dashboardData.student.section} • Roll No: {dashboardData.student.rollNumber}</p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Attendance</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{dashboardData.attendance.percentage}%</div>
            <p className="text-xs text-blue-600 mt-1">
              {dashboardData.attendance.daysPresent}/{dashboardData.attendance.totalDays} days
            </p>
            <Progress value={dashboardData.attendance.percentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Average Marks</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{dashboardData.marks.average}%</div>
            <p className="text-xs text-green-600 mt-1">Last 4 subjects</p>
            <div className="flex items-center mt-2">
              <Star className="h-3 w-3 text-yellow-500 mr-1" />
              <span className="text-xs text-green-600">Excellent performance</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-800">Fees Due</CardTitle>
            <IndianRupee className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₹{dashboardData.fees.totalDue.toLocaleString('en-IN')}</div>
            <p className="text-xs text-orange-600 mt-1">Due: {dashboardData.fees.dueDate}</p>
            <Button size="sm" className="mt-2 bg-orange-500 hover:bg-orange-600">
              Pay Now
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{dashboardData.notifications.length}</div>
            <p className="text-xs text-purple-600 mt-1">Unread messages</p>
            <Button variant="outline" size="sm" className="mt-2 text-purple-600 border-purple-300">
              View All
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Marks */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Latest Marks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardData.marks.latest.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{subject.subject}</div>
                    <div className="text-sm text-gray-600">{subject.marks}/{subject.total}</div>
                  </div>
                </div>
                <Badge className={
                  subject.grade === 'A+' ? 'bg-green-100 text-green-800' :
                  subject.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }>
                  {subject.grade}
                </Badge>
              </div>
            ))}
            <Button className="w-full" variant="outline">View All Marks</Button>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {dashboardData.upcomingClasses.map((classItem, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-blue-600">{classItem.time}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{classItem.subject}</div>
                  <div className="text-xs text-gray-600">{classItem.teacher}</div>
                  <div className="text-xs text-gray-500">Room {classItem.room}</div>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">View Full Timetable</Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dashboardData.notifications.map((notification, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    {notification.type === 'meeting' && <Users className="w-4 h-4 text-blue-600" />}
                    {notification.type === 'exam' && <BookOpen className="w-4 h-4 text-blue-600" />}
                    {notification.type === 'event' && <Calendar className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{notification.title}</div>
                    <div className="text-xs text-gray-600">{notification.date}</div>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {notification.type}
                </Badge>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4" variant="outline">View All Notifications</Button>
        </CardContent>
      </Card>
    </div>
  );
};
