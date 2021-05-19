async function searchCountry() {
    try {
                //const result = await axios.get('https://restcountries.eu/rest/v2/name/zimbabwe?fullText=true');
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${inputField.value}`);
        //console.log(query);
        //console.log('Je hebt gezocht naar het land: ' + result.data[0].nativeName + ' in het engels wel genaamd '+ result.data[0].name);
        //console.log(getCountryInfo(result));
        const lineOne = getCountryInfo(result)
        //const lineOne = (result.data[0].name + ' is situated in ' + result.data[0].subregion + '. It has a population of ' + result.data[0].population + ' people');
/*        let  currencies = [];
        for (let i = 0; i < result.data[0].currencies.length; i++) {
            //console.log(result.data[0].currencies[i].name)
            currencies.push(" " + result.data[0].currencies[i].name);
        //console.log(currencies);
        }*/
        //const lineTwo = ('The capital is '+ result.data[0].capital + ' and you can pay with ' + currencies);
        const lineTwo = getCurrencies(result);
       /* if(result.data[0].currencies.length === 9){
            lineTwo = ('The capital is '+ result.data[0].capital + ' and you can pay with ' + result.data[0].currencies[0].name + ' and ' + result.data[0].currencies[1].name);
        }
        else if(result.data[0].currencies.length === 1){
            lineTwo = ('The capital is '+ result.data[0].capital + ' and you can pay with ' + result.data[0].currencies[0].name);
        }*/
       /* let languages = []
        for (let i = 0; i < result.data[0].languages.length; i++) {
            languages.push(result.data[0].languages[i].name);
        }*/
        const lineThree = getLanguages(result);
/*        if(result.data[0].languages.length === 3) {
            lineThree = ('They speak ' + result.data[0].languages[0].name + ', ' + result.data[0].languages[1].name + ' and ' + result.data[0].languages[2].name);
        }
        else if(result.data[0].languages.length === 2){
            lineThree = ('They speak ' + result.data[0].languages[0].name  + ' and ' + result.data[0].languages[1].name);
        }
        else if(result.data[0].languages.length === 1){
            lineThree = ('They speak ' + result.data[0].languages[0].name);
        }*/
        //console.log(result.data[0])
        const url = result.data[0].flag;
        const showFlag = document.getElementById('vlag');
        const flagImage = document.createElement('img');
        flagImage.src = url;
        showFlag.appendChild(flagImage);
        const totalContainer = document.getElementById('totalContainer');
        //totalContainer.removeChild(country, container1, container2, container3)
        const country = document.createElement('h1');
        country.setAttribute('class', 'block');
        country.textContent = result.data[0].name;
        totalContainer.appendChild(country);
        const container1 = document.createElement('p');
        container1.setAttribute('class', 'block');
        container1.textContent = lineOne;
        totalContainer.appendChild(container1);
        const container2 = document.createElement('p');
        container2.setAttribute('class', 'block');
        container2.textContent = lineTwo;
        totalContainer.appendChild(container2);
        const container3 = document.createElement('p');
        container3.setAttribute('class', 'block');
        container3.textContent = lineThree;
        totalContainer.appendChild(container3);
        //totalContainer.clear()
/*        const container1 = document.getElementById('container1');
        container1.textContent = lineOne;*/
     /*   const container2 = document.getElementById('container2');
        container2.textContent = lineTwo;
        const container3 = document.getElementById('container3');
        container3.textContent = lineThree;*/
        //container1.textContent = lineTwo
        //console.log('Hier betalen ze met de ' + result.data[0].currencies[0].name);
       // console.log(result.data[0].nativeName + ' ligt in ' + result.data[0].subregion);
        //console.log(result.data);
        //const container1 = document.getElementById('grapje')
        //container1.textContent = result;
    } catch (e) {
        console.error(e);
        console.log('Verkeerd land ingevuld pik!');
    }
}

const buttonElement = document.getElementById('names-button');
buttonElement.addEventListener('click', searchCountry);

const inputField = document.getElementById('input-field');
inputField.addEventListener('keydown', function (event){
    if (event.code === "Enter"){
        searchCountry();
        document.getElementById("input-field").value = "";
    }

});
function getCountryInfo(result){
    return (result.data[0].name + ' is situated in ' + result.data[0].subregion + '. It has a population of ' + result.data[0].population + ' people')
}

function getCurrencies(result){
    let  currencies = [];
    for (let i = 0; i < result.data[0].currencies.length; i++) {
        //console.log(result.data[0].currencies[i].name)
        currencies.push(" " + result.data[0].currencies[i].name);
        //console.log(currencies);
    }
    return 'The capital is '+ result.data[0].capital + ' and you can pay with ' + currencies;
}

function getLanguages(result){
    let languages = []
    for (let i = 0; i < result.data[0].languages.length; i++) {
        languages.push(result.data[0].languages[i].name);
    }
    return 'They speak ' + languages;
}
function reload() {
    reload = location.reload();
}


//const container1 = document.getElementById('container')
//container1.textContent = searchCountry();


