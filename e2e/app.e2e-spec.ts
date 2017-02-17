import { DnaPage } from './app.po';

describe('dna App', () => {
  let page: DnaPage;

  beforeEach(() => {
    page = new DnaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
