import {PostType} from "../store/PostStore";
import {UserType} from "../store/UserStore";
import faker from "faker"
import {nanoid} from "nanoid";

const makeFakeUserData = ():UserType=>{
    return {
        age: Math.ceil(Math.random()*20),
        id:faker.seedValue,
        name: faker.name.firstName()
    }

}
const makeFakePostData = ():PostType=>{
    return {
        content: faker.lorem.sentences(10),
        createdAt: faker.date.future().toString(),
        id: nanoid(),
        user: makeFakeUserData()

    }
}
const FakeDataProvider = {
    makeFakeUserData,
    makeFakePostData
}
export default FakeDataProvider