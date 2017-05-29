import { CongeAdminAppPage } from './app.po';

describe('conge-admin-app App', () => {
  let page: CongeAdminAppPage;

  beforeEach(() => {
    page = new CongeAdminAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
