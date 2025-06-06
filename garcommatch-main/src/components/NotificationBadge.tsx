
import { Badge } from "@/components/ui/badge";

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

const NotificationBadge = ({ count, className = "" }: NotificationBadgeProps) => {
  if (count === 0) return null;

  return (
    <Badge 
      variant="destructive" 
      className={`absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center text-xs ${className}`}
    >
      {count > 99 ? "99+" : count}
    </Badge>
  );
};

export default NotificationBadge;
