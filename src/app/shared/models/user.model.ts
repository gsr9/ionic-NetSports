import { Story } from './story.model';

export class User {
    email: string;
    username: string;
    password: string;
    level: string;
    description: string;
    followers: Map<string, string>; // id - nombre usuario
    following: Map<string, string>; // id - nombre usuario
    stories: Story[];

    constructor(email: string, username: string, password: string, level: string){
        this.email = email;
        this.username = username;
        this.password = password;
        this.level = level;
    }

}