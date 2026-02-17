import { Button } from '@/components/ui/button';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { AuthStatus } from '@/components/auth/AuthStatus';

export function AppHeader() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity && !identity.getPrincipal().isAnonymous();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/generated/fashion-point-logo.dim_512x512.png"
                alt="Fashion Point Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Fashion Point</span>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={handleHomeClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <AuthStatus />
            ) : (
              <Button
                onClick={login}
                disabled={loginStatus === 'logging-in' || loginStatus === 'initializing'}
                variant="default"
              >
                {loginStatus === 'logging-in' ? 'Signing In...' : 'Sign In'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
