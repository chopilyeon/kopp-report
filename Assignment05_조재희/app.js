document.addEventListener("DOMContentLoaded",function(e){
    alert("할 일 목록을 추가해주세요.");
})



document.querySelector(".ceil").addEventListener("click",function(e){
    console.log(eval(1+2));
    const add = (a,b) => a+b;
    console.log(add(1,2));
    alert("니가 할일이야");
    e.currentTarget.style.backgroundColor="red";
    e.currentTarget.style.padding="10px 20px";
})

//지우게 하는 함수
document.querySelector(".button").addEventListener("click",function(e){

})


//추가시키는 함수
document.querySelector(".button1").addEventListener("click",function(e){


    
    let cnt = 0;
    const temp=document.createElement('li');
    const list=document.querySelector('.item__list');
    const input=document.querySelector('input')
    temp.innerHTML=input.value;
    temp.innerHTML += "<button style='float: right;' class='button1' type='button' onclick='remove("+cnt+")'>del</button>";
    list.appendChild(temp);
    cnt++;
    
    
    

})

function remove(cnt) {
    let li = document.querySelector('li'+cnt);  
    list.removeChild(li);
  }