const bag = [];
const handelBag = (state = bag, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist)
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "REMOVEITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    case "REMOVEPRODUCT":
      const exist2 = state.find((x) => x.id === product.id);
      return state.filter((x) => x.id !== exist2.id);
      break;
    default:
      return state;
      break;
  }
};
export default handelBag;
