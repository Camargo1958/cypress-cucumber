const faker = require("faker")

const registerBuilder = {
  
    registerSuccess : {
        username : faker.name.findName(),
        email: faker.internet.email(), 
        password : faker.internet.password()
      }
}

export default registerBuilder;