import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "End User Privacy Notice - Luminai",
  description: "Privacy notice for users of AI agents powered by Luminai.",
}

export default function EndUserPrivacyNoticePage() {
  return (
    <LegalLayout
      title="End User Privacy Notice"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>Plain English Summary</h2>
      <p>When you chat with an AI assistant powered by Luminai:</p>
      <ul>
        <li>💬 <strong>Your messages are stored</strong> — to provide responses and improve the service</li>
        <li>🏢 <strong>The business controls your data</strong> — they decide how long to keep it</li>
        <li>🤖 <strong>AI providers see your messages</strong> — to generate responses</li>
        <li>🔒 <strong>We use security measures</strong> — to protect your information</li>
        <li>✅ <strong>You have rights</strong> — to access, correct, or delete your data</li>
      </ul>

      <h2>1. Who We Are</h2>
      <p>
        <strong>Luminai Limited</strong> provides the AI technology platform that powers this assistant.
      </p>
      <p>
        The <strong>business</strong> whose website or app you are using operates the AI 
        assistant and decides how to use it.
      </p>

      <h3>Data Controllers</h3>
      <table>
        <thead>
          <tr>
            <th>Party</th>
            <th>Role</th>
            <th>Responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Business</td>
            <td>Data Controller</td>
            <td>Decides why and how to process your data</td>
          </tr>
          <tr>
            <td>Luminai</td>
            <td>Data Processor</td>
            <td>Processes data on the business's behalf</td>
          </tr>
        </tbody>
      </table>
      <p>For questions about your data, contact the business first.</p>

      <h2>2. What Data We Collect</h2>

      <h3>Information You Provide</h3>
      <ul>
        <li>Messages you send to the AI</li>
        <li>Any personal information you include (name, email, etc.)</li>
        <li>Feedback or ratings you provide</li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <ul>
        <li>IP address</li>
        <li>Device and browser type</li>
        <li>Date and time of interaction</li>
        <li>Pages visited before/after using the AI</li>
      </ul>

      <h3>Information from AI Processing</h3>
      <ul>
        <li>AI-generated responses</li>
        <li>Conversation metadata</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Providing AI responses</td>
            <td>Contract / Legitimate interest</td>
          </tr>
          <tr>
            <td>Improving the AI assistant</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Analytics for the business</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Security and fraud prevention</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Legal compliance</td>
            <td>Legal obligation</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Who Sees Your Data</h2>

      <h3>The Business</h3>
      <p>
        The business operating this AI can see your conversations and uses them according 
        to their privacy policy.
      </p>

      <h3>Luminai</h3>
      <p>We process your data to provide the technology platform.</p>

      <h3>AI Providers</h3>
      <p>To generate responses, your messages are sent to AI providers such as:</p>
      <ul>
        <li>OpenAI (USA)</li>
        <li>Anthropic (USA)</li>
        <li>Google (USA)</li>
      </ul>
      <p>
        These providers process data under strict contracts and do not use your conversations 
        to train their general AI models.
      </p>

      <h3>Others</h3>
      <p>We may share data with:</p>
      <ul>
        <li>Service providers (hosting, security)</li>
        <li>Law enforcement if legally required</li>
      </ul>
      <p><strong>We do not sell your personal data.</strong></p>

      <h2>5. International Transfers</h2>
      <p>
        Your data may be transferred outside the UK, including to the United States, for 
        AI processing.
      </p>
      <p>We ensure appropriate safeguards:</p>
      <ul>
        <li>Standard Contractual Clauses</li>
        <li>UK International Data Transfer Agreement</li>
      </ul>

      <h2>6. How Long We Keep Data</h2>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conversation logs</td>
            <td>Set by the business (typically 90 days)</td>
          </tr>
          <tr>
            <td>Technical logs</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td>Aggregated analytics</td>
            <td>Indefinitely (anonymised)</td>
          </tr>
        </tbody>
      </table>
      <p>The business may configure different retention periods.</p>

      <h2>7. Your Rights</h2>
      <p>Under UK GDPR, you have the right to:</p>
      <table>
        <thead>
          <tr>
            <th>Right</th>
            <th>What It Means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Access</strong></td>
            <td>Get a copy of your data</td>
          </tr>
          <tr>
            <td><strong>Rectification</strong></td>
            <td>Correct inaccurate data</td>
          </tr>
          <tr>
            <td><strong>Erasure</strong></td>
            <td>Request deletion of your data</td>
          </tr>
          <tr>
            <td><strong>Restriction</strong></td>
            <td>Limit how we process your data</td>
          </tr>
          <tr>
            <td><strong>Portability</strong></td>
            <td>Receive your data in a portable format</td>
          </tr>
          <tr>
            <td><strong>Objection</strong></td>
            <td>Object to certain processing</td>
          </tr>
        </tbody>
      </table>

      <h3>How to Exercise Your Rights</h3>
      <p>
        Contact the <strong>business</strong> operating this AI assistant — they are 
        responsible for responding to your requests.
      </p>
      <p>If you need to contact Luminai directly: privacy@luminai.co.uk</p>

      <h3>Complaints</h3>
      <p>You can complain to the Information Commissioner's Office (ICO):</p>
      <ul>
        <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
        <li>Phone: 0303 123 1113</li>
      </ul>

      <h2>8. Security</h2>
      <p>We protect your data with:</p>
      <ul>
        <li>Encryption in transit and at rest</li>
        <li>Access controls</li>
        <li>Security monitoring</li>
        <li>Regular assessments</li>
      </ul>

      <h2>9. Children</h2>
      <p>
        AI assistants powered by Luminai are generally intended for adults. If a business 
        operates an AI for users under 18, they must implement appropriate safeguards.
      </p>

      <h2>10. Changes to This Notice</h2>
      <p>We may update this notice. Check for the "Last Updated" date.</p>

      <h2>11. Contact Us</h2>

      <h3>About This AI Assistant</h3>
      <p>Contact the business whose website or app you are using.</p>

      <h3>About Luminai</h3>
      <p>
        <strong>Luminai Limited</strong><br />
        Email: privacy@luminai.co.uk<br />
        Website: luminai.co.uk
      </p>
    </LegalLayout>
  )
}
