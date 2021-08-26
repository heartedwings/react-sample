// export const addaction = () => {
//     return {
//         type:タイプ名
//     }
// }

// export const COUNTPLUS = 'countPlus'
// export const COUNTMINUS = 'countMinus'

// //Actionを記載　(オブジェクト)
// export const countPlus = () => ({
//     type: COUNTPLUS
// })

// export const countMinus = () => ({
//     type: COUNTMINUS
// })


export const ADDTODO = 'addTodo';
export const DELETETODO = 'deleteTodo';


export const addTodo = text => {
    return {
        type: ADDTODO,
        text: text, //text: textの省略
        };
};

export const deleteTodo = index => {
    return {
        type: DELETETODO,
        index: index,
    };
};

