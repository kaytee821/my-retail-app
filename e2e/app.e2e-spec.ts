import { MyRetailAppPage } from './app.po';

describe('my-retail-app App', () => {
  let page: MyRetailAppPage;

  beforeEach(() => {
    page = new MyRetailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
