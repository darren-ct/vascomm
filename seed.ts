// Run npx prisma db seed

import prisma from "./lib/prisma";

async function main() {
  await prisma.user.create({
    data: {
      email: "darren@gmail.com",
      name: "Darren Christian",
      role: "ADMIN",
      phoneNumber: "082228883040",
      password: "23312ne9*",
      status: "ACTIVE",
    },
  });

  await prisma.product.create({
    data: {
      name: "Euphoria",
      imageUrl: "",
      price: 320000,
      status: "ACTIVE",
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
    process.exit(1);
  });
