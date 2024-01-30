import { ScheduledReminder as Repository } from "../infrastructure/db/repository";
import { ScheduledReminder } from "../domain";

export const getallPending = async (): Promise<ScheduledReminder[]> => {
  const reminders = await Repository.allPending();

  return reminders;
};

export const create = async (): Promise<ScheduledReminder> => {
  const newScheduledReminder = await Repository.create();

  return newScheduledReminder;
};
