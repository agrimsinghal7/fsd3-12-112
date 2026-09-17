// In-memory database for this lab

let users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    mob: "1234567890",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    mob: "0987654321",
  },
];

export const getUsers = () => {
  return users;
};

export const addUser = (user) => {
  users.push(user);
  return user;
};
