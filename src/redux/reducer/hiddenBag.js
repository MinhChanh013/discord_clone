const bag = [{ status: "abc" }];
const hiddenBag = (state = bag, action) => {
  switch (action.type) {
    case "HIDDENBAG":
      const product = action.payload;
      if (product === true) {
        return [
          {
            status: product,
            props: "out",
          },
        ];
      } else {
        return [
          {
            status: product,
            props: "",
          },
        ];
      }
      break;
    default:
      return state;
      break;
  }
};
export default hiddenBag;
