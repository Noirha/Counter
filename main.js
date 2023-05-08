let plus = document.querySelectorAll("#plus");
let mins = document.querySelectorAll("#mins");
let reset = document.querySelectorAll("#reset")
let input = document.querySelector("input");
let h3 = document.querySelector("h3")
    plus.forEach(item => {
        item.addEventListener("click", (eo) => {
            input.value++
            input.style.color = "green";
    
            if(input.value > 0){
                h3.style.textShadow = "none";
                  }else{
                      h3.style.textShadow = " 1px 3px 3px red";
                  }
        })
    })



reset.forEach(item => {
    item.addEventListener("click", (eo) => {
        input.value = 0
        input.style.color = "black";
        if(input.value == 0){
            h3.style.textShadow = "none";
              }
    })
})

mins.forEach(item => {
    item.addEventListener("click", (eo) => {
        input.value--
        input.style.color = "red";
        if(input.value < 0){
      h3.style.textShadow = " 1px 3px 3px red"
        }else{
            h3.style.color = "black"
        }
    })
})



