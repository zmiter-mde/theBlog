import { TheBlogPage } from './app.po';

describe('the-blog App', () => {
  let page: TheBlogPage;

  beforeEach(() => {
    page = new TheBlogPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
