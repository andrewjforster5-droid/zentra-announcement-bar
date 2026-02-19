export default function Pricing() {
  return (
    <s-page heading="Pricing">
      <s-section heading="Free Forever 🎉">
        <s-paragraph>
          All core features are completely free with no hidden costs. Zentra is
          built to help merchants succeed without breaking the bank.
        </s-paragraph>

        <s-stack direction="block" gap="base">
          <s-text weight="semibold">What's included for free:</s-text>
          <s-unordered-list>
            <s-list-item>✅ Unlimited customization options</s-list-item>
            <s-list-item>
              ✅ Multi-message rotation (up to 5 messages)
            </s-list-item>
            <s-list-item>✅ CTA buttons for conversions</s-list-item>
            <s-list-item>✅ Mobile responsive design</s-list-item>
            <s-list-item>✅ Lightning fast performance</s-list-item>
            <s-list-item>✅ Works with all themes</s-list-item>
            <s-list-item>✅ No branding or watermarks</s-list-item>
          </s-unordered-list>
        </s-stack>
      </s-section>

      <s-section heading="Premium Features (Coming Soon)">
        <s-paragraph>
          We're working on advanced features for power users. Stay tuned!
        </s-paragraph>
        <s-unordered-list>
          <s-list-item>⏰ Countdown timers</s-list-item>
          <s-list-item>🎯 Advanced targeting & scheduling</s-list-item>
          <s-list-item>🌍 Geolocation targeting</s-list-item>
          <s-list-item>📊 A/B testing</s-list-item>
          <s-list-item>📈 Analytics & insights</s-list-item>
        </s-unordered-list>
        <s-paragraph>
          <s-text tone="subdued">
            Premium pricing will be announced when features are ready. Early
            adopters may receive special pricing!
          </s-text>
        </s-paragraph>
      </s-section>

      <s-section slot="aside" heading="Why Free?">
        <s-paragraph>
          We believe every merchant should have access to beautiful announcement
          bars without paying monthly fees. Our free tier is genuinely free
          forever.
        </s-paragraph>
        <s-paragraph>
          Premium features will help fund development and support, but the core
          app will always remain free.
        </s-paragraph>
      </s-section>

      <s-section slot="aside" heading="Questions?">
        <s-paragraph>
          Have questions about pricing or features?{" "}
          <s-link href="mailto:support@zentra-app.com" target="_blank">
            Contact us
          </s-link>
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
