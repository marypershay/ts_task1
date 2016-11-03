/**
 * Created by Maryia_Piarshai on 11/3/2016.
 */
import { browser } from 'protractor';

export class EpamHomePage {
  static title = 'EPAM | Software Product Development Services';

  static openPage() : any {
    browser.get('https://www.epam.com/');
  }
}
