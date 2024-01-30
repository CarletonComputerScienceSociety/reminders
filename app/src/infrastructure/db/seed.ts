import {
  ScheduledReminderApplication,
  WorkItemApplication,
} from "../../application";

const seed = async () => {
  //   const workItem = await WorkItemApplication.create();
  const scheduledReminder = await ScheduledReminderApplication.create();
};

seed();
