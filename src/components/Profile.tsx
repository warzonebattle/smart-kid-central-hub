
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit, Save, X } from 'lucide-react';

const profileData = {
  personal: {
    name: 'Arjun Sharma',
    rollNumber: 15,
    class: '8th Grade',
    section: 'A',
    admissionNumber: 'ADM2021001',
    dateOfBirth: '2010-08-15',
    gender: 'Male',
    bloodGroup: 'O+',
    email: 'arjun.sharma@school.edu.in',
    phone: '+91 9876543210',
    address: '123, Gandhi Nagar, New Delhi - 110001',
    photo: '/placeholder.svg'
  },
  parent: {
    fatherName: 'Mr. Suresh Sharma',
    fatherOccupation: 'Software Engineer',
    fatherPhone: '+91 9876543211',
    motherName: 'Mrs. Priya Sharma',
    motherOccupation: 'Teacher',
    motherPhone: '+91 9876543212',
    emergencyContact: '+91 9876543213'
  },
  academic: {
    admissionDate: '2021-04-15',
    previousSchool: 'Little Angels Public School',
    subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    achievements: [
      { title: 'First Prize in Mathematics Olympiad', year: '2023', category: 'Academic' },
      { title: 'Best Student Award', year: '2023', category: 'Overall' },
      { title: 'Science Exhibition Winner', year: '2022', category: 'Science' },
      { title: 'Perfect Attendance Award', year: '2022', category: 'Attendance' }
    ]
  }
};

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
          <p className="text-gray-600">Manage your personal information</p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave} size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Button onClick={handleCancel} variant="outline" size="sm">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="parent">Parent Details</TabsTrigger>
          <TabsTrigger value="academic">Academic Info</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Picture */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={formData.personal.photo} alt={formData.personal.name} />
                  <AvatarFallback className="text-2xl">
                    {formData.personal.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.personal.name}
                      onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNumber">Roll Number</Label>
                    <Input
                      id="rollNumber"
                      value={formData.personal.rollNumber}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Input
                      id="class"
                      value={formData.personal.class}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="section">Section</Label>
                    <Input
                      id="section"
                      value={formData.personal.section}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admission">Admission Number</Label>
                    <Input
                      id="admission"
                      value={formData.personal.admissionNumber}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={formData.personal.dateOfBirth}
                      onChange={(e) => handleInputChange('personal', 'dateOfBirth', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      value={formData.personal.gender}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <Input
                      id="bloodGroup"
                      value={formData.personal.bloodGroup}
                      onChange={(e) => handleInputChange('personal', 'bloodGroup', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.personal.email}
                      onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                      disabled={!isEditing}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={formData.personal.phone}
                      onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                      disabled={!isEditing}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-3" />
                    <textarea
                      id="address"
                      value={formData.personal.address}
                      onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
                      disabled={!isEditing}
                      className="flex-1 min-h-[80px] px-3 py-2 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="parent">
          <Card>
            <CardHeader>
              <CardTitle>Parent/Guardian Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Father's Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Father's Details</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="fatherName">Father's Name</Label>
                      <Input
                        id="fatherName"
                        value={formData.parent.fatherName}
                        onChange={(e) => handleInputChange('parent', 'fatherName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherOccupation">Occupation</Label>
                      <Input
                        id="fatherOccupation"
                        value={formData.parent.fatherOccupation}
                        onChange={(e) => handleInputChange('parent', 'fatherOccupation', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherPhone">Phone Number</Label>
                      <Input
                        id="fatherPhone"
                        value={formData.parent.fatherPhone}
                        onChange={(e) => handleInputChange('parent', 'fatherPhone', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                {/* Mother's Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Mother's Details</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="motherName">Mother's Name</Label>
                      <Input
                        id="motherName"
                        value={formData.parent.motherName}
                        onChange={(e) => handleInputChange('parent', 'motherName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherOccupation">Occupation</Label>
                      <Input
                        id="motherOccupation"
                        value={formData.parent.motherOccupation}
                        onChange={(e) => handleInputChange('parent', 'motherOccupation', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherPhone">Phone Number</Label>
                      <Input
                        id="motherPhone"
                        value={formData.parent.motherPhone}
                        onChange={(e) => handleInputChange('parent', 'motherPhone', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                <Input
                  id="emergencyContact"
                  value={formData.parent.emergencyContact}
                  onChange={(e) => handleInputChange('parent', 'emergencyContact', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic">
          <div className="space-y-6">
            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="admissionDate">Admission Date</Label>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <Input
                        id="admissionDate"
                        type="date"
                        value={formData.academic.admissionDate}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousSchool">Previous School</Label>
                    <Input
                      id="previousSchool"
                      value={formData.academic.previousSchool}
                      disabled
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Current Subjects</Label>
                  <div className="flex flex-wrap gap-2">
                    {formData.academic.subjects.map((subject, index) => (
                      <Badge key={index} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Achievements & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formData.academic.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">Year: {achievement.year}</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        {achievement.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
