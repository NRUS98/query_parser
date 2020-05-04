import faker from "faker";

export const getData = () => {
  const persons = [];
  for (let i = 0; i < 5; i++) {
    persons.push({
      id: ++i,
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      country: faker.address.country(),
    });
  }
  return persons;
};
