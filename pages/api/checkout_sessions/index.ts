/*// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Partial of ./pages/api/checkout_sessions/index.ts
  // ...
  // Create Checkout Sessions from body params.
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: "donate",
    payment_method_types: ["card"],
    line_items: [
      {
        name: "Custom amount donation",
        amount: formatAmountForStripe(amount, CURRENCY),
        currency: CURRENCY,
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
  // ...
}
*/
