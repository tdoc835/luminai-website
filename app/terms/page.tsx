import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Website Terms of Use - Luminai",
  description: "Terms of use for the Luminai website.",
}

export default function WebsiteTermsPage() {
  return (
    <LegalLayout
      title="Website Terms of Use"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>1. Introduction</h2>
      <p>
        These Website Terms of Use ("Terms") govern your access to and use of the Luminai 
        website at luminai.co.uk (the "Website"). The Website is operated by Luminai Limited, 
        a company registered in Northern Ireland ("Luminai", "we", "us", "our").
      </p>
      <p>
        By accessing or using the Website, you agree to be bound by these Terms. If you do 
        not agree, please do not use the Website.
      </p>

      <h2>2. Use of the Website</h2>
      <h3>2.1 Permitted Use</h3>
      <p>You may use the Website for lawful purposes only, to:</p>
      <ul>
        <li>Learn about our services</li>
        <li>Access our documentation</li>
        <li>Contact us</li>
        <li>Access the Luminai platform (subject to separate Terms of Service)</li>
      </ul>

      <h3>2.2 Prohibited Conduct</h3>
      <p>You must not:</p>
      <ul>
        <li>Use the Website in any way that violates applicable laws</li>
        <li>Attempt to gain unauthorised access to any part of the Website</li>
        <li>Interfere with or disrupt the Website's operation</li>
        <li>Scrape, harvest, or collect data without permission</li>
        <li>Transmit malware or harmful code</li>
        <li>Impersonate any person or entity</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <h3>3.1 Our Rights</h3>
      <p>
        All content on the Website — including text, graphics, logos, images, software, 
        and design — is owned by or licensed to Luminai and protected by copyright, 
        trademark, and other intellectual property laws.
      </p>

      <h3>3.2 Limited Licence</h3>
      <p>
        We grant you a limited, non-exclusive, non-transferable licence to access and 
        use the Website for personal, non-commercial purposes. You may not reproduce, 
        distribute, modify, or create derivative works without our written consent.
      </p>

      <h3>3.3 Trademarks</h3>
      <p>
        "Luminai" and our logo are trademarks of Luminai Limited. You may not use them 
        without our prior written permission.
      </p>

      <h2>4. Third-Party Links</h2>
      <p>
        The Website may contain links to third-party websites. We are not responsible 
        for the content, privacy practices, or availability of these sites. Accessing 
        them is at your own risk.
      </p>

      <h2>5. Disclaimers</h2>
      <h3>5.1 "As Is" Basis</h3>
      <p>
        The Website is provided "as is" and "as available" without warranties of any 
        kind, express or implied, including merchantability, fitness for a particular 
        purpose, or non-infringement.
      </p>

      <h3>5.2 No Guarantees</h3>
      <p>We do not guarantee that the Website will be:</p>
      <ul>
        <li>Uninterrupted or error-free</li>
        <li>Free of viruses or harmful components</li>
        <li>Accurate or complete</li>
      </ul>

      <h3>5.3 AI Information</h3>
      <p>
        Any information about AI capabilities on this Website is for general informational 
        purposes only. AI systems may produce inaccurate or incomplete results. Do not 
        rely on AI-generated content for critical decisions.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law:</p>
      <ul>
        <li>
          We are not liable for any indirect, incidental, special, consequential, or 
          punitive damages arising from your use of the Website.
        </li>
        <li>Our total liability shall not exceed £100.</li>
      </ul>
      <p>This does not affect your statutory rights as a consumer under UK law.</p>

      <h2>7. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Luminai, its officers, directors, 
        employees, and agents from any claims, damages, losses, or expenses arising from:
      </p>
      <ul>
        <li>Your breach of these Terms</li>
        <li>Your violation of any law or third-party rights</li>
        <li>Your use of the Website</li>
      </ul>

      <h2>8. Changes to These Terms</h2>
      <p>
        We may update these Terms at any time. Changes take effect when posted. Your 
        continued use of the Website constitutes acceptance of the updated Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Northern Ireland. Any disputes shall be 
        subject to the exclusive jurisdiction of the courts of Northern Ireland.
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have questions about these Terms, contact us at:</p>
      <p>
        <strong>Luminai Limited</strong><br />
        Email: empower+legal@luminai.co.uk
      </p>
    </LegalLayout>
  )
}
