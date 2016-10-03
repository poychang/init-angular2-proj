import { InitAngular2ProjPage } from './app.po';

describe('init-angular2-proj App', function() {
  let page: InitAngular2ProjPage;

  beforeEach(() => {
    page = new InitAngular2ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
