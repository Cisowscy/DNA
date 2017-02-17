import { DNA4Page } from './app.po';

describe('dna4 App', () => {
  let page: DNA4Page;

  beforeEach(() => {
    page = new DNA4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
