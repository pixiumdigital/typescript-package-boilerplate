# Typescript Webpackage Boilerplate

 In this boilerplate we have a simple look at a very basic typescript package exported for the web.

We leverage the use of webpack to expose our package to the browser. 

# Installation 

install the dev packages with yarn:

```
yarn
```

# Developement 

```
yarn start
```

This will start webpack to compile the library on changes. 
This will also start snowpack which will update the index.html in test once the library from webpack has been compiled
# Build

```
yarn build
```

# Publish Package

First login to the npm cli if not already done

```
npm login
```

You will need to remove the following line in your `package.json`

```
private: true,
```

To publish a patch

```
yarn patch
```

To publish a minor

```
yarn minor
```

To publish a major

```
yarn major
```



