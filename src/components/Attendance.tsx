
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

const attendanceData = {
  overall: 87,
  subjects: [
    { name: 'Mathematics', present: 42, total: 48, percentage: 87.5 },
    { name: 'English', present: 44, total: 50, percentage: 88 },
    { name: 'Hindi', present: 40, total: 45, percentage: 88.9 },
    { name: 'Science', present: 38, total: 44, percentage: 86.4 },
    { name: 'Social Studies', present: 41, total: 47, percentage: 87.2 },
    { name: 'Computer Science', present: 35, total: 40, percentage: 87.5 }
  ],
  recentActivity: [
    { date: '2024-01-15', subject: 'Mathematics', status: 'present' },
    { date: '2024-01-15', subject: 'English', status: 'present' },
    { date: '2024-01-14', subject: 'Science', status: 'absent' },
    { date: '2024-01-14', subject: 'Hindi', status: 'present' },
    { date: '2024-01-13', subject: 'Social Studies', status: 'late' },
    { date: '2024-01-13', subject: 'Computer Science', status: 'present' }
  ]
};

export const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('january');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'absent':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'late':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (percentage: number) => {
    if (percentage >= 90) return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    if (percentage >= 80) return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
    if (percentage >= 75) return <Badge className="bg-yellow-100 text-yellow-800">Average</Badge>;
    return <Badge className="bg-red-100 text-red-800">Poor</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-600">Track your attendance across subjects</p>
        </div>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="january">January</SelectItem>
            <SelectItem value="december">December</SelectItem>
            <SelectItem value="november">November</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Overall Attendance */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Overall Attendance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-3xl font-bold text-blue-600">{attendanceData.overall}%</div>
              <Progress value={attendanceData.overall} className="mt-2" />
            </div>
            {getStatusBadge(attendanceData.overall)}
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <div className="grid gap-4">
        <h2 className="text-xl font-semibold">Subject-wise Attendance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {attendanceData.subjects.map((subject) => (
            <Card key={subject.name}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {subject.percentage.toFixed(1)}%
                    </span>
                    {getStatusBadge(subject.percentage)}
                  </div>
                  <Progress value={subject.percentage} />
                  <div className="text-sm text-gray-600">
                    {subject.present} out of {subject.total} classes attended
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {attendanceData.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(activity.status)}
                  <div>
                    <div className="font-medium">{activity.subject}</div>
                    <div className="text-sm text-gray-600">{activity.date}</div>
                  </div>
                </div>
                <Badge 
                  variant={activity.status === 'present' ? 'default' : 
                          activity.status === 'absent' ? 'destructive' : 'secondary'}
                  className="capitalize"
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
