
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BookOpen, TrendingUp, TrendingDown, Award, Target } from 'lucide-react';

const marksData = {
  student: {
    name: 'Arjun Sharma',
    class: '8th Grade',
    rollNumber: 15
  },
  terms: [
    {
      name: 'First Term',
      subjects: [
        { name: 'Mathematics', marks: 89, total: 100, grade: 'A', teacher: 'Mrs. Priya Sharma' },
        { name: 'English', marks: 92, total: 100, grade: 'A+', teacher: 'Mr. Rajesh Kumar' },
        { name: 'Hindi', marks: 88, total: 100, grade: 'A', teacher: 'Mrs. Sunita Gupta' },
        { name: 'Science', marks: 85, total: 100, grade: 'A', teacher: 'Mrs. Kavitha Reddy' },
        { name: 'Social Studies', marks: 87, total: 100, grade: 'A', teacher: 'Mr. Amit Verma' },
        { name: 'Computer Science', marks: 95, total: 100, grade: 'A+', teacher: 'Mrs. Neha Agarwal' }
      ]
    },
    {
      name: 'Mid Term',
      subjects: [
        { name: 'Mathematics', marks: 91, total: 100, grade: 'A+', teacher: 'Mrs. Priya Sharma' },
        { name: 'English', marks: 89, total: 100, grade: 'A', teacher: 'Mr. Rajesh Kumar' },
        { name: 'Hindi', marks: 90, total: 100, grade: 'A+', teacher: 'Mrs. Sunita Gupta' },
        { name: 'Science', marks: 88, total: 100, grade: 'A', teacher: 'Mrs. Kavitha Reddy' },
        { name: 'Social Studies', marks: 85, total: 100, grade: 'A', teacher: 'Mr. Amit Verma' },
        { name: 'Computer Science', marks: 93, total: 100, grade: 'A+', teacher: 'Mrs. Neha Agarwal' }
      ]
    }
  ]
};

export const Marks = () => {
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  
  const currentTermData = marksData.terms.find(term => term.name === selectedTerm);
  const totalMarks = currentTermData?.subjects.reduce((sum, subject) => sum + subject.marks, 0) || 0;
  const totalPossible = currentTermData?.subjects.reduce((sum, subject) => sum + subject.total, 0) || 0;
  const percentage = totalPossible > 0 ? (totalMarks / totalPossible) * 100 : 0;

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
        return 'bg-green-100 text-green-800';
      case 'A':
        return 'bg-blue-100 text-blue-800';
      case 'B+':
        return 'bg-yellow-100 text-yellow-800';
      case 'B':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceIcon = (marks: number) => {
    if (marks >= 90) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (marks >= 80) return <Target className="w-4 h-4 text-blue-500" />;
    return <TrendingDown className="w-4 h-4 text-orange-500" />;
  };

  const getPerformanceText = (percentage: number) => {
    if (percentage >= 90) return { text: 'Excellent', color: 'text-green-600' };
    if (percentage >= 80) return { text: 'Very Good', color: 'text-blue-600' };
    if (percentage >= 70) return { text: 'Good', color: 'text-yellow-600' };
    if (percentage >= 60) return { text: 'Satisfactory', color: 'text-orange-600' };
    return { text: 'Needs Improvement', color: 'text-red-600' };
  };

  const performance = getPerformanceText(percentage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Marks</h1>
          <p className="text-gray-600">{marksData.student.name} - Class {marksData.student.class}</p>
        </div>
        <Select value={selectedTerm} onValueChange={setSelectedTerm}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Term" />
          </SelectTrigger>
          <SelectContent>
            {marksData.terms.map((term) => (
              <SelectItem key={term.name} value={term.name}>
                {term.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-800 text-sm">
              <BookOpen className="w-4 h-4" />
              Total Marks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {totalMarks}/{totalPossible}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-800 text-sm">
              <Target className="w-4 h-4" />
              Percentage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {percentage.toFixed(1)}%
            </div>
            <Progress value={percentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-800 text-sm">
              <Award className="w-4 h-4" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-lg font-bold ${performance.color}`}>
              {performance.text}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-yellow-800 text-sm">
              <TrendingUp className="w-4 h-4" />
              Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              5th
            </div>
            <div className="text-xs text-yellow-600">out of 45 students</div>
          </CardContent>
        </Card>
      </div>

      {/* Marks Table */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Marks - {selectedTerm}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Marks Obtained</TableHead>
                <TableHead>Total Marks</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentTermData?.subjects.map((subject, index) => {
                const subjectPercentage = (subject.marks / subject.total) * 100;
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{subject.name}</TableCell>
                    <TableCell className="text-sm text-gray-600">{subject.teacher}</TableCell>
                    <TableCell className="font-medium">{subject.marks}</TableCell>
                    <TableCell>{subject.total}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{subjectPercentage.toFixed(1)}%</span>
                        <div className="w-16">
                          <Progress value={subjectPercentage} className="h-2" />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getGradeColor(subject.grade)}>
                        {subject.grade}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getPerformanceIcon(subject.marks)}
                        <span className="text-sm">
                          {subject.marks >= 90 ? 'Excellent' : 
                           subject.marks >= 80 ? 'Very Good' : 'Good'}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Subject Performance Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentTermData?.subjects
                .sort((a, b) => b.marks - a.marks)
                .slice(0, 3)
                .map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{subject.name}</div>
                        <div className="text-sm text-gray-600">{subject.teacher}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{subject.marks}/{subject.total}</div>
                      <Badge className="bg-green-100 text-green-800">{subject.grade}</Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Areas for Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentTermData?.subjects
                .sort((a, b) => a.marks - b.marks)
                .slice(0, 3)
                .map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium">{subject.name}</div>
                        <div className="text-sm text-gray-600">{subject.teacher}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-orange-600">{subject.marks}/{subject.total}</div>
                      <div className="text-sm text-orange-600">
                        +{100 - subject.marks} to improve
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
