// components/Footer.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#6c25be",
      color: "white",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/your-logo.png"
          alt="Jasper"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span>© 2023 Jasper AI, INC.</span>
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <SocialLink href="https://twitter.com/" icon={faTwitter} />
        <SocialLink href="https://facebook.com/" icon={faFacebook} />
        <SocialLink href="https://instagram.com/" icon={faInstagram} />
        <SocialLink href="https://linkedin.com/" icon={faLinkedin} />
        <SocialLink href="https://youtube.com/" icon={faYoutube} />
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      <FooterColumn title="Product">
        <FooterLink href="/how-it-works">How it Works</FooterLink>
        <FooterLink href="/use-cases">Use Cases</FooterLink>
        <FooterLink href="/templates">50+ Templates</FooterLink>
        <FooterLink href="/jasper-art">Jasper Art</FooterLink>
        <FooterLink href="/jasper-chat">Jasper Chat</FooterLink>
        <FooterLink href="/chrome-extension">Chrome Extension</FooterLink>
        <FooterLink href="/jasper-api">Jasper API</FooterLink>
        <FooterLink href="/integrations">Integrations</FooterLink>
        <FooterLink href="/languages">30+ Languages</FooterLink>
        <FooterLink href="/tools-library">Free Tools Library</FooterLink>
        <FooterLink href="/business-plan">Business Plan</FooterLink>
        <FooterLink href="/security">Security</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
        <FooterLink href="/login">Login to Jasper</FooterLink>

        {/* Add more Product links as needed */}
      </FooterColumn>

      <FooterColumn title="Education & Support">
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/the-prompt">The Prompt</FooterLink>
        <FooterLink href="/jasper-jumpstart">Jasper Jumpstart</FooterLink>
        <FooterLink href="/faq-help-center">FAQ & Help Center</FooterLink>
        <FooterLink href="/jasper-vs-chatgpt">Jasper vs. ChatGPT</FooterLink>
        <FooterLink href="/jasper-vs-writer">Jasper vs. Writer</FooterLink>
        <FooterLink href="/jasper-vs-copy-ai">Jasper vs. Copy AI</FooterLink>
        <FooterLink href="/prompt-library">Prompt Library</FooterLink>
        <FooterLink href="/app-status">App Status</FooterLink>
        <FooterLink href="/contact-support">Contact Support</FooterLink>

        {/* Add more Education & Support links as needed */}
      </FooterColumn>

      <FooterColumn title="Company">
        <FooterLink href="/careers">Careers</FooterLink>
        <FooterLink href="/ethics-responsible-ai">
          Ethics & Responsible AI
        </FooterLink>
        <FooterLink href="/customer-stories">Customer Stories</FooterLink>
        <FooterLink href="/reviews">Reviews</FooterLink>
        <FooterLink href="/affiliate-program">Affiliate Program</FooterLink>
        <FooterLink href="/tech-partners">Tech Partners</FooterLink>
        <FooterLink href="/solutions-partners">Solutions Partners</FooterLink>
        <FooterLink href="/jasper-swag-store">Jasper Swag Store</FooterLink>
        <FooterLink href="/brand-style-guide">Brand Style Guide</FooterLink>
        <FooterLink href="/press-newsroom">Press Newsroom</FooterLink>
        <FooterLink href="/gen-ai-conference">Gen AI Conference</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
        <FooterLink href="/legal-center">Legal Center</FooterLink>

        {/* Add more Company links as needed */}
      </FooterColumn>
    </div>
  </footer>
);

interface SocialLinkProps {
  href: string;
  icon: any; // Adjust the type based on your FontAwesomeIcon setup
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ margin: "0 10px", color: "white" }}
  >
    <FontAwesomeIcon icon={icon} style={{ fontSize: "24px" }} />
  </a>
);

interface FooterLinkProps {
  href: string;
  color?: string;
  fontWeight?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  color = "white",
  fontWeight = "normal",
}) => (
  <a
    href={href}
    style={{ color, fontWeight, marginBottom: "10px", display: "block" }}
  >
    {children}
  </a>
);

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
    //   alignItems: "center",
      flex: 1,
      marginRight: "20px",
    }}
  >
    <span
      style={{ color: "#b192dd", fontWeight: "bold", marginBottom: "10px" }}
    >
      {title}
    </span>
    {children}
  </div>
);

export default Footer;
