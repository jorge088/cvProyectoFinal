const informationContainer = document.querySelector(".cvContainer__informationSection");
const btnAboutMe = document.querySelector('#btnAboutMe');
const btnExperience = document.querySelector('#btnExperience');
const btnEducation = document.querySelector('#btnEducation');
const btnAbilities = document.querySelector('#btnAbilities');


const clearInformationContainer = () => {
    informationContainer.innerHTML = '';
}

//Elimina clase 'activo' del informationNav

const resetNavInformationActive = () =>{
    btnAboutMe.classList.remove('activo');
    btnExperience.classList.remove('activo');
    btnEducation.classList.remove('activo');
    btnAbilities.classList.remove('activo');
}

//Mostrar contenido de template.

const showTemplateInformation = (template)=>{
    const clon = template.content.cloneNode(true);
    informationContainer.appendChild(clon)
}

//Al cargar el DOM se muestra el aboutMe

window.addEventListener('DOMContentLoaded', () => {
    const aboutMeTemplate = document.querySelector('#aboutMe-Template');
    btnAboutMe.classList.add('activo')
    showTemplateInformation(aboutMeTemplate);
})


//Eventos para nav de información

btnAboutMe.addEventListener('click', () => {
    clearInformationContainer();
    const aboutMeTemplate = document.querySelector('#aboutMe-Template');
    showTemplateInformation(aboutMeTemplate)
    resetNavInformationActive();
    btnAboutMe.className.add('activo');
});

btnExperience.addEventListener('click', ()=>{
    clearInformationContainer();
    const experienceTemplate = document.querySelector('#experience-Template');
    showTemplateInformation(experienceTemplate);
    resetNavInformationActive();
    btnExperience.classList.add('activo');
});

btnEducation.addEventListener('click', ()=>{
    clearInformationContainer();
    const educationTemplate = document.querySelector('#education-Template');
    showTemplateInformation(educationTemplate);
    resetNavInformationActive();
    btnEducation.classList.add('activo');
});

btnAbilities.addEventListener('click', ()=>{
    clearInformationContainer();
    const abilitiesTemplate = document.querySelector('#abilities-Information');
    showTemplateInformation(abilitiesTemplate);
    resetNavInformationActive();
    btnAbilities.classList.add('activo')
})