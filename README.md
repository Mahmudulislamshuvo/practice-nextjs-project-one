> **For English Version Please click here**: [English Version](#english-version)

# ডকুমেন্ট ক্র্যাফট - প্রোটোকলের দ্বারা নির্মিত একটি ডকুমেন্টেশন ওয়েবসাইট

এই প্রজেক্টটি Next.js 13 (App Router), Tailwind CSS, এবং Lottie এনিমেশন ব্যবহার করে নির্মিত একটি ডকুমেন্টেশন ওয়েবসাইট। এটি Markdown ফাইল থেকে ডকুমেন্ট লোড করে, অটোমেটিক ডায়নামিক রাউট তৈরি করে এবং কাস্টম লোডার ও এরর পেজ সাপোর্ট করে।

## টেবিল অফ কন্টেন্টস

- [প্রয়োজনীয়তা](#প্রয়োজনীয়তা)
- [ইন্সটলেশন](#ইন্সটলেশন)
- [উপলব্ধ স্ক্রিপ্ট](#উপলব্ধ-স্ক্রিপ্ট)
- [প্রজেক্ট স্ট্রাকচার](#প্রজেক্ট-স্ট্রাকচার)
  - [রুট ফাইলস](#রুট-ফাইলস)
  - [app ডিরেক্টরি](#app-ডিরেক্টরি)
  - [components ডিরেক্টরি](#components-ডিরেক্টরি)
  - [docs ডিরেক্টরি](#docs-ডিরেক্টরি)
  - [hooks ডিরেক্টরি](#hooks-ডিরেক্টরি)
  - [utils ডিরেক্টরি](#utils-ডিরেক্টরি)
  - [public ডিরেক্টরি](#public-ডিরেক্টরি)
- [কনফিগারেশন ফাইল](#কনফিগারেশন-ফাইল)
  - [Tailwind & PostCSS](#tailwind--postcss)
  - [Next.js](#nextjs)
  - [ESLint & JSConfig](#eslint--jsconfig)
- [ব্যবহার](#ব্যবহার)
- [কনট্রিবিউটিং](#কনট্রিবিউটিং)
- [লাইসেন্স](#লাইসেন্স)

---

### প্রয়োজনীয়তা

- Node.js >= 16.x
- npm বা yarn
- টার্মিনাল/কমান্ড লাইন অ্যাক্সেস

### ইন্সটলেশন

1. রিপোজিটরি ক্লোন করুন:
   ```bash
   git clone <repository-url>
   ```
2. ডিপেন্ডেন্সি ইনস্টল করুন:
   ```bash
   cd practice-nextjs-project-one
   npm install
   # অথবা
   yarn install
   ```
3. ডেভেলপমেন্ট সার্ভার চালু করুন:
   ```bash
   npm run dev
   ```
   অ্যাপটি চালু হবে `http://localhost:3000` এ।

### উপলব্ধ স্ক্রিপ্ট

- `npm run dev`: ডেভেলপমেন্ট মোডে অ্যাপ চালায়।
- `npm run build`: প্রোডাকশনের জন্য বিল্ড তৈরি করে।
- `npm run start`: প্রোডাকশন সার্ভার চালায়।
- `npm run lint`: ESLint চালিয়ে কোড বিশ্লেষণ করে।

### প্রজেক্ট স্ট্রাকচার

```
practice-nextjs-project-one/
├── .eslintrc.json         # ESLint কনফিগ
├── jsconfig.json          # পাথ অ্যালিয়াস কনফিগ
├── next.config.mjs        # Next.js কনফিগ
├── tailwind.config.js     # Tailwind CSS কনফিগ
├── postcss.config.js      # PostCSS কনফিগ
├── typography.js          # Tailwind Typography সেটিংস
├── package.json           # প্রজেক্ট মেটাডেটা ও ডিপেন্ডেন্সি
├── package-lock.json      # ডিপেন্ডেন্সি লক
└── app/                   # Next.js App Router
```

#### রুট ফাইলস

- ``: ESLint নিয়ম ও এনভায়রনমেন্ট।
- ``: `@` অ্যালিয়াস সেটআপ।
- ``: Next.js অ্যাপ সেটিংস।
- ``: কন্টেন্ট পাথ ও থিম এক্সটেনশন।
- ``: Tailwind CSS ও Autoprefixer লোড।
- ``: Tailwind Typography প্লাগইন কাস্টম সেটিংস।
- `** & **`: স্ক্রিপ্ট ও ডিপেন্ডেন্সি।

#### app ডিরেক্টরি

- ``: রুট লেআউট, গ্লোবাল স্টাইলস।
- ``: Tailwind বেস, কম্পোনেন্টস, ইউটিলিটি।
- ``: হোম পেজে `Landing` কম্পোনেন্ট রেন্ডার।
- ``: কাস্টম এরর পেজ (Lottie + Framer Motion)।
- ``: Lottie 404/এরর এনিমেশন।
- **ডাইনামিক রাউটস**
  - ``: লেখক ভিত্তিক ডকুমেন্ট।
  - ``: ক্যাটাগরি ভিত্তিক ডকুমেন্ট।
  - ``: ট্যাগ ভিত্তিক ডকুমেন্ট।
  - ``: প্রধান ডকুমেন্ট পেজ।
  - ``: সাব-ডকুমেন্ট পেজ।
- ``: Markdown ফাইল পড়ে, ফ্রন্টম্যাটার পার্স করে HTML এ কনভার্ট।

#### components ডিরেক্টরি

- ``: হোম পেজের হিরো সেকশন।
- ``: হেডার (লোগো, সার্চ, সাইডবার)।
- ``: ন্যাভিগেশন সাইডবার।
- ``: সার্চ ইনপুট হুক (ডিবাউন্স)।
- ``: সার্চ রেজাল্ট ড্রপডাউন।
- ``: Markdown রেন্ডারিং কম্পোনেন্ট।
- ``: “ক্রেজি” লোডার (নীয়ন রিং + গ্লিচ টেক্সট)।
- ``: সাইট লোগো।
- ``: ট্যাগ ব্যাজ।

#### docs ডিরেক্টরি

`/docs` এ Markdown ফাইল:

- `introduction.md`
- `quick-start.md`
- `resources.md`
- `sdks.md`
- `test.md`

**ফ্রন্টম্যাটার ফর্ম**

```yaml
---
title: "Your Document Title"
date: "YYYY-MM-DD"
author: "Author Name"
category: "Category"
tags:
  - tag1
  - tag2
---
Your markdown content…
```

#### hooks ডিরেক্টরি

- ``: কাস্টম ডিবাউন্স হুক (Search এ ব্যবহার)।

#### utils ডিরেক্টরি

- ``: ডক ফিল্টার হেল্পার ফাংশন।

#### public ডিরেক্টরি

স্ট্যাটিক অ্যাসেট:

- `banner.png`, `logo.svg`, `search.svg`, ইত্যাদি।

## কনফিগারেশন ফাইল

### Tailwind & PostCSS

- ``: কাস্টম অ্যানিমেশন (`glitch`, `spin-slow`)।
- ``: Tailwind CSS ও Autoprefixer।
- ``: Tailwind Typography প্লাগইন সেটিংস।

### Next.js

- ``: ইমেজ ডোমেইন, এক্সপেরিমেন্টাল ফিচার।

### ESLint & JSConfig

- ``: ESLint নিয়ম (React, Next.js)।
- ``: `@` অ্যালিয়াস রুট পয়েন্টার।

## ব্যবহার

- `npm run dev` চালিয়ে ডেভ সার্ভার চালু করুন।
- ব্রাউজারে `http://localhost:3000` এ যান।
- হেডারের সার্চ ব্যবহার করে ডকুমেন্ট খুঁজুন।
- লেখক, ক্যাটাগরি, ট্যাগ ক্লিক করে ফিল্টার করুন।
- ডাইনামিক রাউটসের মাধ্যমে সাব-ডকুমেন্ট দেখুন।

## কনট্রিবিউটিং

1. রিপো ফর্ক করুন।
2. ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/my-feature`।
3. কমিট করুন: `git.commit -m 'Add my feature'`।
4. পুশ করুন: `git push origin feature/my-feature`։
5. পুল রিকোয়েস্ট তৈরি করুন।

## লাইসেন্স

এই প্রজেক্টটি ওপেন সোর্স। লাইসেন্স এখানে যোগ করুন।

---

<a id="english-version"></a>

## English Version&#x20;

# Document Craft - A Documentation Website by Protocol

This is a fully-featured documentation site built with Next.js 13 (App Router), Tailwind CSS, and Lottie animations. It dynamically loads markdown files from the `docs/` folder, generates routes for authors, categories, and tags, and includes a custom error page and a vibrant loading animation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)

  - [Root Files](#root-files)
  - [app Directory](#app-directory)
  - [components Directory](#components-directory)
  - [docs Directory](#docs-directory)
  - [hooks Directory](#hooks-directory)
  - [utils Directory](#utils-directory)
  - [public Directory](#public-directory)

- [Configuration Files](#configuration-files)

  - [Tailwind & PostCSS](#tailwind--postcss)
  - [Next.js](#nextjs)
  - [ESLint & JSConfig](#eslint--jsconfig)

- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

- Node.js v16 or higher
- npm or yarn
- A terminal or command-line interface

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd practice-nextjs-project-one
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Starts the app in development mode.
- `npm run build` - Builds the production-ready application.
- `npm run start` - Runs the production build.
- `npm run lint` - Runs ESLint for code analysis.

## Project Structure

```
practice-nextjs-project-one/
├── .eslintrc.json         # ESLint configuration
├── jsconfig.json          # Path alias configuration (@ to root)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── typography.js          # Tailwind Typography plugin settings
├── package.json           # Project metadata & dependencies
├── package-lock.json      # Locked dependency versions
└── app/                   # Next.js App Router directory
```

### Root Files

- **`.eslintrc.json`** - ESLint rules and environment settings.
- **`jsconfig.json`** - Enables `@` alias for imports.
- **`next.config.mjs`** - Application settings (image domains, headers, experimental features).
- **`tailwind.config.js`** - Specifies content paths and extends theme with custom animations/colors.
- **`postcss.config.js`** - Loads Tailwind CSS and Autoprefixer.
- **`typography.js`** - Tailwind Typography plugin customization.
- **`package.json`** & **`package-lock.json`** - Defines scripts and lists dependencies.

### app Directory

- **`layout.js`** - Root layout defining HTML structure and global context.
- **`globals.css`** - Imports Tailwind’s base, components, and utilities.
- **`page.js`** - The home page rendering the `Landing` component.
- **`error.js`** - Custom error boundary page with Lottie animation and Framer Motion effects.
- **`loading.js`** - Global loading UI displayed during page transitions or data fetching.
- **`animations/error.json`** - Lottie JSON file for the error animation.

#### Dynamic Routes

- **`app/authors/[name]/page.js`** - Documents filtered by author.

- **`app/categories/[name]/page.js`** - Documents filtered by category.

- **`app/teg/[name]/page.js`** - Documents filtered by tag.

- **`app/docs/[contentid]/page.js`** - Main document pages.

- **`app/docs/[contentid]/[subcontentid]/page.js`** - Nested sub-document pages.

- **`app/lib/docs.js`** - Utility to read markdown files from `/docs`, parse frontmatter, and convert to HTML.

### components Directory

- **`Landing.jsx`** - Hero/banner section on the home page.
- **`Header.jsx`** - Top navigation bar with logo, search input, and sidebar toggle.
- **`Sidebar.jsx`** - Collapsible sidebar listing all documents and navigation links.
- **`Search.jsx`** - Search input component with debounce hook to query documents.
- **`SearchResult.jsx`** - Displays search results in a dropdown list.
- **`ContentDisplay.jsx`** - Renders markdown content into HTML.
- **`LoadingCreazy.jsx`** - Eye‑catching “crazy” loader using neon rings and glitch effect.
- **`Logo.jsx`** - Site logo component linking back to home.
- **`Tags.jsx`** - Renders tag badges with links.

### docs Directory

Stored at `/docs`, each markdown file includes frontmatter:

```yaml
---
title: "Your Document Title"
date: "YYYY-MM-DD"
author: "Author Name"
category: "Category"
tags:
  - tag1
  - tag2
---
Your markdown content...
```

Example files:

- `introduction.md`
- `quick-start.md`
- `resources.md`
- `sdks.md`
- `test.md`

### hooks Directory

- **`useDebounce.js`** - Custom React hook to debounce function calls (used in Search).

### utils Directory

- **`doc-util.js`** - Helper functions to filter documents by author, category, or tag.

### public Directory

Static assets (images, icons) served publicly:

- `banner.png`
- `logo.svg`
- `search.svg`

## Configuration Files

### Tailwind & PostCSS

- **`tailwind.config.js`** - Defines custom keyframes (`glitch`, `spin-slow`) and theme extensions.
- **`postcss.config.js`** - Applies Tailwind CSS and Autoprefixer plugins.
- **`typography.js`** - Plugin settings for improved prose styling.

### Next.js

- **`next.config.mjs`** - Configures image optimization, experimental features, and more.

### ESLint & JSConfig

- **`.eslintrc.json`** - ESLint rules for React and Next.js.
- **`jsconfig.json`** - Alias configuration for cleaner imports.

## Usage

1. Start development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000).
3. Use the search box to find documents by title.
4. Click on author, category, or tag links to filter content.
5. Navigate nested document pages via dynamic routes.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to your branch: `git push origin feature/my-feature`
5. Open a Pull Request for review.

## License

This project is open source. Add your preferred license here.
