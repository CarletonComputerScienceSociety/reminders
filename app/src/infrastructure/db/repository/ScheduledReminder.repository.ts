import { prisma } from "..";
import { ScheduledReminder as ScheduledReminderModel } from "@prisma/client";
import { ReminderStatus, ScheduledReminder } from "../../../domain";

export const create = async () => {
  const newScheduledReminder = await prisma.scheduledReminder.create({
    data: {
      scheduledAt: new Date(),
      status: "pending",
    },
  });

  return ormToDomain(newScheduledReminder);
};

export const allPending = async (): Promise<ScheduledReminder[]> => {
  const pendingReminders = await prisma.scheduledReminder.findMany({
    where: {
      status: "pending",
      scheduledAt: {
        lte: new Date(),
      },
    },
  });

  return pendingReminders.map(ormToDomain);
};

const ormToDomain = (
  ormScheduledReminder: ScheduledReminderModel,
): ScheduledReminder => {
  const status = ormScheduledReminder.status as ReminderStatus;
  const scheduledReminder = new ScheduledReminder({
    id: ormScheduledReminder.id.toString(),
    scheduledAt: ormScheduledReminder.scheduledAt,
    status: status,
  });

  return scheduledReminder;
};
