// Generic function
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const nums = getFirst<number>([1, 2, 3]); // T = number
const names = getFirst<string>(["a", "b"]); // T = string

type User = { id: number; name: string; email: string };

type UpdateUser = Partial<User>;
type PublicUser = Omit<User, "email">;