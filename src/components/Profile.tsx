
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit, Save, Camera } from 'lucide-react';

export const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600">View and update your information</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg" alt="Student" />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white">AJ</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button 
                  size="sm" 
                  className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0 bg-gradient-to-r from-blue-500 to-green-500"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Alex Johnson</h3>
              <p className="text-gray-600">Class 8-A</p>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  defaultValue="Alex" 
                  disabled={!isEditing}
                  className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  defaultValue="Johnson" 
                  disabled={!isEditing}
                  className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Input 
                  id="class" 
                  defaultValue="8" 
                  disabled={!isEditing}
                  className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Input 
                  id="section" 
                  defaultValue="A" 
                  disabled={!isEditing}
                  className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input 
                  id="rollNumber" 
                  defaultValue="15" 
                  disabled={!isEditing}
                  className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input 
                  id="studentId" 
                  defaultValue="STU2024015" 
                  disabled={!isEditing}
                  className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                defaultValue="alex.johnson@school.edu" 
                disabled={!isEditing}
                className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input 
                id="phone" 
                defaultValue="+1 (555) 123-4567" 
                disabled={!isEditing}
                className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address" 
                defaultValue="123 Main Street, Anytown, State 12345" 
                disabled={!isEditing}
                className={isEditing ? 'border-blue-300 focus:border-blue-500' : ''}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Academic Information */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">8th</div>
              <div className="text-sm text-gray-600">Current Grade</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">2023-24</div>
              <div className="text-sm text-gray-600">Academic Year</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">88.5%</div>
              <div className="text-sm text-gray-600">Overall Average</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
