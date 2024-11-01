
const uri = "https://66ff35a72b9aac9c997e861d.mockapi.io/user"

// Get all user
export const getAllUser = async () => {
    const response = await fetch(uri)
    return response.json()
}

//Add user
export const addUser = async (name) => {
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                name: name,
                avatar : 'https://picsum.photos/200',
                job: []
            }
        )
    })
    return response.json()
}

//find user by name
export const findUserByName = async (name) => {
    const response = await fetch(`${uri}?name=${name}`)
    return response.json()
}

//Update user by id
export const updateUserById = async (id, data) => {
    const response = await fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}