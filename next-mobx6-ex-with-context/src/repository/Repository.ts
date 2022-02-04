import {PostType} from "../store/PostStore";
import FakeDataProvider from "../utils/FakeDataGeneratar";
import {delay} from "../utils/utilFunction";
export default class Repository{
    loadPostData = async ():Promise<PostType[]>=>{
        await delay(1200);
        return [
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
            FakeDataProvider.makeFakePostData(),
        ];
    }
}