import { browser, element, by } from 'protractor';

export class RoutingNavigationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rn-root h1')).getText();
  }
}
