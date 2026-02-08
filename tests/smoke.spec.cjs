const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Stabil favorites
  await page.addInitScript(() => localStorage.setItem('valorant_favorites', '[]'));

  const weapons = [
    {
      uuid: 'weapon-1',
      displayName: 'Vandal',
      displayIcon:
        'https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png',
      shopData: { categoryText: 'Rifle' },
      skins: [
        {
          uuid: 'skin-1',
          displayName: 'Prime Vandal',
          displayIcon:
            'https://media.valorant-api.com/weaponskins/3e41b2c2-4a4d-5d23-1f96-57a430c0c3d1/displayicon.png',
          contentTierUuid: '60bca009-4182-7998-dee7-b8a2558dc369',
          chromas: [
            {
              displayName: 'Default',
              displayIcon: null,
              fullRender: null,
              swatch: null,
            },
          ],
          levels: [{ displayName: 'Level 1', streamedVideo: null }],
        },
      ],
    },
  ];

  const bundles = [
    {
      uuid: 'bundle-1',
      displayName: 'Prime Collection',
      displayIcon:
        'https://media.valorant-api.com/bundles/2f6b5c16-43c1-96b8-0c58-0eabd1e6e2b8/displayicon.png',
    },
  ];

  await page.route('https://valorant-api.com/v1/weapons', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: weapons }),
    });
  });

  await page.route('https://valorant-api.com/v1/bundles', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: bundles }),
    });
  });
});

test('homepage loads and weapon modal opens', async ({ page }) => {
  await page.goto('/');

  // loader hides after your timeouts
  await expect(page.locator('#loader')).toHaveClass(/hidden/, { timeout: 10_000 });

  await expect(page.locator('.weapon-card')).toHaveCount(1);

  await page.locator('.weapon-card').first().click();
  await expect(page.locator('#weaponModalOverlay')).toHaveClass(/active/);
  await expect(page.locator('.skin-card')).toHaveCount(1);
});

test('skin detail modal opens and closes', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#loader')).toHaveClass(/hidden/, { timeout: 10_000 });

  await page.locator('.weapon-card').first().click();
  await expect(page.locator('.skin-card')).toHaveCount(1);

  await page.locator('.skin-card').first().click();
  await expect(page.locator('#modalOverlay')).toHaveClass(/active/);

  await page.keyboard.press('Escape');
  await expect(page.locator('#modalOverlay')).not.toHaveClass(/active/);
});
