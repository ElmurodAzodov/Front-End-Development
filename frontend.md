# 📚 **FRONTEND DEVELOPMENT BO'YICHA TO'LIQ O'QUV REJASI**

<p align="center">
  <img src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif" width="300" />
</p>

---

## 📋 **MAZMUNI**

1. [HTML](#-1-html-hypertext-markup-language)
2. [CSS](#-2-css-cascading-style-sheets)
3. [SASS](#-3-sass-syntactically-awesome-stylesheets)
4. [Bootstrap](#-4-bootstrap)
5. [Tailwind CSS](#-5-tailwind-css)
6. [JavaScript](#-6-javascript)
7. [Git va GitHub](#-7-git-va-github)
8. [React](#-8-react)
9. [Qo'shimcha Zamonaviy Texnologiyalar](#-9-qoşimcha-zamonaviy-texnologiyalar)
10. [Yakuniy Loyihalar](#-10-yakuniy-loyihalar)

---

## 🌐 **1. HTML (HyperText Markup Language)**

### *Modul 1: HTML Asoslari (0 dan boshlab)*
- HTML nima va web qanday ishlaydi
- HTML document strukturasi (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
- VS Code sozlash va Live Server
- Kommentariyalar
- HTML validatsiya (W3C Validator)

### *Modul 2: Matn va Kontent Elementlari*
- Headinglar (h1-h6) va SEO asoslari
- Paragraph va line breaks
- Inline elementlar (strong, em, mark, small, span)
- Ro'yxatlar (ordered, unordered, description)
- HTML entities (&nbsp;, &lt;, &gt;)
- Iqtiboslar (blockquote, q, cite)

### *Modul 3: Linklar va Media*
- Anchor tag (`<a>`) va attributlar (target, download, rel)
- Rasmlar (`<img>` - src, alt, width, height)
- Responsive images (srcset, sizes, picture)
- Audio va video
- Favicon
- SVG integratsiya (inline, img, background)

### *Modul 4: Jadvallar*
- Table strukturasi (table, thead, tbody, tfoot)
- Colspan va rowspan
- Jadval accessibility (scope, caption)

### *Modul 5: Formalar (ENG MUHIM)*
- Form strukturasi (`<form>`)
- Input turlari (text, email, password, number, date, file, range, color, tel, url)
- Radio, checkbox, select, textarea, datalist
- Labels va accessibility
- Fieldset va legend
- HTML5 validation (required, pattern, minlength)
- Form submission (GET vs POST, enctype)

### *Modul 6: Semantic HTML*
- Semantic taglar (header, nav, main, section, article, aside, footer)
- Figure va figcaption
- Time va mark
- SEO va screen reader asoslari
- Microdata va Schema.org

### *Modul 7: Accessibility (A11y)*
- Alt text va labels
- ARIA asoslari (roles, properties)
- Keyboard navigation (tabindex, focus)
- Skip links
- Accessibility testing (Lighthouse, axe)

### *Modul 8: Performance*
- Clean HTML strukturasi
- Div soup dan qochish
- Image optimization (lazy loading)
- Preconnect va dns-prefetch

### *Modul 9: HTML + JavaScript*
- Data attributes (data-*)
- HTML structure for DOM manipulation
- HTML mindset for React

---

## 🎨 **2. CSS (Cascading Style Sheets)**

### *Modul 1: CSS Asoslari*
- CSS nima va qanday ishlaydi
- CSS syntax (selector, property, value)
- Inline, Internal, External CSS
- Kommentariyalar
- Selectors (element, class, id, universal, combinators)
- Attribute selectors ([type="text"])
- Pseudo-classes (:hover, :focus, :first-child, :nth-child)
- Pseudo-elements (::before, ::after)
- Specificity & Cascade
- Inheritance (inherit, initial)

### *Modul 2: Ranglar va Fonlar*
- Color formats (hex, rgb, rgba, hsl, hsla)
- Background (color, image, position, size, repeat)
- Multiple backgrounds
- Gradients (linear, radial, conic)

### *Modul 3: Matn Styling*
- text-align, line-height, letter-spacing
- text-transform, text-decoration
- text-shadow, text-indent
- white-space, word-break

### *Modul 4: Border va Box Model*
- Border (width, style, color)
- Border-radius
- Box model (content, padding, border, margin)
- Box-sizing (content-box vs border-box)
- Width, height, min/max width/height
- CSS Units (px, %, em, rem, vw, vh, ch, ex)
- aspect-ratio

### *Modul 5: Display va Float*
- Display (block, inline, inline-block, none)
- Float va clear
- Clearfix texnikasi
- Overflow (hidden, auto, scroll)
- List styling

### *Modul 6: Fontlar*
- Font properties (family, style, weight, size)
- @font-face (custom fonts)
- Google Fonts
- font-display
- Variable fonts
- System fonts stack

### *Modul 7: Positioning*
- Position (static, relative, absolute, fixed, sticky)
- Top, right, bottom, left
- Z-index va stacking context

### *Modul 8: Flexbox (TO'LIQ)*
- Flex container (flex-direction, flex-wrap, justify-content, align-items, align-content, gap)
- Flex items (flex-grow, flex-shrink, flex-basis, align-self, order)
- Flexbox patterns (centering, sticky footer, equal height, card grids)

### *Modul 9: Grid Layout (TO'LIQ)*
- Grid container (grid-template-columns, grid-template-rows, grid-template-areas, gap)
- Grid items (grid-column, grid-row, grid-area)
- Functions (repeat(), minmax(), fit-content(), min(), max(), clamp())
- auto-fit vs auto-fill
- Subgrid

### *Modul 10: Responsive Design*
- Mobile-first approach
- Media queries (min-width, max-width, orientation)
- Responsive images (srcset, sizes)
- Responsive typography (clamp())
- Container queries (@container)
- Viewport meta tag
- Feature queries (@supports)

### *Modul 11: Pseudo-classes (CHUQUR)*
- Dynamic (:hover, :active, :focus, :focus-visible, :focus-within)
- Structural (:root, :empty, :first-child, :last-child)
- nth-child variations
- Form states (:checked, :disabled, :valid, :invalid)

### *Modul 12: Transitions va Transforms*
- Transition properties (property, duration, timing-function, delay)
- 2D transforms (translate, scale, rotate, skew)
- 3D transforms (rotateX/Y/Z, perspective)
- transform-origin
- will-change

### *Modul 13: Animations*
- @keyframes
- Animation properties (name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state)
- Step animations

### *Modul 14: Filters va Effects*
- Filters (blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate, sepia, drop-shadow)
- backdrop-filter (frosted glass)
- box-shadow, text-shadow
- blend-modes (mix-blend-mode, background-blend-mode)
- clip-path

### *Modul 15: CSS Variables*
- Custom properties (--variable)
- Scope va inheritance
- var() fallback
- Updating with JavaScript
- Dark/light mode logic
- calc(), min(), max(), clamp()

### *Modul 16: Modern Functions*
- Color functions (rgb(), hsl(), hwb(), lch())
- Trigonometric functions (sin, cos, tan)
- env() (safe area insets)

### *Modul 17: CSS Architecture*
- BEM methodology
- Utility-first CSS
- @layer
- CSS file organization
- CSS linting (Stylelint)

---

## 🔧 **3. SASS (Syntactically Awesome Stylesheets)**

### *Modul 1: SASS Asoslari*
- SASS nima va nima uchun kerak
- SASS vs CSS
- Installation (npm, CLI)
- .scss vs .sass syntax
- Compiling (watch mode, sourcemaps)

### *Modul 2: Variables*
- $variables
- Variable scope (global vs local)
- !default flag
- Maps ($colors: ("primary": blue))
- Lists

### *Modul 3: Nesting va Partials*
- Nesting selectors
- & parent selector
- Over-nesting dan qochish
- Partials (_filename.scss)
- @use vs @import
- @forward

### *Modul 4: Mixins va Functions*
- @mixin yaratish
- @include ishlatish
- Arguments va default values
- @content (content blocks)
- Built-in functions (lighten, darken, saturate, mix)
- Custom @function

### *Modul 5: Control Directives*
- @if, @else if, @else
- @for loop (through vs to)
- @each loop (lists va maps)
- @while loop

### *Modul 6: Extend/Inheritance*
- @extend
- Placeholder selectors (%)

### *Modul 7: Modular Architecture*
- 7-1 pattern (abstracts, vendors, base, components, layout, pages, themes)
- Component-based SASS
- Theme management

---

## 📱 **4. Bootstrap**

### *Modul 1: Setup*
- Bootstrap 5 (no jQuery)
- CDN vs npm
- Bootstrap Icons

### *Modul 2: Grid System*
- Containers (container, container-fluid, container-{breakpoint})
- Rows va columns
- Responsive breakpoints (xs, sm, md, lg, xl, xxl)
- Column ordering (order)
- Offset

### *Modul 3: Utilities*
- Text utilities (text-center, text-primary, fs-1, fw-bold)
- Background utilities (bg-primary, bg-gradient)
- Spacing (m-0, p-3, mx-auto)
- Display (d-flex, d-none, d-md-block)
- Flex utilities (justify-content, align-items)
- Sizing (w-100, h-50)

### *Modul 4: Components*
- Buttons (btn, btn-primary, btn-outline, btn-lg)
- Badges
- Cards (card, card-body, card-title)
- Navbar (navbar, navbar-expand, dropdown)
- Forms (form-control, form-select, form-check)
- Input groups
- Alerts
- Modals
- Spinners
- Progress bars
- List groups
- Pagination

### *Modul 5: JavaScript Plugins*
- Collapse/Accordion
- Carousel
- Tooltips
- Popovers
- Tabs

### *Modul 6: Customization*
- SASS variables override
- Creating themes
- Utility-first mindset

---

## 🌪️ **5. Tailwind CSS**

### *Modul 1: Asoslar*
- Utility-first CSS philosophy
- Installation (npm, CDN)
- Configuration (tailwind.config.js)
- PostCSS setup

### *Modul 2: Core Concepts*
- Utility classes (p-4, text-center, bg-blue-500)
- Responsive design (sm:, md:, lg:)
- Hover/focus states (hover:bg-blue-700)
- Dark mode (dark:bg-gray-800)

### *Modul 3: Customization*
- Theme extension (colors, fonts, spacing)
- Custom utilities
- @apply directive
- Plugins (forms, typography, aspect-ratio)

### *Modul 4: Advanced*
- PurgeCSS / content configuration
- JIT mode
- Integration with React
- Tailwind UI components

---

## ⚡ **6. JavaScript**

### *Modul 0: Setup*
- VS Code extensions
- Browser DevTools (Console, Sources, Network)
- Node.js va npm basics
- JavaScript in HTML (async, defer)

### *Modul 1: Fundamentals*
- console methods (log, warn, error, table, time)
- Variables (let, const, var)
- Data types (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
- Operators (arithmetic, comparison, logical, ternary)
- Type conversion (explicit vs implicit)
- Truthy & falsy values

### *Modul 2: Numbers*
- Number methods (parseInt, parseFloat, toFixed)
- Math object (floor, ceil, round, random, max, min)
- Precision issues (0.1 + 0.2)

### *Modul 3: Strings*
- String methods (length, slice, substring, replace, split, join)
- Search (indexOf, includes, startsWith, endsWith)
- Template literals
- Regular Expressions (test, exec, match, replace)

### *Modul 4: Dates*
- Date object
- Get/set methods
- Formatting (toLocaleDateString, Intl.DateTimeFormat)
- Date calculations

### *Modul 5: Arrays (TO'LIQ)*
- Array creation (literal, Array.of, Array.from)
- Mutating methods (push, pop, shift, unshift, splice, sort, reverse)
- Non-mutating (slice, concat, join)
- Iteration (forEach, for...of)
- Search (indexOf, find, findIndex, includes)
- Functional (map, filter, reduce, some, every)
- Spread operator, rest, destructuring

### *Modul 6: Functions*
- Function declaration vs expression vs arrow
- Parameters (default, rest)
- IIFE
- Closures
- Scope (global, function, block)
- Hoisting
- this keyword
- call, apply, bind
- Higher-order functions
- Pure functions

### *Modul 7: Objects*
- Object literals
- Property access
- Object methods (keys, values, entries, assign, freeze)
- Getters/setters
- Prototypes
- Deep vs shallow copy
- Destructuring

### *Modul 8: Classes (OOP)*
- ES6 class syntax
- Constructor
- Methods
- Static methods
- Private fields (#)
- Inheritance (extends, super)
- instanceof

### *Modul 9: Modules*
- ES Modules (export, import)
- Named vs default exports
- Dynamic imports
- CommonJS (Node.js)
- npm packages

### *Modul 10: Asynchronous JavaScript*
- Callbacks
- Callback hell
- Promises (then, catch, finally)
- Promise methods (all, race, allSettled, any)
- async/await
- Error handling (try/catch)
- Event Loop (call stack, task queue, microtask)

### *Modul 11: HTTP & Fetch*
- HTTP methods (GET, POST, PUT, DELETE)
- Status codes
- Fetch API
- Axios
- Error handling
- AbortController
- CORS

### *Modul 12: Browser APIs*
- Window object
- Location, History, Navigator
- Geolocation API
- Clipboard API
- Fullscreen API
- Page Visibility API

### *Modul 13: DOM Manipulation*
- Selecting elements (querySelector, getElementById)
- Traversing (parent, children, nextSibling)
- Creating/inserting elements
- innerHTML vs textContent
- Attributes vs properties
- classList
- Style manipulation

### *Modul 14: Events*
- addEventListener
- Event object (target, currentTarget)
- preventDefault, stopPropagation
- Event delegation
- Event capturing vs bubbling
- Custom events

### *Modul 15: Forms*
- Form elements
- Form events (submit, change, input)
- HTML5 validation
- Custom validation
- FormData API

### *Modul 16: Storage*
- localStorage, sessionStorage
- Cookies
- IndexedDB (basic)
- JSON.stringify/parse

### *Modul 17: Error Handling*
- Error types
- try/catch/finally
- throw
- Custom errors

### *Modul 18: Modern Features (ES2020+)*
- Nullish coalescing (??)
- Optional chaining (?.)
- Promise.allSettled
- globalThis
- at() method
- Top-level await

### *Modul 19: Advanced Patterns*
- Generators (function*, yield)
- Iterators (Symbol.iterator)
- Proxies
- WeakMap, WeakSet
- Web Workers
- Service Workers
- WebSockets

### *Modul 20: Testing*
- Unit testing (Jest/Vitest)
- Assertions
- Mocks
- TDD concept

---

## 🔄 **7. Git va GitHub**

### *Modul 1: Setup*
- Git installation
- Configuration (user.name, user.email)
- SSH keys vs HTTPS
- GitHub account

### *Modul 2: Git Basics*
- git init, git clone
- git add, git commit
- git status, git log
- git diff
- .gitignore

### *Modul 3: Branching*
- git branch, git checkout, git switch
- Branch naming conventions
- git merge (fast-forward vs 3-way)
- Conflict resolution

### *Modul 4: Remote Repositories*
- git remote add
- git push, git pull, git fetch
- Fork vs clone
- Upstream workflow

### *Modul 5: Rewriting History*
- git rebase (interactive)
- git reset (soft, mixed, hard)
- git revert
- git cherry-pick

### *Modul 6: Stashing & Tags*
- git stash
- git tag (lightweight vs annotated)
- Semantic versioning
- GitHub Releases

### *Modul 7: Collaboration*
- Pull Request workflow
- Code review
- Merge strategies (merge, squash, rebase)
- PR templates

### *Modul 8: GitHub Features*
- Issues
- Projects (Kanban)
- GitHub Actions basics
- GitHub Pages
- Dependabot
- Security alerts

### *Modul 9: Advanced*
- Git hooks (Husky)
- Conventional commits
- Git LFS
- Monorepos
- Submodules

---

## ⚛️ **8. React**

### *Modul 0: Setup*
- Node.js
- Vite (create-vite)
- Project structure
- npm scripts
- ESLint + Prettier

### *Modul 1: JSX va Komponentlar*
- JSX rules
- Functional components
- Props
- Children prop
- Keys in lists
- PropTypes

### *Modul 2: State va Events*
- useState hook
- Event handling
- Forms (controlled components)
- Form validation

### *Modul 3: Effects va Lifecycle*
- useEffect
- Cleanup functions
- Dependency array
- useLayoutEffect
- useRef (DOM references, mutable values)

### *Modul 4: Custom Hooks*
- Rules of hooks
- useLocalStorage
- useFetch
- useDebounce
- useToggle
- useMediaQuery

### *Modul 5: Advanced Hooks*
- useMemo
- useCallback
- React.memo
- useReducer
- useImperativeHandle
- useDebugValue

### *Modul 6: Context API*
- createContext
- Provider
- useContext
- Context + useReducer pattern

### *Modul 7: Routing (React Router v6)*
- BrowserRouter
- Routes, Route
- Link, NavLink
- useParams, useNavigate
- Nested routes (Outlet)
- Protected routes
- Lazy loading (React.lazy, Suspense)

### *Modul 8: State Management*
- **Zustand** (simple)
- **Redux Toolkit** (advanced)
- **Jotai** (atomic)

### *Modul 9: Data Fetching*
- TanStack Query (React Query)
- useQuery, useMutation
- Query invalidation
- Pagination (useInfiniteQuery)
- Optimistic updates

### *Modul 10: Forms (Advanced)*
- React Hook Form
- Validation with Yup/Zod
- Controlled vs uncontrolled
- File uploads
- Multi-step forms

### *Modul 11: Styling in React*
- CSS Modules
- Styled Components
- Emotion
- Tailwind CSS

### *Modul 12: Patterns*
- Compound components
- Render props
- HOC (Higher-Order Components)
- Container/Presentational

### *Modul 13: Performance*
- Code splitting
- Virtualization (react-window)
- useTransition
- useDeferredValue
- Profiler API

### *Modul 14: Testing*
- React Testing Library
- Unit tests
- Integration tests
- Mocking API calls
- Snapshot tests

### *Modul 15: TypeScript with React*
- Typing props
- Typing events
- Typing hooks
- Generic components
- TypeScript + Context

### *Modul 16: Next.js*
- Why Next.js (SSR, SSG)
- File-based routing
- Data fetching (getStaticProps, getServerSideProps)
- API routes
- Image optimization
- Middleware
- Deployment (Vercel)

### *Modul 17: React 18 Features*
- Automatic batching
- Concurrent rendering
- useId
- useSyncExternalStore
- useInsertionEffect

### *Modul 18: Security*
- XSS prevention
- dangerouslySetInnerHTML
- DOMPurify
- CSRF protection
- CSP headers

### *Modul 19: Deployment*
- Environment variables
- Vercel deployment
- Netlify deployment
- GitHub Pages
- Docker containerization
- CI/CD with GitHub Actions

### *Modul 20: Performance Monitoring*
- Web Vitals
- Lighthouse
- Error tracking (Sentry)

---

## 🚀 **9. Qo'shimcha Zamonaviy Texnologiyalar**

### *Modul 21: React Native (Mobile)*
- Expo setup
- Core components
- Navigation
- Device APIs
- Publishing

### *Modul 22: PWA (Progressive Web Apps)*
- Web App Manifest
- Service Workers
- Offline support
- Push notifications

### *Modul 23: TypeScript (Chuqur)*
- Interfaces vs Types
- Generics
- Utility types
- Declaration files

### *Modul 24: GraphQL*
- Apollo Client
- Queries, Mutations
- Caching

### *Modul 25: State Management (Redux Toolkit)*
- Store setup
- Slices
- Async thunks
- RTK Query

### *Modul 26: Testing (E2E)*
- Playwright
- Cypress
- Test automation

---

## 🏆 **10. Yakuniy Loyihalar**

### *Loyiha 1: Todo App (Boshlang'ich)*
- CRUD operations
- LocalStorage
- Filtering
- Unit tests

### *Loyiha 2: Weather App (O'rta)*
- API integration
- Geolocation
- Error handling
- Responsive design

### *Loyiha 3: E-commerce Site (Kuchli)*
- Product catalog
- Shopping cart
- Authentication
- Checkout
- Payment integration

### *Loyiha 4: Admin Dashboard (Advanced)*
- Charts (Recharts)
- Data tables
- User management
- Real-time updates
- Role-based access

### *Loyiha 5: Full-stack Next.js App (Senior)*
- Next.js + TypeScript
- Database (Prisma)
- Authentication (NextAuth)
- API routes
- Deployment

---

## 📊 **Umumiy Statistika**

| Texnologiya | Modullar | Daraja |
|-------------|----------|--------|
| HTML | 9 | 100% |
| CSS | 17 | 100% |
| SASS | 7 | 100% |
| Bootstrap | 6 | 100% |
| Tailwind | 4 | 100% |
| JavaScript | 20 | 100% |
| Git/GitHub | 9 | 100% |
| React | 20 | 100% |
| Qo'shimcha | 6 | 100% |

---

<p align="center">
  <b>Jami modullar: 98 ta</b><br>
  <b>📅 Taxminiy vaqt: 12-18 oy</b><br>
  <b>🎯 Natija: Senior Frontend Developer</b>
</p>

<p align="center">
  <img src="https://media.giphy.com/media/3o7abB06u9bNzA8LC8/giphy.gif" width="200" />
</p>

<p align="center">
  <b>🔥 Bu reja bilan siz:</b><br>
  ✅ HTML, CSS, JavaScript ni mukammal o'rganasiz<br>
  ✅ React va zamonaviy frameworklarni egallaysiz<br>
  ✅ Real loyihalar yaratasiz<br>
  ✅ Senior darajasiga yetasiz<br>
  ✅ Bozorda talabgir mutaxassis bo'lasiz
</p>

---

<p align="center">
  <i>© Frontend Development Full Roadmap</i>
</p>