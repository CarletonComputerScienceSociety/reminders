import {
  ScheduledReminderApplication,
} from "../../application";

const seed = async () => {
  const scheduledReminder = await ScheduledReminderApplication.create();
};

seed();
