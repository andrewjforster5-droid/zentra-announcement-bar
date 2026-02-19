import { useState } from "react";

export default function Tutorial() {
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const allComplete = step1 && step2 && step3;

  return (
    <s-page heading="Getting Started">
      <s-section heading="Follow these simple steps">
        <s-paragraph>
          Add Zentra to your store in just 3 easy steps. No coding required!
        </s-paragraph>

        <s-stack direction="block" gap="base">
          <s-checkbox
            checked={step1}
            onChange={(e) => setStep1(e.target.checked)}
          >
            <s-text weight="semibold">Step 1: Go to your theme editor</s-text>
            <s-paragraph>
              Navigate to Online Store → Themes → Customize
            </s-paragraph>
          </s-checkbox>

          <s-checkbox
            checked={step2}
            onChange={(e) => setStep2(e.target.checked)}
          >
            <s-text weight="semibold">
              Step 2: Add the Zentra announcement bar block
            </s-text>
            <s-paragraph>
              In the theme editor, click "Add section" or "Add block" and search
              for "Zentra Announcement Bar"
            </s-paragraph>
          </s-checkbox>

          <s-checkbox
            checked={step3}
            onChange={(e) => setStep3(e.target.checked)}
          >
            <s-text weight="semibold">
              Step 3: Customize your message and design
            </s-text>
            <s-paragraph>
              Choose your colors, fonts, message text, and styling options
            </s-paragraph>
          </s-checkbox>

          {allComplete && (
            <s-banner tone="success">
              <s-text weight="bold">🎉 You're all set!</s-text>
              <s-paragraph>
                Your announcement bar is ready to go. Check out the pricing page
                to see what's included for free.
              </s-paragraph>
              <s-button href="/app/pricing" variant="primary">
                View Pricing →
              </s-button>
            </s-banner>
          )}
        </s-stack>
      </s-section>

      <s-section slot="aside" heading="Need Help?">
        <s-paragraph>
          If you get stuck, we're here to help!
        </s-paragraph>
        <s-unordered-list>
          <s-list-item>
            <s-link href="mailto:support@zentra-app.com" target="_blank">
              Email support
            </s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="https://zentra-app.com/support" target="_blank">
              Contact form
            </s-link>
          </s-list-item>
        </s-unordered-list>
      </s-section>
    </s-page>
  );
}
