import {Message} from "../../models/messages/msg.interface";
import {USER_LIST} from "../user-profile/users.mock";

const userList = USER_LIST;
const messageList : Message[] = [];

userList.forEach((user) => {
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello'});
});

export const MESSAGE_LIST = messageList;