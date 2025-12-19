import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import MethodologyPage from "./pages/Methodology";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import AdminWrite from "./pages/AdminWrite";
import NotFound from "./pages/NotFound";
import GamePreload from "./pages/GamePreload";

const queryClient = new QueryClient();

const GAME_COMPLETED_KEY = 'game_preload_completed';

const App = () => {
  const [showGame, setShowGame] = useState<boolean | null>(null);

  useEffect(() => {
    const completed = localStorage.getItem(GAME_COMPLETED_KEY);
    setShowGame(!completed);
  }, []);

  const handleGameComplete = () => {
    localStorage.setItem(GAME_COMPLETED_KEY, 'true');
    setShowGame(false);
  };

  // Loading state
  if (showGame === null) {
    return <div className="min-h-screen bg-background" />;
  }

  if (showGame) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <GamePreload onEnter={handleGameComplete} />
      </ThemeProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/methodology" element={<MethodologyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/manage" element={<AdminWrite />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
