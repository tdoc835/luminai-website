import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Cookie Policy - Luminai",
  description: "How Luminai uses cookies and similar technologies.",
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="February 2026"
      version="1.0"
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. 
        They help websites remember your preferences, understand how you use the site, 
        and improve your experience.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>Luminai uses cookies and similar technologies for the following purposes:</p>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>These are essential for the website to function. They cannot be disabled.</p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>session_id</td>
            <td>Maintains your login session</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>csrf_token</td>
            <td>Security protection</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Functional Cookies</h3>
      <p>These remember your preferences and settings.</p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>theme</td>
            <td>Dark/light mode preference</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>locale</td>
            <td>Language preference</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Analytics Cookies</h3>
      <p>These help us understand how visitors use our website.</p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga</td>
            <td>Google Analytics</td>
            <td>Distinguishes users</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Google Analytics</td>
            <td>Distinguishes users</td>
            <td>24 hours</td>
          </tr>
        </tbody>
      </table>

      <h3>2.4 Marketing Cookies</h3>
      <p>
        We may use these to deliver relevant advertising. Currently, we do not use 
        marketing cookies.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>Some cookies are placed by third-party services we use:</p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Purpose</th>
            <th>Privacy Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics</td>
            <td>Website analytics</td>
            <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td>
          </tr>
          <tr>
            <td>Stripe</td>
            <td>Payment processing</td>
            <td><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></td>
          </tr>
          <tr>
            <td>Vercel Analytics</td>
            <td>Website analytics</td>
            <td><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></td>
          </tr>
        </tbody>
      </table>

      <h2>4. Managing Cookies</h2>

      <h3>4.1 Cookie Banner</h3>
      <p>When you first visit our site, you'll see a cookie banner allowing you to:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Customise your preferences</li>
      </ul>

      <h3>4.2 Browser Settings</h3>
      <p>You can control cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
        <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
        <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
      </ul>

      <h3>4.3 Opt-Out Links</h3>
      <ul>
        <li>
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out
          </a>
        </li>
      </ul>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy to reflect changes in our practices or legal 
        requirements. Check this page periodically for updates.
      </p>

      <h2>6. Contact Us</h2>
      <p>For questions about our use of cookies:</p>
      <p>
        <strong>Luminai Limited</strong><br />
        Email: privacy@luminai.co.uk
      </p>
    </LegalLayout>
  )
}
