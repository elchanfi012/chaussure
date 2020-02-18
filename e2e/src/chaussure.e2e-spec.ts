import {browser, element, logging, by} from 'protractor';
import {ChaussurePage} from './chaussure.po';

describe('test des chaussures', () => {
  let page: ChaussurePage;
  let nbchaussure: number;

  beforeEach(() => {
    page = new ChaussurePage();
    browser.get('/chaussures');
  });

  it('Recherche le lien d\'ajout d\'une chaussure et clique dessus', () => {
    element.all(by.css('.chaussure')).then(totalRows => {
      this.nbchaussure = totalRows.length;
      element(by.css('#addChaussureLink')).click();
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('/chaussures/ajout');
    });
  });

  it('Test le formulaire', () => {
    browser.get('/chaussures/ajout');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.css('#submitBtn'));
    submitBtn.click().then(fn => {
      element.all(by.css('.chaussure')).then(totalNewRows => {
        this.nbchaussure += 1;
        const comparechaussure = this.nbchaussure;
        expect(totalNewRows.length).toEqual(comparechaussure);
        page.sleep();
      });
    });
  });

  it('Test de la suppression', () => {
    browser.get('/chaussures');
    page.sleep();
    let lastDeleteButton = element.all(by.css('.deleteChaussure')).last();
    lastDeleteButton.click().then(fn => {
      element.all(by.css('.chaussure')).then(totalNewRows => {
        this.nbchaussure -= 1;
        const compare = this.nbchaussure ;
        expect(totalNewRows.length).toEqual(compare);
      });
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});