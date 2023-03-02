export class ProductionRaft {
  capacity = 48;
  plants = 0;

  get open() {
    return this.capacity - this.plants;
  }
}

export class GerminationTray {
  capacity = 276;
  plants = 0;
  currentDay = 0;

  constructor(variety) {
    this.variety = variety;
  }

  ready(day) {
    let ready = this.variety.actions.find((v) => (v.type = "transplant"));

    if (day - this.currentDay >= ready.day) {
      return true;
    }

    return false;
  }

  get open() {
    return this.capacity - this.plants;
  }

  get name() {
    return this.variety.name;
  }
}

export const varieties = [
  {
    id: "1",
    name: "Romaine Lettuce",
    actions: [
      {
        type: "transplant",
        day: 10
      },
      {
        type: "harvest",
        day: 30
      }
    ]
  },
  {
    id: "2",
    name: "Butterhead Lettuce",
    actions: [
      {
        type: "transplant",
        day: 14
      },
      {
        type: "harvest",
        day: 38
      }
    ]
  },
  {
    id: "3",
    name: "Rocket Lettuce",
    actions: [
      {
        type: "transplant",
        day: 3
      },
      {
        type: "harvest",
        day: 21
      }
    ]
  },
  {
    id: "4",
    name: "Test Lettuce",
    actions: [
      {
        type: "transplant",
        day: 3
      },
      {
        type: "harvest",
        day: 5
      }
    ]
  }
];
