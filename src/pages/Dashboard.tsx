import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/enhanced-card';
import { Button } from '@/components/ui/enhanced-button';
import { useAuth } from '@/hooks/useAuth';

// Mock data for dashboard
const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Orders',
    value: '324',
    change: '-5.2%',
    trend: 'down',
    icon: ShoppingCart,
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+2.1%',
    trend: 'up',
    icon: TrendingUp,
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Created new order',
    time: '2 minutes ago',
    amount: '$249.99',
  },
  {
    id: 2,
    user: 'Sarah Smith',
    action: 'Updated profile',
    time: '5 minutes ago',
    amount: null,
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'Cancelled subscription',
    time: '10 minutes ago',
    amount: '-$29.99',
  },
  {
    id: 4,
    user: 'Emily Davis',
    action: 'Completed purchase',
    time: '15 minutes ago',
    amount: '$89.99',
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.name || 'User'}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 text-success mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-destructive mr-1" />
                )}
                <span className={stat.trend === 'up' ? 'text-success' : 'text-destructive'}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Card */}
        <Card variant="elevated" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue for the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center space-y-2">
                <Activity className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Chart component would go here</p>
                <p className="text-sm text-muted-foreground">
                  Connect to your analytics API to display real data
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card variant="elevated">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user interactions</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  {activity.amount && (
                    <div className={`text-sm font-medium ${
                      activity.amount.startsWith('-') ? 'text-destructive' : 'text-success'
                    }`}>
                      {activity.amount}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks you can perform from here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient">Create New Order</Button>
            <Button variant="outline">Export Data</Button>
            <Button variant="outline">Generate Report</Button>
            <Button variant="outline">Manage Users</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;