
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    id: 1,
    title: 'Mathematics Excellence Certificate',
    issuer: 'National Math Foundation',
    date: '2024-06-15',
    level: 'Advanced',
    description: 'Awarded for outstanding performance in Advanced Mathematics Competition',
    status: 'Active',
    validUntil: '2025-06-15'
  },
  {
    id: 2,
    title: 'Science Olympiad Gold Medal',
    issuer: 'Indian Science Olympiad Foundation',
    date: '2024-05-20',
    level: 'National',
    description: 'First place in National Science Olympiad for Grade 10',
    status: 'Active',
    validUntil: 'Lifetime'
  },
  {
    id: 3,
    title: 'English Proficiency Certificate',
    issuer: 'Cambridge Assessment English',
    date: '2024-03-10',
    level: 'C1 Advanced',
    description: 'Cambridge English Advanced (CAE) certification',
    status: 'Active',
    validUntil: '2026-03-10'
  },
  {
    id: 4,
    title: 'Computer Programming Certificate',
    issuer: 'Tech Academy India',
    date: '2024-01-25',
    level: 'Intermediate',
    description: 'Python and Java programming fundamentals certification',
    status: 'Active',
    validUntil: '2025-01-25'
  }
];

export const Certifications: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Certifications</h1>
          <p className="text-gray-300 mt-2">Your academic and professional certifications</p>
        </div>
        <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30">
          <Download className="w-4 h-4 mr-2" />
          Download All
        </Button>
      </div>

      <div className="grid gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    {cert.title}
                  </CardTitle>
                  <p className="text-gray-300 mt-1">{cert.issuer}</p>
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  {cert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-200">{cert.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {new Date(cert.date).toLocaleDateString()}</span>
                </div>
                <div className="text-gray-300">
                  <span className="font-medium">Level: </span>
                  <Badge variant="outline" className="border-white/30 text-white bg-white/10">
                    {cert.level}
                  </Badge>
                </div>
                <div className="text-gray-300">
                  <span className="font-medium">Valid Until: </span>
                  {cert.validUntil}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
