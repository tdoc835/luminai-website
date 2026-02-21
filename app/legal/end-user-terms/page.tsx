import { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "End User Terms - Luminai",
  description: "Terms for users of AI agents powered by Luminai.",
}

export default function EndUserTermsPage() {
  return (
    <LegalLayout
      title="End User Terms"
      lastUpdated="February 2026"
      version="1.0"
    >
      <p className="text-lg">
        <em>
          When you interact with an AI assistant (chatbot) on a website or application, 
          that assistant may be powered by Luminai technology. These terms apply to your 
          interaction with AI assistants powered by Luminai.
        </em>
      </p>
      <p>
        <strong>The business operating this AI assistant has their own terms and privacy 
        policy that also apply to you.</strong>
      </p>

      <h2>1. What Is This AI Assistant?</h2>
      <p>
        This is an <strong>artificial intelligence (AI) chatbot</strong>. It is not a human. 
        It uses AI technology to understand your questions and provide responses based on 
        information it has been given.
      </p>
      <p><strong>Key Things to Know:</strong></p>
      <ul>
        <li>🤖 <strong>This is an AI</strong>, not a real person</li>
        <li>⚠️ <strong>AI can make mistakes</strong> — responses may be inaccurate or incomplete</li>
        <li>🏢 <strong>The business controls this AI</strong> — they set it up and provide its information</li>
        <li>🔒 <strong>Your conversations may be stored</strong> — see the privacy section below</li>
      </ul>

      <h2>2. AI Limitations — Important</h2>
      <p><strong>AI assistants have limitations. Please understand:</strong></p>

      <h3>Accuracy</h3>
      <ul>
        <li>AI may provide <strong>incorrect or outdated information</strong></li>
        <li>AI may <strong>misunderstand</strong> your question</li>
        <li>AI may <strong>"hallucinate"</strong> — confidently state things that are not true</li>
        <li>Always <strong>verify important information</strong> from official sources</li>
      </ul>

      <h3>Not Professional Advice</h3>
      <p>This AI assistant <strong>does not provide</strong>:</p>
      <ul>
        <li><strong>Medical advice</strong> — consult a doctor</li>
        <li><strong>Legal advice</strong> — consult a solicitor</li>
        <li><strong>Financial advice</strong> — consult a qualified adviser</li>
        <li><strong>Emergency services</strong> — call 999 for emergencies</li>
      </ul>

      <h3>No Guarantees</h3>
      <ul>
        <li>Responses are for <strong>informational purposes only</strong></li>
        <li>The AI cannot make <strong>binding commitments</strong> on behalf of the business</li>
        <li>For official matters, <strong>contact the business directly</strong></li>
      </ul>

      <h2>3. Your Responsibilities</h2>
      <p>When using this AI assistant, you agree:</p>

      <h3>Do:</h3>
      <ul>
        <li>✅ Provide accurate information if asking for help</li>
        <li>✅ Verify important information before acting on it</li>
        <li>✅ Contact humans for urgent or complex matters</li>
        <li>✅ Respect others and use appropriate language</li>
      </ul>

      <h3>Don't:</h3>
      <ul>
        <li>❌ Share sensitive personal information (passwords, payment details, etc.) unless specifically required</li>
        <li>❌ Attempt to make the AI produce harmful or illegal content</li>
        <li>❌ Use the AI for illegal purposes</li>
        <li>❌ Harass or abuse the system</li>
      </ul>

      <h2>4. Privacy and Data</h2>

      <h3>What We Collect</h3>
      <p>When you chat with this AI, we may collect:</p>
      <ul>
        <li>Your messages and the AI's responses</li>
        <li>Technical information (device type, browser, IP address)</li>
        <li>Any information you choose to share</li>
      </ul>

      <h3>How Data Is Used</h3>
      <ul>
        <li>To respond to your questions</li>
        <li>To improve the AI assistant</li>
        <li>To provide analytics to the business</li>
        <li>To comply with legal requirements</li>
      </ul>

      <h3>Data Controllers</h3>
      <ul>
        <li><strong>The business</strong> operating this AI is responsible for how they use your data</li>
        <li><strong>Luminai</strong> provides the technology platform</li>
        <li>See the business's privacy policy for details on their practices</li>
      </ul>

      <p>
        For more details, see our <a href="/legal/end-user-privacy">End User Privacy Notice</a>.
      </p>

      <h2>5. Disclaimers</h2>
      <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong></p>
      <p>THE AI ASSISTANT IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</p>
      <p>WE DO NOT GUARANTEE:</p>
      <ul>
        <li>That the AI will be available at all times</li>
        <li>That responses will be accurate, complete, or suitable</li>
        <li>That the AI will meet your specific needs</li>
      </ul>
      <p>USE OF THE AI ASSISTANT IS AT YOUR OWN RISK.</p>

      <h2>6. Limitation of Liability</h2>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> Neither Luminai nor the 
        business operating this AI shall be liable for decisions you make based on AI 
        responses, inaccurate information, or any losses arising from your use of the AI.
      </p>
      <p>This does not affect your statutory rights.</p>

      <h2>7. Changes</h2>
      <p>
        These terms may be updated. Continued use of AI assistants powered by Luminai 
        constitutes acceptance of updated terms.
      </p>

      <h2>8. Contact</h2>
      <h3>About This AI Assistant</h3>
      <p>Contact the business whose website or app you are using.</p>

      <h3>About Luminai Technology</h3>
      <p>
        Email: empower+support@luminai.co.uk<br />
        Website: luminai.co.uk
      </p>
    </LegalLayout>
  )
}
