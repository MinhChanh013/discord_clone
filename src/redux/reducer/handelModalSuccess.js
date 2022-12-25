const bag = [{status: false}];
const handelModalSuccess = (state = bag, action) => {
  switch (action.type) {
    case "HIDDENTMODALSUCCESS":
      const product = action.payload;
        return [
          {
            status: product,
          },
        ];
      // break;
    default:
      return state;
      // break;
  }
};
export default handelModalSuccess;
