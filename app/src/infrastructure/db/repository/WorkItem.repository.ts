import { prisma } from "..";
import { WorkItem as WorkItemModel } from "@prisma/client";
import { WorkItem } from "../../../domain";

export const create = async () => {
  const newWorkItem = await prisma.workItem.create({
    data: {
      title: "Work Item",
      description: "Work Item Description",
    },
  });

  return ormToDomain(newWorkItem);
};

const ormToDomain = (ormWorkItem: WorkItemModel): WorkItem => {
  const workItem = new WorkItem({
    id: ormWorkItem.id.toString(),
    title: ormWorkItem.title,
    description: ormWorkItem.description,
  });

  return workItem;
};
