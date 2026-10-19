const token = 'rc_live_4271148537854703b9d324cd24af61b8'

async function request<T>(url:string):Promise<T> {
    const res = await fetch(url,{
        headers:{'Authorization':`Bearer ${token}`}
    })
    if(!res.ok){
        throw  new Error('Api request went wrong')
    }
    return (
        res.json() as Promise<T>
    )
    
}

export default request