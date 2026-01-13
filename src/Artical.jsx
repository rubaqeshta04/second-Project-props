export default function Artical(props) {
  console.log(props);
  
const children = props.children
  
  return (
    <div>
     <h1>{children}</h1>
    </div>
  );
}