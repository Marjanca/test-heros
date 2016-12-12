import { TestHerosAppPage } from './app.po';

describe('test-heros-app App', function() {
  let page: TestHerosAppPage;

  beforeEach(() => {
    page = new TestHerosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
