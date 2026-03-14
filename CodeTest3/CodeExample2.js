const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

function createUsers(names, roles) {
  if (names.length !== roles.length) {
    throw new Error("Names and roles arrays must have the same length");
  }

  return names.map((name, index) => {
    const username = name.trim().toLowerCase().replace(/\s+/g, "_");
    const email = `${username}@playwrightbatch.com`;
    const role = roles[index];

    return { username, email, role };
  });
}

const users = createUsers(names, roles);
console.log(users);