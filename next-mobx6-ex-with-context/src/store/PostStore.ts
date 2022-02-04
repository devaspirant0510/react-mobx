import {UserType} from "./UserStore";
import {RootStore} from "./RootStore";
import Repository from "../repository/Repository";
import {makeAutoObservable, runInAction} from "mobx";
import FakeDataProvider from "../utils/FakeDataGeneratar";

export interface PostType{
    id:string,
    content:string
    user:UserType,
    createdAt:string
}
export default class PostStore{
    postData:PostType[] = []
    num = 0;

    root: RootStore
    repository: Repository;

    constructor(root: RootStore, repository: Repository) {
        this.root = root;
        this.repository = repository;
        makeAutoObservable(this);
    }
    plusNum = ()=>{
        console.log("plus",this.num)
        runInAction(()=>{
            this.num++;
        })
    }
    minusNum = ()=>{
        console.log("minus",this.num)
        runInAction(()=>{
            this.num--;
        })
    }
    actionLoadMorePage = async ()=>{
        await this.loadPostData();
    }
    loadPostData = async ()=>{
        console.log("post store load post data")
        await runInAction(async ()=>{
            const items =await this.repository.loadPostData()
            this.postData.push(...items);
        })
    }


}