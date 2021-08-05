const moviBuilder = {
  
    newIncomeMovDone: {
        movType: Cypress.env("income_mov_done").movType,
        movDate: Cypress.env("income_mov_done").movDate,
        quitDate: Cypress.env("income_mov_done").quitDate,
        description: Cypress.env("income_mov_done").description,
        interested: Cypress.env("income_mov_done").interested,
        value: Cypress.env("income_mov_done").value,
        account: Cypress.env("income_mov_done").account,
        status: Cypress.env("income_mov_done").status
      },

    newIncomeMovDue: {
        movType: Cypress.env("income_mov_due").movType,
        movDate: Cypress.env("income_mov_due").movDate,
        quitDate: Cypress.env("income_mov_due").quitDate,
        description: Cypress.env("income_mov_due").description,
        interested: Cypress.env("income_mov_due").interested,
        value: Cypress.env("income_mov_due").value,
        account: Cypress.env("income_mov_due").account,
        status: Cypress.env("income_mov_due").status
      },

    newOutcomeMovDone: {
        movType: Cypress.env("outcome_mov_done").movType,
        movDate: Cypress.env("outcome_mov_done").movDate,
        quitDate: Cypress.env("outcome_mov_done").quitDate,
        description: Cypress.env("outcome_mov_done").description,
        interested: Cypress.env("outcome_mov_done").interested,
        value: Cypress.env("outcome_mov_done").value,
        account: Cypress.env("outcome_mov_done").account,
        status: Cypress.env("outcome_mov_done").status
      },

      newOutcomeMovDue: {
        movType: Cypress.env("outcome_mov_due").movType,
        movDate: Cypress.env("outcome_mov_due").movDate,
        quitDate: Cypress.env("outcome_mov_due").quitDate,
        description: Cypress.env("outcome_mov_due").description,
        interested: Cypress.env("outcome_mov_due").interested,
        value: Cypress.env("outcome_mov_due").value,
        account: Cypress.env("outcome_mov_due").account,
        status: Cypress.env("outcome_mov_due").status
      }
}

export default moviBuilder;