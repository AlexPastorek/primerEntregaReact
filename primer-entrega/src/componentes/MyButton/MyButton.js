import "./MyButton.css"
// export defauld
function MyButton(props) {
  console.log(props);
    return <button style={{backgroundColor: props.color}} className="btn">{props.text}</button>;
  }
// name de extort
  export function ButtonChild (props){
    console.log(props);
    return <button style={{backgroundColor: props.color}} className="btn">{props.children}</button>;

  }
  export default MyButton;
 