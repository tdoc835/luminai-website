import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Data Processing Agreement - Luminai",
  description: "Data Processing Agreement for Luminai platform customers.",
}

export default function DataProcessingAgreementPage() {
  return (
    <LegalLayout
      title="Data Processing Agreement"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>1. Introduction</h2>
      <p>
        This Data Processing Agreement ("DPA") forms part of the <a href="/legal/tos">Terms of Service</a> between 
        Luminai Limited ("Processor", "Luminai", "we", "us") and you ("Controller", "Customer", 
        "you") and governs the processing of personal data by Luminai on your behalf.
      </p>
      <p>This DPA ensures compliance with:</p>
      <ul>
        <li>UK General Data Protection Regulation (UK GDPR)</li>
        <li>Data Protection Act 2018</li>
        <li>Other applicable data protection laws</li>
      </ul>

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
            <td><strong>Personal Data</strong></td>
            <td>Any information relating to an identified or identifiable natural person</td>
          </tr>
          <tr>
            <td><strong>Processing</strong></td>
            <td>Any operation performed on Personal Data</td>
          </tr>
          <tr>
            <td><strong>Data Subject</strong></td>
            <td>An individual whose Personal Data is processed</td>
          </tr>
          <tr>
            <td><strong>Sub-processor</strong></td>
            <td>A third party engaged by Luminai to process Personal Data</td>
          </tr>
          <tr>
            <td><strong>Controller</strong></td>
            <td>Entity determining purposes and means of processing (you)</td>
          </tr>
          <tr>
            <td><strong>Processor</strong></td>
            <td>Entity processing data on behalf of Controller (Luminai)</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Scope of Processing</h2>

      <h3>3.1 Subject Matter</h3>
      <p>
        Luminai processes Personal Data to provide the AI agent platform services described 
        in the Terms of Service.
      </p>

      <h3>3.2 Duration</h3>
      <p>
        Processing continues for the duration of the Terms of Service plus any retention 
        period required by law.
      </p>

      <h3>3.3 Nature and Purpose</h3>
      <p>Processing includes:</p>
      <ul>
        <li>Hosting and storing Customer Content and End User data</li>
        <li>Processing conversations through AI models</li>
        <li>Providing analytics and reporting</li>
        <li>Technical support and troubleshooting</li>
      </ul>

      <h3>3.4 Categories of Data Subjects</h3>
      <ul>
        <li>Customer personnel (account users)</li>
        <li>Customer's End Users (individuals interacting with Agents)</li>
      </ul>

      <h3>3.5 Types of Personal Data</h3>
      <ul>
        <li>Contact information (names, email addresses)</li>
        <li>Conversation content and metadata</li>
        <li>Usage data and analytics</li>
        <li>Any Personal Data included in Knowledge Bases or Agent interactions</li>
      </ul>

      <h2>4. Customer Obligations</h2>
      <p>As Controller, you are responsible for:</p>
      <ul>
        <li>Ensuring a lawful basis for processing (consent, contract, legitimate interest, etc.)</li>
        <li>Providing privacy notices to Data Subjects</li>
        <li>Obtaining any required consents</li>
        <li>Providing lawful, documented processing instructions</li>
        <li>Responding to Data Subject requests</li>
        <li>Using strong authentication for account access</li>
        <li>Reporting security incidents promptly</li>
      </ul>

      <h2>5. Processor Obligations</h2>
      <p>Luminai commits to:</p>

      <h3>5.1 Processing Instructions</h3>
      <ul>
        <li>Process Personal Data only on your documented instructions</li>
        <li>Inform you if we believe an instruction violates applicable law</li>
        <li>Not process for our own purposes except as permitted by law</li>
      </ul>

      <h3>5.2 Confidentiality</h3>
      <ul>
        <li>Ensure personnel processing data are bound by confidentiality obligations</li>
        <li>Limit access to personnel who need it to perform services</li>
      </ul>

      <h3>5.3 Security Measures</h3>
      <p>Implement appropriate technical and organisational measures, including:</p>
      <ul>
        <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
        <li>Access controls and authentication</li>
        <li>Regular security assessments</li>
        <li>Incident response procedures</li>
        <li>Employee security training</li>
      </ul>

      <h3>5.4 Data Breach Notification</h3>
      <ul>
        <li>Notify you of Personal Data breaches without undue delay (within 48 hours)</li>
        <li>Provide information needed for your regulatory notifications</li>
        <li>Cooperate in breach investigation and mitigation</li>
      </ul>

      <h3>5.5 Deletion and Return</h3>
      <p>Upon termination of services:</p>
      <ul>
        <li>Delete or return Personal Data within 30 days at your choice</li>
        <li>Provide certification of deletion upon request</li>
        <li>Retain only as required by law</li>
      </ul>

      <h2>6. Sub-processors</h2>

      <h3>6.1 Current Sub-processors</h3>
      <p>You authorise our use of the following Sub-processors:</p>
      <table>
        <thead>
          <tr>
            <th>Sub-processor</th>
            <th>Purpose</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon Web Services</td>
            <td>Cloud infrastructure</td>
            <td>EU/UK</td>
          </tr>
          <tr>
            <td>Cloudflare</td>
            <td>CDN, security</td>
            <td>Global</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>AI model processing</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Anthropic</td>
            <td>AI model processing</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Google Cloud</td>
            <td>AI model processing</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Stripe</td>
            <td>Payment processing</td>
            <td>USA/EU</td>
          </tr>
        </tbody>
      </table>

      <h3>6.2 Changes to Sub-processors</h3>
      <ul>
        <li>We will notify you of new Sub-processors at least 14 days before engagement</li>
        <li>You may object to new Sub-processors by notifying us within 14 days</li>
        <li>If we cannot accommodate your objection, you may terminate affected services</li>
      </ul>

      <h2>7. International Transfers</h2>

      <h3>7.1 Transfer Mechanisms</h3>
      <p>Personal Data may be transferred outside the UK. We rely on:</p>
      <ul>
        <li>UK International Data Transfer Agreement (IDTA)</li>
        <li>Standard Contractual Clauses (SCCs)</li>
        <li>Supplementary measures where required</li>
      </ul>

      <h3>7.2 AI Provider Transfers</h3>
      <p>
        Data sent to AI providers (OpenAI, Anthropic, Google) for processing is transferred 
        under their DPAs and SCCs. These providers commit to not training on API data.
      </p>

      <h2>8. Data Subject Rights</h2>
      <p>
        You are responsible for responding to Data Subject requests. We will assist by 
        forwarding requests, providing tools (data export, deletion features), and providing 
        reasonable assistance.
      </p>

      <h2>9. Audit</h2>
      <ul>
        <li>Provide information needed to demonstrate compliance</li>
        <li>Allow audits by you or a third-party auditor (with reasonable notice and confidentiality)</li>
        <li>Provide audit reports or certifications upon request</li>
      </ul>

      <h2>10. Liability</h2>
      <p>
        Each party is liable for damages caused by its breach of this DPA or applicable 
        data protection law. Liability under this DPA is subject to the limitations in 
        the Terms of Service.
      </p>

      <h2>11. Term</h2>
      <p>
        This DPA remains in effect for the duration of the Terms of Service. Obligations 
        relating to confidentiality, data deletion, and liability survive termination.
      </p>

      <h2>12. Contact</h2>
      <p>For DPA-related inquiries:</p>
      <p>
        <strong>Luminai Limited</strong><br />
        Data Protection Contact: privacy@luminai.co.uk
      </p>
    </LegalLayout>
  )
}
