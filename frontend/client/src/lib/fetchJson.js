export default async function fetchJSON(...args) {
    const { headers } = args[1]
    const defaultHeaders = {
        ...headers,
        'Content-Type': 'application/json'
    }
    Object.assign(args[1], { headers: defaultHeaders })
    return fetch(...args).then(async (res) => {
        if (!res.ok) {
            throw await res.json()
        }
        return res.json()
    })
}
