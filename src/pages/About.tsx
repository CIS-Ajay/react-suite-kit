import React from 'react';
import { Code, Database, Palette, Shield, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/enhanced-card';

const technologies = [
  {
    icon: Code,
    name: 'React 18',
    description: 'Latest React with hooks and functional components',
    color: 'text-blue-500',
  },
  {
    icon: Zap,
    name: 'Vite',
    description: 'Lightning fast build tool and development server',
    color: 'text-yellow-500',
  },
  {
    icon: Palette,
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for responsive design',
    color: 'text-cyan-500',
  },
  {
    icon: Database,
    name: 'Redux Toolkit',
    description: 'Predictable state container for JavaScript apps',
    color: 'text-purple-500',
  },
  {
    icon: Shield,
    name: 'JWT Auth',
    description: 'Secure authentication with JSON Web Tokens',
    color: 'text-green-500',
  },
  {
    icon: Smartphone,
    name: 'Responsive',
    description: 'Mobile-first design that works on all devices',
    color: 'text-pink-500',
  },
];

const About: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About This Project</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive React dashboard application showcasing modern web development practices,
          built with TypeScript, state management, and a beautiful responsive design.
        </p>
      </div>

      {/* Description */}
      <Card variant="elevated" padding="lg">
        <CardHeader>
          <CardTitle className="text-2xl">Project Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            This dashboard application demonstrates a complete modern React setup with all the essential
            features you need for a production-ready application. It includes user authentication,
            protected routes, state management, and a responsive design system.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The project follows industry best practices including TypeScript for type safety,
            Redux Toolkit for state management, React Router for navigation, and Axios for API calls.
            The UI is built with Tailwind CSS and shadcn/ui components for a consistent and beautiful design.
          </p>
        </CardContent>
      </Card>

      {/* Technologies */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
          <p className="text-muted-foreground">
            Built with the latest and most reliable web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} variant="elevated" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                    <tech.icon className={`h-5 w-5 ${tech.color}`} />
                  </div>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{tech.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card variant="glass">
            <CardHeader>
              <CardTitle>🔐 Authentication System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• JWT token-based authentication</li>
                <li>• Secure token storage with localStorage</li>
                <li>• Protected routes and route guards</li>
                <li>• Automatic token refresh</li>
                <li>• User session management</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle>🎨 Modern UI/UX</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Responsive design for all devices</li>
                <li>• Dark theme with modern aesthetics</li>
                <li>• Smooth animations and transitions</li>
                <li>• Accessible components</li>
                <li>• Consistent design system</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle>⚡ Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Vite for fast development and builds</li>
                <li>• Code splitting and lazy loading</li>
                <li>• Optimized bundle size</li>
                <li>• Efficient re-renders with React hooks</li>
                <li>• Production-ready optimizations</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle>🛠️ Developer Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• TypeScript for type safety</li>
                <li>• ESLint and Prettier configuration</li>
                <li>• Absolute imports with path mapping</li>
                <li>• Reusable component architecture</li>
                <li>• Clean and maintainable code</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;