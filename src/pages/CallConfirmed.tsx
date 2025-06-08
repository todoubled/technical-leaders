import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, Video, Trophy } from 'lucide-react';

export default function CallConfirmed() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white pt-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            You're Booked
          </h1>
          <p className="text-xl sm:text-2xl mb-4 animate-fade-in animation-delay-200">
          In our 15 minutes together, we'll pinpoint the #1 thing that's in your way to scaling your income, influence, and impact.
          </p>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          3 Quick Steps to Prep for Our Call
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Step 1</h3>
                <p className="text-muted-foreground">Accept your calendar invite to secure your spot</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Video className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Step 2</h3>
                <p className="text-muted-foreground">Watch the preview videos to maximize our time together</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Step 3</h3>
                <p className="text-muted-foreground">Check out our <a href="https://technical-leaders.notion.site/WINS-3ca593812c8946778bcde0271e6eefb2" className="underline" target="_blank">Wall of Wins</a> for inspiration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Watch This Before Our Call
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lVKg4K5cc-c"
                  title="Watch This Before Our Call"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}