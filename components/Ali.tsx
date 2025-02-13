type params ={
    text:string 
  }
  // Ali component
  function Ali(props: params) {
    return (
      <div>{props.text}</div>
    );
  } 

  export default Ali;