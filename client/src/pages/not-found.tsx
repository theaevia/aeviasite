import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">404 Page Not <span className="text-primary">Found</span></h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you take a wrong turn?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
