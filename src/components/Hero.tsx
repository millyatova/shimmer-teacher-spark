
import { BookOpen, Lightbulb, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-warm-blue-50 via-white to-soft-green-50 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-warm-yellow-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-soft-green-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-warm-blue-200 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-warm-yellow-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Visual Element */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="relative">
                  <BookOpen className="w-16 h-16 text-warm-blue-600 animate-float" />
                  <Sparkles className="w-6 h-6 text-warm-yellow-500 absolute -top-2 -right-2" />
                </div>
                <Heart className="w-12 h-12 text-red-400 animate-float" style={{ animationDelay: '1s' }} />
                <div className="relative">
                  <Lightbulb className="w-14 h-14 text-warm-yellow-600 animate-float" style={{ animationDelay: '2s' }} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-warm-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's Make{' '}
            <span className="bg-gradient-to-r from-warm-blue-600 to-soft-green-600 bg-clip-text text-transparent">
              Teaching
            </span>{' '}
            <span className="bg-gradient-to-r from-warm-yellow-500 to-warm-yellow-600 bg-clip-text text-transparent">
              Shine
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Built with care to empower incredible educators like you.
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Join us in exploring a new way to support your passion for teaching and nurture the growth you inspire every day.
          </p>

          {/* Product Purpose Statement */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-warm-blue-200/30 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-warm-blue-500 to-soft-green-500 rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                Give feedback to a student in 30 seconds — we'll turn it into a professional report that parents can understand.
              </p>
            </div>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-warm-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-soft-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-warm-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
