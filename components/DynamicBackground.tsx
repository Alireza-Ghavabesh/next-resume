// components/DynamicBackground.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

// The Meteors component is defined here for the dynamic import to find it
// Assuming your original Meteors component is available at "@/components/ui/meteors"
// The component 'ClientMeteors' used in the previous conversation will contain the Meteors component.
// We will dynamically import the wrapper that contains the Meteors component.

// The Meteors component itself still needs to be client-side and imported dynamically here
const ClientMeteors = dynamic(
  () => import("@/components/ClientMeteors").then((mod) => mod.ClientMeteors), 
  {
    ssr: false, // ✅ This is now allowed because DynamicBackground is a "use client" component.
    loading: () => null,
  }
);

export function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <ClientMeteors />
    </div>
  );
}