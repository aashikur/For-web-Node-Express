# First server_with_express
============================

```
npm init -y
npm install express --save 
npm i -D typescript
npx tsc --init
npm i --save-dev @types/node

```

to run with ts without js 

```
npm i -D tsx
example:
npx tsx src/server.ts

```
add a 'dev' script to package.json
It will watch for changes and restart the server automatically

```
"scripts": {
    "dev": "npx tsx watch src/server.ts"
  },
```