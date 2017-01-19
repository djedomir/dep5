import { Dep5Page } from './app.po';

describe('dep5 App', function() {
  let page: Dep5Page;

  beforeEach(() => {
    page = new Dep5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
