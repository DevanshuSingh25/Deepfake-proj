import { useState } from 'react';
import { Shield, Lock, Smartphone, User, Mail } from 'lucide-react';
import { Card } from '@/components/Card';
import { Tabs } from '@/components/Tabs';
import { Button } from '@/components/Button';
import { Toast, ToastType } from '@/components/Toast';

export default function Accounts() {
  const [toast, setToast] = useState<{ type: ToastType; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent, action: string) => {
    e.preventDefault();
    setToast({ type: 'warning', message: `${action} - Backend integration coming soon` });
  };

  const loginForm = (
    <form onSubmit={(e) => handleSubmit(e, 'Login')} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="••••••••"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember"
          className="w-4 h-4 rounded border-input focus:ring-2 focus:ring-ring"
        />
        <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
          Remember me
        </label>
      </div>
      <Button type="submit" className="w-full" size="lg">
        Sign In
      </Button>
      <a href="#forgot" className="block text-center text-sm text-primary hover:underline">
        Forgot password?
      </a>
    </form>
  );

  const registerForm = (
    <form onSubmit={(e) => handleSubmit(e, 'Registration')} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          required
          minLength={8}
          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="••••••••"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Confirm Password</label>
        <input
          type="password"
          required
          minLength={8}
          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="••••••••"
        />
      </div>
      <Button type="submit" className="w-full" size="lg">
        Create Account
      </Button>
    </form>
  );

  const profileForm = (
    <form onSubmit={(e) => handleSubmit(e, 'Profile update')} className="space-y-4">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          readOnly
          className="w-full px-4 py-3 rounded-lg bg-muted border border-input cursor-not-allowed"
          placeholder="Not logged in"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          readOnly
          className="w-full px-4 py-3 rounded-lg bg-muted border border-input cursor-not-allowed"
          placeholder="Not logged in"
        />
      </div>
      <Button type="submit" className="w-full" size="lg" disabled>
        Edit Profile
      </Button>
    </form>
  );

  const tabs = [
    { label: 'Login', content: loginForm },
    { label: 'Register', content: registerForm },
    { label: 'Profile', content: profileForm },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Panel - Brand Promise */}
            <div className="lg:sticky lg:top-24">
              <Card className="bg-gradient-hero text-white p-8 lg:p-12">
                <Shield className="w-16 h-16 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Secure Access</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join Deepfake Guard to access advanced detection features and manage your analysis history
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5" />
                    <span>Secure uploads & encrypted results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    <span>Privacy-first design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5" />
                    <span>One account, multi-device access</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Panel - Auth Forms */}
            <Card glass>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Account</h2>
                </div>
                <Tabs tabs={tabs} />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
