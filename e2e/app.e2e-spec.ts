import { TheSeaPage } from './app.po';

describe('the-sea App', () => {
  let page: TheSeaPage;

  beforeEach(() => {
    page = new TheSeaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
