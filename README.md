# portal-cljs

ClojureScript for the Purple Customer Portal

## Javascript and ClojureScript

ClojureScript uses the Google closure compiler to translate ClojureScript to Javascript. There is a basic and advanced compilation mode. The basic compilation outputs Javascript that is suitable for debugging purposes. The advanced compilation mode produces a single file of minified Javascript with dead code pruned and is suitable for a production release.

There can be discrepancies in the way the code is compiled between the two modes. One common problem is the way javascript object properties are accessed in clojurescript. For example, in javascript the URL property of document is accessed via:

```javascript
document.URL
```

In clojurescript, this can be accessed in two ways.

```clojurescript
;; first example
(.-URL document)
;; second example
(aget document "URL")
```

The above two statements are equivalent when using basic compilation. However, in advanced compilation mode the first example will fail due to name mangling. The reason that the second example works and the first one doesn't is that the Google closure compiler in advanced compilation mode (which is used by the clojurescript compiler) will not touch strings.

Development of the Purple Portal is full-stack development work on the portal-service and portal-cljs repositories. The following outline provides a basic workflow that assumes a directory structure that matches that of the Purple-Services repository.

For example:

```
Purple-Services
	|
	|- portal-service
	|
	|- portal-cljs
```

# Development Workflow

0. Produce a new route or feature in portal-service (optional)
1. Develop the interface using figwheel
2. Test the advanced compilation output with portal-service

## 1. Develop the interface using figwheel

You will need two terminals open in order to compile and run the code using this workflow.

*Advanced compilation*
```bash
$ lein cljsbuild auto release
```

The portal-service server should be running when developing. Start it in the portal-service dir:

```bash
$ lein ring server
```

The advanced compilation target is
```
../portal-service/src/public/js/portal.js
```

*Figwheel*
```bash
$ rlwrap lein figwheel
```

Note: rlwrap provides a readline wrapper for the figwheel REPL

Connect the browser to the figwheel server by browsing to http://localhost:3449/index.html. After it connects, the figwheel REPL will become active in the terminal. When changes are made to the codebase, Figwheel will automatically update the browser code. If there are errors during compilation, Figwheel will report them.

Figwheel serves index.html from the resources/public dir. The code depends on setting a base-url in the html file that it is served from. For example, index.html has this div:

```html
<div id="base-url" value="http://localhost:3002/" style="display: none;"></div>
```

where the attribute 'value' is the base-url. The clojurescript code pulls the value attribute from div#base-url in order to set the base-url used in server calls. The base-url defined in the div above assumes the server is running on the default port of 3002 (defined in portal-services/profiles.clj).

If you would like to open up a separate Chrome dev environment for development, use the follwing command:

```bash
$  /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security --user-data-dir=/tmp/chrome2/ \ http://localhost:3449/index.html
```

Alternatively, create a script named 'chrome-file-open':

```bash
#!/bin/bash

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security --user-data-dir=/tmp/chrome2/ \ $1
```

chmod +x this script and put it on your $PATH. You can then open the files with:

```bash
$ chrome-file-open http://localhost:3449/index.html
```

### figwheel notes

portal-cljs makes use of the Reagent ClojureScript React wrapper. 

#### on-jsload

When developing a feature for a particular tab on the portal, it is convinient to have figwheel go to that tab on every reload. In dev.cljs (not included in the advanced release compilation), you can change the view that is loaded. For example, to have zones tab selected, use:

```clojure
(defn ^:export on-jsload
  []
  (core/init-app)
  (utils/select-toggle-key! (r/cursor state/landing-state [:tab-content-toggle])
                            :vehicles-view))
  
```			   

## License


Copyright © 2017 Purple Services Inc
