const totalSalarios = data.reduce((total, user) => {
  return total += user.salary
}, 0)

console.log(totalSalarios);
