# Webflow Project Dev Starter

Stacks:

``` 
# GSAP
# Three
# Lenis
# Barba
```

## How to use
  Paste this script into the `Before </body> tag` part of the Webflow custom code in the project settings so that it loads on all pages.
 


  ```html
  <script type="module" src="http://localhost:3000/@vite/client"></script>
  <script type="module" src="http://localhost:3000/src/main.js"></script>
````

- If you are doing the JS dev but not the Webflow dev (**recommended version**):

  Paste this script in the `Before </body> tag` part of the Webflow custom code in the project settings so that it loads on all pages. We will change the url of Netlify later to load the production files.

  ```jsx
  <script>
    (function () {
      const LOCALHOST_URL = [
        'http://localhost:3000/@vite/client',
        'http://localhost:3000/src/main.js',
      ]
      const PROD_URL = ['https://MY-PROJECT.netlify.app/main.js']

      function createScripts(arr, isDevMode) {
        return arr.map(function (url) {
          const s = document.createElement('script')
          s.src = url

          if (isDevMode) {
            s.type = 'module'
          }

          return s
        })
      }

      function insertScript(scriptArr) {
        scriptArr.forEach(function (script) {
          document.body.appendChild(script)
        })
      }

      const localhostScripts = createScripts(LOCALHOST_URL, true)
      const prodScripts = createScripts(PROD_URL, false)

      let choosedScripts = null

      fetch(LOCALHOST_URL[0], {})
        .then(() => {
          choosedScripts = localhostScripts
        })
        .catch((e) => {
          choosedScripts = prodScripts
          console.error(e)
        })
        .finally(() => {
          if (choosedScripts) {
            insertScript(choosedScripts)

            return
          }

          console.error('something went wrong, no scripts loaded')
        })
    })()
  </script>
  ```

  This script will load the right JS file. If you are developing and your dev server is running, it will load the JS files served on your machine. Otherwise, it will load them from Netlify if you have pushed your code to production. And if it's not yet in production on Netlify, it won't load any JS file.
  That way you don't have to ping the Webflow dev every time you want to test some code, and you don't have to connect to the Webflow account of the site.

  ⚠️ **Be careful though to remember to change the script once the JS development is finished and sent to production. It will look like this to load the production scripts**

  ```html
  <script src="https://[votre_domaine].netlify.app/main.js"></script>
  ```

 
