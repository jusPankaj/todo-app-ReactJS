const apiUrl = "https://jsonplaceholder.typicode.com/todos"

const fetchTodos = async () => {
    let response = await fetch(apiUrl)
    return response.json();
}git 