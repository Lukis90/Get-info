import { GetInfoPage } from './app.po';

describe('get-info App', function() {
  let page: GetInfoPage;

  beforeEach(() => {
    page = new GetInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
