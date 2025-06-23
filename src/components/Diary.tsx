
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Calendar, Clock, FileText, CheckCircle, AlertCircle, User } from 'lucide-react';

const diaryEntries = [
  {
    id: 1,
    date: '2024-01-15',
    subject: 'Mathematics',
    teacher: 'Mrs. Priya Sharma',
    type: 'homework',
    title: 'Algebra Practice',
    description: 'Complete exercises 5.1 to 5.3 from the textbook. Solve all word problems related to linear equations.',
    dueDate: '2024-01-17',
    status: 'pending',
    priority: 'high'
  },
  {
    id: 2,
    date: '2024-01-15',
    subject: 'English',
    teacher: 'Mr. Rajesh Kumar',
    type: 'assignment',
    title: 'Essay Writing',
    description: 'Write a 300-word essay on "My Favorite Festival". Include introduction, body, and conclusion.',
    dueDate: '2024-01-18',
    status: 'completed',
    priority: 'medium'
  },
  {
    id: 3,
    date: '2024-01-14',
    subject: 'Science',
    teacher: 'Mrs. Kavitha Reddy',
    type: 'project',
    title: 'Solar System Model',
    description: 'Create a 3D model of the solar system using recyclable materials. Present in next week.',
    dueDate: '2024-01-22',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: 4,
    date: '2024-01-14',
    subject: 'Hindi',
    teacher: 'Mrs. Sunita Gupta',
    type: 'homework',
    title: 'Grammar Exercise',
    description: 'Complete chapter 8 exercises on संज्ञा और सर्वनाम. Learn poem "चांद का मुंह टेढ़ा है" by heart.',
    dueDate: '2024-01-16',
    status: 'completed',
    priority: 'medium'
  },
  {
    id: 5,
    date: '2024-01-13',
    subject: 'Social Studies',
    teacher: 'Mr. Amit Verma',
    type: 'reading',
    title: 'Independence Movement',
    description: 'Read chapter 12 about Indian Independence Movement. Prepare notes on key freedom fighters.',
    dueDate: '2024-01-19',
    status: 'pending',
    priority: 'medium'
  },
  {
    id: 6,
    date: '2024-01-12',
    subject: 'Computer Science',
    teacher: 'Mrs. Neha Agarwal',
    type: 'practice',
    title: 'Scratch Programming',
    description: 'Create a simple animation in Scratch showing a cat chasing a ball. Save and submit online.',
    dueDate: '2024-01-20',
    status: 'in-progress',
    priority: 'low'
  }
];

export const Diary = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [activeTab, setActiveTab] = useState('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>;
      case 'pending':
        return <Badge className="bg-red-100 text-red-800">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge variant="secondary">Medium</Badge>;
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge>Normal</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'homework':
        return <BookOpen className="w-4 h-4" />;
      case 'assignment':
        return <FileText className="w-4 h-4" />;
      case 'project':
        return <Calendar className="w-4 h-4" />;
      case 'reading':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const filterEntries = (filter: string) => {
    if (filter === 'all') return diaryEntries;
    if (filter === 'pending') return diaryEntries.filter(entry => entry.status === 'pending');
    if (filter === 'completed') return diaryEntries.filter(entry => entry.status === 'completed');
    return diaryEntries.filter(entry => entry.type === filter);
  };

  const pendingCount = diaryEntries.filter(entry => entry.status === 'pending').length;
  const completedCount = diaryEntries.filter(entry => entry.status === 'completed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Diary</h1>
          <p className="text-gray-600">Track your homework, assignments, and school tasks</p>
        </div>
        <Select value={selectedWeek} onValueChange={setSelectedWeek}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">This Week</SelectItem>
            <SelectItem value="last">Last Week</SelectItem>
            <SelectItem value="next">Next Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <FileText className="w-5 h-5" />
              Total Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{diaryEntries.length}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertCircle className="w-5 h-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{pendingCount}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle className="w-5 h-5" />
              Completed Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{completedCount}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="homework">Homework</TabsTrigger>
          <TabsTrigger value="assignment">Assignments</TabsTrigger>
          <TabsTrigger value="project">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filterEntries(activeTab).map((entry) => (
            <Card key={entry.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">
                      {getTypeIcon(entry.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{entry.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                            <span className="font-medium">{entry.subject}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {entry.teacher}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(entry.status)}
                          {getStatusBadge(entry.status)}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{entry.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            Assigned: {new Date(entry.date).toLocaleDateString('en-IN')}
                          </div>
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="w-4 h-4" />
                            Due: {new Date(entry.dueDate).toLocaleDateString('en-IN')}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getPriorityBadge(entry.priority)}
                          <Badge variant="outline" className="capitalize">{entry.type}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="w-8 h-8 mb-2" />
              <span>Today's Tasks</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Clock className="w-8 h-8 mb-2" />
              <span>Due This Week</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <CheckCircle className="w-8 h-8 mb-2" />
              <span>Mark Complete</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <AlertCircle className="w-8 h-8 mb-2" />
              <span>Overdue Tasks</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
