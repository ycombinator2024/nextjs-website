import React from "react";
import {
  PayPalScriptProvider,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
  PayPalButtons,
} from "@paypal/react-paypal-js";

// import { PaymentsForm } from "react-square-web-payments-sdk";

export default function Pay() {
  return (
    <div className="h-[calc(100svh-87px)] flex items-center justify-center">
      <PayPalScriptProvider
        options={{
          clientId:
            "AQDiYiuZ5lIB8vaLGV5aRBT7aXjfE7u1Bz7zDpUp6dgPQv-S4S1ObJSrZ_-dnG6oamGzu-GYK0HyWLTr",
        }}
      >
        <PayPalButtons style={{ layout: "horizontal" }} />
      </PayPalScriptProvider>
      {/*<PaymentForm
        applicationId="sandbox-XXXXXX"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log("token:", token);
          console.log("verifiedBuyer:", verifiedBuyer);
        }}
        locationId="XXXXXXXXXX"
      ></PaymentForm>*/}
    </div>
  );
}
