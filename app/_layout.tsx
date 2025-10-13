import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

export default function Layout() {
  useEffect(() => {
    (async () => {
      await NavigationBar.setVisibilityAsync("visible");
      await NavigationBar.setBackgroundColorAsync("#1f2429");
      await NavigationBar.setButtonStyleAsync("light");
    })();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#1f2429" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
