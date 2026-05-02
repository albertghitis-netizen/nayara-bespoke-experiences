/**
 * Privacy Policy — Nayara Resorts
 * Clean editorial layout matching brand design language
 */

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4"
            style={{ ...body, fontWeight: 600 }}
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#3B2B26]"
            style={{ ...heading, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">

          <PolicySection title="Who We Are">
            <p>Our website address is: <a href="https://nayararesorts.com" className="underline hover:text-[#3B2B26] transition-colors">https://nayararesorts.com</a></p>
          </PolicySection>

          <PolicySection title="Comments">
            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.</p>
            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3B2B26] transition-colors">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
          </PolicySection>

          <PolicySection title="Media">
            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
            <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
            <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
            <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
          </PolicySection>

          <PolicySection title="Embedded Content from Other Websites">
            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
          </PolicySection>

          <PolicySection title="Who We Share Your Data With">
            <p>If you request a password reset, your IP address will be included in the reset email.</p>
          </PolicySection>

          <PolicySection title="How Long We Retain Your Data">
            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
            <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
          </PolicySection>

          <PolicySection title="What Rights You Have Over Your Data">
            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
          </PolicySection>

          <PolicySection title="Where Your Data Is Sent">
            <p>Visitor comments may be checked through an automated spam detection service.</p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>For any questions regarding this privacy policy, please contact us at <a href="mailto:reservations@nayararesorts.com" className="underline hover:text-[#3B2B26] transition-colors">reservations@nayararesorts.com</a> or call <a href="tel:+18448652002" className="underline hover:text-[#3B2B26] transition-colors">+1 (844) 865-2002</a>.</p>
          </PolicySection>

        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="text-[#3B2B26] text-xl md:text-2xl mb-4"
        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
      >
        {title}
      </h2>
      <div
        className="text-[#4B4A4A]/65 text-[15px] leading-[1.85] space-y-4"
        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
      >
        {children}
      </div>
    </div>
  );
}
