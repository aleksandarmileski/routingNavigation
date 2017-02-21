import { RoutingNavigationPage } from './app.po';

describe('routing-navigation App', () => {
  let page: RoutingNavigationPage;

  beforeEach(() => {
    page = new RoutingNavigationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rn works!');
  });
});
