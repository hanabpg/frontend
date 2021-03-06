### v1.2.0

###### Feb 28, 2021

- Add design Figma source file (variants and auto layout)
- Add Right-to-Left layout support
- Add JWT login support (see in doc Authentication)
- Add simple version
- Update components override
- Update `.babelrc`
- Update `.eslintrc`
- Update `jsconfig.json`
- Update `package.json`
- Upgraded depdendecy
- Change `import xxx from '~/...'` `to import xxx from 'src/...'`
- Improve folder structure

---

### v1.1.0

###### Feb 3, 2021

- Depdendecy versions `@material-ui` from 5.0.0-alpha.23 to 5.0.0-alpha.24
- Fix the injection order of the CSS with yarn. JSS and emotion are still cohabitating until v5 reaches a stable version. We need to tell emotion to inject before JSS
- Fix layout doc `src/layouts/DocsLayout` breakpoints
- Fix double scroll bar on mobile `src/components/Scrollbars.js`
- Improvement Carousel implementation

---

### v1.0.0

###### Jan 26, 2021

Initial release.
