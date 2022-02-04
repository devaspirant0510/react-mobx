import {useMemo} from "react";
import UserStore, {CounterHydration} from "./UserStore";
import PostStore from "./PostStore";
import Repository from "../repository/Repository";

export type RootStoreHydration = {
    countHydrateStore?: CounterHydration;
};

export class RootStore{
    userStore:UserStore
    postStore:PostStore
    constructor() {
        const repository = new Repository()
        this.userStore = new UserStore(this,repository);
        this.postStore = new PostStore(this,repository);
    }
    hydrate(data:any){

    }
}