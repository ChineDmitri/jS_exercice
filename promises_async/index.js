
async function getNumber1() {
    return 10;
}

async function getNumber2() {
    return 4;
}

async function compute()
{
    let value1 = await getNumber1();
    let value2 = await getNumber2();
    return value1 + value2;
};

const resultat = document.getElementById('result');
const button = document.getElementById('tape');

button.addEventListener('click', () => {
    compute()
        .then(function (data) {
            return resultat.textContent = data;
        });
});


