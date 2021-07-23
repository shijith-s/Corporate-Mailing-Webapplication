const schedule = require("node-schedule");

let userId1 = "s1";
let userId2 = "s2";
let userId3 = "s3";

let schedules = {};

schedules[`${userId1}`] = schedule.scheduleJob("5 * * * *", function() {
    console.log("Generating report for user 1!");
});
schedules[`${userId2}`] = schedule.scheduleJob("8 * * * *", function() {
    console.log("Generating report for user 2!");
});
schedules[`${userId3}`] = schedule.scheduleJob("6 * * * *", function() {
    console.log("Generating report for user 3!");
});