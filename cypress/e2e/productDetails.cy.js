// describe('amazon product' , ()=>
// {
//   it('product details', () => {
//     cy.visit("https://www.amazon.com/AmazonBasics-Wireless-Computer-Mouse-Receiver/dp/B005EJH6Z4/ref=sr_1_1_ffob_sspa?keywords=mouse&qid=1706615373&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1")
  
//     // Correct the CSS selector with attribute selector
//     // cy.get('#productTitle[css="1"]').invoke('text').then((content) => {
//     //   cy.log(`Element content: ${content}`);

//       cy.log(cy.get('#productTitle[css="1"]'))
    
//   });

  

   
// }
// )

describe('amazon product', () => {
  it('product details', () => {
    cy.visit("https://www.amazon.com/AmazonBasics-Wireless-Computer-Mouse-Receiver/dp/B005EJH6Z4/ref=sr_1_1_ffob_sspa?keywords=mouse&qid=1706615373&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1")
     cy.title().should('include', 'Amazon Basics');
     cy.log(cy.title);

    //cy.get('#productTitle[css="1"]').contains('Amazon Basics 2.4')
    // var details = cy.xpath("//span[@id='productTitle']")
    // cy.xpath("//span[@id='productTitle']").invoke('val').then((text) => {
    //   cy.log(text);
    //   console.log(text)
    
    
    
    // });
  });
});