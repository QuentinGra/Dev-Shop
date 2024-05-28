export const login = async (strategy: string, email: string , password: string) => {
    const body = {
        strategy: strategy, email: email, password: password
    }
    
    const response = await fetch('http://localhost:3030/api/v1/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}
