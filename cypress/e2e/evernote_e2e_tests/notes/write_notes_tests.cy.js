import { config } from '../../../../config';
import { LoginPage } from '../../../pages/LoginPage';
import { MainPage } from '../../../pages/MainPage';
import { MemberArea } from '../../../pages/MemberArea';

describe('Note test', () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const memberAreaPage = new MemberArea();
  const title = 'My Title';

  it('should successfully log in, create note, logout and login again', () => {
    mainPage.visitMainPage();
    mainPage.clickOnLogin();
    loginPage.login(config.validEmail, config.validPass);
    //should successfully log in
    loginPage.checkSuccessLogin();
    //should create a note
    memberAreaPage.clickCreateNewNote();
    memberAreaPage.fillTitle(title);
    memberAreaPage.clickOnHomePageNavigation();
    //should successfully log out
    memberAreaPage.clickLogout();
    loginPage.checkSuccessLogout();
    //should successfully log in again
    mainPage.visitMainPage();
    mainPage.clickOnLogin();
    loginPage.login(config.validEmail, config.validPass);
    loginPage.checkSuccessLogin();
    //should successfully open note created in previous steps
    memberAreaPage.checkIfNoteWithProvidedTitleWasCreated(title);
  });
});
