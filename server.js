const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

const app = express();
const port = 5000; // Port where the server will listen
const secretToken = '<PLACE TOKEN HERE>'; // Your secret token

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  if (req.body.secret_token === secretToken) {
    // Command to pull Docker image and restart the service
    exec('docker pull username/image-name:tag && docker compose up -d', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return res.status(500).send('Docker pull and restart failed');
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.status(200).send('Docker image updated and service restarted successfully');
    });
  } else {
    res.status(403).send('Forbidden: Incorrect secret token');
  }
});

app.listen(port, () => {
  console.log(`Webhook listener running on port ${port}`);
});

