const cronMaker = (schedule) => {
  let scheduleRule = "";
  switch (schedule.type) {
    case "recurring":
      let hour = Number(schedule.data.hours);
      let min = Number(schedule.data.min);
      scheduleRule = ` * * * * *`;
      return scheduleRule;
    case "weekly": {
      let day = Number(schedule.data.day);
      let hour = Number(schedule.data.time.split(":")[0]);
      let min = Number(schedule.data.time.split(":")[1]);
      scheduleRule = `${min} ${hour} * * ${day}`;
      return scheduleRule;
    }
    case "monthly": {
      let date = Number(schedule.data.date);
      let hour = Number(schedule.data.time.split(":")[0]);
      let min = Number(schedule.data.time.split(":")[1]);
      scheduleRule = `${min} ${hour} ${date} * * `;
      return scheduleRule;
    }
    case "yearly": {
      let month = Number(schedule.data.month);
      let date = Number(schedule.data.date);
      let hour = Number(schedule.data.time.split(":")[0]);
      let min = Number(schedule.data.time.split(":")[1]);
      scheduleRule = `${min} ${hour} ${date} ${month} * `;
      return scheduleRule;
    }
    default:
      return new error("invalid schedule");
  }
};

module.exports = cronMaker;
