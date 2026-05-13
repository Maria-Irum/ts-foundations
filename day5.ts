type User = {
  id: number;
  name: string;
};

function getUser(id: number): User {
  return { id, name: "Maria" };
}

console.log(getUser(1));