(()=>{
    const INIT_BACKGROUND_COLOR = 'rgb(255, 165, 0)';
    const INIT_FONT_COLOR = 'rgb(255, 255, 255)';
    const HOVER_BACKGROUND_COLOR = 'rgb(255, 255, 255)';
    const HOVER_FONT_COLOR = 'rgb(255, 165, 0)';

    const submitBtn = document.querySelector('.submit');
   
    submitBtn.addEventListener('mouseover',()=>{
        submitBtn.style.backgroundColor = HOVER_BACKGROUND_COLOR;
        submitBtn.style.color = HOVER_FONT_COLOR;
    })
    submitBtn.addEventListener('mouseout',()=>{
        submitBtn.style.backgroundColor = INIT_BACKGROUND_COLOR;
        submitBtn.style.color = INIT_FONT_COLOR;
    })

}
)();