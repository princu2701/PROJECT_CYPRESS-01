import Login_pr from "../../support/PageObjects/Tutorials Ninja/Log";
import Existing from "../../support/PageObjects/Tutorials Ninja/Exist";
import Check from  "../../support/PageObjects/Tutorials Ninja/Checko";
import Pro from "../../support/PageObjects/Tutorials Ninja/PrPage";

describe('Final Project', () => {
    const pr1=new Login_pr();
    const pr2=new Existing();
    const pr3=new Pro();
    const c1=new Check();
    //(Optional)const c2=new CheckDetails();

    before(() => {
        
        cy.fixture("Tutorial").then((data)=>{
                globalThis.data=data;
        })
    });

    it('Tests', () => {
//For Entering the URL

        pr1.Enterurl();
        pr1.Home();
        pr1.Login();
//Searching and Visiting the Product

        pr2.Search();
        pr2.Prclick();
//Clicking and Asserting the message of Shopping Success

        pr3.Disp();
        pr3.Ass();
        //Clicking on checkout

        c1.Checkout();

        //(Optional - Work only once)Add the persondetails

        // c2.FirstName();
        // c2.LastName();
        // c2.Address();
        // c2.City();
        // c2.Country();
        // c2.Pin();
        // c2.State();

        
    });
});