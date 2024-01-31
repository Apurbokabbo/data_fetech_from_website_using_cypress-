
describe('amazon product' , ()=>
{

    it('product details',()=>
    {
        
        cy.visit("https://www.amazon.com/AmazonBasics-Wireless-Computer-Mouse-Receiver/dp/B005EJH6Z4/ref=sr_1_1_ffob_sspa?keywords=mouse&qid=1706615373&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1")
       
        cy.log(`Page title: ${title}`);
        cy.get('.your-css-selector').invoke('text').then((content) => {
            cy.log(`Element content: ${content}`);
          });
            
    }
    )

   
}
)

