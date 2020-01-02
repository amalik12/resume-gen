export function deleteItem(id, resource) {
    return fetch('/api/v1/' + resource + '/' + id, { method: 'DELETE', headers: {"Content-Type": "application/json"} })
}

export function updateItem(id, resource, output) {
    return fetch('/api/v1/' + resource + '/' + id, { method: 'PUT', body: JSON.stringify(output), headers: {"Content-Type": "application/json"} })
}

export function createItem(resource, output) {
    return fetch('/api/v1/' + resource, { method: 'POST', body: JSON.stringify(output), headers: {"Content-Type": "application/json"} })
    .then(result => result.json())
}