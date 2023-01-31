window.onload = () => {
    let opacityAnimation = [{ opacity: 0 }, { opacity: 1 }];
    let fadeOutAnimation = [{ opacity: 1 }, { opacity: 0 }];

    let linkArr = document.querySelectorAll('a');
    let linkBtnExist = false;
    let linkBtn = '';
    let linkBtnDiv = '';
    let resultDiv = '';
    let resDivExist = false;
    let number = '';
    let symbolArr = [];
    let error = false;

    linkArr[0].parentElement.classList.add('d-flex', 'flex-column')

    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].id = 'ELEMENT' + (i + 1);
    }

    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].addEventListener('click', function () {
            if (!linkBtnExist) {
                linkBtnExist = true;
                linkBtn = document.createElement('button');
                linkBtnDiv = document.createElement('div');
                linkBtnDiv.id = "linkBtnDiv";
                linkBtnDiv.classList.add('m-auto', 'd-flex', 'flex-column')
                linkBtnDiv.appendChild(linkBtn);
                linkBtn.animate(opacityAnimation, 500);
                linkBtn.id = linkArr[i].id + `BTN`;
                linkBtn.innerText = `Task ${i + 1} result`;
                linkArr[i].after(linkBtnDiv);
                linkBtn.classList.add('btn', 'btn-success', 'ms-auto', 'me-auto', 'mt-3', 'mb-3');
                linkBtn.addEventListener('click', function () {
                    switch (linkBtn.id) {
                        case 'ELEMENT1BTN':
                            countUpperCase(prompt(`Введіть строку для пошуку символів у ВЕРХНЬОМУ регістрі`));
                            break;
                        case 'ELEMENT2BTN':
                            fclearString(prompt(`Введіть строку для пошуку ЦИФР`))
                            break;
                        case 'ELEMENT3BTN':
                            pinChecker(prompt(`Введіть Ваш пін-код`))
                            break;
                        case 'ELEMENT4BTN':
                            webAddCutter(prompt(`Введіть адресу веб-сайту`))
                            break;
                        case 'ELEMENT5BTN':
                            userNameChecker(prompt(`Введіть username (від 4 до 10 символів, латинські букви, - або _)`))
                            break;
                        default:
                            break;
                    }
                })
            }
            else {
                let childElem = document.getElementById('linkBtnDiv')
                let parElem = document.getElementById('linkBtnDiv').parentElement;
                childElem.animate(fadeOutAnimation, 550);
                setTimeout(function () {
                    parElem.removeChild(document.getElementById('linkBtnDiv'));
                    linkBtnExist = false;
                    resDivExist = false;
                    error = false;
                }, 500);
            }
        })
    }

    function countUpperCase(string) {
        if (string != null) {
            symbolArr = string.match(/[A-ZА-Я]/g);
        }
        resultDiv = document.createElement('div');
        linkBtnDiv = document.getElementById('linkBtnDiv');
        if (string == '' || string == null) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv');
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
            }
        }
        else if (symbolArr != null && symbolArr.length > 0) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку знайдено ${symbolArr.length} символ(-и/-ів) у верхньому регістрі, а саме: ${symbolArr}`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку знайдено ${symbolArr.length} символ(-и/-ів) у верхньому регістрі, а саме: ${symbolArr}`;
            }
        }
        else {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку не знайдено символи у верхньому регістрі`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку не знайдено символи у верхньому регістрі`;
            }
        }
    }

    function fclearString(string) {
        if (string != null) {
            symbolArr = string.match(/\d/g);

        }
        if (symbolArr != null) {
            number = parseInt(symbolArr.join(''));
            console.log(number);
        }
        resultDiv = document.createElement('div');
        linkBtnDiv = document.getElementById('linkBtnDiv');
        if (string == '' || string == null) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv');
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
            }
        }
        else if (symbolArr != null && symbolArr.length > 0) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку знайдено ${symbolArr.length} цифр(-а/-и), а саме: ${symbolArr}, які було перетворено в наступне число: ${number}`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку знайдено ${symbolArr.length} цифр(-а/-и), а саме: ${symbolArr}, які було перетворено в наступне число: ${number}`;
            }
        }
        else {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку не знайдено цифр`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `У введеному рядку не знайдено цифр`;
            }
        }
    }

    function pinChecker(string) {
        if (string != null) {
            console.log(symbolArr);
            if (string.match(/\D/g)) { symbolArr = [] }
            else {
                symbolArr = string.match(/\b\d{4}\b/g);
                console.log(symbolArr);
            }
        }
        if (symbolArr != null) {
            number = parseInt(symbolArr.join(''));
        }
        resultDiv = document.createElement('div');
        linkBtnDiv = document.getElementById('linkBtnDiv');
        if (string == '' || string == null) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv');
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
            }
        }
        else if (symbolArr != null && symbolArr.length > 0 && symbolArr.length < 2) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Ваш пін-код ${symbolArr} валідний`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Ваш пін-код ${symbolArr} валідний`;
            }
        }
        else {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Введено невірний пін-код`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Введено невірний пін-код`;
            }
        }
    }

    function webAddCutter(string) {
        if (string != null) {
            symbolArr = string.match(/\D{0,}\.\D{0,}\//);
            console.log(symbolArr);
        }
        resultDiv = document.createElement('div');
        linkBtnDiv = document.getElementById('linkBtnDiv');
        if (string == '' || string == null) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv');
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено рядок для пошуку`;
            }
        }
        else if (symbolArr != null) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv');
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Оброблена адреса: ${symbolArr}`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Оброблена адреса: ${symbolArr}`;
            }
        }
    }

    function userNameChecker(string) {
        resultDiv = document.createElement('div');
        linkBtnDiv = document.getElementById('linkBtnDiv');
        if (string != '' && string != null) {
            if ((/[^0-9A-Za-z_-]/).test(string)) { error = true; }
            else {
                symbolArr = string;
                console.log(symbolArr.length);
            }
        }
        if (string == '' || string == null && !error) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv');
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено username для перевірки`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Не було введено username для перевірки`;
            }
        }
        else if (symbolArr != null && symbolArr.length >= 4 && symbolArr.length <= 10 && !error) {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Ваш username "${symbolArr}" валідний`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Ваш username "${symbolArr}" валідний`;
            }
        }
        else {
            if (!resDivExist) {
                resultDiv.classList.add('text-center', 'p-3', 'resultDiv')
                linkBtnDiv.appendChild(resultDiv);
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Введено невалідний username`;
                resDivExist = true;
            }
            else {
                let resultDiv = document.querySelector('.resultDiv');
                resultDiv.animate(opacityAnimation, 500);
                resultDiv.innerText = `Введено невалідний username`;
            }
        }
    }
}