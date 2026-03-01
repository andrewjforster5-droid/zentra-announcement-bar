import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { topic, shop, payload } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // Delete customer data from your database
  // For your app, you likely don't store customer data
  console.log("Customer redact request:", payload);

  // If you stored any customer data in Prisma, delete it here
  // Example:
  // await prisma.customerData.deleteMany({
  //   where: { customerId: payload.customer.id }
  // });

  return new Response(null, { status: 200 });
};
