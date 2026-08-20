import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DataSecurity from "./pages/DataSecurity";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PackageStarter from "./pages/PackageStarter";
import PackageProfessional from "./pages/PackageProfessional";
import PackageGrowth from "./pages/PackageGrowth";
import PackageCustom from "./pages/PackageCustom";
import ServiceLeadQualification from "./pages/ServiceLeadQualification";
import ServiceAppointmentBooking from "./pages/ServiceAppointmentBooking";
import ServiceCrmIntegration from "./pages/ServiceCrmIntegration";


// --- New Service Pages ---
import ServiceChatbot from "./pages/ServiceChatbot";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      
      {/* Services */}
      <Route path={"/services/chatbot"} component={ServiceChatbot} />
      <Route path={"/services/lead-qualification"} component={ServiceLeadQualification} />
      <Route path={"/services/appointment-booking"} component={ServiceAppointmentBooking} />
      <Route path={"/services/crm-integration"} component={ServiceCrmIntegration} />

      {/* Packages */}
      <Route path={"/packages/starter"} component={PackageStarter} />
      <Route path={"/packages/professional"} component={PackageProfessional} />
      <Route path={"/packages/growth"} component={PackageGrowth} />
      <Route path={"/packages/custom"} component={PackageCustom} />

      {/* Legal & Utility */}
      <Route path={"/404"} component={NotFound} />
      <Route path={"/data-security"} component={DataSecurity} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-of-use"} component={TermsOfUse} />
      
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;