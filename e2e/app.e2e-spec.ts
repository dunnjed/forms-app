import { FormsAppPage } from './app.po';

describe('forms-app App', () => {
  let page: FormsAppPage;

  beforeEach(() => {
    page = new FormsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
