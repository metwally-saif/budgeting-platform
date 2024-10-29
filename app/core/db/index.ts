import { useCurrentUser } from "../auth";
const backend_url = import.meta.env.VITE_API_ORIGIN;

export async function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export async function post<T>(url: string, data: unknown): Promise<T> {
  return fetcher<T>(`${backend_url}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function postAuth<T>(data: unknown): Promise<T> {
  const user = useCurrentUser();

  const url = "/graphql";

  console.log(user);
  if (!user) {
    throw new Error("User not authenticated");
  }
  return fetcher<T>(`${backend_url}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await user.getIdToken()}`,
    },
    body: JSON.stringify({
      query: data,
    }),
  });
}

export * from "./queriesBuilder";
