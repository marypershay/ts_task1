/**
 * Created by Maryia_Piarshai on 11/3/2016.
 */
import { browser, protractor } from 'protractor';
import {EpamComponent} from '../support/components/epam.components';
import {EpamHomePage} from '../support/pages/epam.homepage';
import {EpamSolutionPage} from '../support/pages/epam.solutionpage';
import {EpamCareerPage} from '../support/pages/epam.careerpage';
import {EpamIdeasPage} from "../support/pages/epam.ideaspage";
import {EpamIndustriesPage} from "../support/pages/epam.industriespage";

describe('Header navigation', () => {

  let epamComponent: EpamComponent;

  beforeAll(function() {
    epamComponent = new EpamComponent();
    browser.ignoreSynchronization = true;
  });

  beforeEach(() => {
    EpamHomePage.openPage();
  });

  it('should check Solution Page', () => {
    expect(browser.getTitle()).toEqual(EpamHomePage.title);
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.solutionsMenuItem), 15000);
    epamComponent.solutionsMenuItem.click();
    expect(browser.getTitle()).toEqual(EpamSolutionPage.title);
  });

  it('should check Ideas Page', () => {
    expect(browser.getTitle()).toEqual(EpamHomePage.title);
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.ideasMenuItem), 15000);
    epamComponent.ideasMenuItem.click();
    expect(browser.getTitle()).toEqual(EpamIdeasPage.title);
  });

  it('should check Industries Page', () => {
    expect(browser.getTitle()).toEqual(EpamHomePage.title);
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.industriesMenuItem), 15000);
    epamComponent.industriesMenuItem.click();
    expect(browser.getTitle()).toEqual(EpamIndustriesPage.title);
  });

  it('should check Career Page', () => {
    expect(browser.getTitle()).toEqual(EpamHomePage.title);
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
    epamComponent.careerMenuItem.click();
    expect(browser.getTitle()).toEqual(EpamCareerPage.title);
  });

});
describe('Job search', () => {

  let epamComponent: EpamComponent;

  beforeAll(function() {
    epamComponent = new EpamComponent();
    browser.ignoreSynchronization = true;
  });

  beforeEach(() => {
    EpamHomePage.openPage();
  });

  it('should search works', () => {
    expect(browser.getTitle()).toEqual(EpamHomePage.title);
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
    epamComponent.careerMenuItem.click();
    expect(browser.getTitle()).toEqual(EpamCareerPage.title);
    epamComponent.searchButtonMenuItem.click();
    epamComponent.searchInput.sendKeys("JavaScript");
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
    expect((epamComponent.autocompleteField).getText()).toEqual("javascript");
    epamComponent.searchButton.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.serchHeader), 15000);
    expect((epamComponent.serchHeader).getText()).toEqual('We found 2 results matching your search');
  });

});
