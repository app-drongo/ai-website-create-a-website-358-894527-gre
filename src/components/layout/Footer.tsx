import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Cloud Infrastructure', href: '#cloud' },
        { name: 'AI & Machine Learning', href: '#ai' },
        { name: 'DevOps Automation', href: '/devops' },
        { name: 'Data Analytics', href: '/analytics' },
        { name: 'API Management', href: '/api' },
        { name: 'Security Suite', href: '/security' },
      ],
    },
    {
      title: 'TechSolutions',
      links: [
        { name: 'Our Mission', href: '#mission' },
        { name: 'Tech Blog', href: '/blog' },
        { name: 'Engineering Jobs', href: '/careers' },
        { name: 'Press Releases', href: '/press' },
        { name: 'Technology Partners', href: '/partners' },
        { name: 'Enterprise Support', href: '#contact' },
      ],
    },
    {
      title: 'Developer Hub',
      links: [
        { name: 'Technical Documentation', href: '/docs' },
        { name: 'Developer Community', href: '/community' },
        { name: 'Code Examples', href: '/examples' },
        { name: 'Tech Workshops', href: '/workshops' },
        { name: 'Success Stories', href: '/case-studies' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'Data Privacy', href: '/privacy' },
        { name: 'Service Agreement', href: '/terms' },
        { name: 'Cookie Management', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Enterprise Security', href: '/security' },
        { name: 'SOC 2 Certification', href: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/techsolutions' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/techsolutions' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/techsolutions' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/techsolutions' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/techsolutions' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">TS</span>
                </div>
                <span className="font-bold text-xl">TechSolutions</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering businesses with cutting-edge technology solutions. From cloud
                infrastructure to AI-powered analytics, we deliver innovation that drives digital
                transformation for tech-savvy professionals worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">enterprise@techsolutions.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) TECH-SOL</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Silicon Valley Tech Center, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Tech Innovation Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Weekly insights on emerging tech trends and platform updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 TechSolutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-primary fill-current" /> by our engineering
                team
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility Standards
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
