import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service - Luminai",
  description: "Terms of Service for Luminai platform customers.",
}

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>1. Introduction</h2>
      <p>
        These Terms of Service ("Terms") constitute a legally binding agreement between 
        you ("Customer", "you", "your") and Luminai Limited, a company registered in 
        Northern Ireland ("Luminai", "we", "us", "our").
      </p>
      <p>
        These Terms govern your access to and use of the Luminai platform, including our 
        AI agent builder, knowledge base tools, embeddable widgets, APIs, and related 
        services (collectively, the "Service").
      </p>
      <p>
        <strong>By creating an account or using the Service, you agree to these Terms.</strong> If 
        you are entering into these Terms on behalf of a company or organisation, you 
        represent that you have authority to bind that entity.
      </p>

      <h2>2. Definitions</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agent</strong></td>
            <td>An AI-powered chatbot or assistant created using the Service</td>
          </tr>
          <tr>
            <td><strong>Content</strong></td>
            <td>All data, text, documents, prompts, and materials uploaded or created by Customer</td>
          </tr>
          <tr>
            <td><strong>End User</strong></td>
            <td>Any individual who interacts with Customer's Agents</td>
          </tr>
          <tr>
            <td><strong>Knowledge Base</strong></td>
            <td>Documents, web pages, and data used to inform Agent responses</td>
          </tr>
          <tr>
            <td><strong>Platform</strong></td>
            <td>The Luminai web application and associated infrastructure</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Account Registration</h2>
      
      <h3>3.1 Eligibility</h3>
      <p>
        You must be at least 18 years old and capable of entering into a binding contract. 
        The Service is intended for business use.
      </p>

      <h3>3.2 Account Information</h3>
      <p>
        You agree to provide accurate, complete information when registering and to keep 
        it updated. You are responsible for maintaining the security of your account credentials.
      </p>

      <h3>3.3 Account Responsibility</h3>
      <p>
        You are responsible for all activity under your account, including actions by users 
        you authorise. Notify us immediately at security@luminai.co.uk if you suspect 
        unauthorised access.
      </p>

      <h2>4. The Service</h2>

      <h3>4.1 What We Provide</h3>
      <p>Luminai provides a platform for creating, configuring, and deploying AI-powered agents, including:</p>
      <ul>
        <li>AI agent builder with LLM selection and prompt configuration</li>
        <li>Knowledge base management (documents and web sources)</li>
        <li>Embeddable chat widgets</li>
        <li>Chat API for custom integrations</li>
        <li>Analytics and conversation logs</li>
        <li>Built-in tools (document search, FAQ, email, etc.)</li>
      </ul>

      <h3>4.2 Service Availability</h3>
      <p>
        We strive to maintain high availability but do not guarantee uninterrupted access. 
        We may perform maintenance with reasonable notice when possible.
      </p>

      <h3>4.3 Changes to the Service</h3>
      <p>
        We may modify, update, or discontinue features of the Service. For material changes 
        that negatively affect you, we will provide reasonable notice.
      </p>

      <h2>5. Customer Responsibilities</h2>

      <h3>5.1 Lawful Use</h3>
      <p>You agree to use the Service only for lawful purposes and in compliance with:</p>
      <ul>
        <li>All applicable laws and regulations</li>
        <li>Our Acceptable Use Policy</li>
        <li>Third-party AI provider terms (OpenAI, Anthropic, Google, etc.)</li>
      </ul>

      <h3>5.2 Your Content</h3>
      <p>You are solely responsible for:</p>
      <ul>
        <li>All Content you upload or create</li>
        <li>The accuracy and legality of your Content</li>
        <li>Agent configurations, prompts, and responses</li>
        <li>Ensuring your Agents do not violate laws or third-party rights</li>
      </ul>

      <h3>5.3 End User Compliance</h3>
      <p>You are responsible for:</p>
      <ul>
        <li>Providing appropriate terms and privacy notices to your End Users</li>
        <li>Obtaining any required consents for data collection</li>
        <li>Responding to End User requests regarding their data</li>
        <li>Ensuring your use complies with consumer protection laws</li>
      </ul>

      <h3>5.4 Prohibited Uses</h3>
      <p>You must not use the Service to:</p>
      <ul>
        <li>Generate illegal, harmful, or fraudulent content</li>
        <li>Impersonate individuals or entities</li>
        <li>Provide regulated advice (medical, legal, financial) without appropriate disclaimers and human oversight</li>
        <li>Process sensitive personal data without appropriate safeguards</li>
        <li>Harass, abuse, or harm others</li>
        <li>Infringe intellectual property rights</li>
      </ul>

      <h2>6. AI and Third-Party Providers</h2>

      <h3>6.1 AI Limitations</h3>
      <p>
        <strong>AI systems may produce inaccurate, incomplete, biased, or inappropriate outputs.</strong> You acknowledge that:
      </p>
      <ul>
        <li>AI responses are generated by third-party models, not Luminai</li>
        <li>Luminai does not guarantee the accuracy of AI outputs</li>
        <li>You are responsible for reviewing and approving Agent behaviour</li>
        <li>Critical decisions should involve human oversight</li>
      </ul>

      <h3>6.2 Third-Party AI Providers</h3>
      <p>
        The Service uses third-party AI models (e.g., OpenAI, Anthropic, Google). By using 
        the Service, you agree to comply with their usage policies.
      </p>

      <h3>6.3 Model Changes</h3>
      <p>
        AI models may be updated, deprecated, or discontinued by their providers. We will 
        provide reasonable notice of material changes affecting your Agents.
      </p>

      <h2>7. Fees and Payment</h2>

      <h3>7.1 Pricing Structure</h3>
      <p>The Service operates on a subscription plus usage model:</p>
      <ul>
        <li><strong>Platform Fee:</strong> Monthly fee per Agent (see current pricing)</li>
        <li><strong>Usage Fees:</strong> AI usage charged based on model token costs</li>
      </ul>
      <p>Current pricing is available at luminai.co.uk/pricing.</p>

      <h3>7.2 Payment</h3>
      <ul>
        <li>Payments are processed by Stripe</li>
        <li>You authorise recurring charges for subscription fees</li>
        <li>Failed payments may result in service suspension</li>
      </ul>

      <h3>7.3 Taxes</h3>
      <p>Fees are exclusive of VAT and other taxes. You are responsible for applicable taxes.</p>

      <h3>7.4 Price Changes</h3>
      <p>We may change pricing with 30 days' notice. Continued use after the change constitutes acceptance.</p>

      <h2>8. Intellectual Property</h2>

      <h3>8.1 Your Content</h3>
      <p>
        You retain all rights to your Content. By uploading Content, you grant Luminai a 
        limited licence to host, process, and display it as necessary to provide the Service.
      </p>

      <h3>8.2 Agent Outputs</h3>
      <p>
        AI-generated outputs are provided to you as part of the Service. Luminai does not 
        claim ownership of outputs generated by your Agents.
      </p>

      <h3>8.3 Our Platform</h3>
      <p>
        Luminai retains all rights to the Platform, including software, design, trademarks, 
        and documentation. These Terms do not transfer any ownership rights.
      </p>

      <h2>9. Data Protection</h2>

      <h3>9.1 Our Roles</h3>
      <ul>
        <li><strong>Luminai as Controller:</strong> For your account data and direct interactions with us</li>
        <li><strong>Luminai as Processor:</strong> For End User data processed on your behalf</li>
      </ul>

      <h3>9.2 Data Processing Agreement</h3>
      <p>
        Our <a href="/legal/dpa">Data Processing Agreement (DPA)</a> forms part of these 
        Terms and governs our processing of personal data on your behalf.
      </p>

      <h2>10. Term and Termination</h2>

      <h3>10.1 Term</h3>
      <p>These Terms begin when you create an account and continue until terminated.</p>

      <h3>10.2 Termination by You</h3>
      <p>You may terminate at any time by cancelling your subscription through the Platform or emailing support@luminai.co.uk.</p>

      <h3>10.3 Termination by Us</h3>
      <p>We may terminate or suspend your account:</p>
      <ul>
        <li>Immediately for breach of these Terms or the AUP</li>
        <li>With 30 days' notice for any other reason</li>
      </ul>

      <h3>10.4 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your access to the Service ends</li>
        <li>We will delete your data within 30 days (unless legally required to retain)</li>
        <li>You remain liable for outstanding fees</li>
      </ul>

      <h2>11. Disclaimers</h2>

      <h3>11.1 "As Is" Service</h3>
      <p>
        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
        EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
        NON-INFRINGEMENT, OR ACCURACY.
      </p>

      <h3>11.2 AI Disclaimer</h3>
      <p>
        WE DO NOT WARRANT THAT AI OUTPUTS WILL BE ACCURATE, COMPLETE, RELIABLE, OR SUITABLE 
        FOR ANY PURPOSE. YOU USE AI FEATURES AT YOUR OWN RISK.
      </p>

      <h2>12. Limitation of Liability</h2>

      <h3>12.1 Exclusion of Damages</h3>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUMINAI SHALL NOT BE LIABLE FOR:</p>
      <ul>
        <li>Indirect, incidental, special, consequential, or punitive damages</li>
        <li>Loss of profits, revenue, data, or business opportunities</li>
        <li>Damages arising from AI outputs or End User actions</li>
      </ul>

      <h3>12.2 Liability Cap</h3>
      <p>
        LUMINAI'S TOTAL LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED 
        THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Luminai and its officers, directors, 
        employees, and agents from any claims, damages, losses, or expenses arising from:
      </p>
      <ul>
        <li>Your breach of these Terms</li>
        <li>Your Content or Agents</li>
        <li>Your violation of laws or third-party rights</li>
        <li>End User claims related to your Agents</li>
      </ul>

      <h2>14. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Northern Ireland. Any disputes shall be 
        subject to the exclusive jurisdiction of the courts of Northern Ireland.
      </p>

      <h2>15. General Provisions</h2>

      <h3>15.1 Entire Agreement</h3>
      <p>
        These Terms, together with the DPA, AUP, and Privacy Policy, constitute the entire 
        agreement between you and Luminai.
      </p>

      <h3>15.2 Amendments</h3>
      <p>
        We may amend these Terms by posting the revised version. Material changes will be 
        notified via email. Continued use after changes constitutes acceptance.
      </p>

      <h3>15.3 Severability</h3>
      <p>If any provision is found unenforceable, the remaining provisions remain in effect.</p>

      <h2>16. Contact Us</h2>
      <p>For questions about these Terms:</p>
      <p>
        <strong>Luminai Limited</strong><br />
        Email: legal@luminai.co.uk
      </p>
    </LegalLayout>
  )
}
