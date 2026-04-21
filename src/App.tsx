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
import Vagharshapat from "./pages/housing/Vagharshapat";
import Erevan from "./pages/housing/Erevan";
import Yeghegnadzor from "./pages/housing/Yeghegnadzor";
import SevanHousing from "./pages/housing/Sevan";
import Garni from "./pages/housing/Garni";
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
          <Route path="/housing/vagharshapat" element={<Vagharshapat />} />
          <Route path="/housing/erevan" element={<Erevan />} />
          <Route path="/housing/yeghegnadzor" element={<Yeghegnadzor />} />
          <Route path="/housing/sevan" element={<SevanHousing />} />
          <Route path="/housing/garni" element={<Garni />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
