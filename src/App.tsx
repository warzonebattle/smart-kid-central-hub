
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentLayout } from "./components/StudentLayout";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { Marks } from "./components/Marks";
import { Timetable } from "./components/Timetable";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StudentLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/attendance" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">Attendance Page</h2><p>Coming soon...</p></div>} />
            <Route path="/calendar" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">Academic Calendar</h2><p>Coming soon...</p></div>} />
            <Route path="/fees" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">Fees Page</h2><p>Coming soon...</p></div>} />
            <Route path="/notifications" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">Notifications</h2><p>Coming soon...</p></div>} />
            <Route path="/diary" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">Student Diary</h2><p>Coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StudentLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
