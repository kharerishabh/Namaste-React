# Namaste React


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Alogrithm - written in C++
- Caching - Faster Builds
- Image oprtimization
- Minification 
- Bundling
- Compress
- Content Hashing
- Code Splitting 
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Https 
- Tree Shaking - remove unused code
- Different dev and production bundles

# Namaste Food
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Resturant Container
 *   - ResturantCard
 *    -Img
 *    -Name of Res, star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

 Two Types of Import/Export

 -Default Export/Import

 expeort default Component
 import Components from 'path'

 -Named Export/Import

 export const variablename
 import {variablename} from 'path'

 # React Hooks
 {Normal Js Utility Function}
 - Tow Very Important Hooks
 -useState() - Superpoweful State Variable in React
 -useEffect()

 # Routing in webapps
  - Client side routing
  - Server side Routing

 # Redux-Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect Our Store to our APP
 - Create a {cartslice}
 - Dispatch An Action
 - Read Data using Selector

 # Older Redux
 - Vanilla(older) Redux => Don't mutate state directly
      returning was mandatory
      const newState = [...state]
      newState.items.push(action.payload)
       return newState

 # Newer React
 - You can mutate the state directly or you can return the new state
 - state.items.length = 0
 - return {items: []}