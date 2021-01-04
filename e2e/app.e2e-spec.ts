import { IntroAppPage } from './app.po';

describe('intro-app App', function() {
  let page: IntroAppPage;

  beforeEach(() => {
    page = new IntroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
