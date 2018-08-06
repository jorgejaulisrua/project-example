import { AppSkillsPage } from './app.po';

describe('app-skills App', () => {
  let page: AppSkillsPage;

  beforeEach(() => {
    page = new AppSkillsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
