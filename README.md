# Dr Zoe Hoare — personal website

This is a plain static website. There is no framework, package manager, build step,
database or JavaScript.

## Edit a page

Open the matching file in `build/` and change the text directly:

| Page | File |
| --- | --- |
| Home | `build/index.html` |
| Research | `build/research/index.html` |
| Writing | `build/writing/index.html` |
| Interests | `build/interests/index.html` |

The appearance for every page is in `build/style.css`. The portrait is
`build/cartoon-headshot.jpg`.

To add a paragraph, copy an existing line beginning with `<p>` and edit the text.
To add a writing or interests entry, copy a whole `<article>...</article>` block.

## Preview

You can double-click `build/index.html` to open it in a browser. Links between
pages work when the `build/` folder is served or uploaded as a website.
