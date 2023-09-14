import { url } from "@/config/url";

export const getData = async (page: number, token: string | null) => {
  const res = await fetch(`${url}/api/goals?pageNumber=${page}&pageSize=10`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
