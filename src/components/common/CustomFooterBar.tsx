// src/navigation/CustomFooterTabBar.tsx
import React from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Footer, { FooterKey } from "./AppFooter";

export default function CustomFooterTabBar({ state, navigation, descriptors }: BottomTabBarProps) {
  // If current screen asked to hide the tab bar, render nothing.
  const focusedKey = state.routes[state.index].key;
  const style = descriptors[focusedKey]?.options?.tabBarStyle as any;
  if (style && style.display === "none") return null;

  const current = state.routes[state.index].name as FooterKey; // 'sessions' | 'profile'
  const mapToRoute: Record<FooterKey, string> = { sessions: "sessions", profile: "profile" };

  return (
    <Footer
      value={current}
      onChange={(next) => {
        const routeName = mapToRoute[next] ?? next;
        const target = state.routes.find((r) => r.name === routeName);
        if (!target) return;

        const event = navigation.emit({
          type: "tabPress",
          target: target.key,
          canPreventDefault: true,
        });

        if (!event.defaultPrevented) navigation.navigate(routeName);
      }}
    />
  );
}
