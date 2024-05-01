export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

  export const renderToppings = () => {
    const toppingsContainerElm = document.querySelector('.container');
    toppingsContainerElm.innerHTML ='';

    toppings.forEach( (oneTopping) => {
        
        let selectionClass = 'topping';
        if(oneTopping.selected) {
            selectionClass += ' topping--selected';
        }

        toppingsContainerElm.innerHTML += `
            <div class="${selectionClass}">
                <h3>${oneTopping.name}</h3>
                <p>${oneTopping.price}</p>
            </div>
            `  
    })
    const toppingElms = document.querySelectorAll('.topping');

    toppingElms.forEach((toppingElm, index) => {
        toppingElm.addEventListener('click', () => {
            toggleTopping(index);
            renderToppings()
        })
    })


  }


  export const toggleTopping = (toppingIndex) => {
    toppings[toppingIndex].selected = !toppings[toppingIndex].selected;
  }