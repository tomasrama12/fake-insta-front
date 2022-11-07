import { PostImg } from "./PostImg";
import { User } from "./User";

export interface Post {
    id: string,
    userId: string,
    postImg: PostImg,
    tags?: string[]
}