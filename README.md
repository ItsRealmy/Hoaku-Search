<img src="https://i.ibb.co/7Vs7Wyr/Hoaku-Banner.png" alt="Screenshot of Hoaku" style="height: 100px;margin-bottom: 30px;" />

## What is Hoaku?
Hoaku is an open source search engine with a pleasent and unique user interface.

## How does it work?
It simply scrapes Google (using [`googlekit`](https://npmjs.com/package/googlekit)).

Oh, and we use `express` & `ejs` as web server/for rendering pages.

## How do I run it?
Create a `.env` file, add this line to the file: `PORT=[your desired port]`, run `npm i`,
run `node .` and you're all set! You can also use [pm2](https://npmjs.com/packages/pm2)
if you'd like.