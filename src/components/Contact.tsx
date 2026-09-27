import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'info' | 'error';
    text: string;
  } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatusMessage({
        type: 'error',
        text: 'Please correct the highlighted fields before sending.',
      });
      return;
    }

    // Direct mailto construction with pre-filled content (honest & transparent fallback)
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello Anudeesh,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setStatusMessage({
      type: 'info',
      text: 'Preparing your message... Opening your default email client with your pre-filled inquiry.',
    });

    // Launch mailto
    window.location.href = mailtoUrl;

    // Reset form
    setTimeout(() => {
      setStatusMessage({
        type: 'success',
        text: 'Email draft generated! You can also reach me directly at ' + PORTFOLIO_DATA.personal.email,
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            "I'm always interested in learning, building, and exploring new technologies."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you have an inquiry regarding computer vision projects, software development opportunities, academic collaborations, or tech discussions, feel free to reach out.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Mail className="w-4 h-4 text-brand-cyan" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-brand-cyan break-all transition-colors block"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                {copied && (
                  <span className="text-[11px] font-mono text-emerald-400 block animate-in fade-in">
                    ✓ Email address copied to clipboard
                  </span>
                )}
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-4 h-4 text-brand-violet" />
                  <span>Location</span>
                </div>
                <div className="font-heading font-semibold text-sm sm:text-base text-white">
                  {PORTFOLIO_DATA.personal.location}
                </div>
                <span className="text-xs text-slate-400 font-mono block">
                  Telangana, India
                </span>
              </div>

              {/* Quick Notice */}
              <div className="p-4 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fastest response via email. Available for technical discussions, student developer initiatives, and internship projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Mailto Fallback */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Fill out the form below. Your message will be formatted directly into an email draft.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/90 border text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500/70 focus:ring-rose-500/50'
                          : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider"
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/90 border text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500/70 focus:ring-rose-500/50'
                          : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-slate-300 uppercase tracking-wider"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Project Discussion / AI Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/90 border text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-500/70 focus:ring-rose-500/50'
                        : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/30'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-slate-300 uppercase tracking-wider"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Write your message here (min. 10 characters)..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/90 border text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500/70 focus:ring-rose-500/50'
                        : 'border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Notice */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs leading-relaxed font-mono flex items-start gap-2.5 ${
                      statusMessage.type === 'error'
                        ? 'bg-rose-950/30 border-rose-500/30 text-rose-300'
                        : statusMessage.type === 'success'
                        ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                        : 'bg-brand-indigo/20 border-brand-indigo/40 text-brand-cyan'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-indigo/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
