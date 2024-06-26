"use client";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import * as viemChains from "viem/chains";
import { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";

export default function WagmiProv({ children }: PropsWithChildren) {
  const config = getDefaultConfig({
    appName: "Moonx",
    projectId: "4ebbf2eddb8738c4c84cd8082b5e9756",
    chains: [viemChains.chiliz],
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode showRecentTransactions={true}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
