import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import worker from '../dist/server/index.js';

const pages = [
  ['/', 'home', 'Dr Zoe Hoare'],
  ['/research', 'research', 'Research'],
  ['/writing', 'writing', 'Writing'],
  ['/interests', 'interests', 'Interests'],
];

for (const [path, file, heading] of pages) {
  test(`${path} renders its editable HTML and shared navigation`, async () => {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: 'text/html' } }),
      { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') ?? '', /^text\/html\b/i);
    const html = await response.text();
    const content = await readFile(new URL(`../content/${file}.html`, import.meta.url), 'utf8');
    assert.ok(html.includes(content), 'Page content must be rendered as HTML, not escaped text');
    assert.ok(html.includes(`<h1>${heading}</h1>`));
    assert.equal((html.match(/<main\b/g) ?? []).length, 1);
    assert.match(html, /<main id="main"/);
    for (const [href] of pages) assert.ok(html.includes(`href="${href}"`));
    if (file === 'research') {
      for (const anchor of ['phd', 'imperial', 'aria', 'publications']) {
        assert.ok(html.includes(`id="${anchor}"`));
        assert.ok(html.includes(`href="#${anchor}"`));
      }
    }
  });
}

test('the homepage grant-management link points directly to the BHF research page', async () => {
  const response = await worker.fetch(
    new Request('http://localhost/', { headers: { accept: 'text/html' } }),
    { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();
  assert.ok(html.includes('href="https://www.bhf.org.uk/what-we-do/our-research"'));
  assert.ok(!html.includes('href="/funding"'));
});
