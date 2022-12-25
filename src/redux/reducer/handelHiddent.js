const bag = [{ status: false }];
const handelHiddent = (state = bag, action) => {
  switch (action.type) {
    case "HIDDENTMODAL":
      const product = action.payload;
      return [
        {
          status: product,
        },
      ];
    default:
      return state;
  }
};
export default handelHiddent;
