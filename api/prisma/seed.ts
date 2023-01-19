import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rubi = await prisma.person.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: "Rubi",
      age: 31,
      gender: "F",
    },
  });
  const randy = await prisma.person.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      name: "Randy",
      age: 32,
      gender: "M",
    },
  });
  const apple = await prisma.person.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      name: "Apple",
      age: 18,
      gender: "F",
    },
  });
  const mango = await prisma.person.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      name: "Mango",
      age: 14,
      gender: "F",
    },
  });
  const ferry = await prisma.person.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      name: "Ferry",
      age: 37,
      gender: "M",
    },
  });
  const johnson = await prisma.person.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      name: "Johnson",
      age: 55,
      gender: "M",
    },
  });
  const larry = await prisma.person.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      name: "Larry",
      age: 45,
      gender: "M",
    },
  });
  const ryne = await prisma.person.upsert({
    where: {
      id: 8,
    },
    update: {},
    create: {
      name: "Ryne",
      age: 12,
      gender: "F",
    },
  });
  const christopher = await prisma.person.upsert({
    where: {
      id: 9,
    },
    update: {},
    create: {
      name: "Christopher",
      age: 24,
      gender: "M",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
