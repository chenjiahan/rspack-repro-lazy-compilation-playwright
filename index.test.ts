import { expect, test } from "@playwright/test";
import { createRsbuild } from "@rsbuild/core";

test("lazy compilation", async ({ page }) => {
  const rsbuild = await createRsbuild({
    cwd: __dirname,
    rsbuildConfig: {
      dev: {
        lazyCompilation: true,
      },
    },
  });

  const server = await rsbuild.startDevServer();
  await page.goto(`http://localhost:${server.port}`);
  await expect(page.locator("#lazy-element")).toHaveText("hello, world");
});
