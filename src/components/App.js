import React, { useState } from "react";
import { connect } from "react-redux";
// import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from "../actions";
import { BrowserRouter as Router, Switch, Route, Link, useParams, } from "react-router-dom";
import { About } from "../components/about";
import { Users } from "../components/users";
import { Home } from "../components/home";
import { Topics } from "../components/topics";
import Navi from "../components/navi";


// const todosSelector = (state) => { return state.todoList }
const todosSelector = (state) => state.todoList;

const App = (props) => {
  // const dispatch = useDispatch ()
  // const todoList = useSelector (todosSelector)

  // const TodoList = [
  //   {
  //     text: '',
  //   }
  // ]

  // const [ todos, setTodos ] = useState (TodoList);
  const [mozi, setText] = useState("");

  //入力したイベントの値を取ってくる (event)
  const addText = (e) => {
    setText(e.target.value);
  };

  //送信した時の処理 (event)
  const addTodo = () => {
    // // formのデフォルトのイベントをキャンセル
    // e.preventDefault();
    // 入力が空だったら何もしない
    if (mozi === "") return;
    //   setTodos ( todos => [...todos, { text }] )
    //データの追加処理 (react -- dispatch(action --> redux))
    props.addTodo(mozi);

    //dispatch actionオブジェクト
    // dispatch ( addTodo(mozi) )
    //入力後　からにする
    setText("");
  };

  const deleteTodo = (index) => {
    // setTodos ( todos => [...todos] )
    // setTodos.splice(i, 1)
    // const newTodos = [...todos];
    // newTodos.splice(i, 1);
    // setTodos(newTodos);
    props.deleteTodo(index);

    //dispatch actionオブジェクト
    // dispatch ( deleteTodo(index) )
  };

  const setTodo = props.text.map((todo, index) => {
    // const setTodo = todoList.map(( todo, index ) => {
    return (
      <div key={index}>
        <span>{todo}</span>

        <span>
          <button onClick={() => deleteTodo(index)}>削除</button>
        </span>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h1>Todoリスト</h1>

      <div>{setTodo}</div>

      <div>
        <label htmlFor="comment">コメント : </label>
        <input
          onChange={addText}
          value={mozi}
          type="text"
          id="comment"
          placeholder="ToDoの入力"
        ></input>
        <button onClick={addTodo}>追加</button>
      </div>

      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/100">About</Link>
              </li>
              <li>
                <Link to='/id/777'>ID</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
          <div>
            <Link to='/topics'>Topics</Link>
          </div>

          <Navi />
          <Switch>
            <Route path="/about/:aboutId" exact component={About} />
            <Route path="/users" exact component={Users} />
            <Route path="/id/:id" exact><Id /></Route>
            <Route path="/" exact component={Home} />
            <Route path="/topics"><Topics /></Route>
            <Route path="/navi" exact component={Navi} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
};
// const Home = () => {
//   return <h2>Home</h2>
// }
// const About = () => {
//   return <h2>About</h2>
// }
// const Users = () => {
//   return <h2>Users</h2>
// }
const Id = () => {
  const {id} = useParams();
  return <h2>ID :{id}</h2>
}

const mapStateToProps = (state) => ({
  text: state.todoList,
});
const mapDispatchToProps = (dispatch) => ({
  //引数　追加したいデータ
  addTodo: (text) => dispatch(addTodo(text)),
  deleteTodo: (index) => dispatch(deleteTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

// class App extends React.Component {

//   render() {
//     const props = this.props
//     return (
//       <React.Fragment>

//         <p>現在の数字は { props.val } です</p>

//           <button onClick={ props.countPlus }>
//             +1
//           </button>

//           <button onClick={ props.countMinus }>
//             -1
//           </button>

//         </React.Fragment>
//     )
//   }
// }
// const mapStateToProps = state => ({
//   val: state.counter.val
// })
// const mapDispatchToProps = dispatch => ({
//   countPlus: () => dispatch ( countPlus () ),
//   countMinus: () => dispatch ( countMinus () ),
// })

// export default connect ( mapStateToProps, mapDispatchToProps )( App )

//   const App = () => {
//     // count という名前の state 変数を宣言、初期値 0 をセット
//     const [count, setCount] = useState(0)
//     return (
//     <div> <p>現在の数字は{count}です</p>
//     {/* setCount()は、countを更新するための関数。countを引数で受け取ること も出来る */}
//     <button onClick={() => setCount(prevState => prevState + 1)}> +1
//     </button>
//     <button onClick={() => setCount(count - 1)}>- 1</button> <button onClick={() => setCount(0)}>0</button>
//     </div> )
//   }

// const App = () => {
//   return (
//     <div>
//       <div><Text/></div>
//       <button onClick={ () => {alert ("ボタン押しました！！") }}>クリック</button>
//     </div>
//   )
// }

// const Text = () => {
//   return <input type="text" placeholder="入力フォーム"></input>
// }

// const Menbers = [
//   { name:"安部千尋", age: 25, work: "IT人材事業会社のフロントエンドエンジニア職" },
//   { name:"知野舞子", age: 26, work: "広告代理店の経理職" },
//   { name:"髙木都史", age: 25, work: "外壁塗装会社の営業職" },
// ];

// const App = () => {
//   return (
//     <div>
//       { Menbers.map ( ( human, index ) => {
//         return <Menber name={ human.name } age={ human.age } work={ human.work } key={index} />
//       })
//     }
//     </div>
//   )
// }

// const Menber = ( props ) => {
//   return (
//     <div>
//     <div >私の名前は{ props.name }です。</div>
//     <div>年齢は{ props.age }歳で、現在の職業は{ props.work }をやっています。</div>
//     </div>
//   )
// }
// Menber.defaultProps = {
//   age : 100
// }
// Menber.propTypes = {
//   name:PropTypes.string,
//   age:PropTypes.number.isRequired
// }

// class App extends Component {

//   renderWithCondition ( isMorning ) {
//     if ( isMorning ){
//       return <span>GoodMorning</span>
//     } else {
//       return <span>Hello</span>
//     }
//   }

//   render () {
//   let isMorning = false
//     // <div>
//     //   {isMorning && <span>GoodMorning</span>}
//     // </div>

//       // <div>
//   //   { isMorning ? <span>GoodMorning</span> : <span>Hello</span> }
//     // </div>

//     return (
//       <div>
//       <div>
//         { this.renderWithCondition (isMorning) }
//       </div>
//       <div>
//         <button onClick = { () => { alert　('ボタンを押しました') }}>ボタン</button>
//       </div>
//       </div>
//     )
// }

// render() {
// return <React.Fragment>
// <div>hello</div>
// <div>hello</div>
// </React.Fragment>

// const a = "へロー"
// const dom = <h1>{ a }</h1>
// return <button>{ a }</button>;

// const tasks = [
//   { id: 1, title: "one" },
//   { id: 2, title: "tow" },
//   { id: 3, title: "three" },
//   { id: 4, title: "four" },
//   { id: 5, title: "five" },
// ];
// const gusu = tasks.filter ( (val, index) => { return val.id % 2 === 0 } )
// const num = gusu.map ( (val, index) => { return <div key={val.id}>IDは {val.id} TITLEは {val.title}</div> });

//ただの if文 でも条件分岐が出来てしまう
// const num2 = 5;
// let mozi = '';
// if ( num2 === 10 ) {
//   mozi = 'aaaaa'
// } else {
//   mozi = 'bbbbb'
// }
// return (
//   <div>{ mozi }</div>
// );

// let isMorning = false

// function Greeting () {
//   if ( isMorning ) {
//     return <span>GoodMorning</span>
//   } else {
//     return <span>Hello</span>
//   }
// }

// }

// export default App;
