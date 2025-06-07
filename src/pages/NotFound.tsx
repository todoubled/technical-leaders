import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Show toast notification
    toast({
      title: "Page not found",
      description: `The page "${location.pathname}" doesn't exist. Redirecting to home...`,
      variant: "destructive",
    });
    
    // Redirect to home page after a short delay
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [location.pathname, navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Page not found</p>
        <p className="text-sm text-muted-foreground">Redirecting to home...</p>
      </div>
    </div>
  );
};

export default NotFound;
