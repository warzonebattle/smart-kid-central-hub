
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Sun, Menu, X, BookOpen, Calendar, FileText, Clock, Users, Bell, DollarSign, NotebookPen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

interface StudentLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Marks', href: '/marks', icon: FileText },
  { name: 'Timetable', href: '/timetable', icon: Clock },
  { name: 'Attendance', href: '/attendance', icon: Users },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Fees', href: '/fees', icon: DollarSign },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Diary', href: '/diary', icon: NotebookPen },
];

export const StudentLayout: React.FC<StudentLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavContent = () => (
    <>
      <div className="flex items-center gap-3 p-6 border-b bg-gradient-to-r from-blue-50 to-green-50">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-gray-800">Student Portal</h2>
          <p className="text-sm text-gray-600">Learn & Grow</p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:text-blue-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-30">
          <NavContent />
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm border-b z-40 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-800">Portal</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Sun className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <SheetContent side="left" className="w-64 p-0">
            <NavContent />
          </SheetContent>
        </Sheet>
      )}

      {/* Header for Desktop */}
      {!isMobile && (
        <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm border-b z-20 flex items-center justify-end px-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hover:bg-gray-100">
              <Sun className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-gray-100">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${isMobile ? 'pt-16' : 'pl-64 pt-16'} min-h-screen`}>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
