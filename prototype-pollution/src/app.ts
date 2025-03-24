import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

const DEBUG = false;
const IS_ADMIN = false;
app.post('/api/debug', (req, res) => {
    const { data } = req.body;

    const ret: Record<string, any> = { };
    for (const key in data) {
      if (!IS_ADMIN && key === 'debug') continue;
      ret[key] = data[key];
    }

    if (DEBUG) {
      ret.debug = true;
    }

    res.json({
      debug: ret.debug,
      extra_data: ret,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 