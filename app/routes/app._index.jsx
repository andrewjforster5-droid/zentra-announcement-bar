import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  const shopify = useAppBridge();

  const openThemeEditor = () => {
    shopify.intents.show("Opening theme editor...");
    // This will open the theme editor in a new tab
    window.open("https://admin.shopify.com/stores/themes", "_blank");
  };

  return (
    <s-page heading="Welcome to Zentra! 🎉">
      <s-button slot="primary-action" onClick={openThemeEditor}>
        Open Theme Editor
      </s-button>

      <s-section heading="Beautiful announcement bars made simple">
        <s-paragraph>
          Get started in just 3 easy steps. No coding required!
        </s-paragraph>
        <s-stack direction="inline" gap="base">
          <s-button href="/app/tutorial" variant="primary">
            Start Tutorial →
          </s-button>
          <s-button href="/app/pricing" variant="tertiary">
            View Pricing
          </s-button>
        </s-stack>
      </s-section>

      <s-section heading="What you get with Zentra">
        <s-unordered-list>
          <s-list-item>🎨 Fully customizable design</s-list-item>
          <s-list-item>📱 Mobile responsive</s-list-item>
          <s-list-item>🔄 Multi-message rotation (up to 5)</s-list-item>
          <s-list-item>🎯 CTA buttons for conversions</s-list-item>
          <s-list-item>⚡ Lightning fast performance</s-list-item>
          <s-list-item>🆓 Free forever</s-list-item>
        </s-unordered-list>
      </s-section>

      <s-section slot="aside" heading="Quick Start">
        <s-paragraph>
          <s-text>1. Open your theme editor</s-text>
        </s-paragraph>
        <s-paragraph>
          <s-text>2. Add the Zentra announcement bar block</s-text>
        </s-paragraph>
        <s-paragraph>
          <s-text>3. Customize and publish</s-text>
        </s-paragraph>
        <s-button onClick={openThemeEditor} variant="primary">
          Get Started
        </s-button>
      </s-section>

      <s-section slot="aside" heading="Need Help?">
        <s-paragraph>
          Check out our{" "}
          <s-link href="/app/tutorial">step-by-step tutorial</s-link> or contact
          us at{" "}
          <s-link href="mailto:support@zentra-app.com" target="_blank">
            support@zentra-app.com
          </s-link>
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
