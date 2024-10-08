type Props ={
    img: String
}

export default function MyImg ({img}:Props){
    return (
        <div style={{
            width: '300px',
            height: '300px',
            border: '1px solid black',
            borderRadius:'5px',
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontSize:'20px',
            textAlign:'center'}}>
        </div>
    )
}