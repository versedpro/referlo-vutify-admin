const Items = [
  {
    name: "Frozen Yogurtsdd",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    referredBy: "Jimmy Chau",
    calcium: "14%",
    iron: "1%"
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    referredBy: "Jimmy Chau",
    calcium: "8%",
    iron: "1%"
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    referredBy: "Jimmy Chau",
    calcium: "6%",
    iron: "7%"
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    referredBy: "Jimmy Chau",
    calcium: "3%",
    iron: "8%"
  }
];

// const getUserById = uuid => (uuid === undefined ? Items[0] : Items.find(x => x.uuid === uuid));

// const getUser = limit => (limit ? Items.slice(0, limit) : Items);

export { Items };
