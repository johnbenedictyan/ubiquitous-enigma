import { Person, PrismaClient } from '@prisma/client';

import { IPerson } from '../models/person-model';

const prisma = new PrismaClient();

// **** Functions **** //

/**
 * Get all persons
 */
async function getAll(): Promise<Person[]> {
  const people = await prisma.person.findMany({});
  return people;
}

/**
 * Add one person
 */
async function addOne(newPerson: IPerson): Promise<Person> {
  const createdPerson = await prisma.person.create({
    data: {
      name: newPerson.name,
      age: newPerson.age,
      gender: newPerson.gender,
    },
  });
  return createdPerson;
}

// **** Export default **** //

export default {
  getAll,
  addOne,
} as const;
