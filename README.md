# 📚 **FRONTEND ROADMAP**

---

## HTML & CSS BASICS

### STAGE 1 — HTML Fundamentals
**Goal:** Create structured web pages with semantic markup.

#### Topics
- **Document Structure**
  - `<!DOCTYPE html>`
  - `<html>`, `<head>`, `<body>`
  - Meta tags, title, charset

- **Text Elements**
  - Headings `<h1>` to `<h6>`
  - Paragraphs `<p>`
  - Line break `<br>`, horizontal rule `<hr>`
  - Bold `<b>`, italic `<i>`, emphasis `<em>`, strong `<strong>`

- **Lists**
  - Unordered `<ul>` + `<li>`
  - Ordered `<ol>` + `<li>`
  - Description lists `<dl>`, `<dt>`, `<dd>`

- **Links & Images**
  - Anchor `<a>` with href, target
  - Absolute vs relative paths
  - Image `<img>` with src, alt, width, height

- **Tables**
  - `<table>`, `<tr>`, `<td>`, `<th>`
  - colspan, rowspan
  - `<thead>`, `<tbody>`, `<tfoot>`

- **Semantic HTML5**
  - `<header>`, `<footer>`
  - `<nav>`, `<main>`, `<section>`
  - `<article>`, `<aside>`, `<figure>`

---

### STAGE 2 — Forms & Multimedia
**Goal:** Build interactive forms and embed media.

#### Topics
- **Form Structure**
  - `<form>` with action, method
  - `<fieldset>`, `<legend>`
  - Labels `<label>`

- **Input Types**
  - text, password, email, number
  - checkbox, radio, file
  - date, color, range, hidden
  - submit, reset, button

- **Form Elements**
  - `<select>` + `<option>`
  - `<textarea>`
  - `<datalist>`, `<output>`

- **Form Attributes**
  - placeholder, required, disabled
  - readonly, autofocus, pattern
  - min, max, step

- **Multimedia**
  - `<audio>` with controls
  - `<video>` with poster
  - `<iframe>` for embedding

---

### STAGE 3 — CSS Basics
**Goal:** Style elements with selectors and properties.

#### Topics
- **CSS Integration**
  - Inline styles
  - Internal `<style>`
  - External .css files

- **Selectors**
  - Universal `*`
  - Element (tag)
  - Class `.class`
  - ID `#id`
  - Grouping `,`
  - Descendant (space)
  - Child `>`
  - Adjacent sibling `+`
  - Attribute `[type="text"]`

- **Colors**
  - Named colors
  - HEX (#RRGGBB)
  - RGB / RGBA
  - HSL / HSLA

- **Units**
  - Absolute: px, pt, cm
  - Relative: %, em, rem, vw, vh

- **Text Styling**
  - font-family, font-size
  - font-weight, font-style
  - text-align, text-decoration
  - line-height, letter-spacing
  - text-transform, text-shadow

- **Box Properties**
  - width, height
  - border (width, style, color)
  - padding (individual, shorthand)
  - margin (individual, shorthand)

---

### STAGE 4 — Box Model & Background
**Goal:** Understand element spacing and visual effects.

#### Topics
- **Box Model**
  - Content box
  - Padding box
  - Border box
  - Margin box
  - box-sizing property

- **Background**
  - background-color
  - background-image
  - background-repeat
  - background-position
  - background-size
  - background (shorthand)
  - Linear gradients
  - Radial gradients

- **Borders**
  - border-radius
  - border-image
  - outline vs border

---

### STAGE 5 — Layout Basics
**Goal:** Control element positioning and display.

#### Topics
- **Display Property**
  - block
  - inline
  - inline-block
  - none
  - visibility: hidden

- **Position Property**
  - static
  - relative
  - absolute
  - fixed
  - sticky
  - z-index

- **Overflow**
  - visible, hidden, scroll, auto

- **Float & Clear**
  - float: left/right
  - clear: both/left/right

---

### STAGE 6 — Flexbox
**Goal:** Create flexible layouts with Flexbox.

#### Topics
- **Flex Container**
  - display: flex
  - flex-direction (row, column)
  - flex-wrap (wrap, nowrap)
  - justify-content (main axis)
  - align-items (cross axis)
  - align-content (multi-line)

- **Flex Items**
  - order
  - flex-grow
  - flex-shrink
  - flex-basis
  - align-self

---

### STAGE 7 — CSS Grid
**Goal:** Build 2D layouts with Grid.

#### Topics
- **Grid Container**
  - display: grid
  - grid-template-columns
  - grid-template-rows
  - gap (row-gap, column-gap)

- **Track Sizing**
  - px, %, fr units
  - repeat(), minmax()
  - auto-fill, auto-fit

- **Item Placement**
  - grid-column (start/end)
  - grid-row (start/end)
  - grid-area

- **Alignment**
  - justify-items
  - align-items
  - justify-content
  - align-content

---

## ADVANCED CSS & JAVASCRIPT

### STAGE 8 — Responsive Design
**Goal:** Make websites work on all devices.

#### Topics
- **Viewport Meta Tag**
- **Media Queries**
  - @media min-width/max-width
  - @media orientation
  - Logical operators (and, not, only)

- **Mobile-First Approach**
- **Responsive Units**
  - %, vw, vh, rem, em
- **Responsive Images**
  - max-width: 100%
  - picture element
  - srcset attribute

---

### STAGE 9 — Advanced CSS
**Goal:** Add interactivity and advanced styling.

#### Topics
- **Pseudo-classes**
  - :hover, :active, :focus
  - :first-child, :last-child
  - :nth-child(), :nth-of-type()
  - :not(), :empty
  - :checked, :disabled

- **Pseudo-elements**
  - ::before, ::after
  - ::first-letter, ::first-line
  - content property

- **Transitions**
  - transition-property
  - transition-duration
  - transition-timing-function
  - transition-delay

- **Transforms**
  - translate(), rotate(), scale()
  - skew(), matrix()
  - transform-origin

- **CSS Variables**
  - --variable-name
  - var() function
  - Scope inheritance

- **Animations**
  - @keyframes
  - animation-name, duration
  - animation-iteration-count
  - animation-direction
  - animation-fill-mode

---

### STAGE 10 — JavaScript Fundamentals
**Goal:** Write basic JavaScript programs.

#### Topics
- **JavaScript Basics**
  - console.log()
  - Comments (//, /* */)
  - alert(), prompt(), confirm()

- **Variables**
  - var (function scope)
  - let (block scope)
  - const (block scope, immutable)

- **Data Types**
  - Primitive: string, number, boolean
  - null, undefined, symbol, bigint
  - typeof operator

- **Type Conversion**
  - String(), Number(), Boolean()
  - Implicit vs explicit conversion

- **Operators**
  - Arithmetic: +, -, *, /, %, **
  - Assignment: =, +=, -=, *=, /=
  - Comparison: ==, ===, !=, !==, >, <, >=, <=
  - Logical: &&, ||, !
  - Increment/Decrement: ++, --
  - Ternary: condition ? true : false

---

### STAGE 11 — Strings & Numbers
**Goal:** Manipulate textual and numeric data.

#### Topics
- **String Methods**
  - length, toUpperCase(), toLowerCase()
  - indexOf(), lastIndexOf()
  - includes(), startsWith(), endsWith()
  - slice(), substring(), substr()
  - replace(), replaceAll()
  - split(), trim()
  - charAt(), charCodeAt()
  - concat(), repeat()

- **Template Literals**
  - `${expression}`
  - Multi-line strings

- **Number Methods**
  - toFixed(), toPrecision()
  - parseInt(), parseFloat()
  - Math object (round, ceil, floor)
  - Math.random(), Math.max(), Math.min()
  - Math.pow(), Math.sqrt(), Math.abs()

---

### STAGE 12 — Control Flow
**Goal:** Control program execution.

#### Topics
- **Conditional Statements**
  - if statement
  - if...else
  - if...else if...else
  - switch statement
  - break vs continue

- **Loops**
  - for loop (initialization, condition, increment)
  - while loop
  - do...while loop
  - for...in (object iteration)
  - for...of (iterable iteration)

---

### STAGE 13 — Functions
**Goal:** Write reusable code blocks.

#### Topics
- **Function Declaration**
  - function name() {}
  - Parameters vs arguments
  - return statement

- **Function Expression**
  - const func = function() {}

- **Arrow Functions**
  - () => {}
  - Implicit return
  - No arguments object

- **Parameters**
  - Default parameters
  - Rest parameters (...args)
  - arguments object

- **Scope & Closure**
  - Global scope
  - Local/function scope
  - Block scope
  - Lexical scope
  - Closure concept

---

### STAGE 14 — Arrays
**Goal:** Store and manipulate collections.

#### Topics
- **Array Creation**
  - Literal []
  - new Array()
  - Array.of(), Array.from()

- **Array Properties**
  - length

- **Basic Methods**
  - push(), pop()
  - shift(), unshift()
  - splice(), slice()
  - concat(), join()
  - indexOf(), lastIndexOf()
  - includes()

- **Iteration Methods**
  - forEach()
  - map()
  - filter()
  - reduce(), reduceRight()
  - some(), every()
  - find(), findIndex()

- **Sorting & Reversing**
  - sort()
  - reverse()

- **Destructuring**
  - const [a, b] = array

---

### STAGE 15 — Objects
**Goal:** Work with key-value pairs.

#### Topics
- **Object Creation**
  - Literal {}
  - new Object()
  - Object.create()

- **Properties**
  - Dot notation vs bracket notation
  - Adding, updating, deleting properties
  - Object.keys(), Object.values(), Object.entries()
  - hasOwnProperty()

- **Methods**
  - Object.assign()
  - Object.freeze(), Object.seal()
  - Spread operator {...obj}

- **this Keyword**
  - In methods
  - Global context
  - Arrow functions vs regular

- **Destructuring**
  - const {prop} = object
  - Renaming, default values

---

## DOM & BROWSER APIS

### STAGE 16 — DOM Manipulation
**Goal:** Select and modify HTML elements.

#### Topics
- **Selecting Elements**
  - getElementById()
  - getElementsByClassName()
  - getElementsByTagName()
  - querySelector()
  - querySelectorAll()

- **Traversing DOM**
  - parentElement, parentNode
  - children, childNodes
  - firstElementChild, lastElementChild
  - nextElementSibling, previousElementSibling

- **Manipulating Content**
  - innerHTML, innerText, textContent
  - outerHTML

- **Manipulating Attributes**
  - getAttribute(), setAttribute()
  - removeAttribute()
  - hasAttribute()
  - dataset (data-* attributes)

- **Manipulating Classes**
  - classList.add(), remove()
  - classList.toggle(), contains()
  - className

- **Manipulating Styles**
  - style.property (camelCase)
  - getComputedStyle()

- **Creating Elements**
  - createElement()
  - createTextNode()
  - appendChild(), append()
  - insertBefore(), insertAdjacentElement()
  - removeChild(), remove()
  - cloneNode()

---

### STAGE 17 — Events
**Goal:** Handle user interactions.

#### Topics
- **Event Listeners**
  - addEventListener()
  - removeEventListener()
  - Event object (e)

- **Mouse Events**
  - click, dblclick
  - mousedown, mouseup
  - mousemove, mouseenter, mouseleave
  - mouseover, mouseout

- **Keyboard Events**
  - keydown, keyup
  - key, code, ctrlKey, shiftKey

- **Form Events**
  - submit, reset
  - change, input
  - focus, blur

- **Window Events**
  - load, DOMContentLoaded
  - resize, scroll

- **Event Flow**
  - Event bubbling
  - Event capturing
  - stopPropagation()
  - preventDefault()
  - Event delegation

---

### STAGE 18 — Advanced JavaScript
**Goal:** Understand core JavaScript mechanics.

#### Topics
- **Hoisting**
  - Variable hoisting (var)
  - Function hoisting

- **Scope Chain**
- **Closures**
  - Practical examples

- **Timers**
  - setTimeout()
  - setInterval()
  - clearTimeout(), clearInterval()

- **Callbacks**
  - Synchronous callbacks
  - Asynchronous callbacks
  - Callback hell

- **Promises**
  - Promise states (pending, fulfilled, rejected)
  - then(), catch(), finally()
  - Promise.all(), Promise.race()
  - Promise.allSettled()

- **Async/Await**
  - async functions
  - await keyword
  - Error handling with try/catch

---

### STAGE 19 — Storage & APIs
**Goal:** Persist data and fetch external resources.

#### Topics
- **Web Storage**
  - localStorage (setItem, getItem, removeItem, clear)
  - sessionStorage
  - Storage events

- **Fetch API**
  - GET requests
  - POST requests
  - Headers, options
  - Response handling
  - JSON parsing

- **Error Handling**
  - try...catch...finally
  - throw
  - Custom errors

- **JSON**
  - JSON.stringify()
  - JSON.parse()

---

## GIT, TAILWIND & BOOTSTRAP

### STAGE 20 — Git Basics
**Goal:** Version control for code.

#### Topics
- **Configuration**
  - git config (user.name, user.email)
  - git --version

- **Repository**
  - git init
  - git clone
  - .gitignore

- **Basic Workflow**
  - git status
  - git add (file, .)
  - git commit (-m, -am)
  - git log (--oneline, --graph)

- **Branching**
  - git branch
  - git checkout / git switch
  - git merge
  - Merge conflicts resolution

- **Remote Repositories**
  - git remote add
  - git push (-u)
  - git pull
  - git fetch

- **GitHub**
  - Pull requests
  - Forking workflow
  - README.md

---

### STAGE 21 — TailwindCSS
**Goal:** Style rapidly with utility classes.

#### Topics
- **Setup**
  - CDN installation
  - npm installation
  - Tailwind config file

- **Core Concepts**
  - Utility-first approach
  - Responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
  - Hover, focus states (hover:, focus:)

- **Layout**
  - Container, width (w-*), height (h-*)
  - Padding (p-*, pt-*, pb-*, pl-*, pr-*)
  - Margin (m-*, mt-*, mb-*, ml-*, mr-*)
  - Display (block, inline-block, flex, grid, hidden)
  - Position (static, fixed, absolute, relative, sticky)

- **Flexbox Utilities**
  - flex, flex-row/col, flex-wrap
  - justify-*, items-*, content-*
  - grow, shrink, basis

- **Grid Utilities**
  - grid, grid-cols-*, grid-rows-*
  - col-span-*, row-span-*
  - gap-*

- **Typography**
  - font-*, text-*
  - text-align, text-decoration
  - tracking-*, leading-*

- **Colors & Background**
  - bg-*, text-*, border-*
  - opacity, hover variants
  - gradient utilities

- **Borders & Shadows**
  - border, rounded-*
  - shadow-*

- **Customization**
  - tailwind.config.js
  - Custom colors, fonts
  - @apply directive

---

### STAGE 22 — Bootstrap (Alternative)
**Goal:** Learn component-based framework.

#### Topics
- **Grid System**
  - Container (container, container-fluid)
  - Row, columns (col-*, col-md-*)
  - Gutters, offset

- **Components**
  - Navbar, dropdowns
  - Cards, buttons
  - Forms, inputs
  - Modals, tooltips
  - Carousel, accordion

- **Utilities**
  - Spacing (m-*, p-*)
  - Display, flex utilities
  - Text utilities
  - Colors (bg-primary, text-white)

---

## REACT FUNDAMENTALS

### STAGE 23 — React Basics
**Goal:** Build component-based UIs.

#### Topics
- **Setup**
  - Vite + React
  - Project structure
  - npm install, npm run dev

- **JSX**
  - JSX syntax
  - {} embedding expressions
  - JSX vs HTML differences
  - Fragments <></>

- **Components**
  - Functional components
  - Component composition
  - Import/export

- **Props**
  - Passing data
  - Destructuring props
  - children prop
  - Default props

- **Conditional Rendering**
  - if statements
  - && operator
  - ternary operator

- **Lists & Keys**
  - map() rendering
  - key prop importance

---

### STAGE 24 — State & Hooks
**Goal:** Manage component data and lifecycle.

#### Topics
- **useState**
  - Declaring state
  - Updating state
  - State immutability
  - Functional updates

- **Events in React**
  - onClick, onChange, onSubmit
  - Event handlers
  - Passing parameters

- **Forms**
  - Controlled components
  - Multiple inputs
  - Form submission

- **useEffect**
  - Side effects
  - Dependency array
  - Cleanup function
  - Mount, update, unmount

- **Custom Hooks**
  - Creating reusable logic
  - useLocalStorage example

---

## ADVANCED REACT

### STAGE 25 — React Router
**Goal:** Handle navigation in SPAs.

#### Topics
- **Setup**
  - react-router-dom
  - BrowserRouter
  - Routes, Route

- **Navigation**
  - Link, NavLink
  - useNavigate hook
  - Navigate component

- **Dynamic Routes**
  - Route parameters (:id)
  - useParams hook

- **Nested Routes**
  - Outlet component
  - Relative links

- **Query Parameters**
  - useSearchParams

- **Protected Routes**
  - Authentication logic

---

### STAGE 26 — Global State Management
**Goal:** Share state across components.

#### Topics
- **Context API**
  - createContext
  - Provider pattern
  - useContext hook

- **Use Cases**
  - Theme context
  - Auth context
  - Shopping cart

- **Performance Considerations**
  - Context splitting
  - Memoization

---

### STAGE 27 — Performance Optimization
**Goal:** Optimize React applications.

#### Topics
- **useMemo**
  - Memoizing values

- **useCallback**
  - Memoizing functions

- **React.memo**
  - Preventing re-renders

- **Code Splitting**
  - lazy()
  - Suspense

---

## PROJECTS & DEPLOYMENT

### STAGE 28 — Project 1: Todo App
**Goal:** Build full-featured todo application.

#### Topics Covered
- CRUD operations
- LocalStorage persistence
- Filtering (all, active, completed)
- Tailwind styling

---

### STAGE 29 — Project 2: E-Commerce Site
**Goal:** Build product catalog with shopping cart.

#### Topics Covered
- Fake Store API integration
- Product listing with filters
- Product detail page
- Shopping cart (Context)
- Routing implementation

---

### STAGE 30 — Project 3: Weather App
**Goal:** Build weather forecast application.

#### Topics Covered
- OpenWeatherMap API
- Geolocation features
- Search by city
- Loading states
- Error handling

---

### STAGE 31 — Deployment & Portfolio
**Goal:** Showcase work to employers.

#### Topics
- **Deployment**
  - Netlify deployment
  - Vercel deployment
  - Environment variables

- **GitHub Best Practices**
  - Clean README
  - Live demo links
  - Project structure

- **Portfolio Development**
  - Building portfolio site
  - Resume preparation
  - Interview questions practice

- **Next Steps**
  - TypeScript introduction
  - Next.js overview
  - State management (Redux/Zustand)
  - Testing fundamentals