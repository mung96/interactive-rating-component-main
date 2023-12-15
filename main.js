(()=>{
    const INIT_COLOR = 'rgb(15, 18, 22)';
    const CHOICED_COLOR = 'rgb(192, 192, 192)';
    const HOVER_COLOR = 'rgb(255, 165, 0)';

    const numbers = document.querySelectorAll(".number");
    let count = 0;
    
    for(let i = 0;i<numbers.length;i++){
        let currentItem=numbers[i];

        currentItem.addEventListener("mouseover",()=>{
            currentBackground = window.getComputedStyle(currentItem).backgroundColor;
            currentItem.style.backgroundColor = HOVER_COLOR;       
        })
        currentItem.addEventListener("mouseout",()=>{
            currentItem.style.backgroundColor = currentBackground;
        })

        currentItem.addEventListener('click',()=>{
            if(currentBackground === INIT_COLOR){
                currentItem.style.backgroundColor = CHOICED_COLOR;
                currentBackground = CHOICED_COLOR;
            }else if(currentBackground === CHOICED_COLOR){
                currentItem.style.backgroundColor = INIT_COLOR;
                currentBackground = INIT_COLOR;
            }
        })
    }
})();
