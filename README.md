# docker-webhook

Adjust the configurations in docker-compose.yml and server file.

Install dependencies and run the application

```
$ npm i
$ node server.js
```

### Using PM2 to Keep Node Application Running

1. Install PM2 with
```
$ npm install pm2 -g
```
2. Start the Application with PM2
```
$ pm2 start server.js --name docker-webhook
```
3. Ensure PM2 Starts on Boot
```
$ pm2 startup
```
4. Save PM2 Process List
```
$ pm2 save
```

### Additional PM2 Commands

1. List Running Applications
```
$ pm2 list
```
3. Monitor Applications
```
$ pm2 monit
```
5. View Logs
```
$ pm2 logs
```
7. Stop an Application
```
$ pm2 stop webhook-listener
```
9. Restart an Application
```
$ pm2 restart webhook-listener
```
