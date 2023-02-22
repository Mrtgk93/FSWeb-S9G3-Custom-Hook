import { useState } from "react";
import localStorageKullan from "./localStorageKullan";

export default function UseNightMode(key, baslangicDegeri) {
  const [isNightMode, setIsNightMode] = localStorageKullan(
    key,
    baslangicDegeri
  );

  function toggleGeceModu() {
    setIsNightMode(!isNightMode);
  }
  return [isNightMode, setIsNightMode, toggleGeceModu];
}
