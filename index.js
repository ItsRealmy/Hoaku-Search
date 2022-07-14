require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const search = require('googlekit');
const path = require('node:path');

const app = express();
const { PORT } = process.env;

app.listen(PORT || 3400, () => {
  console.log(`Listening on :${PORT || 3400}`)
});

app.get('/', async (req, res) => {
  const completedTemplate = await ejs.renderFile(path.join(__dirname, 'views/index.ejs'));

  return res.send(completedTemplate);
});

app.get('/search', async (req, res) => {
  const { q: query } = req.query;

  if (!query) {
    const completedTemplate = await ejs.renderFile(path.join(__dirname, 'views/index.ejs'));

    return res.send(completedTemplate);
  } else {
    let page = parseInt(req.query.p) || 0;
    if (isNaN(page)) return res.send('Error');
    if (page < 0) return res.send('Error');

    const resp = await search(query, page);

    const completedTemplate = await ejs.renderFile(path.join(__dirname, 'views/search.ejs'), {
      results: resp.results,
    });

    return res.send(completedTemplate);
  }
});

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'static')));