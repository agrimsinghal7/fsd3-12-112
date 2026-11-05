# Frontend using React

## Create React Project

```
1. cd frontend #goto Frontend (should be small case) folder
2. npm create vite@latest #press y if asked to install
3. press . as project name
4. select React as Framework
5. Select Javascript as variant
6. Select ESLint as linter
7. select Yes and continue
```

## Add Tailwind for UI

```
1. goto
https:tailwindcss.com/ and click on get started
2. stop the frontend (ctrol+c) then install by
npm install tailwindcss @tailwindcss/vite
3. import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react()],
})
4. open index.css and remove all contents then paste @import "tailwindcss"; as first line
5. Delete app.jsx from assests

```
