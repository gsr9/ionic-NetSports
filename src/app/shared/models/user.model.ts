import { Story } from './story.model';

export class User {
    email: string;
    name: string;
    password: string;
    level: string;
    description: string;
    followers: Map<string, string>; // id - nombre usuario
    following: Map<string, string>; // id - nombre usuario
    stories: Story[];
}