import { useState, useEffect } from "react";
import { LogIn, LogOut } from "lucide-react";

type Activity = {
  id: string;
  type: "join" | "leave";
  username: string;
  timestamp: Date;
};

export const ActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newActivity: Activity = {
        id: Math.random().toString(36).substr(2, 9),
        type: Math.random() > 0.5 ? "join" : "leave",
        username: `user${Math.floor(Math.random() * 1000)}`,
        timestamp: new Date(),
      };

      setActivities(prev => [newActivity, ...prev].slice(0, 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-neutral transition-all animate-fade-up"
          >
            <div className={`p-2 rounded-full ${
              activity.type === "join" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
            }`}>
              {activity.type === "join" ? <LogIn className="w-4 h-4" /> : <LogOut className="w-4 h-4" />}
            </div>
            <div>
              <p className="font-medium">@{activity.username}</p>
              <p className="text-sm text-muted-foreground">
                {activity.type === "join" ? "Joined" : "Left"} {new Date(activity.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};