"use client";
import Script from "next/script";

export default function BillettoWidget(){
  return (
    <>
      <Script src="https://billetto.no/widget.js" strategy="afterInteractive" />
      <billetto-widget
        type="event"
        event="1522099"
        organization="billetto.no"
        lang="no"
        theme="light"
        color="#ed5c10"
        button-style="rounded"
        font-family='"Trebuchet MS", sans-serif'
        whitelabel="true"
        hide-banners="true"
        background-color="white"
      ></billetto-widget>
    </>
  );
}