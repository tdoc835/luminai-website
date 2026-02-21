import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy - Luminai",
  description: "How Luminai collects, uses, and protects your personal data.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>1. Introduction</h2>
      <p>
        Luminai Limited ("Luminai", "we", "us", "our") is committed to protecting your 
        privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
        your information when you:
      </p>
      <ul>
        <li>Visit our website at luminai.co.uk</li>
        <li>Use the Luminai platform and services</li>
        <li>Interact with AI agents powered by Luminai</li>
      </ul>
      <p>
        Luminai Limited is registered in Northern Ireland. We are the data controller 
        for personal data processed through our website and platform.
      </p>
      <p>
        For data processed on behalf of our business customers, we act as a data processor. 
        See Section 8 for details.
      </p>

      <h2>2. Information We Collect</h2>
      
      <h3>2.1 Information You Provide</h3>
      <ul>
        <li><strong>Account information:</strong> Name, email, company name, password</li>
        <li><strong>Billing information:</strong> Processed by Stripe; we store only last 4 digits of card</li>
        <li><strong>Support requests:</strong> Email, message content</li>
        <li><strong>Agent configuration:</strong> System prompts, knowledge base content</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Device/browser info:</strong> For security and analytics</li>
        <li><strong>IP address:</strong> For security and fraud prevention</li>
        <li><strong>Usage data:</strong> For improving our services</li>
        <li><strong>Cookies:</strong> See our Cookie Policy</li>
      </ul>

      <h3>2.3 Information from Third Parties</h3>
      <ul>
        <li><strong>Stripe:</strong> Payment confirmation and billing details</li>
        <li><strong>AI Providers:</strong> We send prompts to OpenAI, Anthropic, Google, etc. to generate responses</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis (UK GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Provide and maintain our services</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Process payments</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Send service-related communications</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Respond to support requests</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Improve our platform</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Prevent fraud and abuse</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Comply with legal obligations</td>
            <td>Legal obligation</td>
          </tr>
          <tr>
            <td>Send marketing (with consent)</td>
            <td>Consent</td>
          </tr>
        </tbody>
      </table>

      <h2>4. How We Share Your Information</h2>
      <p>We do not sell your personal data. We share information only as follows:</p>

      <h3>4.1 Service Providers</h3>
      <p>We use third-party services to operate our platform:</p>
      <ul>
        <li><strong>Stripe:</strong> Payments</li>
        <li><strong>OpenAI / Anthropic / Google:</strong> AI processing</li>
        <li><strong>Cloud hosting:</strong> Infrastructure (encrypted)</li>
        <li><strong>Analytics providers:</strong> Anonymised usage data</li>
      </ul>

      <h3>4.2 Legal Requirements</h3>
      <p>We may disclose information if required by law, court order, or government request.</p>

      <h3>4.3 Business Transfers</h3>
      <p>
        If Luminai is acquired or merged, your information may be transferred as part 
        of that transaction.
      </p>

      <h2>5. Data Retention</h2>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account data</td>
            <td>Until account deletion + 30 days</td>
          </tr>
          <tr>
            <td>Billing records</td>
            <td>7 years (legal requirement)</td>
          </tr>
          <tr>
            <td>Conversation logs</td>
            <td>As configured by customer (default: 90 days)</td>
          </tr>
          <tr>
            <td>Server logs</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td>Analytics data</td>
            <td>26 months (anonymised)</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Your Rights (UK GDPR)</h2>
      <p>Under UK data protection law, you have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal data</li>
        <li><strong>Rectification:</strong> Correct inaccurate data</li>
        <li><strong>Erasure:</strong> Request deletion of your data</li>
        <li><strong>Restriction:</strong> Limit how we process your data</li>
        <li><strong>Portability:</strong> Receive your data in a portable format</li>
        <li><strong>Objection:</strong> Object to processing based on legitimate interest</li>
        <li><strong>Withdraw consent:</strong> Where processing is based on consent</li>
      </ul>
      <p>
        To exercise these rights, contact us at <strong>empower+privacy@luminai.co.uk</strong>. 
        We will respond within 30 days.
      </p>
      <p>
        You also have the right to lodge a complaint with the Information Commissioner's 
        Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>

      <h2>7. AI Processing and Third-Party Models</h2>
      
      <h3>7.1 How AI Works</h3>
      <p>
        When you or your end users interact with an AI agent, conversations are sent to 
        third-party AI providers (such as OpenAI, Anthropic, or Google) for processing.
      </p>

      <h3>7.2 Data Sent to AI Providers</h3>
      <ul>
        <li>User messages and conversation history</li>
        <li>System prompts and agent configuration</li>
        <li>Retrieved knowledge base content</li>
      </ul>

      <h3>7.3 AI Provider Data Practices</h3>
      <p>Each AI provider has its own data practices:</p>
      <ul>
        <li><strong>OpenAI:</strong> Does not train on API data</li>
        <li><strong>Anthropic:</strong> Does not train on API data</li>
        <li><strong>Google:</strong> See their Cloud AI terms</li>
      </ul>

      <h3>7.4 AI Limitations</h3>
      <p>
        AI may produce inaccurate, biased, or inappropriate content. We do not guarantee 
        the accuracy of AI outputs.
      </p>

      <h2>8. Customer Data and Data Processing</h2>
      
      <h3>8.1 When We Are a Processor</h3>
      <p>
        When our business customers use Luminai to create agents that interact with their 
        end users, the customer is the data controller and Luminai is the data processor.
      </p>

      <h3>8.2 Data Processing Agreement</h3>
      <p>
        Business customers must accept our Data Processing Agreement (DPA), which governs 
        how we process data on their behalf in compliance with UK GDPR.
      </p>

      <h3>8.3 Customer Responsibilities</h3>
      <p>Customers are responsible for:</p>
      <ul>
        <li>Providing privacy notices to their end users</li>
        <li>Obtaining necessary consents</li>
        <li>Responding to data subject requests from their users</li>
        <li>Ensuring lawful use of the platform</li>
      </ul>

      <h2>9. International Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries outside the UK, 
        including the United States (where AI providers operate).
      </p>
      <p>We ensure appropriate safeguards:</p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) with providers</li>
        <li>UK International Data Transfer Agreement where required</li>
        <li>Adequacy decisions where available</li>
      </ul>

      <h2>10. Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect your 
        data, including:
      </p>
      <ul>
        <li>Encryption in transit (TLS) and at rest</li>
        <li>Access controls and authentication</li>
        <li>Regular security assessments</li>
        <li>Employee training</li>
      </ul>
      <p>
        No system is 100% secure. We cannot guarantee absolute security but strive to 
        protect your data.
      </p>

      <h2>11. Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under 18. We do not knowingly collect 
        personal data from children. If we learn we have collected data from a child, we 
        will delete it promptly.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
      <ul>
        <li>Posting the new policy on our website</li>
        <li>Sending an email to account holders (for material changes)</li>
      </ul>
      <p>Your continued use after changes constitutes acceptance.</p>

      <h2>13. Contact Us</h2>
      <p>For privacy-related questions or to exercise your rights:</p>
      <p>
        <strong>Luminai Limited</strong><br />
        Email: empower+privacy@luminai.co.uk
      </p>
      <p>
        For complaints, you may contact the ICO: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
      </p>
    </LegalLayout>
  )
}
