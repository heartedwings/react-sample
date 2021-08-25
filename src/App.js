import React, { Component, useState } from "react";
import PropTypes from 'prop-types';

// class App extends React.Component { constructor(props) {
//   super(props)
//   this.state = {
//   // クラスでは、コンストラクタ内で、this.stateの初期値をセット
//   count: 0 }
//   }
//   render() {
//   return ( <React.Fragment>
//   <p>現在の数字は {this.state.count} です</p>
//   {/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステート を更新 */}
//   <button onClick={() => this.setState({ count: this.state.count + 1 })}> +1
//   </button>
//   <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//   -1
//   </button>
//   <button onClick={() => this.setState({ count: 0 })}>0</button>
//   </React.Fragment> )
//   } }



  const App = () => {
    // count という名前の state 変数を宣言、初期値 0 をセット
    const [count, setCount] = useState(0)
    return (
    <div> <p>現在の数字は{count}です</p>
    {/* setCount()は、countを更新するための関数。countを引数で受け取ること も出来る */}
    <button onClick={() => setCount(prevState => prevState + 1)}> +1
    </button>
    <button onClick={() => setCount(count - 1)}>- 1</button> <button onClick={() => setCount(0)}>0</button>
    </div> )
    }



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


export default App;