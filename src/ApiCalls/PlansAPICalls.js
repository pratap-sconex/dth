const URL = "http://localhost:8899/plans";

const getPlans = () => fetch(URL);

const delPlan = (id) => fetch(`${URL}/${id}`, { method: "DELETE" });

const postPlan = (obj) => fetch(URL, {
    method: "POST",
    body: JSON.stringify(obj)
})

export { postPlan, getPlans, delPlan };