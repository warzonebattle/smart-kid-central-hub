
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Medal, Award } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Academic Excellence",
      description: "Achieved 95%+ marks in final examinations",
      icon: Trophy,
      date: "June 2024",
      category: "Academic",
      points: 100
    },
    {
      id: 2,
      title: "Perfect Attendance",
      description: "100% attendance for the entire semester",
      icon: Star,
      date: "May 2024",
      category: "Attendance",
      points: 50
    },
    {
      id: 3,
      title: "Science Fair Winner",
      description: "First place in inter-school science competition",
      icon: Medal,
      date: "April 2024",
      category: "Competition",
      points: 150
    },
    {
      id: 4,
      title: "Leadership Award",
      description: "Outstanding leadership in student council",
      icon: Award,
      date: "March 2024",
      category: "Leadership",
      points: 75
    }
  ];

  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Achievements</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Your accomplishments and milestones</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalPoints}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Points</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <Card key={achievement.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {achievement.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{achievement.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.date}</span>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">+{achievement.points} pts</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Achievement Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">This Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">375</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Gold</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Current Level</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
