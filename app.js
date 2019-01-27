
const express = require('express');
const app = express();
const port = 3000;

const {fork} = require('child_process');
const longTask = require('./longTask.js');
const limit = 2e6;

var args = process.argv.slice(2);

app.get('/example', (req, res) => res.send('Example route!'));

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    if (args[0] == 'no-fork') {
        runLongTask();
    }
    else {
        runLongTaskForked();
    } 
})

async function runLongTaskForked() {
    try {
        const forked = fork('longTaskForked.js');
        forked.send(limit);
        forked.on('message', (response) => {
            console.log(response);
            forked.kill();
        });
      } catch (err) {
            console.log(err);
      }
}

async function runLongTask() {
    const result = await longTask(limit);
    console.log(result);
}