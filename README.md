# forked-bg-process
Test out running a non blocked forked background process in Node

Here an example route has been created at /example.  When the long task is run in forked mode, the app continues to serve /example while outputting the progress of the long task to the console.  

When not running in forked mode /example won't serve until the long task has finished.

## Installation

npm install

## To Run

With forked background process to run a long task:

node app.js

Without forked background process to run a long task:

node app.js no-fork
