(()=>{
    const initColor = 'rgb(15, 18, 22)';
    const choicedColor = 'rgb(192, 192, 192)';
    const hoverColor = 'rgb(255, 165, 0)';

    const numbers = document.querySelectorAll(".number");
    
    for(let i = 0;i<numbers.length;i++){
        let currentItem=numbers[i];
        let currentBackground ;

        currentItem.addEventListener("mouseover",()=>{
            currentBackground = window.getComputedStyle(currentItem).backgroundColor;
            currentItem.style.backgroundColor = hoverColor;       
        })
        currentItem.addEventListener("mouseout",()=>{
            currentItem.style.backgroundColor = currentBackground;
        })

        currentItem.addEventListener('click',()=>{
            if(currentBackground === initColor){
                currentItem.style.backgroundColor = choicedColor;
                currentBackground = choicedColor;
            }else if(currentBackground === choicedColor){
                currentItem.style.backgroundColor = initColor;
                currentBackground = initColor;
            }
        })
    }
})();
