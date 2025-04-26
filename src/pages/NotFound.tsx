
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary-light to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-3xl font-semibold text-text mb-4">Oops! Page Not Found</h2>
        <p className="text-text-light mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark"
          onClick={() => window.location.href = '/kd-web-design-studio/'}
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
