/* 
The code works but is not secured - the client code can delete array element from outside
Fix this issue 
*/

function getUsers() {
  const users = ["Bill"];
  return {
    addUser: function(name) {
      users.push(name);
      return users.slice();
    },
    getUsers: function() {
      return users.slice();
    }
  };
}

const u = getUsers();
u.addUser("Jim");
u.addUser("Paul");
console.log(u.getUsers()); // will put out [ 'Bill', 'Jim', 'Paul' ]

u.getUsers().pop(); // delete 2nd element of the array
console.log(u.getUsers()); //  ['Bill', 'Jim']


//test
const usersPop=u.getUsers();
usersPop.pop();
console.log("Pop:", usersPop)