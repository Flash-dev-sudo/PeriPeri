import { Switch, Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import ContactPage from '@/pages/ContactPage';
import Navigation from '@/components/Navigation';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/contact" component={ContactPage} />
            <Route>
              <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
            </Route>
          </Switch>
        </main>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;