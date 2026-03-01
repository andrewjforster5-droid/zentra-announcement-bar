import { authenticate } from "../shopify.server";
import db from "../db.server";

export const action = async ({ request }) => {
  const { topic, shop, payload } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // Delete all shop data from your database
  // This happens 48 hours after a shop uninstalls your app
  
  try {
    // Delete the shop's session data
    await db.session.deleteMany({
      where: { shop }
    });

    console.log(`Deleted all data for shop: ${shop}`);
  } catch (error) {
    console.error("Error deleting shop data:", error);
  }

  return new Response(null, { status: 200 });
};
