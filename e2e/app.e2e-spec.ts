import { FavoriteBookStorePage } from './app.po';

describe('favorite-book-store App', function() {
  let page: FavoriteBookStorePage;

  beforeEach(() => {
    page = new FavoriteBookStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
