import { ViajePage } from './app.po';

describe('viaje App', function() {
  let page: ViajePage;

  beforeEach(() => {
    page = new ViajePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
