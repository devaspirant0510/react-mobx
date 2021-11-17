const {observable,autorun,runInAction,reaction,action,observe} = require("mobx");

const state = observable({
    compA:'a',
    compB:'b',
    compC:'c'
});

// observable 이 바뀔때마다 호출`
autorun(()=>{
    console.log("changed",state.compA,)
});

// 리턴한값이 바뀔때만 호출
reaction(()=>{
    return state.compC
},()=>{
    console.log("reaction changed",state.compC)
});
// action 은 만들어놓고 함수 호출마다 실행
const myAction = action(()=>{
    state.compC = "BBBB";
})

myAction()
// runInAction 은 즉시 실행
runInAction(()=>{
    state.compA = "bb";

});
runInAction(()=>{
    state.compA = "ccc;";
    state.compC = "dsf3;";
});
myAction();