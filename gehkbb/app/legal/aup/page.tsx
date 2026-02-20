import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Acceptable Use Policy - Luminai",
  description: "Acceptable Use Policy for the Luminai platform.",
}

export default function AcceptableUsePolicyPage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>1. Introduction</h2>
      <p>
        This Acceptable Use Policy ("AUP") governs your use of the Luminai platform and 
        services. It is part of and incorporated into our <a href="/legal/tos">Terms of Service</a>.
      </p>
      <p>
        Luminai provides AI-powered tools that can be misused. This policy exists to protect 
        you, your End Users, and the broader community.
      </p>
      <p>
        <strong>Violation of this AUP may result in immediate suspension or termination of your account.</strong>
      </p>

      <h2>2. Prohibited Content</h2>
      <p>You may not use the Service to create, distribute, or facilitate:</p>

      <h3>2.1 Illegal Content</h3>
      <ul>
        <li>Content that violates any applicable law</li>
        <li>Content that promotes illegal activities</li>
        <li>Content that facilitates fraud, theft, or financial crimes</li>
      </ul>

      <h3>2.2 Harmful Content</h3>
      <ul>
        <li>Malware, viruses, or malicious code</li>
        <li>Phishing or social engineering schemes</li>
        <li>Content designed to harass, bully, or threaten individuals</li>
        <li>Content promoting violence, self-harm, or suicide</li>
        <li>Child sexual abuse material (CSAM) — reported to authorities</li>
        <li>Non-consensual intimate imagery</li>
      </ul>

      <h3>2.3 Deceptive Content</h3>
      <ul>
        <li>Impersonation of real individuals without consent</li>
        <li>Deepfakes or synthetic media intended to deceive</li>
        <li>Fake reviews, testimonials, or endorsements</li>
        <li>Misinformation about health, safety, or elections</li>
        <li>Spam or unsolicited bulk communications</li>
      </ul>

      <h3>2.4 Discriminatory Content</h3>
      <ul>
        <li>Content promoting hatred based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics</li>
        <li>Content that demeans or dehumanises groups</li>
      </ul>

      <h3>2.5 Intellectual Property Violations</h3>
      <ul>
        <li>Content that infringes copyrights, trademarks, or patents</li>
        <li>Pirated software, media, or materials</li>
        <li>Content that violates trade secrets</li>
      </ul>

      <h2>3. Prohibited Uses</h2>

      <h3>3.1 Regulated Activities Without Compliance</h3>
      <ul>
        <li><strong>Medical advice:</strong> Diagnosing conditions or recommending treatments without appropriate disclaimers and professional oversight</li>
        <li><strong>Legal advice:</strong> Providing legal opinions or advice without licensed professionals</li>
        <li><strong>Financial advice:</strong> Investment recommendations, tax advice, or financial planning without proper licensing</li>
        <li><strong>Mental health:</strong> Crisis intervention or therapy without trained professionals</li>
      </ul>
      <p>If operating in regulated industries, you must:</p>
      <ul>
        <li>Include clear disclaimers that AI is not a substitute for professional advice</li>
        <li>Implement human-in-the-loop oversight for critical decisions</li>
        <li>Comply with industry-specific regulations</li>
      </ul>

      <h3>3.2 High-Risk Automated Decisions</h3>
      <p>Making fully automated decisions with legal or significant effects on individuals without human review, including:</p>
      <ul>
        <li>Employment decisions</li>
        <li>Credit or lending decisions</li>
        <li>Insurance underwriting</li>
        <li>Criminal justice or law enforcement</li>
        <li>Access to essential services</li>
      </ul>

      <h3>3.3 Weapons and Dangerous Activities</h3>
      <ul>
        <li>Designing, manufacturing, or operating weapons</li>
        <li>Creating instructions for explosives, chemical weapons, or bioweapons</li>
        <li>Facilitating terrorism or extremism</li>
      </ul>

      <h3>3.4 Privacy Violations</h3>
      <ul>
        <li>Collecting personal data without consent or lawful basis</li>
        <li>Surveillance without authorisation</li>
        <li>Doxxing or exposing private information</li>
        <li>Bypassing privacy controls or consent mechanisms</li>
      </ul>

      <h3>3.5 System Abuse</h3>
      <ul>
        <li>Attempting to bypass usage limits or security controls</li>
        <li>Reverse engineering, decompiling, or extracting model weights</li>
        <li>Using the Service to benchmark or develop competing products</li>
        <li>Automated access without authorisation</li>
      </ul>

      <h2>4. Industry-Specific Requirements</h2>

      <h3>4.1 Healthcare</h3>
      <p>If deploying Agents in healthcare contexts:</p>
      <ul>
        <li>Do not position AI as a replacement for medical professionals</li>
        <li>Include disclaimers: "This is not medical advice. Consult a healthcare provider."</li>
        <li>Implement human review for clinical recommendations</li>
      </ul>

      <h3>4.2 Financial Services</h3>
      <p>If deploying Agents in financial contexts:</p>
      <ul>
        <li>Comply with FCA regulations where applicable</li>
        <li>Include disclaimers about investment risks</li>
        <li>Do not provide personalised financial advice without appropriate licensing</li>
      </ul>

      <h3>4.3 Legal Services</h3>
      <ul>
        <li>Agents cannot practice law or provide legal advice</li>
        <li>Position as legal information, not advice</li>
        <li>Recommend consulting licensed solicitors for legal matters</li>
      </ul>

      <h2>5. Reporting Violations</h2>
      <p>If you encounter content or usage that violates this AUP:</p>
      <ul>
        <li>Email: abuse@luminai.co.uk</li>
        <li>Include: Description of violation, relevant URLs/Agent IDs, supporting evidence</li>
      </ul>
      <p>We review reports promptly and take appropriate action.</p>

      <h2>6. Consequences of Violations</h2>
      <table>
        <thead>
          <tr>
            <th>Severity</th>
            <th>Consequences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Minor</strong></td>
            <td>Warning, required corrective action</td>
          </tr>
          <tr>
            <td><strong>Moderate</strong></td>
            <td>Temporary suspension, mandatory review</td>
          </tr>
          <tr>
            <td><strong>Severe</strong></td>
            <td>Immediate termination</td>
          </tr>
          <tr>
            <td><strong>Criminal</strong></td>
            <td>Termination, reporting to law enforcement</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Appeals</h2>
      <p>If you believe enforcement action was taken in error:</p>
      <ul>
        <li>Email legal@luminai.co.uk within 14 days</li>
        <li>Include your account details and explanation</li>
        <li>We will review and respond within 30 days</li>
      </ul>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this AUP to address new risks or legal requirements. Material changes 
        will be notified via email.
      </p>

      <h2>9. Contact Us</h2>
      <p>For questions about this policy:</p>
      <p>
        <strong>Luminai Limited</strong><br />
        Email: legal@luminai.co.uk
      </p>
    </LegalLayout>
  )
}
