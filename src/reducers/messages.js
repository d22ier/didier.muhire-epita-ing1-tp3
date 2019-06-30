import { ADD_MESSAGE } from "../constants/messages";
const defaultState = [
  {
          id: 0,
          text: "hello toto",
          user: "titi",
          date: new Date().getTime()
  },
  {
          id: 1,
          text: "on va manger toto",
          user: "titi",
          date: new Date().getTime()
  }
]

const messages = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          user: action.userName,
          date: action.date
        }
      ];
    default:
      return state;
  }
};

export default messages;
