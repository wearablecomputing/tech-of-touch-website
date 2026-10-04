# Technologies of Touch — Website Guide

This website is built with **Hugo**. You don't need to be a programmer to update it, adding content only requires editing plain text files.

There are two ways to make changes:

1. **On GitHub (easiest):** open the file you want to change in the repository, click the pencil ✏️ icon at the top right, make your edits, and click **Commit changes**. The site rebuilds itself within a minute or two.
2. **On your computer:** Clone the repo, then edit the files in the `content/` folder. Add, commit and push your changes (ask if you're unsure how!).

---

## The two golden rules

Every content file has two parts:

```
---
title: "This is the part between the dashes"
---

This is the body text. It can be as long as you like.
```

- The bit **between the two `---` lines** is called **front matter**. It's the "settings" for the page.
- The bit **below the second `---`** is the actual text people read.

When editing front matter:
- Keep the field names (`title:`, `date:`, etc.) exactly as they are.
- Put text values in **double quotes** — `title: "My title"`.
- Don't delete the `---` lines.

--- 

## Markdown in 30 seconds

The body text uses "Markdown". A few things you can type:

| You type | You get |
|---|---|
| `## A heading` | A big heading |
| `### A smaller heading` | A smaller heading |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `- one` (new line) `- two` | a bullet list |
| `1. one` (new line) `2. two` | a numbered list |
| `[link text](https://example.com)` | a clickable link |
| A blank line between paragraphs | a new paragraph |

To start a new paragraph, leave a **blank line** between blocks of text.

---

## Where each section lives

| Section | Folder | What it's for |
|---|---|---|
| News | `content/news/` | One file per news post |
| People | `content/people/` | One file per person |
| Outputs | `content/outputs/` | Publications, workshops & events, technology |
| About | `content/about/_index.md` | The About page text |
| Home page | `content/_index.md` | The big home page text/photos |

File names should be **lowercase with hyphens**, e.g. `my-new-post.md`. The file name becomes the web address, so keep it short and readable.

---

## Adding a News post

1. Create a new file inside `content/news/`, e.g. `my-news-post.md`.
2. Add the settings at the top:

```
---
title: "A short, clear headline"
date: 2026-10-05
---

Write the news here. You can write several paragraphs.
```

3. That's it. The post automatically appears on the **News** page, and the **3 most recent** posts also appear on the home page. The newest is always shown first.

The `date` controls the order. You can also set a **future date** and the post will appear when that date arrives (or immediately — the site is set to show future posts).

---

## Adding a Person

Create a file inside `content/people/`, e.g. `jane-doe.md`:

```
---
title: "Jane Doe"
group: "investigator"
role: "Principal Investigator"
photo: "/images/people/jane-doe.jpg"
scholar: "https://scholar.google.com/citations?user=XXXX"
website: "https://janedoe.com"
weight: 1
---

A short paragraph about Jane goes here.
```

**`group` decides which section the person appears in.** Use exactly one of:

| `group` value | Appears under |
|---|---|
| `investigator` | Investigators |
| `research-associate` | Research Associates |
| `student-assistant` | Student Assistants |
| `collaborator` | Collaborators |

The other fields are all **optional**:

- **`role`** – small text under the name (e.g. "Research Associate").
- **`photo`** – see [Images](#images) below. Use a **square** picture.
- **`scholar`** – Google Scholar link (shows a graduation-cap icon).
- **`website`** – personal website link (shows a link icon).
- **`weight`** – a number controlling the order within the section (1 comes first). If you leave it out, people are ordered automatically.

The paragraph below the `---` is the person's short bio.

---

## Adding an Output

Create a file inside `content/outputs/`, e.g. `my-paper.md`:

```
---
title: "The full title of the output"
date: 2026-06-01
output_type: "publication"
---

A short description of the output.
```

**`output_type` decides which section it appears in.** Use exactly one of:

| `output_type` value | Appears under |
|---|---|
| `publication` | Publications |
| `workshop` | Workshops & Events |
| `technology` | Technology & Artefacts |

### Adding a BibTeX entry (optional)

To show a clickable **BibTeX** box, add a `bibtex` field. Notice the pipe `|` after `bibtex:` and that **every line below it is indented** (two spaces):

```
---
title: "The full title of the output"
date: 2026-06-01
output_type: "publication"
bibtex: |
  @inproceedings{example2026,
    author = {Jane Doe and John Smith},
    title = {The full title of the output},
    booktitle = {Proceedings of the Conference},
    year = {2026}
  }
---

A short description of the output.
```

If the indentation is wrong, the site will fail to build — make sure every line of the entry starts with the same two spaces.

---

## Editing the About page

Open `content/about/_index.md` and edit the text below the `---`. You can use headings, lists, bold, and links.

---

## Images

### Where to put them

Put all image files in the **`static/images/`** folder. You can organise them into sub-folders, for example:

```
static/images/news/my-photo.jpg
static/images/people/jane-doe.jpg
static/images/heroes/photo1.png
```

### How to reference them

Always start the path with `/images/` and include the file name. Use `.jpg` or `.png` files.

**In a person's `photo:` field** (or any front matter field):

```
photo: "/images/people/jane-doe.jpg"
```

**In the body text**, using Markdown:

```
![A description of the image](/images/news/my-photo.jpg)
```

The words in the square brackets are the "alt text" (a description for accessibility and if the image doesn't load).

### Optional: single, double and triple image layouts

For a nicer layout inside a news post, you can use these instead of plain Markdown:

```
{{< image src="/images/news/one.jpg" alt="Description" caption="An optional caption" >}}

{{< images-2 src1="/images/news/one.jpg" alt1="First" src2="/images/news/two.jpg" alt2="Second" caption="Optional caption" >}}

{{< images-3 src1="/images/news/one.jpg" alt1="First" src2="/images/news/two.jpg" alt2="Second" src3="/images/news/three.jpg" alt3="Third" caption="Optional caption" >}}
```

---

## Links

**To an outside website** — paste the full web address:

```
[Read the paper](https://example.com/paper.pdf)
```

**To another page on this site** — start with a `/` and use the page's name:

```
[See our People](/people/)
[Read all the news](/news/)
[Find out about us](/about/)
[Browse our outputs](/outputs/)
```

Don't link to a specific `index.html` file — just use the folder path (e.g. `/people/`).

---

## Previewing your changes (for developers)

If you have Hugo installed, run this in the project folder:

```
hugo server
```

Then open **http://localhost:1313**. The page updates live as you edit. Press `Ctrl + C` to stop.

---

## Publishing

Commit and push your changes to the **`main`** branch. GitHub automatically builds the website and publishes it. You can watch the progress under the **Actions** tab of the repository. It usually takes a minute or two.

The live site is at:
**https://wearablecomputing.github.io/tech-of-touch-website/**
