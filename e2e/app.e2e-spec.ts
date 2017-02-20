import { Dna4Page } from './app.po';

describe('dna4 App', () => {
  let page: Dna4Page;

  beforeEach(() => {
    page = new Dna4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
