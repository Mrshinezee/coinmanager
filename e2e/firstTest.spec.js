describe('Purchase', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have buy option', async () => {
    await expect(element(by.id('Buy'))).toBeVisible();
  });
  it('should have Sell option', async () => {
    await expect(element(by.id('Sell'))).toBeVisible();
  });
  it('should have Transfer option', async () => {
    await expect(element(by.id('Transfer'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
