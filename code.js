const informationContainer = document.querySelector(".cvContainer__informationSection");
const btnAboutMe = document.querySelector('#btnAboutMe');
const btnExperience = document.querySelector('#btnExperience');
const btnEducation = document.querySelector('#btnEducation');
const btnAbilities = document.querySelector('#btnAbilities');


const clearInformationContainer = () => {
    informationContainer.innerHTML = '';
}

//Mostrar contenido de template.

const showTemplateInformation = (template)=>{
    const clon = template.content.cloneNode(true);
    informationContainer.appendChild(clon)
}

//Al cargar el DOM se muestra el aboutMe

window.addEventListener('DOMContentLoaded', () => {
    const aboutMeTemplate = document.querySelector('#aboutMe-Template');
    const clon = aboutMeTemplate.content.cloneNode(true);
    informationContainer.appendChild(clon)
})


//Eventos para nav de información

btnAboutMe.addEventListener('click', () => {
    clearInformationContainer();
    const aboutMeTemplate = document.querySelector('#aboutMe-Template');
    showTemplateInformation(aboutMeTemplate)
});

btnExperience.addEventListener('click', ()=>{
    clearInformationContainer();
    const experienceTemplate = document.querySelector('#experience-Template');
    showTemplateInformation(experienceTemplate)
});

btnEducation.addEventListener('click', ()=>{
    clearInformationContainer();
    const educationTemplate = document.querySelector('#education-Template');
    showTemplateInformation(educationTemplate);
});

btnAbilities.addEventListener('click', ()=>{
    clearInformationContainer();
    const abilitiesTemplate = document.querySelector('#abilities-Information');
    showTemplateInformation(abilitiesTemplate);
})