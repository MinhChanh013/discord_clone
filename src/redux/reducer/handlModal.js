const bag = [];
const handlModal = (state = bag, action) => {
  switch (action.type) {
    case "ADDITEMODAL":
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            active: true,
          },
        ];

      break;
    case "REMOVEITEMODAL":
        return []
      break;
    default:
      return state;
      break;
  }
};
export default handlModal;
