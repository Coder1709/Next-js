// This component receives dynamic route parameters through the params prop
// The params object contains the dynamic segments from the URL
// In this case, params.id will contain the value from the [id] folder name
// For example, if the URL is /meals/123, then params.id will be "123"

export default function DynamicMeal( {params}){
    return(



        <>
            <p>This is a dynamic Router</p>
            <p>{params.id}</p>
        </>
    )
}