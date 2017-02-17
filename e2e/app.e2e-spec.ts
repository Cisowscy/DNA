import { DNA4Page } from './app.po';


describe('dna App', () => {
  let page: DnaPage;


  beforeEach(() => {
    page = new DNA4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
