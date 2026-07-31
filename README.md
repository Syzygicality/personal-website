# Personal Website

Edison Wang's personal website, built with Vite, React, TypeScript, and Tailwind CSS.

## Project Structure

```text
/
├── public/          # static assets served as-is
├── src/
│   ├── components/  # React components
│   ├── App.tsx       # top-level page
│   ├── main.tsx      # app entry point
│   └── index.css     # global styles / Tailwind entry
└── index.html
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Installs dependencies                         |
| `npm run dev`       | Starts local dev server                       |
| `npm run build`     | Type-checks and builds the site to `./dist/`  |
| `npm run preview`   | Preview the production build locally          |
