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
import { Attendance } from "./components/Attendance";
import { Calendar } from "./components/Calendar";
import { Fees } from "./components/Fees";
import { Notifications } from "./components/Notifications";
import { Diary } from "./components/Diary";
import { Achievements } from "./components/Achievements";
import { Certifications } from "./components/Certifications";
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
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StudentLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
