import { WorkItemRepository } from "../infrastructure/db/repository";

export const create = async () => {
  const newWorkItem = await WorkItemRepository.create();

  return newWorkItem;
};
