import Repository from "../repository/Repository";
import {RootStore} from "./RootStore";

export interface UserType {
    id?: number,
    name: string,
    age: number,
}

export default class UserStore {
    root: RootStore
    repository: Repository;


    constructor(root: RootStore, repository: Repository) {
        this.root = root;
        this.repository = repository;
    }

}