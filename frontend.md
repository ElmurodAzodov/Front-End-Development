# 📚 **2026 FRONTEND ROADMAP (0 dan 100% gacha to'liq reja)**

> **7 oy, haftada 3 kun × 2 soat = 84 soat**  
> **TypeScript, Next.js, AI Tools bilan to'liq 2026 standarti**

---

# 🗓 **1-OY: MODERN HTML, CSS & TAILWIND (12 soat)**

---

## STAGE 1 — HTML5 Fundamentals (2026)
**Goal** - Create semantic, accessible web pages with modern HTML.

### 📌 Topics (2 soat)
- **Document Structure**
  - `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
  - Meta tags: charset, viewport, theme-color, description
  - `<title>`, `<base>`, `<link>`, `<script>`

- **Text Elements**
  - Headings `<h1>` to `<h6>` (proper hierarchy)
  - Paragraphs `<p>`, line break `<br>`, horizontal rule `<hr>`
  - Bold `<b>`, italic `<i>`, emphasis `<em>`, strong `<strong>`
  - `<mark>`, `<small>`, `<del>`, `<ins>`, `<sub>`, `<sup>`

- **Lists**
  - Unordered `<ul>` + `<li>`
  - Ordered `<ol>` + `<li>` (type, start, reversed)
  - Description lists `<dl>`, `<dt>`, `<dd>`

- **Links & Navigation**
  - Anchor `<a>` with href, target, rel
  - Absolute vs relative paths
  - Email links `mailto:`, phone links `tel:`
  - Jump links (id + #)

- **Images**
  - `<img>` with src, alt, width, height, loading="lazy"
  - Responsive images with `srcset` and `sizes`
  - `<picture>` element + `<source>`
  - Modern formats: AVIF, WebP 2.0

- **Tables**
  - `<table>`, `<tr>`, `<td>`, `<th>`
  - `colspan`, `rowspan`
  - `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`

- **Semantic HTML5 (2026)**
  - `<header>`, `<footer>`, `<nav>`, `<main>`
  - `<section>`, `<article>`, `<aside>`, `<figure>`
  - `<details>`, `<summary>`, `<time>`
  - `<search>` element (new!)
  - `<dialog>` element (modal windows)
  - Popover API (`popover` attribute, JS-free popups)

- **Accessibility (a11y) Basics**
  - Alt text for images
  - ARIA labels and landmarks
  - Keyboard navigation
  - WCAG 2.2 principles

---

## STAGE 2 — Modern Forms & Multimedia
**Goal** - Build interactive, validated forms with latest HTML features.

### 📌 Topics (2 soat)
- **Form Structure**
  - `<form>` with action, method (GET/POST)
  - `<fieldset>`, `<legend>` for grouping
  - `<label>` and proper association

- **Input Types (all)**
  - text, password, email, tel, url, number
  - checkbox, radio, file
  - date, datetime-local, month, week, time
  - color, range, hidden
  - submit, reset, button, image

- **Form Elements**
  - `<select>` + `<option>` (dropdowns)
  - `<textarea>` (multi-line text)
  - `<datalist>` (autocomplete suggestions)
  - `<output>` (calculation results)
  - `<progress>`, `<meter>`

- **Form Attributes**
  - placeholder, required, disabled, readonly
  - autofocus, autocomplete
  - pattern (regex validation)
  - min, max, step (for numbers/dates)
  - multiple (file upload, select)
  - accept (file types)

- **Modern Form Features**
  - Constraint Validation API
  - Custom validation messages
  - :valid / :invalid pseudo-classes

- **Multimedia**
  - `<audio>` with controls, autoplay, loop
  - `<video>` with poster, tracks (subtitles)
  - `<iframe>` for embedding (YouTube, Maps)
  - `<embed>`, `<object>` (legacy)

- **Microdata & SEO**
  - Schema.org basics
  - Open Graph meta tags (Facebook)
  - Twitter Cards

---

## STAGE 3 — CSS Fundamentals (Modern)
**Goal** - Master CSS selectors, properties, and box model.

### 📌 Topics (2 soat)
- **CSS Integration**
  - Inline styles (avoid)
  - Internal `<style>` tag
  - External CSS files (best practice)
  - @import (vs link)

- **Selectors (Deep Dive)**
  - Universal `*`
  - Element (tag) selector
  - Class `.class` (most used)
  - ID `#id` (use sparingly)
  - Grouping `,` (multiple selectors)
  - Descendant (space) `.parent .child`
  - Child `>` (direct child)
  - Adjacent sibling `+` (immediate after)
  - General sibling `~` (all after)
  - Attribute `[type="text"]`, `[href^="https"]`

- **Colors & Values**
  - Named colors (transparent, currentColor)
  - HEX (#RRGGBB, #RGB)
  - RGB / RGBA (alpha channel)
  - HSL / HSLA (hue, saturation, lightness)
  - **Modern**: oklch(), oklab() (2025+)

- **Units**
  - Absolute: px, pt, cm, mm, in
  - Relative: %, em, rem, vw, vh
  - **New**: svh, lvh, dvh (dynamic viewport)
  - ch (character width), ex (x-height)

- **Text Styling**
  - font-family (web-safe, custom fonts)
  - font-size, font-weight, font-style
  - text-align, text-decoration, text-transform
  - line-height, letter-spacing, word-spacing
  - text-shadow, text-indent
  - white-space, word-break, overflow-wrap

- **Box Properties**
  - width, height, min/max dimensions
  - border (width, style, color)
  - padding (individual, shorthand)
  - margin (individual, shorthand)
  - box-sizing: content-box vs border-box

---

## STAGE 4 — Box Model, Background & Borders
**Goal** - Control spacing and visual effects precisely.

### 📌 Topics (2 soat)
- **Box Model Deep Dive**
  - Content box (actual content)
  - Padding box (inner spacing)
  - Border box (border around padding)
  - Margin box (outer spacing)
  - Margin collapse (when margins combine)
  - Negative margins (overlapping)

- **Background Properties**
  - background-color
  - background-image (url, gradients)
  - background-repeat (repeat, no-repeat, space, round)
  - background-position (px, %, keywords)
  - background-size (cover, contain, auto)
  - background-attachment (scroll, fixed, local)
  - background (shorthand)
  - Multiple backgrounds (comma-separated)

- **Gradients**
  - Linear gradients (to right, 45deg)
  - Radial gradients (circle, ellipse)
  - Conic gradients (color wheels)
  - Repeating gradients

- **Borders & Outlines**
  - border-radius (rounded corners)
  - border-image (image borders)
  - outline vs border (outline doesn't affect box model)
  - box-shadow (x, y, blur, spread, color)

- **Logical Properties (Modern)**
  - margin-block, margin-inline
  - padding-block, padding-inline
  - border-block, border-inline
  - inset (top/left/right/bottom combined)

---

## STAGE 5 — Layout & Positioning
**Goal** - Control element positioning and display behavior.

### 📌 Topics (2 soat)
- **Display Property**
  - block (full width, new line)
  - inline (content width, same line)
  - inline-block (inline + box properties)
  - none (removed from layout)
  - visibility: hidden (hidden but occupies space)

- **Position Property**
  - static (default, not positioned)
  - relative (relative to normal position)
  - absolute (relative to nearest positioned ancestor)
  - fixed (relative to viewport)
  - sticky (relative + fixed hybrid)
  - z-index (stacking order)

- **Overflow**
  - visible (content overflows)
  - hidden (clipped)
  - scroll (always show scrollbars)
  - auto (scrollbars only when needed)
  - overflow-x, overflow-y

- **Float & Clear**
  - float: left/right (wrap text around)
  - clear: both/left/right (prevent wrapping)
  - Clearfix hack (contain floats)

- **CSS Cascade & Specificity**
  - Importance: !important > inline > ID > class > element
  - Specificity calculator
  - @layer for managing cascade

- **CSS Nesting (2025+)**
  - Native nesting with `&` selector
  - Nesting media queries

---

## STAGE 6 — Flexbox Mastery
**Goal** - Create flexible, responsive layouts with Flexbox.

### 📌 Topics (2 soat)
- **Flex Container Properties**
  - display: flex (block-level) / inline-flex
  - flex-direction: row, row-reverse, column, column-reverse
  - flex-wrap: wrap, nowrap, wrap-reverse
  - flex-flow (shorthand for direction + wrap)
  - justify-content: flex-start, flex-end, center, space-between, space-around, space-evenly
  - align-items: stretch, flex-start, flex-end, center, baseline
  - align-content (multi-line alignment)

- **Flex Item Properties**
  - order (rearrange visually)
  - flex-grow (proportion of available space)
  - flex-shrink (proportion to shrink)
  - flex-basis (initial size before growing)
  - flex (shorthand: grow shrink basis)
  - align-self (override align-items)

- **Practical Patterns**
  - Navigation bars
  - Card layouts
  - Centering (perfectly centered)
  - Sticky footer
  - Holy Grail layout

- **Flexbox vs Grid (when to use what)**

---

## STAGE 7 — CSS Grid Mastery
**Goal** - Build 2D layouts with modern Grid features.

### 📌 Topics (2 soat)
- **Grid Container**
  - display: grid / inline-grid
  - grid-template-columns, grid-template-rows
  - grid-template-areas (named areas)
  - gap (row-gap, column-gap)

- **Track Sizing**
  - px, %, fr units (fractional units)
  - repeat() function
  - minmax() (dynamic sizing)
  - auto-fill vs auto-fit
  - Masonry layout (new!)

- **Item Placement**
  - grid-column: start / end
  - grid-row: start / end
  - grid-area (with template areas or line numbers)
  - span keyword

- **Alignment**
  - justify-items (inline axis)
  - align-items (block axis)
  - justify-content (container inline)
  - align-content (container block)
  - place-items (shorthand)

- **Advanced Grid**
  - Subgrid (display: subgrid)
  - Nested grids
  - Grid with auto-flow (dense packing)
  - Implicit vs explicit grids

---

# 🗓 **2-OY: ADVANCED CSS & TYPESCRIPT START (12 soat)**

---

## STAGE 8 — Responsive Design (2026)
**Goal** - Make websites work perfectly on all devices.

### 📌 Topics (2 soat)
- **Viewport Meta Tag**
  - `<meta name="viewport" content="width=device-width, initial-scale=1">`

- **Media Queries**
  - @media (min-width: 768px) {}
  - @media (max-width: 480px) {}
  - @media (orientation: landscape/portrait)
  - @media (prefers-color-scheme: dark/light)
  - @media (hover: hover/none)
  - Logical operators: and, not, only, comma (or)

- **Container Queries (NEW!)**
  - @container (min-width: 300px) {}
  - container-type: inline-size
  - container-name
  - Style queries (@container style(--theme: dark))

- **Mobile-First Approach**
  - Base styles for mobile
  - Min-width media queries for larger screens

- **Responsive Units**
  - %, vw, vh, vmin, vmax
  - rem, em for typography
  - clamp() for fluid typography

- **Responsive Images**
  - max-width: 100% (fluid images)
  - srcset and sizes attributes
  - <picture> element with art direction

- **Responsive Typography**
  - Fluid typography with clamp()
  - Viewport units for headings

---

## STAGE 9 — Advanced CSS & Animations
**Goal** - Add interactivity and visual flair.

### 📌 Topics (2 soat)
- **Pseudo-classes**
  - :hover, :active, :focus, :focus-within
  - :first-child, :last-child, :nth-child()
  - :nth-of-type(), :only-child
  - :not(), :empty, :is(), :where()
  - :checked, :disabled, :required, :valid, :invalid

- **Pseudo-elements**
  - ::before, ::after (content property)
  - ::first-letter, ::first-line
  - ::selection, ::placeholder, ::marker

- **CSS Variables (Custom Properties)**
  - --variable-name
  - var() function
  - Fallback values
  - Dynamic theming with JS

- **Transitions**
  - transition-property
  - transition-duration
  - transition-timing-function (ease, linear, cubic-bezier)
  - transition-delay
  - transition (shorthand)

- **Transforms**
  - translate(), translateX(), translateY()
  - rotate(), rotateX(), rotateY(), rotateZ()
  - scale(), scaleX(), scaleY()
  - skew(), skewX(), skewY()
  - matrix() (all-in-one)
  - transform-origin

- **Animations**
  - @keyframes (from/to or percentages)
  - animation-name, animation-duration
  - animation-timing-function
  - animation-iteration-count
  - animation-direction (normal, reverse, alternate)
  - animation-fill-mode (none, forwards, backwards, both)
  - animation (shorthand)

- **Scroll-driven Animations (NEW!)**
  - animation-timeline: scroll()
  - @scroll-timeline
  - View transitions API

---

## STAGE 10 — TypeScript Fundamentals (Zero to Hero)
**Goal** - Write type-safe code from day 1 (no pure JS).

### 📌 Topics (2 soat)
- **Why TypeScript?**
  - Static typing benefits
  - Compilation to JavaScript
  - TypeScript vs JavaScript

- **Setup**
  - npm install -g typescript
  - tsc --init (tsconfig.json)
  - Compiling with tsc
  - VS Code integration

- **Basic Types**
  - string, number, boolean
  - array: `string[]` or `Array<number>`
  - tuple: `[string, number]`
  - enum: `enum Color { Red, Green, Blue }`
  - any, unknown, never, void

- **Type Annotations**
  - Variables: `let name: string = "John"`
  - Functions: `function add(a: number, b: number): number {}`
  - Return types, void

- **Interfaces**
  - `interface Person { name: string; age: number }`
  - Optional properties: `age?: number`
  - Readonly properties: `readonly id: number`
  - Extending interfaces

- **Type Aliases**
  - `type ID = string | number`
  - Union types: `string | null`
  - Intersection types: `A & B`

- **Type Assertions**
  - `as` keyword: `const input = document.getElementById('input') as HTMLInputElement`
  - Angle bracket syntax (not in JSX)

- **Literal Types**
  - `let direction: "up" | "down" | "left" | "right"`

---

## STAGE 11 — TypeScript Advanced & Modern JS
**Goal** - Master TypeScript generics and modern JavaScript.

### 📌 Topics (2 soat)
- **Generics**
  - Generic functions: `<T>(arg: T): T`
  - Generic interfaces
  - Constraints: `extends`
  - Default types

- **Utility Types**
  - `Partial<T>` (all optional)
  - `Required<T>` (all required)
  - `Pick<T, K>` (subset of properties)
  - `Omit<T, K>` (exclude properties)
  - `Record<K, T>` (key-value pairs)
  - `ReturnType<T>` (function return type)
  - `Parameters<T>` (function parameters)

- **Type Guards**
  - `typeof` (primitive types)
  - `instanceof` (class instances)
  - `in` operator (property check)
  - User-defined type guards: `is`

- **Discriminated Unions**
  - Common property with literal types
  - Exhaustive checking with `never`

- **ES2024-2025 Features**
  - Temporal API (new date/time)
  - `Object.groupBy()`, `Map.groupBy()`
  - `Promise.withResolvers()`
  - `Array.prototype.findLast()`
  - Records & Tuples (stage 3)
  - Decorators (stage 3)

- **Modules (ESM)**
  - `import` / `export`
  - Default vs named exports
  - Dynamic imports: `import()`

---

## STAGE 12 — Functions & Scope (TypeScript)
**Goal** - Write reusable, type-safe functions.

### 📌 Topics (2 soat)
- **Function Declarations**
  - Parameter types, return types
  - Optional parameters: `param?: type`
  - Default parameters: `param = 10`

- **Rest Parameters**
  - `...args: number[]`

- **Function Overloads**
  - Multiple call signatures

- **Arrow Functions**
  - Type annotations for arrow functions
  - `this` in arrow vs regular

- **Scope**
  - Global scope
  - Function scope
  - Block scope (let, const)
  - Lexical scope

- **Closures**
  - Definition and practical use
  - Factory functions
  - Private variables pattern

- **this in TypeScript**
  - Typing `this` parameter
  - `this` in callbacks

- **Async/Await**
  - `Promise<T>` types
  - `async function` return type
  - Error handling with try/catch

---

## STAGE 13 — Arrays & Tuples (TypeScript)
**Goal** - Manipulate collections with type safety.

### 📌 Topics (2 soat)
- **Array Creation**
  - `let arr: number[] = [1, 2, 3]`
  - `let arr: Array<string> = ['a', 'b']`
  - `Array.from()`, `Array.of()`
  - ReadonlyArray / `readonly` modifier

- **Array Properties**
  - length
  - index access: `arr[0]`

- **Basic Methods**
  - push, pop, shift, unshift
  - splice, slice
  - concat, join
  - indexOf, lastIndexOf, includes

- **Iteration Methods (Typed)**
  - forEach: `(item: T, index: number) => void`
  - map: `(item: T) => U` returns `U[]`
  - filter: returns same type array
  - reduce: accumulator typing
  - some, every (boolean returns)
  - find, findIndex

- **Sorting**
  - sort with compare function
  - reverse

- **Tuples**
  - `let tuple: [string, number] = ['hello', 42]`
  - Optional tuple elements: `[string, number?]`
  - Labeled tuples: `[x: number, y: number]`
  - Rest elements in tuples

- **Destructuring**
  - Array destructuring: `const [first, second] = arr`
  - Skipping elements: `const [first, , third] = arr`
  - Rest with destructuring

---

## STAGE 14 — Objects & Records (TypeScript)
**Goal** - Work with key-value data structures.

### 📌 Topics (2 soat)
- **Object Types**
  - Inline type: `{ name: string; age: number }`
  - Interface vs Type
  - Index signature: `[key: string]: any`

- **Object Methods**
  - `Object.keys()`, `Object.values()`, `Object.entries()`
  - `Object.assign()`
  - `Object.freeze()`, `Object.seal()`

- **Spread Operator**
  - `{ ...obj, newProp: value }`
  - Shallow copy

- **Optional Chaining**
  - `obj?.prop?.nested`
  - `obj?.[key]`

- **Nullish Coalescing**
  - `const value = obj.prop ?? defaultValue`

- **Maps vs Objects**
  - `Map<K, V>` (any key type)
  - `new Map()`, `set`, `get`, `has`, `delete`
  - Iteration: `for (let [key, value] of map)`

- **Sets**
  - `Set<T>` (unique values)
  - `add`, `has`, `delete`, `size`
  - Union, intersection, difference

- **Records**
  - `Record<string, number>` type
  - `Record<Keys, Type>`

---

## STAGE 15 — Error Handling & Debugging
**Goal** - Handle errors gracefully and debug effectively.

### 📌 Topics (2 soat)
- **try/catch/finally**
  - `try { riskyCode() } catch (error) {} finally {}`
  - Typing error in catch (unknown type)

- **Throw**
  - `throw new Error('message')`
  - Custom error classes

- **Error Types**
  - Error, SyntaxError, TypeError, RangeError
  - Custom error class extending Error

- **Debugging Tools**
  - console.log, console.error, console.table
  - console.time / console.timeEnd
  - debugger statement
  - Browser DevTools (Sources tab)

- **Debugging in VS Code**
  - Breakpoints
  - Watch variables
  - Call stack

---

# 🗓 **3-OY: DOM, BROWSER APIS & AI TOOLS (12 soat)**

---

## STAGE 16 — DOM Manipulation with TypeScript
**Goal** - Select and modify HTML elements safely.

### 📌 Topics (2 soat)
- **DOM Tree**
  - Document Object Model concept
  - Nodes vs Elements

- **Selecting Elements (Type-safe)**
  - `document.getElementById('id')` → `HTMLElement | null`
  - `document.querySelector('.class')` → `Element | null`
  - `document.querySelectorAll('.class')` → `NodeListOf<Element>`
  - Type assertion: `as HTMLInputElement`

- **Traversing DOM**
  - parentElement, parentNode
  - children, childNodes
  - firstElementChild, lastElementChild
  - nextElementSibling, previousElementSibling
  - Type guards for element types

- **Manipulating Content**
  - innerHTML (careful with XSS)
  - innerText, textContent
  - outerHTML

- **Manipulating Attributes**
  - getAttribute, setAttribute, removeAttribute
  - hasAttribute
  - dataset (data-* attributes) with types

- **Manipulating Classes**
  - classList.add(), remove(), toggle(), contains()
  - className (string)

- **Manipulating Styles**
  - element.style.property (camelCase)
  - getComputedStyle()

- **Creating Elements**
  - createElement with type: `document.createElement('div')`
  - createTextNode
  - appendChild, append, prepend
  - insertBefore, insertAdjacentElement
  - removeChild, remove
  - cloneNode

---

## STAGE 17 — Events (Modern + TypeScript)
**Goal** - Handle user interactions with type safety.

### 📌 Topics (2 soat)
- **Event Listeners**
  - `addEventListener(event, handler, options)`
  - `removeEventListener`
  - Event handler types: `(e: MouseEvent) => void`

- **Event Object Types**
  - MouseEvent: clientX, clientY, button
  - KeyboardEvent: key, code, ctrlKey, shiftKey
  - InputEvent: data, inputType
  - FocusEvent: relatedTarget
  - DragEvent, TouchEvent

- **Mouse Events**
  - click, dblclick
  - mousedown, mouseup
  - mousemove, mouseenter, mouseleave
  - mouseover, mouseout

- **Keyboard Events**
  - keydown, keyup
  - preventDefault() for form submission

- **Form Events**
  - submit, reset
  - change, input
  - focus, blur

- **Window Events**
  - load, DOMContentLoaded
  - resize, scroll
  - beforeunload

- **Event Flow**
  - Event bubbling (default)
  - Event capturing (useCapture = true)
  - stopPropagation(), stopImmediatePropagation()
  - preventDefault()

- **Event Delegation**
  - Pattern with type guards
  - `e.target instanceof HTMLElement`

- **Custom Events**
  - `new CustomEvent<T>('event', { detail: data })`
  - dispatchEvent
  - Listening with typed detail

---

## STAGE 18 — Browser APIs (Modern)
**Goal** - Work with modern browser capabilities.

### 📌 Topics (2 soat)
- **Fetch API (Typed)**
  - `fetch(url)` → `Promise<Response>`
  - `response.json()` → `Promise<T>`
  - `response.text()`, `response.blob()`
  - POST requests with body
  - Headers, options
  - Error handling (network errors vs HTTP errors)

- **AbortController**
  - Cancel fetch requests
  - Timeout implementation

- **Web Storage API**
  - localStorage: `setItem`, `getItem`, `removeItem`, `clear`
  - sessionStorage (tab-specific)
  - Storage event (cross-tab communication)
  - JSON serialization with types

- **Geolocation API**
  - `navigator.geolocation.getCurrentPosition()`
  - `watchPosition()`
  - Position and error types

- **History API**
  - `history.pushState()`, `replaceState()`
  - `popstate` event
  - SPA routing basics

- **Web Workers**
  - Off-thread computation
  - Message passing

- **Canvas API**
  - Getting context: `getContext('2d')`
  - Drawing shapes, text, images
  - Animation loop

- **WebSockets**
  - `new WebSocket(url)`
  - onopen, onmessage, onclose, onerror
  - send(), close()

- **Intersection Observer**
  - Lazy loading images
  - Infinite scroll
  - Animation triggers

- **Resize Observer**
  - Detect element size changes

- **Mutation Observer**
  - Watch DOM changes

---

## STAGE 19 — AI Tools Integration (2026 MUST-HAVE!)
**Goal** - Use AI tools to supercharge development.

### 📌 Topics (2 soat)
- **Cursor IDE**
  - Setup and configuration
  - AI chat with code context
  - Code generation with Cmd+K
  - Tab completion (Copilot alternative)

- **GitHub Copilot**
  - Installation in VS Code
  - Code suggestions
  - Generating functions from comments
  - Test generation

- **Prompt Engineering**
  - Writing clear, specific prompts
  - Context window optimization
  - Iterative prompting
  - Common patterns

- **V0.dev (Vercel)**
  - Generating UI from text prompts
  - Exporting React components
  - Customizing generated code

- **Claude / ChatGPT for Development**
  - Debugging with AI
  - Code review
  - Refactoring assistance
  - Documentation generation

- **Ethics & Best Practices**
  - When to use AI vs manual coding
  - Understanding generated code
  - Security considerations

---

## STAGE 20 — Git & GitHub (Professional)
**Goal** - Version control for real-world projects.

### 📌 Topics (2 soat)
- **Git Configuration**
  - `git config --global user.name`, `user.email`
  - `git config --list`
  - `git --version`

- **Repository**
  - `git init` (local)
  - `git clone <url>` (remote)
  - `.gitignore` file (Node, React patterns)

- **Basic Workflow**
  - `git status` (check changes)
  - `git add <file>` / `git add .`
  - `git commit -m "message"`
  - `git commit -am` (add + commit tracked files)
  - `git log` (history), `git log --oneline --graph`

- **Branching Strategy**
  - `git branch` (list branches)
  - `git branch <name>` (create)
  - `git checkout <branch>` / `git switch <branch>`
  - `git checkout -b <name>` (create + switch)
  - `git merge <branch>` (merge into current)
  - Merge conflicts (resolution)

- **Remote Repositories**
  - `git remote add origin <url>`
  - `git push -u origin main` (first push)
  - `git push` (subsequent)
  - `git pull` (fetch + merge)
  - `git fetch` (download without merge)

- **Undoing Changes**
  - `git reset` (unstage)
  - `git reset --hard` (discard changes)
  - `git revert` (safe undo)
  - `git stash` (temporary save)

- **GitHub Features**
  - Pull requests
  - Code review
  - Issues and projects
  - Actions (CI/CD basics)
  - Pages (static hosting)

---

# 🗓 **4-OY: TAILWIND, SHADCN/UI & REACT 19 (12 soat)**

---

## STAGE 21 — TailwindCSS v4 Mastery
**Goal** - Build beautiful UIs rapidly with utility classes.

### 📌 Topics (2 soat)
- **Setup**
  - npm installation with Vite
  - `tailwind.config.js` configuration
  - `@tailwind` directives in CSS
  - PostCSS setup

- **Core Concepts**
  - Utility-first philosophy
  - Mobile-first responsive prefixes
  - Hover, focus, active states
  - Dark mode with `dark:` variant
  - Arbitrary values: `w-[32rem]`

- **Layout Utilities**
  - Container, width, height (`w-`, `h-`)
  - Padding, margin (`p-`, `m-`, `px-`, `py-`)
  - Display (`block`, `inline-block`, `flex`, `grid`, `hidden`)
  - Position (`static`, `fixed`, `absolute`, `relative`, `sticky`)
  - Top/right/bottom/left (`inset-`, `top-`)

- **Flexbox Utilities**
  - `flex`, `flex-row`, `flex-col`
  - `flex-wrap`, `flex-nowrap`
  - `justify-start`, `justify-center`, `justify-between`
  - `items-start`, `items-center`, `items-stretch`
  - `grow`, `shrink`, `basis`

- **Grid Utilities**
  - `grid`, `grid-cols-3`, `grid-rows-2`
  - `col-span-2`, `row-span-1`
  - `gap-4`, `gap-x-2`, `gap-y-2`

- **Typography**
  - `font-sans`, `font-serif`, `font-mono`
  - `text-xs` to `text-9xl`
  - `font-thin` to `font-black`
  - `text-left`, `text-center`, `text-right`
  - `tracking-tighter` to `tracking-widest`
  - `leading-3` to `leading-10`

- **Colors & Backgrounds**
  - Text colors: `text-red-500`, `text-blue-600`
  - Background: `bg-gray-100`, `bg-gradient-to-r`
  - Border colors: `border-green-300`
  - Opacity: `bg-black/50`

- **Borders & Shadows**
  - `border`, `border-2`, `border-t`
  - `rounded`, `rounded-lg`, `rounded-full`
  - `shadow`, `shadow-md`, `shadow-xl`

- **Customization**
  - Custom colors in config
  - Custom fonts
  - Plugins (forms, typography)
  - `@apply` directive in CSS

- **Container Queries in Tailwind**
  - `@container` utility
  - `@lg:flex` variants

---

## STAGE 22 — shadcn/ui + Radix UI (2026 Standard)
**Goal** - Build accessible, beautiful UIs with copy-paste components.

### 📌 Topics (2 soat)
- **What is shadcn/ui?**
  - Not a library, but copy-paste components
  - Based on Radix UI primitives
  - Styled with TailwindCSS

- **Setup**
  - `npx shadcn-ui@latest init`
  - Configuration options
  - Adding components: `npx shadcn-ui add button`

- **Core Components**
  - Button, Card, Badge
  - Input, Label, Form
  - Dialog, Alert Dialog
  - Dropdown Menu
  - Tabs, Accordion
  - Sheet (slide-over panels)
  - Toast notifications

- **Forms with shadcn**
  - Form components
  - Validation integration
  - Error handling

- **Theming**
  - CSS variables for theming
  - Dark mode setup
  - Custom colors
  - Typography scale

- **Radix UI Primitives**
  - Headless components
  - Accessibility built-in
  - Composition pattern

- **Building Custom Components**
  - Extending shadcn/ui
  - Creating your own component library

---

## STAGE 23 — React 19 + TypeScript Fundamentals
**Goal** - Build type-safe React components.

### 📌 Topics (2 soat)
- **React 19 Overview**
  - React 19 new features
  - Server Components (concept)
  - React Compiler (auto-memoization)
  - Actions API

- **Setup with Vite**
  - `npm create vite@latest my-app -- --template react-ts`
  - Project structure
  - npm install, npm run dev

- **JSX with TypeScript**
  - JSX syntax
  - `{}` embedding expressions
  - JSX vs HTML differences
  - Fragments: `<></>` or `<Fragment>`

- **Functional Components**
  - Component definition: `const App: React.FC = () => {}`
  - Props interface
  - Children prop type: `React.ReactNode`

- **Props**
  - Passing data
  - Destructuring with types
  - Default props
  - `children` typing

- **Conditional Rendering**
  - if statements
  - && operator (short-circuit)
  - ternary operator
  - Conditional classes

- **Lists & Keys**
  - `array.map()` rendering
  - key prop (importance, best practices)
  - Index as key (when acceptable)

- **Styling Options**
  - Inline styles with React.CSSProperties
  - CSS Modules
  - TailwindCSS with React
  - shadcn/ui components

---

## STAGE 24 — React Hooks (with TypeScript)
**Goal** - Master all React hooks with proper typing.

### 📌 Topics (2 soat)
- **useState**
  - Type inference vs explicit typing
  - `useState<string>('')`
  - Union types for state
  - Complex state with interfaces
  - Functional updates

- **useEffect**
  - Side effects
  - Dependency array (typing doesn't matter)
  - Cleanup function
  - Mount, update, unmount
  - Common patterns

- **useRef**
  - `useRef<HTMLDivElement>(null)`
  - DOM refs (with initial null)
  - Mutable refs for values
  - Ref vs state

- **useReducer**
  - Action types with discriminated unions
  - Typing state and actions
  - When to use over useState

- **useContext**
  - Creating typed context
  - `createContext<Type | null>(null)`
  - Provider typing
  - Custom hook for context

- **useMemo**
  - Memoizing values
  - Dependency array
  - When to use (React Compiler reduces need)

- **useCallback**
  - Memoizing functions
  - Dependency array
  - Performance optimization

- **Custom Hooks**
  - Creating reusable logic
  - Generic custom hooks
  - Returning typed values
  - Examples: `useLocalStorage`, `useFetch`

---

## STAGE 25 — React 19 New Hooks & Features
**Goal** - Use latest React 19 features.

### 📌 Topics (2 soat)
- **useActionState (NEW!)**
  - Form handling with pending states
  - Typing action results
  - Progressive enhancement

- **useFormStatus (NEW!)**
  - Access form pending state
  - Optimistic UI updates

- **useOptimistic (NEW!)**
  - Optimistic updates pattern
  - Rollback on error

- **use() Hook (NEW!)**
  - Using promises in components
  - Using context conditionally
  - Suspense integration

- **Server Components**
  - Concept and benefits
  - "use client" directive
  - When to use client vs server

- **React Compiler**
  - Automatic memoization
  - No more useMemo/useCallback needed (sometimes)

- **Actions API**
  - `<form action={action}>`
  - Server Actions (with Next.js)

---

## STAGE 26 — Forms & Validation (Modern Stack)
**Goal** - Build type-safe forms with validation.

### 📌 Topics (2 soat)
- **React Hook Form**
  - `useForm` hook with TypeScript
  - `register` with typing
  - `handleSubmit` typed
  - Form values interface

- **Form Validation with Zod**
  - Zod schema creation
  - Type inference: `z.infer<typeof schema>`
  - zodResolver for React Hook Form

- **React Hook Form + shadcn/ui**
  - Integrating with shadcn form components
  - Error display patterns

- **Controlled vs Uncontrolled**
  - When to use each
  - Performance considerations

- **Complex Forms**
  - Nested fields
  - Dynamic fields (add/remove)
  - Multi-step forms

- **File Uploads**
  - File input handling
  - Preview images
  - Upload to server

---

## STAGE 27 — State Management (Zustand + TanStack Query)
**Goal** - Manage client and server state properly.

### 📌 Topics (2 soat)
- **Zustand (Client State)**
  - `create` store with TypeScript
  - Store interface
  - Actions and selectors
  - Middleware (persist, devtools)
  - Slices pattern for large stores

- **TanStack Query (React Query v5)**
  - Setup with TypeScript
  - `useQuery` with query keys
  - `useMutation` for modifications
  - Query invalidation
  - Pagination and infinite scroll
  - Optimistic updates

- **When to use each**
  - Zustand: UI state, theme, auth
  - TanStack Query: Server data, caching

- **Alternative: Context + useReducer**
  - For simple apps

---

# 🗓 **5-OY: NEXT.JS 15+ FULLSTACK (12 soat)**

---

## STAGE 28 — Next.js 15+ App Router Fundamentals
**Goal** - Build production-ready fullstack apps.

### 📌 Topics (2 soat)
- **Next.js 15+ Features**
  - Turbopack (fast bundling)
  - React 19 integration
  - App Router (default)

- **Project Setup**
  - `create-next-app@latest` with TypeScript
  - Project structure
  - `next.config.js` configuration

- **Routing (App Router)**
  - File-based routing
  - Pages: `page.tsx`
  - Layouts: `layout.tsx` (nested)
  - Templates: `template.tsx`
  - Loading UI: `loading.tsx`
  - Error UI: `error.tsx`
  - Not found: `not-found.tsx`

- **Dynamic Routes**
  - `[id]/page.tsx`
  - Catch-all routes: `[...slug]/page.tsx`
  - Optional catch-all: `[[...slug]]/page.tsx`

- **Route Groups**
  - `(marketing)/about/page.tsx` (no route segment)

- **Linking**
  - `next/link` component
  - `useRouter` hook
  - Programmatic navigation

---

## STAGE 29 — Server Components & Data Fetching
**Goal** - Master Server Components and data patterns.

### 📌 Topics (2 soat)
- **Server Components (Default)**
  - Async components
  - Direct database access
  - No useState/useEffect
  - Benefits: smaller bundle, faster

- **Client Components**
  - `"use client"` directive
  - When to use (interactivity, hooks)
  - Performance implications

- **Data Fetching in Server Components**
  - `async function Page() { const data = await fetch() }`
  - Fetch with caching
  - Database queries (Prisma, Drizzle)

- **Next.js Caching (NEW!)**
  - `"use cache"` directive
  - `cacheLife` profiles
  - `cacheTag`, `revalidateTag`
  - `revalidatePath`

- **Static vs Dynamic**
  - Static generation (SSG)
  - Dynamic rendering (SSR)
  - Incremental Static Regeneration (ISR)

- **Metadata & SEO**
  - `generateMetadata` function
  - `metadata` object
  - Open Graph images
  - Sitemap, robots.txt

---

## STAGE 30 — Server Actions & Mutations
**Goal** - Handle form submissions and data mutations.

### 📌 Topics (2 soat)
- **Server Actions**
  - `"use server"` directive
  - Inline vs separate file
  - Form actions: `<form action={action}>`
  - Typing form data

- **Mutations with Server Actions**
  - Database mutations
  - Revalidation
  - Error handling

- **Validation with Server Actions**
  - Zod validation
  - Error display
  - Progressive enhancement

- **useActionState (React 19)**
  - Pending states
  - Return values

- **useOptimistic**
  - Immediate UI updates
  - Rollback on error

---

## STAGE 31 — Authentication & Database
**Goal** - Add auth and database to Next.js apps.

### 📌 Topics (2 soat)
- **Authentication Options**
  - NextAuth.js / Auth.js v5
  - Clerk (easier)
  - Supabase Auth

- **NextAuth.js Setup**
  - `@auth/core` + `@auth/nextjs`
  - Providers (Google, GitHub, Email)
  - Session handling
  - Middleware for protected routes

- **Database Integration**
  - **Supabase** (PostgreSQL + realtime)
  - **Prisma** ORM (Type-safe)
  - **Drizzle ORM** (Lightweight)

- **Prisma Setup**
  - Schema definition
  - Migrations
  - Type-safe queries

- **CRUD Operations**
  - Creating, reading, updating, deleting
  - Relations
  - Filtering, pagination

- **Edge vs Serverless**
  - Edge runtime (fast, limited)
  - Serverless (Node.js)

---

## STAGE 32 — Next.js Advanced Patterns
**Goal** - Optimize Next.js applications.

### 📌 Topics (2 soat)
- **Image Optimization**
  - `next/image` component
  - AVIF/WebP formats
  - Responsive images
  - Priority loading

- **Font Optimization**
  - `next/font`
  - Variable fonts
  - Google Fonts integration

- **Middleware**
  - `middleware.ts`
  - Request rewriting
  - Authentication checks
  - Internationalization

- **API Routes**
  - `route.ts` in App Router
  - Typed responses
  - Request validation

- **Internationalization (i18n)**
  - next-intl setup
  - Routing with locales
  - Translations

- **Analytics & Monitoring**
  - Vercel Analytics
  - Core Web Vitals (INP, LCP, CLS)
  - Sentry for error tracking

---

# 🗓 **6-OY: ADVANCED UI & TESTING (12 soat)**

---

## STAGE 33 — Advanced shadcn/ui Patterns
**Goal** - Build custom, production-ready UIs.

### 📌 Topics (2 soat)
- **Customizing shadcn/ui**
  - Modifying generated components
  - Extending with new variants
  - Component composition

- **Data Tables**
  - TanStack Table (React Table)
  - Sorting, filtering, pagination
  - Column visibility

- **Forms with shadcn/ui**
  - Complex forms
  - Multi-step wizards
  - File upload with preview

- **Charts & Graphs**
  - Recharts / Tremor
  - Data visualization
  - Responsive charts

- **Notifications**
  - **Sonner** / **React Hot Toast** ✅
  - Toast patterns (success, error, loading)
  - Custom toast components

---

## STAGE 34 — Animations with Framer Motion
**Goal** - Add smooth animations to React apps.

### 📌 Topics (2 soat)
- **Framer Motion Basics**
  - `motion` components
  - `animate`, `initial`, `exit`
  - Transition properties

- **Gestures**
  - whileHover, whileTap, whileDrag
  - Drag constraints

- **Scroll Animations**
  - `useScroll`, `useTransform`
  - Scroll-triggered animations

- **AnimatePresence**
  - Exit animations
  - Route transitions

- **Layout Animations**
  - `layout` prop
  - Shared layout animations

---

## STAGE 35 — Testing (Vitest + Playwright)
**Goal** - Write reliable tests for production apps.

### 📌 Topics (2 soat)
- **Vitest (Unit Testing)**
  - Setup with React
  - `describe`, `it`, `expect`
  - Mocking functions
  - Coverage reports

- **React Testing Library**
  - Rendering components
  - Queries (getBy, findBy, queryBy)
  - User events (`@testing-library/user-event`)
  - Testing hooks

- **Playwright (E2E Testing)**
  - Browser automation
  - Page navigation
  - Assertions
  - Visual testing

- **Test Patterns**
  - Component testing
  - Integration testing
  - Mocking API calls

- **CI/CD Integration**
  - GitHub Actions for tests
  - Pre-commit hooks

---

## STAGE 36 — Performance Optimization
**Goal** - Optimize React/Next.js applications.

### 📌 Topics (2 soat)
- **Core Web Vitals**
  - Largest Contentful Paint (LCP)
  - Interaction to Next Paint (INP) - NEW!
  - Cumulative Layout Shift (CLS)

- **React Performance**
  - React Compiler (auto-optimization)
  - Code splitting with `lazy()`
  - `Suspense` boundaries
  - Virtual lists (react-window)

- **Next.js Performance**
  - Partial Prerendering (PPR)
  - Streaming
  - Edge runtime

- **Bundle Analysis**
  - `@next/bundle-analyzer`
  - Reducing bundle size

- **Lighthouse**
  - Auditing tools
  - Fixing common issues

---

## STAGE 37 — Real-time Features
**Goal** - Add real-time capabilities.

### 📌 Topics (2 soat)
- **WebSockets in React**
  - `useWebSocket` custom hook
  - Connection management
  - Reconnection logic

- **Supabase Realtime**
  - Database subscriptions
  - Presence
  - Broadcast

- **Pusher**
  - Channels and events
  - Client integration

- **Server-Sent Events**
  - EventSource API
  - Streaming responses

---

# 🗓 **7-OY: AI, PROJECTS & DEPLOYMENT (12 soat)**

---

## STAGE 38 — Vercel AI SDK (2026 MUST-HAVE!)
**Goal** - Add AI features to applications.

### 📌 Topics (2 soat)
- **Vercel AI SDK Setup**
  - `npm install ai`
  - Provider setup (OpenAI, Anthropic, Google)

- **useChat Hook**
  - Streaming chat responses
  - Message history
  - Typing indicators

- **useCompletion Hook**
  - Text completion
  - Streaming responses

- **AI Components**
  - `AI` provider
  - `useAIState`, `useUIState`

- **Tool Calling**
  - Function calling
  - Structured output

- **RAG (Retrieval Augmented Generation)**
  - Embeddings
  - Vector search (pgvector, Pinecone)

---

## STAGE 39 — Project 1: Fullstack Blog Platform
**Goal** - Build production-ready blog with all features.

### 📌 Features (2 soat)
- Next.js 15+ App Router
- TypeScript everywhere
- shadcn/ui for components
- MDX for blog posts
- Database (Supabase/Prisma)
- Authentication (NextAuth.js)
- Comments with Server Actions
- Search with AI
- SEO optimized
- Dark mode
- **React Hot Toast** for notifications
- Deployment to Vercel

---

## STAGE 40 — Project 2: E-Commerce with AI
**Goal** - Build modern e-commerce platform.

### 📌 Features (2 soat)
- Product catalog (TanStack Query)
- Shopping cart (Zustand)
- Checkout flow
- Authentication
- Admin dashboard
- AI product recommendations
- Semantic search with embeddings
- Real-time inventory (Supabase)
- Payment (Stripe basics)
- Order history
- **Sonner** for toasts
- Performance optimized

---

## STAGE 41 — Project 3: AI Chat Application
**Goal** - Build ChatGPT-like application.

### 📌 Features (2 soat)
- Vercel AI SDK
- Multiple AI models (OpenAI, Claude)
- Streaming responses
- Message persistence (database)
- File uploads (images, PDFs)
- Tool calling (weather, calculator)
- RAG with user documents
- Authentication
- Conversation history
- Share conversations
- Admin panel for usage tracking

---

## STAGE 42 — Deployment & DevOps
**Goal** - Deploy and monitor applications.

### 📌 Topics (2 soat)
- **Vercel Deployment**
  - Connecting Git repository
  - Environment variables
  - Custom domains
  - Preview deployments
  - Automatic HTTPS

- **Environment Configuration**
  - `.env.local`, `.env.production`
  - Type-safe env variables (zod)

- **CI/CD with GitHub Actions**
  - Running tests on push
  - Linting
  - Deployment to Vercel

- **Monitoring**
  - Vercel Analytics
  - Sentry error tracking
  - Logging

- **Analytics**
  - Google Analytics
  - Plausible (privacy-focused)

- **A/B Testing**
  - Feature flags
  - Split testing

---

## STAGE 43 — Portfolio & Job Preparation
**Goal** - Showcase work and land a job.

### 📌 Topics (2 soat)
- **Portfolio Website**
  - Build with Next.js
  - Showcase 3 projects
  - Live demos
  - GitHub links
  - Contact form

- **GitHub Profile Optimization**
  - Clean README for each project
  - Pinned repositories
  - Contribution graph
  - Profile README

- **Resume Preparation**
  - Frontend skills section
  - Project descriptions (with technologies)
  - GitHub/Portfolio links

- **Interview Preparation**
  - Common frontend questions
  - React/Next.js questions
  - TypeScript questions
  - System design basics
  - Coding challenges (LeetCode easy/medium)

- **Job Search Strategy**
  - Where to find jobs (LinkedIn, HH, Upwork)
  - Networking
  - Freelance platforms

---

## STAGE 44 — Next Steps & Career Growth
**Goal** - Plan continuous learning.

### 📌 Topics (2 soat)
- **TypeScript Advanced**
  - Advanced generics
  - Template literal types
  - Conditional types

- **Backend for Frontend**
  - Node.js basics
  - Express.js
  - tRPC (end-to-end typesafe APIs)

- **Mobile Development**
  - React Native Expo
  - NativeWind (Tailwind for RN)

- **Desktop Applications**
  - Tauri (Rust + web)
  - Electron

- **Monorepos**
  - Turborepo
  - pnpm workspaces

- **WebAssembly**
  - Rust + WASM
  - AssemblyScript

- **GraphQL**
  - Apollo Client
  - GraphQL Yoga

- **Community Involvement**
  - Open source contributions
  - Technical writing
  - Conference talks

---

# 📊 **HAFTALIK TAQSIMOT (JAMI 44 STAGE)**

| Oy | Hafta | STAGE | Mavzular |
|-----|-------|-------|----------|
| **1** | 1 | 1-2 | HTML5 + Forms |
| | 2 | 3-4 | CSS Basics + Box Model |
| | 3 | 5-6 | Layout + Flexbox |
| | 4 | 7 | CSS Grid |
| **2** | 5 | 8-9 | Responsive + Advanced CSS |
| | 6 | 10-11 | TypeScript Basic + Advanced |
| | 7 | 12-13 | Functions + Arrays |
| | 8 | 14-15 | Objects + Error Handling |
| **3** | 9 | 16-17 | DOM + Events |
| | 10 | 18-19 | Browser APIs + AI Tools |
| | 11 | 20 | Git & GitHub |
| | 12 | 21 | TailwindCSS |
| **4** | 13 | 22 | shadcn/ui |
| | 14 | 23-24 | React 19 + Hooks |
| | 15 | 25-26 | React 19 New + Forms |
| | 16 | 27 | Zustand + TanStack Query |
| **5** | 17 | 28-29 | Next.js + Server Components |
| | 18 | 30-31 | Server Actions + Auth |
| | 19 | 32 | Next.js Advanced |
| | 20 | 33 | Advanced shadcn/ui |
| **6** | 21 | 34 | Framer Motion |
| | 22 | 35 | Testing (Vitest + Playwright) |
| | 23 | 36 | Performance |
| | 24 | 37 | Real-time |
| **7** | 25 | 38 | AI SDK |
| | 26 | 39 | Project 1: Blog |
| | 27 | 40 | Project 2: E-Commerce |
| | 28 | 41-44 | Project 3: AI Chat + Portfolio |

---

# ✅ **2026 FRONTEND DEVELOPER CHECKLIST**

```
📋 7 oydan keyin bilishingiz kerak:

【CORE (100%)】
├── HTML5 (semantic, forms, multimedia)
├── CSS3 (Flexbox, Grid, Container Queries)
├── TailwindCSS v4
├── TypeScript (generics, utility types)
├── React 19 (hooks, server components)
├── Next.js 15+ (App Router, Server Actions)
├── shadcn/ui + Radix UI
├── TanStack Query + Zustand
└── Git + GitHub

【ADVANCED (80%)】
├── React Hook Form + Zod
├── Framer Motion
├── Vitest + Playwright
├── Vercel AI SDK
├── Authentication (NextAuth.js)
├── Database (Supabase/Prisma)
└── React Hot Toast / Sonner

【PROJECTS】
├── Fullstack Blog Platform
├── E-Commerce with AI Search
├── AI Chat Application
└── Deployed on Vercel

【JOB READY】
├── Portfolio website
├── GitHub with 3 projects
├── Resume
└── Interview preparation
```

---