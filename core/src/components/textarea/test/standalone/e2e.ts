import { newE2EPage } from '@stencil/core/testing';

test('textarea: standalone', async () => {
  const page = await newE2EPage({
    url: '/src/components/textarea/test/standalone?ionic:_testing=true',
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
