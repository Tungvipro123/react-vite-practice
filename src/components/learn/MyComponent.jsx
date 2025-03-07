
//() => {}
//component = html + css + js

//JSX
//fragment <> </>
import './style.css';
const MyComponent = () => {
    // const hoidanit = "eric 1"; //string              // kieu so va kieu chuoi
    // const hoidanit = 25; //number
    // const hoidanit = true; //boolean
    // const hoidanit = undefine;
    // const hoidanit = null;

    const hoidanit = [1, 2, 3]
    // const hoidanit = {       // su dung {JSON.stringify(hoidanit)} de bien object thanh string
    //     name: "hoidanit",
    //     age: 25
    // }
    return (
        <>
            <div> {JSON.stringify(hoidanit)} & hoidanit update </div>
            <div>{console.log("ERIC")}</div>
            <div className="child"
                style={     // dau nhay the hien su dung JS trong HTML
                    { borderRadius: "10px" }        // dau nhay tuong trung cho Object
                }
            >child</div>
        </>
    );
}

export default MyComponent;