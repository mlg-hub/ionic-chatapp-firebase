import {UserProfile} from "../../models/user-profile/user.interface";
const userList: UserProfile[] = [
    {
        firstName: 'Paul',
        lastName : 'Halliday',
        email : 'Paul@mlg.com',
        avatar: 'assets/img/user.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Mosendo',
        lastName : 'Chiraq',
        email : 'chiraq@mlg.com',
        avatar: 'assets/img/user.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Larry',
        lastName : 'day',
        email : 'leo@mlg.com',
        avatar: 'assets/img/user.png',
        dateOfBirth: new Date()
    },
];

export const USER_LIST = userList;