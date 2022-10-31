import { PostImg } from "./PostImg";
import { User } from "./User";

export interface Post {
    id: string,
    user: User,
    postImg: PostImg,
    tags?: string[]
}