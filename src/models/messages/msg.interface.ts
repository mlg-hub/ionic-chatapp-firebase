import {UserProfile} from "../user-profile/user.interface";
export interface Message{
    // user: UserProfile;
    // date: Date;
    // lastMessage: string;
    userFromId: string;
    userFromProfile: {
        firstName: string;
        lastName: string;
    }
    userToId: string;
    userToProfile: {
        firstName: string;
        lastName: string;
    }
    content: string;
}