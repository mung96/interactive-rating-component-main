(()=>{
    const INIT_BACKGROUND_COLOR = 'rgb(255, 165, 0)';
    const INIT_FONT_COLOR = 'rgb(255, 255, 255)';
    const HOVER_BACKGROUND_COLOR = 'rgb(255, 255, 255)';
    const HOVER_FONT_COLOR = 'rgb(255, 165, 0)';
    const CHOICED_COLOR = 'rgb(192, 192, 192)';

    const submitBtn = document.querySelector('.submit');
   
    submitBtn.addEventListener('mouseover',()=>{
        submitBtn.style.backgroundColor = HOVER_BACKGROUND_COLOR;
        submitBtn.style.color = HOVER_FONT_COLOR;
    })
    submitBtn.addEventListener('mouseout',()=>{
        submitBtn.style.backgroundColor = INIT_BACKGROUND_COLOR;
        submitBtn.style.color = INIT_FONT_COLOR;
    })
    submitBtn.addEventListener('click',()=>{
        let count = 0;
        const numbers = document.querySelectorAll('.number');
        for(let i =0; i<numbers.length;i++){
            if(window.getComputedStyle(numbers[i]).backgroundColor==CHOICED_COLOR){
                count +=1;
            }
        }
        var dataToSend = {
            count: count
          };
        var queryString = 'count=' + encodeURIComponent(dataToSend.count);
        window.location.href = 'complete.html?' + queryString;
    })
}
)();
