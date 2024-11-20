import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MemberCount } from "@/components/MemberCount";
import { ActivityFeed } from "@/components/ActivityFeed";
import { ActivityChart } from "@/components/ActivityChart";
import { StatusIndicator } from "@/components/StatusIndicator";
import { MembersList } from "@/components/MembersList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <header className="text-center space-y-2">
          <p className="text-sm font-medium text-muted-foreground">DASHBOARD</p>
          <h1 className="text-4xl font-bold tracking-tight">Telegram Analytics</h1>
        </header>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="members">Membros</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 backdrop-blur-sm bg-white/50 border-neutral-200/50 animate-scale-in">
                <MemberCount />
              </Card>
              <Card className="p-6 backdrop-blur-sm bg-white/50 border-neutral-200/50 animate-scale-in [animation-delay:100ms]">
                <StatusIndicator />
              </Card>
              <Card className="p-6 backdrop-blur-sm bg-white/50 border-neutral-200/50 animate-scale-in [animation-delay:200ms] md:col-span-2 lg:col-span-1">
                <ActivityChart />
              </Card>
            </div>

            <Card className="p-6 backdrop-blur-sm bg-white/50 border-neutral-200/50 animate-fade-up">
              <ActivityFeed />
            </Card>
          </TabsContent>

          <TabsContent value="members">
            <Card className="p-6 backdrop-blur-sm bg-white/50 border-neutral-200/50">
              <MembersList />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;