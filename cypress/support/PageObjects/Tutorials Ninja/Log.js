class Login_pr{
//EnterURL
    Enterurl(){

        cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")


    }
//Move from homepage to Login Page
    Home(){

        cy.xpath("(//*[text()='My Account'])[1]").click({force:true});
        cy.get("[class='dropdown-menu dropdown-menu-right']").contains("Login").click({force:true})
    }
//Enter Login Details
    Login(){
        cy.fixture("Tutorial").then((data)=>{
            cy.get("#input-email").type(data.username)
            cy.get("#input-password").type(data.password)
            cy.get('[type="submit"]').click()


        })
    }
//For ForgotPassword
    forgotpass(){
        cy.xpath("(//*[.='Forgotten Password'])[1]").click()
    }

}
export default Login_pr;