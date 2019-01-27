const longTask = require('./longTask.js')

process.on('message', async (limit) => {
    const result = await longTask(limit);
    process.send(result);
});