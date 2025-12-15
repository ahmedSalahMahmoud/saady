import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'تم إرسال رسالتك بنجاح',
      description: 'سنتواصل معك في أقرب وقت ممكن',
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-32 lg:py-40 gradient-dark">
      <div className="container-rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            تواصل معنا
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm md:text-base font-medium text-white mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    type="text"
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-medium text-white mb-2">
                    رقم الجوال
                  </label>
                  <Input
                    type="tel"
                    placeholder="05xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-base md:text-lg font-medium text-white mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-base md:text-lg font-medium text-white mb-2">
                  الرسالة
                </label>
                <Textarea
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full text-base md:text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  'جاري الإرسال...'
                ) : (
                  <>
                    <Send className="w-6 h-6 ml-2" />
                    إرسال الرسالة
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">العنوان</h4>
                  <p className="text-white/70 text-sm md:text-base">مكة المكرمة - الشوقية شارع عبد القادر كوشك</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">الهاتف</h4>
                  <a href="tel:00966502422788" className="text-white/70 text-sm md:text-base hover:text-accent transition-colors" dir="ltr">
                    00966502422788
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:support@saadelite.com" className="text-white/70 text-sm md:text-base hover:text-accent transition-colors" dir="ltr">
                    support@saadelite.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-48 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.9990858234654!2d39.82681!3d21.42669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzM2LjEiTiAzOcKwNDknMzYuNSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
