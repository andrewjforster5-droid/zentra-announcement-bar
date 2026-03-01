import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { topic, shop, payload } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // Log the data request
  // In production, you'd email the merchant or store this request
  console.log("Customer data request:", payload);

  // Return 200 to acknowledge receipt
  return new Response(null, { status: 200 });
};
