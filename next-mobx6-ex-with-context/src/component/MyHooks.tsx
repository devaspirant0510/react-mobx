import {observer} from "mobx-react"
import {useEffect} from "react";
import {runInAction} from "mobx";
import {usePostStore} from "../context/useProvider";

const MyHooks = observer(()=>{
    const postStore= usePostStore();
    useEffect(()=>{
        runInAction(async ()=>{
            await postStore.loadPostData()
        })
    },[])
    return (
        <>
            <button onClick={()=>postStore.loadPostData()}>more</button>
            {postStore.postData.map(v=>{
                return (
                    <div key={v.id} style={{border:"1px solid black"}}>
                        {v.id}
                        {v.user.name}
                        {v.content}
                    </div>
                )
            })}

        </>
    )
});
export default MyHooks;