import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export function LandingPage() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'fashion-point'
  );

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Your Style, Elevated</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    Fashion Point
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                    Discover your unique style and connect with fashion enthusiasts worldwide
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Learn More
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-muted-foreground">Style Posts</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="text-sm text-muted-foreground">User Rating</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <img
                  src="/assets/generated/fashion-point-hero.dim_1600x900.png"
                  alt="Fashion Point Hero"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Why Choose Fashion Point?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to express your style and discover new trends
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Trend Discovery</CardTitle>
                  <CardDescription>
                    Stay ahead of the curve with real-time fashion trends and personalized
                    recommendations
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Community Connect</CardTitle>
                  <CardDescription>
                    Join a vibrant community of fashion lovers and share your unique style with the
                    world
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Instant Inspiration</CardTitle>
                  <CardDescription>
                    Get instant outfit ideas and styling tips powered by our smart recommendation
                    engine
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2">
              <CardContent className="p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Ready to Transform Your Style?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Join thousands of fashion enthusiasts and start your style journey today
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Sign Up Now
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                      View Gallery
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/fashion-point-logo.dim_512x512.png"
                  alt="Fashion Point Logo"
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold">Fashion Point</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your destination for style inspiration and fashion community
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <SiX className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Fashion Point. All rights reserved.</p>
            <p>
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
