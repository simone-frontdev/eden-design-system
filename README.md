# Eden Design System

React components library with Storybook and Styled-Components.

### Installing and executing

Install dependencies:
`npm install`

Start storybook:
`npm start`


### Dependencies

This application uses the following libraries:

- [ReactJS](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Rollup](https://rollupjs.org/)
- [ESLint](https://eslint.org/)

### Folder structure & conventions

For each component we have a folder which contain the following files:
- Component: a component file where we implement the React component.
- Style: a style file where we define the CSS of each part of the component using styled-components library.
- Stories: a stories file where we define the stories of Storybook to visualize the component in different variants.
- Types: a type file where we define the props type of the React component.
- Index: a index file to export the component and allow to import it in the React web applications.

Here an example:

```bash
- src
-  - components/
-  -  -  Button/
-  -  -  - Button.tsx
-  -  -  - Button.styled.ts
-  -  -  - Button.stories.tsx
-  -  -  - Button.types.ts
-  -  -  - index.ts
-  - fonts/
-  - images/
-  - shared/
-  - typings/
```

- Under the `components` folder we have all the components implemented.
- Under the `fonts` folder we have all the fonts used in the components.
- Under the `images` folder we have all the images used in the components.
- Under the `shared` folder we have all the costants and utilities used in the components (like colors, screens etc...).
- Under the `typings` folder we have all the types need for typescript to compile the code.

## Import and use into WebApp

Once the design system is installed with npm as dependency of web application, we can use all the components exported by the library in this way:

`import { SwitchToggle } from 'eden-design-system'`


```
<SwitchToggle
    onChange={(value) => setValue(value)}
/>
```

## Authors

[Simone FrontDev](https://www.linkedin.com/in/simone-delle-fave-4a3916155/)
