import React from "react";

// import { PaymentsForm } from "react-square-web-payments-sdk";

export default function Camp() {
  return (
    <div className="h-[calc(100svh-85px)] flex mt-32 justify-center">
      <div className="flex flex-col items-center gap-10">
        <span>
          You can pay for Summer Camp, Dues, or Winter Camp with Square or
          Zelle.
        </span>
        <span>
          <a href="https://razvedchik.square.site/s/shop" target="_blank">
            Square Site
          </a>
        </span>
        <span>Zelle: razvedchik.dnn@gmail.com</span>
      </div>
    </div>
  );
}
