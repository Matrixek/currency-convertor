{
    const calculateResult = (amount, currency) => {
        const USD = 4.14;
        const EUR = 4.50;
        const GBP = 5.13;

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "GPB":
                return amount/ GBP;
        }
    };
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };
    const init = () => {
        const formElement = document.querySelector(".js-form");


        formElement.addEventListener("submit", onFormSubmit);


    };



    init();
}