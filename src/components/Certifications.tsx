
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Computer Science Fundamentals",
      issuer: "Tech Institute",
      issueDate: "June 2024",
      expiryDate: "June 2027",
      status: "Active",
      credentialId: "CS-2024-001",
      skills: ["Programming", "Algorithms", "Data Structures"]
    },
    {
      id: 2,
      title: "English Language Proficiency",
      issuer: "Language Academy",
      issueDate: "May 2024",
      expiryDate: "Never",
      status: "Active",
      credentialId: "ENG-2024-456",
      skills: ["Communication", "Writing", "Speaking"]
    },
    {
      id: 3,
      title: "Mathematics Excellence",
      issuer: "Math Foundation",
      issueDate: "April 2024",
      expiryDate: "April 2026",
      status: "Active",
      credentialId: "MATH-2024-789",
      skills: ["Calculus", "Statistics", "Algebra"]
    },
    {
      id: 4,
      title: "Science Research Methods",
      issuer: "Research Institute",
      issueDate: "March 2024",
      expiryDate: "March 2025",
      status: "Expiring Soon",
      credentialId: "SCI-2024-123",
      skills: ["Research", "Analysis", "Documentation"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Expiring Soon':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'Expired':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Your professional certificates and credentials</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
          <FileText className="w-4 h-4 mr-2" />
          Request Certificate
        </Button>
      </div>

      <div className="grid gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{cert.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">Issued by {cert.issuer}</p>
                  <Badge className={getStatusColor(cert.status)}>
                    {cert.status}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-700">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-700">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">Issued: {cert.issueDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">Expires: {cert.expiryDate}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Certification Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Expiring Soon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Skills Verified</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
