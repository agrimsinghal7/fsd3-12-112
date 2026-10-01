let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "98345xxxxx",
    email: "amit.example@exam.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;

export const getAllUsers = () => {
  return users;
};

export const getUsersById = (id) => {
  return users.find((user) => user.id === id);
};

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

export const updateUser = (id, updateData) => {
  const index = users.findIndex((user) => user.id === id);

  updateData.id = id;
  users[index] = updateData;

  return updateData;
};

export const updatePartialUser = (id, updateData) => {
  const user = users.find((user) => user.id === id);

  Object.assign(user, updateData);
  user.id = id;

  return user;
};

export const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  users.splice(index, 1);

  return {
    msg: "user deleted",
  };
};
