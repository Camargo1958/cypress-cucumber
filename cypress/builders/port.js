const portBuilder = {
  
    ports : {
        fromPort : Cypress.env("from_ports").port1,
        toPort: Cypress.env("to_ports").port2
      }
}

export default portBuilder;