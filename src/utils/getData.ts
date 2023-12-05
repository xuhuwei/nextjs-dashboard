type user = {
  name: string;
  age: number;
};

export async function getData(isSignal = false): Promise<user> {
  const { signal } = new AbortController();
  const res = await fetch("http://localhost:3000/user");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
