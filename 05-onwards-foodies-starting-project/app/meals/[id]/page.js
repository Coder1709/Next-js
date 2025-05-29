export default function DynamicMeal( {params}){
    return(

        <>
            <p>This is a dynamic Router</p>
            <p>{params.id}</p>
        </>
    )
}