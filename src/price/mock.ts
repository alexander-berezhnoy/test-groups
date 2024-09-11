export const ITEMS = [
  {
    itemNo: "1",
    itemName: "Дослідження 1",
  },
  {
    itemNo: "2",
    itemName: "Дослідження 2",
  },
  {
    itemNo: "3",
    itemName: "Дослідження 3",
  },
  {
    itemNo: "4",
    itemName: "Дослідження 4",
  },
  {
    itemNo: "5",
    itemName: "Дослідження 5",
  },
  {
    itemNo: "6",
    itemName: "Дослідження 6",
  },
  {
    itemNo: "7",
    itemName: "Дослідження 7",
  },
  {
    itemNo: "8",
    itemName: "Дослідження 8",
  },
  {
    itemNo: "9",
    itemName: "Дослідження 9",
  },
  {
    itemNo: "10",
    itemName: "Дослідження 10",
  },
  {
    itemNo: "11",
    itemName: "Дослідження 11",
  },
  {
    itemNo: "12",
    itemName: "Дослідження 12",
  },
  {
    itemNo: "23",
    itemName: "Дослідження 23",
  },
];

export const PANELS = [
  {
    groupNo: "1",
    groupName: "Панель 1",
    parentGroupNo: "",
    items: [1, 3, 5, 6],
    active: true,
  },
  {
    groupNo: "2",
    groupName: "Панель 2",
    parentGroupNo: "",
    items: [1, 3, 5, 6, 7, 8, 11, 23],
    active: true,
  },
  {
    groupNo: "3",
    groupName: "Панель 3",
    parentGroupNo: "",
    items: [],
    active: true,
  },
  {
    groupNo: "4",
    groupName: "Панель 4",
    parentGroupNo: "1",
    items: [1, 3, 4, 5, 7],
    active: true,
  },
  {
    groupNo: "5",
    groupName: "Панель 5",
    parentGroupNo: "4",
    items: [6, 7, 8, 9, 12, 10, 1, 2],
    active: true,
  },
  {
    groupNo: "6",
    groupName: "Панель 6",
    parentGroupNo: "2",
    items: [1, 3],
    active: true,
  },
  {
    groupNo: "7",
    groupName: "Панель 7",
    parentGroupNo: "2",
    items: [3, 5, 7, 9, 4, 6],
    active: false,
  },
  {
    groupNo: "8",
    groupName: "Панель 8",
    parentGroupNo: "1",
    items: [1, 6, 9],
    active: true,
  },
  {
    groupNo: "9",
    groupName: "Панель 9",
    parentGroupNo: "5",
    items: [],
    active: true,
  },
  {
    groupNo: "10",
    groupName: "Панель 10",
    parentGroupNo: "2",
    items: [1, 3, 9, 4],
    active: true,
  },

  {
    groupNo: "11",
    groupName: "Панель 11",
    parentGroupNo: "3",
    items: [5, 6, 4, 10, 11],
    active: true,
  },

  {
    groupNo: "12",
    groupName: "Панель 12",
    parentGroupNo: "3",
    items: [11],
    active: true,
  },

  {
    groupNo: "13",
    groupName: "Панель 13",
    parentGroupNo: "3",
    items: [],
    active: true,
  },
];
