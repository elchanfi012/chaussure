import { browser, by, element } from 'protractor';

export class ChaussurePage {

  sleep() {
    browser.driver.sleep(4000);
  }
  completeForm() {
    let nom = element.all(by.id('nom'));
    let marque = element.all(by.css('.marque'));
    let type = element.all(by.id('type'));
    let taille = element.all(by.id('taille'));
    nom.sendKeys('mercurial vapor 13');
    marque.get(1).click();
    type.sendKeys('football');
    taille.sendKeys(40);
  }
}