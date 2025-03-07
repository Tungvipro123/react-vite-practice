
const TodoData = (props) => {  //tham so dau vao props de su dung cac props da truyen
    // props la 1 bien object {}
    // {
    //     name: "Eric",
    //     age: 25,
    //     data: {}
    // }
    const { name, age, data } = props;    //doc 34 destructuring data

    // const name = props.name;
    // const age = props.age;
    // const data = props.data;


    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            {/* <div> My name is {props.name}</div> */}
            <div> My name is {name}</div>
            <div> Learning React</div>
            <div> Watching Youtube</div>
        </div>
    )
}
export default TodoData;