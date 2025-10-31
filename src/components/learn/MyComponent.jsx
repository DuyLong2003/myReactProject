import './style.css';

const MyComponent = () => {
    //const duylong = "GNOL";
    //const duylong = 27;
    //const duylong = true;
    // const duylong = undefined;
    // const duylong = null;
    const duylong = [1, 2, 3]
    // const duylong = {
    //     name: "GNOL",
    //     age: 22
    // }
    return (
        <>
            <div>{JSON.stringify(duylong)}  and duylong / React udate</div>
            <div>{console.log("DUYLONG")}</div>
            <div className='child'
                style={//Dấu nháy đôi đầu tiên => dùng JS trong HTML
                    { borderRadius: "20px" }//=> tượng trưng cho object
                }
            >New</div>
        </>
    );
}

export default MyComponent;