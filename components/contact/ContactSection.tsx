'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch with Our Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have a question, project inquiry, or technical requirement? Send us a message and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-600 max-w-md text-xs sm:text-sm mb-6 leading-relaxed">
                  Thank you for reaching out, <span className="text-blue-600 font-semibold">{formData.name}</span>. We have received your message and will reply to <span className="text-slate-900 font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Cloud & DevOps Engineering">Cloud &amp; DevOps Engineering</option>
                    <option value="Applied AI & Agents">Applied AI &amp; Agents</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Cybersecurity & Audit">Cybersecurity &amp; Compliance</option>
                    <option value="Partnership & Press">Partnership &amp; Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you? Describe your requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Direct Contact Details</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Reach out through our direct communication channels.
                </p>
              </div>
              
              <div className="space-y-3.5 text-xs">
                <a 
                  href="mailto:contact@bloomverse.com" 
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 text-slate-700 hover:text-blue-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Email Us Directly</div>
                    <div className="font-bold text-slate-900 text-sm">contact@bloomverse.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+14158903420" 
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 text-slate-700 hover:text-blue-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Phone Support</div>
                    <div className="font-bold text-slate-900 text-sm">+1 (415) 890-3420</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Operating Hours</div>
                    <div className="font-bold text-slate-900 text-xs">Mon &ndash; Fri (9:00 AM &ndash; 6:00 PM)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

