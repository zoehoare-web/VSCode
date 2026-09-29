# Dr Zoe Hoare — personal website

## Editing the website

All page text is plain HTML in `content/`:

| File | Page |
| --- | --- |
| `content/home.html` | Home |
| `content/research.html` | Research and publications |
| `content/writing.html` | Writing |
| `content/interests.html` | Interests |
| `content/navigation.html` | Navigation links on every page |

Open the relevant HTML file and edit the text directly. These files contain the
content inside each page, so you do not need to add `<html>`, `<head>` or `<body>`.
Keep one `<h1>` per page. Add paragraphs wherever you need them:

```html
<p>Your new paragraph goes here.</p>
<p>Another paragraph with <a href="https://example.com">a link</a>.</p>
```

To add an entry, copy an existing `<article>...</article>` block, or use:

```html
<article>
  <h2>New entry title</h2>
  <p>Your text goes here.</p>
  <p>You can add as many paragraphs as you like.</p>
</article>
```

Use `<h3>` for subheadings within an entry and `<ul><li>Item</li></ul>` for lists.
Write `&amp;` for an ampersand and `&lt;` for a literal less-than sign.

The shared appearance is controlled by `app/globals.css`. Page titles for browser
tabs are in the corresponding `app/<page>/page.tsx`; the homepage title and site
description are in `app/layout.tsx`. The small React files load the HTML into the
existing hosting setup. No JavaScript or data arrays are needed to edit page text.
Only put trusted, personally authored HTML in these files; it is rendered directly.

**Do not edit `dist/`, including `dist/server/index.js`.** These files are generated
and overwritten by each build. Make changes in `content/` instead.

## Preview and build

Run `npm install` once, then `npm run dev` and open the local URL it prints.
Save an HTML file and refresh the preview to see your changes.
Run `npm test` to build and check all five pages, or `npm run build` to build only.
