import { useState, useEffect } from "react";
import { Signal } from "lucide-react";

export const StatusIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1);
      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Signal className="w-4 h-4" />
        <span>Status</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-success" : "bg-danger"}`} />
          <span className="font-medium">{isOnline ? "Connected" : "Reconnecting..."}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Last update: {lastUpdate.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};