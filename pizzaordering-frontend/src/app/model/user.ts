import { first } from "rxjs";

export class User {
    userId: number = 0;
    userName: string = '';
    userEmail: string = '';
    userPassword: string = '';
    userRole: string = '';
    phoneNumber: string = '';
    userAddress: string = '';
    constructor(
        userId: number,
        userName: string,
        userEmail: string,
        userPassword: string,
        userRole: string,
        phoneNumber: string,
        userAddress: string
        ) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userRole = userRole;
        this.phoneNumber = phoneNumber;
        this.userAddress = userAddress;
    }

}
