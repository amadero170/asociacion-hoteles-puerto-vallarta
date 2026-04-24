"use client";

import Script from "next/script";

export default function VoiceflowChat() {
  return (
    <Script
      id="voiceflow-widget"
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      strategy="afterInteractive"
      onLoad={() => {
        if ((window as any).voiceflow) {
          (window as any).voiceflow.chat.load({
            verify: { projectID: "69eb924881d3afae5c1ce762" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            voice: {
              url: "https://runtime-api.voiceflow.com",
            },
          });
        }
      }}
    />
  );
}
