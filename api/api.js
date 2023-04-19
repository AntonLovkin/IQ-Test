const url = "https://swapi.dev/api/people/1/";

const template = (data) => {
    return `<div class="hero__card">
                    <h2>Name: ${data.name}</h2>
                    <h3>Gender: ${data.gender}</h3>
                    <h4>Eye color: ${data.eye_color}</h4>
                    <h5>Hair color: ${data.hair_color}</h5>
                </div>`}

async function fetchCourses() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

const fetchData = () => {
    fetchCourses()
    .then((data) => renderPerson(data))
    .catch((error) => console.log(error));
}
  
function renderPerson(data) {
    const person = document.getElementById('person');
    const markup = template(data)
    person.innerHTML = markup;
}