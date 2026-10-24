
async function request<T>(url:string,options:RequestInit = {}):Promise<T> {
    const res = await fetch(url,options)
    if(!res.ok){
        throw  new Error('Api request went wrong')
    }
    return (
        res.json() as Promise<T>
    )
    
}

export default request