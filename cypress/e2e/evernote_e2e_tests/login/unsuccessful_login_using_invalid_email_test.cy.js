import { config } from '../../../../config';
import { LoginPage } from '../../../pages/LoginPage';
import { MainPage } from '../../../pages/MainPage';
import { invalidEmailErrorMessage } from '../../../constants';

describe('Login test', () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();

  it('should display an error message for invalid email login', () => {
    mainPage.visitMainPage();
    mainPage.clickOnLogin();
    loginPage.fillEmail(config.invalidEmail);
    loginPage.clickContinue();
    loginPage.checkErrorMessage(invalidEmailErrorMessage);
  });
});
