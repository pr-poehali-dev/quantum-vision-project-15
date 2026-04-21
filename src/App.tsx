import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Etchmiadzin from "./pages/Etchmiadzin";
import KhorVirap from "./pages/KhorVirap";
import Noravank from "./pages/Noravank";
import Sevan from "./pages/Sevan";
import GarniGeghard from "./pages/GarniGeghard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/etchmiadzin" element={<Etchmiadzin />} />
          <Route path="/khor-virap" element={<KhorVirap />} />
          <Route path="/noravank" element={<Noravank />} />
          <Route path="/sevan" element={<Sevan />} />
          <Route path="/garni-geghard" element={<GarniGeghard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
