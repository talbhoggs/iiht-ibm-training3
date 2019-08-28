export default function reducer (state = [], action ) {
  switch (action.type) {
    case "ADD_VIDEO":
      return [...state, {...action.video}];
    default:
      return state;
  }
}