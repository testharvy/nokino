type Props ={
    text: String
}

export default function MyImg ({text}:Props){
    return (
        <div style={{width: '100%', height: '300px', border: '1px solid black', borderRadius:'5px', background: '#fff', fontSize:'20px', textAlign:'center'}}>
            {text}.jpg
        </div>
    )
}