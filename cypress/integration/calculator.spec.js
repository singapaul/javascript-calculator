// describe block for out suite of tests

describe("Calculator tests", () => {

  it("should check 7+9 equals 16", () => {
    // write our test
    // 1. Arrange (cy is a cypress keyword) - put whatever the URL is in
    cy.visit("http://127.0.0.1:5501/index.html")

    // 2. Act similar to CSS notation
    // we can use the local selector playground to check for the ids we want to target
    cy.get('[value="7"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="9"]').click();
    cy.get('#equals').click();

    // 3. Assert
    // checking result for wrong answer - it fails 
    // cy.get('#calculator__screen-result').should("contain", "15");
    // checking result for correct answer
    cy.get('#calculator__screen-result').should("contain", "16");
    // checking input displays
    cy.get('#calculator__screen-inputs').should("contain", "7+9");
    // if you have an input element you need to use .haveValue instead of contain

  });

  //writing my own tests 
  // Test 2 
  it("Should only allow one operator at a time in the calculaiton ", () => {
    // 1. Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    // 2. Act (pull the values);

    // get number
    cy.get('[value="7"]').click();
    // add
    cy.get('[value="+"]').click();
    // subtract
    cy.get(':nth-child(13)').click();


    // 3. Assert (state success conditions) 
    cy.get('#calculator__screen-inputs').should("contain", "7-");

  })


  // Test 3
  it("Not allow blank operator input ", () => {
    // 1. Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    // 2. Act (pull the values);


    // add
    cy.get('[value="+"]').click();
    // subtract
    cy.get(':nth-child(13)').click();
    // percent
    cy.get('.calculator > :nth-child(4)').click();
    // divide
    cy.get('.calculator > :nth-child(5)').click();
    // multiply 
    cy.get('.calculator > :nth-child(9)').click();




    // 3. Assert (state success conditions) 
    cy.get('#calculator__screen-inputs').should("contain", "");
    cy.get('#calculator__screen-result').should("contain", "");


  })

  // Test 4
  it("Calculates more sums after original", () => {
    // 1. Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    // 2. Act (pull the values);

    cy.get('[value="7"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="7"]').click();
    cy.get('#equals').click();
    cy.get('.calculator > :nth-child(9)').click();
    cy.get('[value="7"]').click();
    cy.get('#equals').click();



    // 3. Assert (state success conditions) 
    cy.get('#calculator__screen-inputs').should("contain", "14x7");
    cy.get('#calculator__screen-result').should("contain", "98");


  })





})