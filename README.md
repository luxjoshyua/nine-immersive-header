# nine-immersive-header
npm package for dynamic nine immersive header


# instructions
1. add `<header>` and `<footer>` tags to html
2. If using more then one `<header>` or `<footer>`, add class `masthead`
2. add canonical url <meta property="og:url" content="urlgoeshere" >
3. import nine-immersive-header and add config
4. config accepts object with properties : headerConfig and footerConfig
5. both configs accept
- logoColor, bgColor, textColor, css
- css is object with name = css property and value = css value

# example
```javascript
import nineHeader from "nine-immersive-header";

nineHeader({
  headerConfig: {
    logoColor: "white",

    bgColor: "transparent",
    css: {
      position: "absolute",
      borderBottom: "solid 1px black"
    }
  },
  footerConfig: {
    bgColor: "#fff"
  }
});



```

# masthead override
- By default, masthead logo logic is getting pulled from  window.location.hostname. You can add an override by using a meta tag with the name of "masthead" then choose a masthead by adding content prop. See all possible values in src/js/site/config.js
- e.g to show nine celebrity logo:

```
<meta name="masthead" content="celebrity" />
```