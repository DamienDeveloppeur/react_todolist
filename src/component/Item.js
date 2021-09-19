import {useState} from 'react'
import './Item.css'
import imgBanc from './banc.jpg'
function Item(props) {
    // const[itemState, setItemState] = useState("Item state !");
    let toggle = false;
    let style = {color: toggle ? "red" : "green"};
    return (
        <>
           <h1>{props.title}</h1>
        </>
    )
}
export default Item;