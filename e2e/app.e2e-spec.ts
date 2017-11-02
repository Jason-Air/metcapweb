import { MetcapharitaPage } from './app.po';

describe('metcapharita App', () => {
  let page: MetcapharitaPage;

  beforeEach(() => {
    page = new MetcapharitaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
