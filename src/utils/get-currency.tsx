import { usePreference } from "../hooks";

export function useCurrency() {
  const { preference } = usePreference();
  if (preference) {
    return preference.currency === "USD" ? "$" : "€";
  }
  return "$";
}
