import { Queue, Worker } from "bullmq";
import { CronJob } from "cron";
import { ScheduledReminderApplication } from "../../application";
import { sendMessage } from "../discord";

const connectionOptions = {
  host: "localhost",
  port: 6379,
};

const queue = new Queue("normal", { connection: connectionOptions });

const worker = new Worker(
  "normal",
  async (job) => {
    console.log("------");
    console.log(`Job id: ${job.id}`);
    const reminders = await ScheduledReminderApplication.getallPending();
    console.log(reminders);

    for (const reminder of reminders) {
      sendMessage(
        "495268673406369794",
        `${reminder.getId() + reminder.getStatus()}`,
      );
    }
  },
  { connection: connectionOptions },
);

const cronJob = new CronJob("*/3 * * * * *", async () => {
  await queue.add("jobNameHere", { data: "some job data" });
});

cronJob.start();
