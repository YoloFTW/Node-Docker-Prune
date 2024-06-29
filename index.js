const schedule = require('node-schedule');
const { spawn } = require("child_process");
const { sendWebhook } = require("./utilities/webhook");
const { extractSize } = require("./utilities/extractSize");
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

//collect rule times for cron job
let rule = `${process.env.RULE_SECOND} ${process.env.RULE_MINUTE} ${process.env.RULE_HOUR} ${process.env.RULE_DATE} ${process.env.RULE_MONTH} ${process.env.RULE_WEEK_DAY}`;

//start cron
const job = schedule.scheduleJob(rule, function(){

    //command to service restart wings
    let wings = spawn('docker', ['image', 'prune', '-a', '-f']);

    //if the command runs correctly
    wings.stdout.on('data', (data) => {

        let response = data.toString();

        //if the response contains the reclaimed space
        if(response.includes("space:")){

            let size = extractSize(data.toString());
            sendWebhook(`${process.env.TITLE} Succesfully Ran And Reclaimed ${size}`, process.env.DISCORD_URL, false);
        
        //if not assume command didnt run correctly
        }else{
            sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
        }

    });

    //if the command returns errors
    wings.stderr.on('data', (data) => {
        sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
    });

    //if the command window fails to start
    wings.on('error', function(err){
        sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
    });

    wings.on('exit', (code) => {
         //if the command runs incorrectly 
        if(code != 0){
            sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
        }

    });

    //close window
    wings.stdin.end();

});

