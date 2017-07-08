import {UserProfile} from "../user-profile/user.interface";
export interface Message{
    user: UserProfile;
    date: Date;
    lastMessage: string;
}