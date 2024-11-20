import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

type Member = {
  id: string;
  username: string;
  joinedAt: string;
  status: "active" | "left" | "banned";
  lastSeen: string;
};

export const MembersList = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Temporary mock data until the Python backend is ready
        setMembers([
          {
            id: "1",
            username: "user123",
            joinedAt: new Date().toISOString(),
            status: "active",
            lastSeen: new Date().toISOString(),
          },
        ]);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch members data. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    const interval = setInterval(fetchMembers, 5000); // Refresh every 5 seconds
    fetchMembers(); // Initial fetch

    return () => clearInterval(interval);
  }, [toast]);

  const getStatusBadge = (status: Member["status"]) => {
    const styles = {
      active: "bg-success text-success-foreground",
      left: "bg-muted text-muted-foreground",
      banned: "bg-destructive text-destructive-foreground",
    };

    return (
      <Badge className={styles[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (loading) {
    return <div>Loading members...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Lista de Membros</h3>
        <Badge variant="outline">{members.length} membros</Badge>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Usuário</TableHead>
            <TableHead>Entrou em</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Última atividade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>@{member.username}</TableCell>
              <TableCell>
                {new Date(member.joinedAt).toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell>{getStatusBadge(member.status)}</TableCell>
              <TableCell>
                {new Date(member.lastSeen).toLocaleDateString("pt-BR")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};