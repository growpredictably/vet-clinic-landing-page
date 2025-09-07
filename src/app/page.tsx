'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Star, Clock, Shield, Heart } from 'lucide-react';

export default function VetClinicLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className=\"min-h-screen bg-white\">
      {/* Top Bar */}
      <div className=\"bg-blue-900 text-white py-2 px-4\">
        <div className=\"max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm\">
          <div className=\"flex items-center space-x-6\">
            <div className=\"flex items-center space-x-2\">
              <MapPin className=\"w-4 h-4\" />
              <span>Strada Maria Rosetti 26A, București 020487</span>
            </div>
            <div className=\"flex items-center space-x-2\">
              <Phone className=\"w-4 h-4\" />
              <span>0720.123.123</span>
            </div>
          </div>
          <div className=\"flex items-center space-x-4\">
            <Facebook className=\"w-4 h-4 cursor-pointer hover:text-blue-200\" />
            <Instagram className=\"w-4 h-4 cursor-pointer hover:text-blue-200\" />
            <Twitter className=\"w-4 h-4 cursor-pointer hover:text-blue-200\" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className=\"bg-white shadow-md sticky top-0 z-50\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"flex justify-between items-center py-4\">
            <div className=\"text-2xl font-bold text-blue-900\">
              VetCare<span className=\"text-blue-600\">Plus</span>
            </div>
            <div className=\"hidden md:flex space-x-8\">
              <button onClick={() => scrollToSection('home')} className=\"text-gray-700 hover:text-blue-600 transition-colors\">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className=\"text-gray-700 hover:text-blue-600 transition-colors\">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className=\"text-gray-700 hover:text-blue-600 transition-colors\">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className=\"text-gray-700 hover:text-blue-600 transition-colors\">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className=\"text-gray-700 hover:text-blue-600 transition-colors\">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id=\"home\" className=\"bg-gradient-to-br from-blue-50 to-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">
            <div>
              <h1 className=\"text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
                Caring for Your <span className=\"text-blue-600\">Beloved Pets</span> with Professional Excellence
              </h1>
              <p className=\"text-xl text-gray-600 mb-8\">
                Your trusted family veterinary clinic providing comprehensive healthcare services for all your furry family members.
              </p>
              <div className=\"flex flex-wrap gap-4 mb-8\">
                <div className=\"flex items-center space-x-2\">
                  <Shield className=\"w-5 h-5 text-blue-600\" />
                  <span className=\"text-gray-700\">Licensed Veterinarians</span>
                </div>
                <div className=\"flex items-center space-x-2\">
                  <Heart className=\"w-5 h-5 text-blue-600\" />
                  <span className=\"text-gray-700\">Compassionate Care</span>
                </div>
                <div className=\"flex items-center space-x-2\">
                  <Clock className=\"w-5 h-5 text-blue-600\" />
                  <span className=\"text-gray-700\">Emergency Services</span>
                </div>
              </div>
            </div>
            
            {/* Appointment Form */}
            <div className=\"bg-white rounded-lg shadow-xl p-8\">
              <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">Book an Appointment</h3>
              <form onSubmit={handleSubmit} className=\"space-y-4\">
                <div>
                  <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-1\">
                    Full Name *
                  </label>
                  <input
                    type=\"text\"
                    id=\"name\"
                    name=\"name\"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500\"
                    placeholder=\"Your full name\"
                  />
                </div>
                
                <div>
                  <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-1\">
                    Phone Number *
                  </label>
                  <input
                    type=\"tel\"
                    id=\"phone\"
                    name=\"phone\"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500\"
                    placeholder=\"Your phone number\"
                  />
                </div>
                
                <div>
                  <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-1\">
                    Email Address *
                  </label>
                  <input
                    type=\"email\"
                    id=\"email\"
                    name=\"email\"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500\"
                    placeholder=\"your.email@example.com\"
                  />
                </div>
                
                <div>
                  <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-1\">
                    Message
                  </label>
                  <textarea
                    id=\"message\"
                    name=\"message\"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500\"
                    placeholder=\"Tell us about your pet's needs...\"
                  />
                </div>
                
                <button
                  type=\"submit\"
                  disabled={isSubmitting}
                  className=\"w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors\"
                >
                  {isSubmitting ? 'Sending...' : 'Send Appointment Request'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className=\"text-green-600 text-sm text-center\">
                    Thank you! We'll contact you soon to confirm your appointment.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className=\"text-red-600 text-sm text-center\">
                    Sorry, there was an error sending your request. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id=\"services\" className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-3xl lg:text-4xl font-bold text-gray-900 mb-4\">
              Our Professional Services
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              We provide comprehensive veterinary care with state-of-the-art equipment and experienced professionals
            </p>
          </div>
          
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            {/* Service Cards */}
            <div className=\"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow\">
              <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4\">
                <Heart className=\"w-6 h-6 text-blue-600\" />
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">General Checkups</h3>
              <p className=\"text-gray-600\">
                Regular health examinations to keep your pets healthy and detect any issues early.
              </p>
            </div>
            
            <div className=\"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow\">
              <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4\">
                <Shield className=\"w-6 h-6 text-blue-600\" />
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">Vaccinations</h3>
              <p className=\"text-gray-600\">
                Complete vaccination programs to protect your pets from common diseases.
              </p>
            </div>
            
            <div className=\"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow\">
              <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4\">
                <Clock className=\"w-6 h-6 text-blue-600\" />
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">Emergency Care</h3>
              <p className=\"text-gray-600\">
                24/7 emergency services for urgent medical situations and critical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id=\"pricing\" className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-3xl lg:text-4xl font-bold text-gray-900 mb-4\">
              Transparent Pricing
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Quality veterinary care at fair and transparent prices
            </p>
          </div>
          
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            <div className=\"bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow\">
              <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">Basic Care</h3>
              <div className=\"text-4xl font-bold text-blue-600 mb-6\">150 RON</div>
              <ul className=\"space-y-3 mb-8\">
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">General checkup</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Basic consultation</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Health assessment</span>
                </li>
              </ul>
              <button className=\"w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors\">
                Book Now
              </button>
            </div>
            
            <div className=\"bg-blue-50 rounded-lg p-8 border-2 border-blue-200 hover:shadow-lg transition-shadow\">
              <div className=\"text-center mb-4\">
                <span className=\"bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold\">
                  Most Popular
                </span>
              </div>
              <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">Complete Care</h3>
              <div className=\"text-4xl font-bold text-blue-600 mb-6\">300 RON</div>
              <ul className=\"space-y-3 mb-8\">
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Comprehensive checkup</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Vaccination included</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Blood tests</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Health report</span>
                </li>
              </ul>
              <button className=\"w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors\">
                Book Now
              </button>
            </div>
            
            <div className=\"bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow\">
              <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">Premium Care</h3>
              <div className=\"text-4xl font-bold text-blue-600 mb-6\">500 RON</div>
              <ul className=\"space-y-3 mb-8\">
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Full health screening</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Advanced diagnostics</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Dental examination</span>
                </li>
                <li className=\"flex items-center\">
                  <span className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></span>
                  <span className=\"text-gray-800\">Follow-up consultation</span>
                </li>
              </ul>
              <button className=\"w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors\">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id=\"testimonials\" className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-3xl lg:text-4xl font-bold text-gray-900 mb-4\">
              What Our Clients Say
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Trusted by hundreds of pet owners in Bucharest
            </p>
          </div>
          
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">
            <div className=\"bg-white rounded-lg shadow-lg p-8\">
              <div className=\"flex items-center mb-4\">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
                ))}
              </div>
              <p className=\"text-gray-600 mb-6\">
                \"The staff at VetCare Plus are absolutely wonderful! They took such great care of my dog during his surgery. 
                The facility is clean, modern, and the veterinarians are clearly experienced and caring.\"
              </p>
              <div className=\"flex items-center\">
                <div className=\"w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center\">
                  <span className=\"text-gray-600 font-semibold\">MP</span>
                </div>
                <div>
                  <div className=\"font-semibold text-gray-900\">Maria Popescu</div>
                  <div className=\"text-gray-600\">Dog Owner</div>
                </div>
              </div>
            </div>
            
            <div className=\"bg-white rounded-lg shadow-lg p-8\">
              <div className=\"flex items-center mb-4\">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
                ))}
              </div>
              <p className=\"text-gray-600 mb-6\">
                \"I've been bringing my cats here for over 3 years. The veterinarians are knowledgeable, 
                the prices are fair, and they always take time to explain everything clearly. Highly recommended!\"
              </p>
              <div className=\"flex items-center\">
                <div className=\"w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center\">
                  <span className=\"text-gray-600 font-semibold\">AI</span>
                </div>
                <div>
                  <div className=\"font-semibold text-gray-900\">Alexandru Ionescu</div>
                  <div className=\"text-gray-600\">Cat Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section id=\"contact\" className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-3xl lg:text-4xl font-bold text-gray-900 mb-4\">
              Visit Our Clinic
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Conveniently located in the heart of Bucharest
            </p>
          </div>
          
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">
            <div>
              <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">Contact Information</h3>
              <div className=\"space-y-4\">
                <div className=\"flex items-center\">
                  <MapPin className=\"w-6 h-6 text-blue-600 mr-3\" />
                  <span className=\"text-gray-700\">Strada Maria Rosetti 26A, București 020487</span>
                </div>
                <div className=\"flex items-center\">
                  <Phone className=\"w-6 h-6 text-blue-600 mr-3\" />
                  <span className=\"text-gray-700\">0720.123.123</span>
                </div>
                <div className=\"flex items-center\">
                  <Mail className=\"w-6 h-6 text-blue-600 mr-3\" />
                  <span className=\"text-gray-700\">contact@vetcareplus.ro</span>
                </div>
              </div>
              
              <div className=\"mt-8\">
                <h4 className=\"text-xl font-semibold text-gray-900 mb-4\">Opening Hours</h4>
                <div className=\"space-y-2\">
                  <div className=\"flex justify-between\">
                    <span className=\"text-gray-600\">Monday - Friday</span>
                    <span className=\"text-gray-900 font-medium\">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className=\"flex justify-between\">
                    <span className=\"text-gray-600\">Saturday</span>
                    <span className=\"text-gray-900 font-medium\">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className=\"flex justify-between\">
                    <span className=\"text-gray-600\">Sunday</span>
                    <span className=\"text-gray-900 font-medium\">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className=\"flex justify-between\">
                    <span className=\"text-red-600 font-medium\">Emergency</span>
                    <span className=\"text-red-600 font-medium\">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className=\"h-96 bg-gray-200 rounded-lg overflow-hidden\">
              <iframe
                src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8486168!2d26.0966!3d44.4378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201f4f1b6b1b1%3A0x1b1b1b1b1b1b1b1b!2sStrada%20Maria%20Rosetti%2026A%2C%20Bucure%C8%99ti%20020487!5e0!3m2!1sen!2sro!4v1234567890123\"
                width=\"100%\"
                height=\"100%\"
                style={{ border: 0 }}
                allowFullScreen
                loading=\"lazy\"
                referrerPolicy=\"no-referrer-when-downgrade\"
                title=\"VetCare Plus Location\"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className=\"fixed bottom-0 left-0 right-0 bg-blue-900 text-white py-4 px-4 z-50\">
        <div className=\"max-w-7xl mx-auto flex items-center justify-between\">
          <div className=\"flex items-center space-x-3\">
            <Phone className=\"w-5 h-5\" />
            <span className=\"font-medium\">Call to make an appointment</span>
          </div>
          <a 
            href=\"tel:0720123123\"
            className=\"bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition-colors\"
          >
            0720.123.123
          </a>
        </div>
      </div>
    </div>
  );
}