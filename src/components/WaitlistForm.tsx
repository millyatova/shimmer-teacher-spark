
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WaitlistForm = ({ title, subtitle, placeholder, buttonText }: { title: string, subtitle: string, placeholder: string, buttonText: string }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxD9MTJPmB6B7P0a0WunUozaiVsAuYL4NRCulVippKt-mDwV4nRG8uOZXHdjyBDa_MK/exec';
    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: JSON.stringify({ email, phone }),
        mode: 'no-cors',
      });

      toast({
        title: "Successfully Sent!",
        description: "Thank you for joining the waitlist. We'll be in touch soon!",
      });

      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error!', error);
      toast({
        title: "Error",
        description: "Could not submit the form. Please try again.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-warm-blue-100 to-soft-green-100 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-warm-blue-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-warm-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 py-6 text-lg border-2 border-gray-200 focus:border-warm-blue-400 rounded-xl transition-colors"
                />
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="pl-12 py-6 text-lg border-2 border-gray-200 focus:border-warm-blue-400 rounded-xl transition-colors"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-warm-blue-600 to-soft-green-600 hover:from-warm-blue-700 hover:to-soft-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Joining...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>{buttonText}</span>
                </div>
              )}
            </Button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            We respect your privacy and will never spam you. 
            <br />
            Join thousands of educators already on our waitlist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;
