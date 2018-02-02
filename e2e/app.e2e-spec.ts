import { SelfhealthPage } from './app.po';

describe('selfhealth App', () => {
  let page: SelfhealthPage;

  beforeEach(() => {
    page = new SelfhealthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
