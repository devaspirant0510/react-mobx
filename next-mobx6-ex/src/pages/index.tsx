import type {NextPage} from 'next'
import {inject, observer} from "mobx-react"
import {useEffect} from "react";
import {autorun, runInAction} from "mobx";
import {RootStore} from "../store/RootStore";

const Home: (props: { store: RootStore }) => JSX.Element = (props:{store:RootStore}) => {
    const {postStore} = props.store;
    useEffect(() => {
        runInAction(async ()=>{
            await postStore.loadPostData();
        })

    }, [])

    return (
        <div>
            {postStore.num}
            <button onClick={()=>postStore.actionLoadMorePage()}>
                load more
            </button>
            {postStore.postData.map(v => {
                return (
                    <div key={v.id}>
                        <div  style={{border:"1px solid black"}}>{v.content}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default inject("store")(observer(Home));
