import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import Methodology from "./pages/Methodology";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Offer from "./pages/Offer";
import FinansovyyAnalitik from "./pages/FinansovyyAnalitik";

function Router() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/methodology" component={Methodology} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/offer" component={Offer} />
          <Route path="/finansovyy-analitik-dlya-biznesa" component={FinansovyyAnalitik} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
