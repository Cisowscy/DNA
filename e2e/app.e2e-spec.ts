import { DnaPage } from './app.po';

describe('dna App', function() {
  let page: DnaPage;

  beforeEach(() => {
    page = new DnaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
