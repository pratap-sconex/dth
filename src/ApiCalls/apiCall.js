const URL = "http://localhost:8899/channels";

const getChannels = () => fetch(URL);

const delChannel = (id) => fetch(`${URL}/${id}`, { method: "DELETE" });

const postChannel = (obj) => fetch(URL, {
    method: "POST",
    body: JSON.stringify(obj)
})

export { postChannel, getChannels, delChannel };