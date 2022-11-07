export interface User{
  id: string;
  name: string;
  username: string;//El que tiene arroba
  iconUrl: string;
  city: string;
  state: string;
  postsId: string[];
  friendsId: string[];
}
