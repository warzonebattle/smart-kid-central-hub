
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Medal, Crown, Target, BookOpen } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Academic Excellence',
    description: 'Maintained 95%+ average for 3 consecutive terms',
    category: 'Academic',
    icon: Crown,
    points: 500,
    date: '2024-06-20',
    level: 'Gold',
    progress: 100
  },
  {
    id: 2,
    title: 'Perfect Attendance',
    description: 'No absences for the entire academic year',
    category: 'Attendance',
    icon: Target,
    points: 300,
    date: '2024-06-15',
    level: 'Silver',
    progress: 100
  },
  {
    id: 3,
    title: 'Mathematics Champion',
    description: 'Scored highest in Mathematics final exam',
    category: 'Subject Excellence',
    icon: Trophy,
    points: 400,
    date: '2024-05-30',
    level: 'Gold',
    progress: 100
  },
  {
    id: 4,
    title: 'Science Fair Winner',
    description: 'First place in inter-school science fair',
    category: 'Competition',
    icon: Medal,
    points: 600,
    date: '2024-04-10',
    level: 'Platinum',
    progress: 100
  },
  {
    id: 5,
    title: 'Reading Enthusiast',
    description: 'Read 50+ books this academic year',
    category: 'Extra-curricular',
    icon: BookOpen,
    points: 250,
    date: '2024-03-25',
    level: 'Bronze',
    progress: 100
  },
  {
    id: 6,
    title: 'Team Player',
    description: 'Outstanding collaboration in group projects',
    category: 'Social',
    icon: Star,
    points: 200,
    date: '2024-02-14',
    level: 'Silver',
    progress: 85
  }
];

const levelColors = {
  Bronze: 'text-amber-600 bg-amber-100/20 border-amber-500/30',
  Silver: 'text-gray-400 bg-gray-100/20 border-gray-400/30',
  Gold: 'text-yellow-400 bg-yellow-100/20 border-yellow-400/30',
  Platinum: 'text-purple-400 bg-purple-100/20 border-purple-400/30'
};

export const Achievements: React.FC = () => {
  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Achievements</h1>
          <p className="text-gray-300 mt-2">Your accomplishments and milestones</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-300">Total Points</p>
          <p className="text-2xl font-bold text-yellow-400">{totalPoints}</p>
        </div>
      </div>

      <div className="grid gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <Card key={achievement.id} className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{achievement.title}</CardTitle>
                      <p className="text-gray-300 text-sm">{achievement.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant="outline" 
                      className={`${levelColors[achievement.level as keyof typeof levelColors]} text-xs`}
                    >
                      {achievement.level}
                    </Badge>
                    <p className="text-yellow-400 font-bold mt-1">+{achievement.points} pts</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-200">{achievement.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">
                    Earned on {new Date(achievement.date).toLocaleDateString()}
                  </span>
                  <span className="text-gray-300">
                    Progress: {achievement.progress}%
                  </span>
                </div>

                {achievement.progress < 100 && (
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
