import userRepo from "@repos/user-repo";
import { IUser } from "@models/user-model";
import { UserNotFoundError } from "@shared/errors";

// **** Functions **** //

/**
 * Get all persons
 */
function getAll(): Promise<IUser[]> {
  return userRepo.getAll();
}

/**
 * Add one person
 */
function addOne(user: IUser): Promise<void> {
  return userRepo.add(user);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
} as const;
