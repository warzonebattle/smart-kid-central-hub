
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Trophy } from 'lucide-react';

export const Marks: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = React.useState('all');

  const marksData = [
    { subject: 'Mathematics', midTerm: 92, finalTerm: 88, average: 90, grade: 'A+', trend: 'up' },
    { subject: 'Science', midTerm: 85, finalTerm: 91, average: 88, grade: 'A', trend: 'up' },
    { subject: 'English', midTerm: 78, finalTerm: 82, average: 80, grade: 'B+', trend: 'up' },
    { subject: 'History', midTerm: 89, finalTerm: 87, average: 88, grade: 'A', trend: 'down' },
    { subject: 'Geography', midTerm: 84, finalTerm: 86, average: 85, grade: 'A-', trend: 'up' },
    { subject: 'Physical Education', midTerm: 95, finalTerm: 93, average: 94, grade: 'A+', trend: 'down' },
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-blue-100 text-blue-800';
      case 'A-': return 'bg-cyan-100 text-cyan-800';
      case 'B+': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Academic Marks</h1>
          <p className="text-gray-600">Track your performance across subjects</p>
        </div>
        <Select value={selectedTerm} onValueChange={setSelectedTerm}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Terms</SelectItem>
            <SelectItem value="midterm">Mid Term</SelectItem>
            <SelectItem value="final">Final Term</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Overall Average</CardTitle>
            <Trophy className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <p className="text-xs opacity-80">Excellent performance!</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Best Subject</CardTitle>
            <TrendingUp className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PE (94%)</div>
            <p className="text-xs opacity-80">Keep up the great work!</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Improvement Needed</CardTitle>
            <TrendingDown className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">English</div>
            <p className="text-xs opacity-80">Focus area for next term</p>
          </CardContent>
        </Card>
      </div>

      {/* Marks Table */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Subject-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Subject</TableHead>
                  <TableHead className="text-center">Mid Term</TableHead>
                  <TableHead className="text-center">Final Term</TableHead>
                  <TableHead className="text-center">Average</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-center">Progress</TableHead>
                  <TableHead className="text-center">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marksData.map((subject) => (
                  <TableRow key={subject.subject} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{subject.subject}</TableCell>
                    <TableCell className="text-center">{subject.midTerm}%</TableCell>
                    <TableCell className="text-center">{subject.finalTerm}%</TableCell>
                    <TableCell className="text-center font-semibold">{subject.average}%</TableCell>
                    <TableCell className="text-center">
                      <Badge className={getGradeColor(subject.grade)}>
                        {subject.grade}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="w-20 mx-auto">
                        <Progress value={subject.average} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500 mx-auto" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500 mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marksData.slice(0, 4).map((subject, index) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{subject.subject}</span>
                  <span className="text-gray-600">{subject.average}%</span>
                </div>
                <div className="relative">
                  <Progress 
                    value={subject.average} 
                    className={`h-3 ${
                      index % 4 === 0 ? 'bg-blue-100' :
                      index % 4 === 1 ? 'bg-green-100' :
                      index % 4 === 2 ? 'bg-orange-100' : 'bg-purple-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
