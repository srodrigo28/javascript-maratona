const users = data.filter((user) => {
  return user.salary >= 4000 && user.active;
})

console.log(users);
