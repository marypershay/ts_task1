/**
 * Created by Maryia_Piarshai on 11/3/2016.
 */
import { element, by } from 'protractor';

export class EpamComponent {
  solutionsMenuItem = element(by.css('.popup-menu li a[href$="solutions"]'));
  industriesMenuItem = element(by.css('.popup-menu li a[href$="industries"]'));
  aboutMenuItem = element(by.css('.popup-menu li a[href$="about"]'));
  ideasMenuItem = element(by.css('.popup-menu li a[href$="ideas"]'));
  contactMenuItem = element(by.css('.popup-menu li a[href$="contact"]'));
  careerMenuItem = element(by.css('.popup-menu li a[href$="careers"]'));
  searchButtonMenuItem = element(by.css('.header-menu-search-button'));
  searchInput = element(by.css('.search-group input'));
  autocompleteField = element(by.css('.autocomplete-suggestions strong'));
  searchButton = element(by.css('.button-ui'));
  serchHeader = element(by.css('.search-header h1'));
}
