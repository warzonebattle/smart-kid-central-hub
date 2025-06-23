
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Sun, Moon, Menu, BookOpen, Calendar, FileText, Clock, Users, Bell, DollarSign, NotebookPen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
  { name: 'Diary', href: '/diary', icon: NotebookPen },
];

export const StudentLayout: React.FC<StudentLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const NavContent = () => (
    <>
      <div className="flex items-center gap-3 p-6 border-b bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-gray-800 dark:text-white">Student Portal</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Learn & Grow</p>
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
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 dark:hover:from-blue-900 dark:hover:to-green-900 hover:text-blue-700 dark:hover:text-blue-300'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl border-r border-gray-200 dark:border-gray-700 z-30">
          <NavContent />
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 z-40 flex items-center justify-between px-4">
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
                <span className="font-bold text-gray-800 dark:text-white">Portal</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Link to="/notifications">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="p-1">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                </Button>
              </Link>
            </div>
          </div>
          
          <SheetContent side="left" className="w-64 p-0 dark:bg-gray-800">
            <NavContent />
          </SheetContent>
        </Sheet>
      )}

      {/* Header for Desktop */}
      {!isMobile && (
        <div className="fixed top-0 left-64 right-0 h-16 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 z-20 flex items-center justify-end px-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Link to="/notifications">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-1">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
              </Button>
            </Link>
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
