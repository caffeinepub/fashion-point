import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut } from 'lucide-react';

export function AuthStatus() {
  const { identity, clear } = useInternetIdentity();

  if (!identity) return null;

  const principal = identity.getPrincipal().toString();
  const shortPrincipal = `${principal.slice(0, 8)}...${principal.slice(-6)}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">{shortPrincipal}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="px-2 py-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              Signed In
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground break-all font-mono">{principal}</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={clear} className="gap-2 cursor-pointer">
          <LogOut className="w-4 h-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
