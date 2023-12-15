(()=>{

    const numbers = document.querySelectorAll(".number");
    
    for(let i = 0;i<numbers.length;i++){
        let currentItem=numbers[i];
        let currentItemBackground =currentItem.style.backgroundColor;
        currentItem.addEventListener("mouseover",()=>{
            currentItem.style.backgroundColor = 'orange';        
    })
        currentItem.addEventListener("mouseout",()=>{
            currentItem.style.backgroundColor = '#262F38';
    })
        //Todo 클릭시 색상 변화 구현
        // currentItem.addEventListener("click",()=>{
        //     console.log('click');
        // });
    }
})();
