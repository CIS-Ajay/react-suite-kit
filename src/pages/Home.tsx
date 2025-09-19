import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/enhanced-card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with modern React and optimized for performance.',
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'JWT authentication and secure API integration.',
  },
  {
    icon: Users,
    title: 'User Friendly',
    description: 'Intuitive interface designed for the best user experience.',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Production-ready code with best practices and clean architecture.',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Modern Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete React application with authentication, routing, and state management. 
            Built with TypeScript, Tailwind CSS, and Redux Toolkit.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="gradient" asChild>
            <Link to="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Why Choose Our Dashboard?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with the latest technologies and best practices to give you the best experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="gradient" className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary-foreground">100+</CardTitle>
            <CardDescription className="text-primary-foreground/80">Components</CardDescription>
          </CardHeader>
        </Card>
        <Card variant="gradient" className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary-foreground">99.9%</CardTitle>
            <CardDescription className="text-primary-foreground/80">Uptime</CardDescription>
          </CardHeader>
        </Card>
        <Card variant="gradient" className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary-foreground">24/7</CardTitle>
            <CardDescription className="text-primary-foreground/80">Support</CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default Home;