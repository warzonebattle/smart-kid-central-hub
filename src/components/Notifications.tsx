
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Calendar, BookOpen, AlertTriangle, Trophy, Users, Settings, Clock } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'Parent-Teacher Meeting Scheduled',
    message: 'PTM has been scheduled for January 28th, 2024. Please confirm your attendance.',
    type: 'meeting',
    priority: 'high',
    date: '2024-01-15',
    time: '09:30 AM',
    read: false
  },
  {
    id: 2,
    title: 'Mathematics Unit Test',
    message: 'Unit test for Algebra chapter will be conducted on January 20th, 2024.',
    type: 'exam',
    priority: 'high',
    date: '2024-01-14',
    time: '02:15 PM',
    read: false
  },
  {
    id: 3,
    title: 'Republic Day Celebration',
    message: 'Join us for the Republic Day celebration on January 26th. Flag hoisting at 9:00 AM.',
    type: 'event',
    priority: 'medium',
    date: '2024-01-13',
    time: '11:00 AM',
    read: true
  },
  {
    id: 4,
    title: 'Library Books Due',
    message: 'Please return your library books by January 25th to avoid late fees.',
    type: 'reminder',
    priority: 'low',
    date: '2024-01-12',
    time: '03:45 PM',
    read: true
  },
  {
    id: 5,
    title: 'Science Fair Registration',
    message: 'Registration is now open for the annual science fair. Deadline: February 5th.',
    type: 'event',
    priority: 'medium',
    date: '2024-01-10',
    time: '10:20 AM',
    read: false
  },
  {
    id: 6,
    title: 'Fee Payment Reminder',
    message: 'Your next fee installment of ₹15,000 is due on February 15th, 2024.',
    type: 'fee',
    priority: 'high',
    date: '2024-01-08',
    time: '12:30 PM',
    read: true
  }
];

export const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notificationList, setNotificationList] = useState(notifications);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'exam':
        return <BookOpen className="w-5 h-5 text-red-500" />;
      case 'event':
        return <Trophy className="w-5 h-5 text-blue-500" />;
      case 'meeting':
        return <Users className="w-5 h-5 text-green-500" />;
      case 'reminder':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'fee':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge>Normal</Badge>;
    }
  };

  const markAsRead = (id: number) => {
    setNotificationList(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const filterNotifications = (filter: string) => {
    if (filter === 'all') return notificationList;
    if (filter === 'unread') return notificationList.filter(n => !n.read);
    return notificationList.filter(n => n.type === filter);
  };

  const unreadCount = notificationList.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated with school announcements</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-3 py-1">
            {unreadCount} unread
          </Badge>
          <Button onClick={markAllAsRead} size="sm">
            Mark all as read
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="exam">Exams</TabsTrigger>
          <TabsTrigger value="event">Events</TabsTrigger>
          <TabsTrigger value="meeting">Meetings</TabsTrigger>
          <TabsTrigger value="fee">Fees</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filterNotifications(activeTab).length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-600">You're all caught up!</p>
              </CardContent>
            </Card>
          ) : (
            filterNotifications(activeTab).map((notification) => (
              <Card key={notification.id} className={`cursor-pointer transition-all ${
                !notification.read ? 'border-blue-200 bg-blue-50/30' : 'hover:bg-gray-50'
              }`} onClick={() => markAsRead(notification.id)}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          {getPriorityBadge(notification.priority)}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{notification.message}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {notification.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {notification.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
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
              <span>View Calendar</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <BookOpen className="w-8 h-8 mb-2" />
              <span>Check Timetable</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Users className="w-8 h-8 mb-2" />
              <span>PTM Schedule</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Trophy className="w-8 h-8 mb-2" />
              <span>Register Events</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
