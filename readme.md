# CraveLy - Food Ordering App
## React Project
🔗 [Live Demo](https://cravelyfood.vercel.app/)

## Parcel
- dev build
- local server
- HMR(Hot Module Replacement) > auto updates
- file Watching algorithm (in c++)
- Faster builds > caching
- Image Optimization
- bundling
- dev and prod bundle
- compressing
- code splitting
- differential bundling(supports older browsers)
- diagnostic
- Error handling
- HTTPs
- Tree shaking(removes unused code from app)

## React Element 
- React.createElement creates a React element not HTML element
- This react element is JS Object
- This JS object is rendered using root.render which then creates it HTML element

##  JSX
- It makes code easier to read for devs
- JSX is not HTML , not react element
- JSX is HTML like Syntax
- It is not supported by Browser bu BABEL and PARCEL make it possible
- BABEL is Js compiler or transpiler which converts jsx into Js then js engine executes that to show on browser
- BABEL is managed by PARCEL
- JSX code => React.createElement(Js obj) => render => HTML elemet
- beconmes exact like core react element but more devloper friendly
- for attribute use "Camel Casing"
- use parenthesis for multiple lines
- for adding js in jsx use "{}"
- for adding inline css write in js obj {}

### Babel
- It is packege known as JavaScript compiler or Transpiler
- That converts JS code so that JS engine, react, browser can understand it

## React components
- everything in React is componenet
- 2 types : 1️⃣Class-based Component(older)
            2️⃣Functional component(newer)

### React Functional Component
- first letter should be in Capital
- it is javaScript function That returns JSX code or react element
- to render these react components => root.render(<.../>) thats how BABEL understands it as component
- to acces another react elemet, functionl componenet to another use:
  *{Title()}
  *<Title/>
  *<Title></Title>

## React Props(properties)
- to dynamically pass a data to component pass it as a props
- props are just passing arguments to a function
- always build "config driven UI"

## 2 types of export and import
  1️⃣Default import and export
  2️⃣Named import and export - multiple export => {---} for import

## Hooks
  1️⃣useState() 
     keeps ui and data in sink
  2️⃣useEffect(() => {},[])
     renders after component renders
