import {useMemo} from "react";
import UserStore from "./UserStore";
import PostStore from "./PostStore";
import Repository from "../repository/Repository";

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
let store:RootStore
function initializeStore(initialData = null) {
    const _store = store ?? new RootStore()

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    if (initialData) {
        _store.hydrate(initialData)
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState:any|null) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}