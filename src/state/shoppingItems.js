const shoppingItems = JSON.parse(sessionStorage.getItem("shoppingItems")) || [];

export const addShoppingItems = (item) => {
  shoppingItems.push(item);
  sessionStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
};

export const addMultipleSameShoppingItems = (item, multiplier) => {
  for (let i = 0; i < multiplier; i++) {
    addShoppingItems(item);
  }
};

export const getShoppingItemsList = () => {
  const list = {};

  shoppingItems.forEach((item) => {
    if (!list[item.id]) list[item.id] = [];

    list[item.id].push(item);
  });
};

export default shoppingItems;
