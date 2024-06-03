 
 exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page
    this.SignInLink = page.getByRole('link', { name: 'Sign In' })
    this.username_box = page.getByLabel('Email', { exact: true })
    this.password_box = page.getByLabel('Password')
    this.Login_btn = page.getByRole('button', { name: 'Sign In' })
    this.ErrorMes = page.getByText('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    this.LogoHome = page.getByRole('link', { name: 'New Luma Yoga Collection Get' })



  }
  async gotoHomepage (){
    await this.page.goto('https://magento.softwaretestingboard.com/');
  }

  async Signin(username, password) {

    await this.SignInLink.click();
    await this.username_box.fill(username)
    await this.password_box.fill(password)
    await this.Login_btn.click()
    await this.ErrorMes.isVisible()
    await this.LogoHome.click
  }

}