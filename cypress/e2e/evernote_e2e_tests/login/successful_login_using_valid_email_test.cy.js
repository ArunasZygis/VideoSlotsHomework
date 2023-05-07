import { config } from '../../../../config';
import { LoginPage } from '../../../pages/LoginPage';
import { MainPage } from '../../../pages/MainPage';

describe('Login test', () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();

  it('should successfully log in with valid credentials', () => {
    mainPage.visitMainPage();
    mainPage.clickOnLogin();
    loginPage.login(config.validEmail, config.validPass);
    loginPage.checkSuccessLogin();
  });
});
