import { Users } from "lucide-react";
import { useState, useEffect } from "react";

export const MemberCount = () => {
  const [count, setCount] = useState(1234);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Users className="w-4 h-4" />
        <span>Total Members</span>
      </div>
      <p className="text-4xl font-bold tracking-tight">{count.toLocaleString()}</p>
    </div>
  );
};