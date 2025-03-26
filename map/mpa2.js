
const users = data.map((user, index) => {
  if(user.salary <= 2500) {
    user.salary += 900;
    user.bonus +=1;
  }

  return{
    name: user.name,
    salary: user.salary,
    bonus: user.bonus
  }
})

console.log(users);
console.log(data);
