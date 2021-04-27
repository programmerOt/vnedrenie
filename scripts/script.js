new Swiper('.swiper-container',{
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      observer: true,
      observeParents: true,
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

});



document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
const form5 = document.getElementById('form5');
const form6 = document.getElementById('form6');

form.addEventListener('submit', formSend);
form2.addEventListener('submit', formSend2);
form3.addEventListener('submit', formSend3);
form4.addEventListener('submit', formSend4);
form5.addEventListener('submit', formSend5);
form6.addEventListener('submit', formSend6);

async function formSend (e){
  e.preventDefault();

  let error = formValidate(form);
  let formData = new FormData(form);
  if (error === 0){
    form.classList.add('_sending')
    
    let response = await fetch ('sendmail.php',{
      method: 'POST',
      body: formData
    });
    if (response.ok){
      let result = await response.json();
      window.location = "/thanks.html";
      form.reset();
      form.classList.remove('_sending')


    } else{
      alert('Ошибка!')
      form.classList.remove('_sending')
    }
  } else{
    alert ('Заполните обязательные поля')
  }

}
async function formSend2 (e){
  e.preventDefault();

  let error = formValidate2(form2);
  let formData2 = new FormData(form2);
  if (error === 0){
    form2.classList.add('_sending')
    
    let response = await fetch ('sendmail.php',{
      method: 'POST',
      body: formData2
    });
    if (response.ok){
      let result = await response.json();
      window.location = "/thanks.html";
      form2.reset();
      form2.classList.remove('_sending')


    } else{
      alert('Ошибка!')
      form2.classList.remove('_sending')
    }
  } else{
    alert ('Заполните обязательные поля')
  }

}

async function formSend3 (e){
  e.preventDefault();

  let error = formValidate3(form3);
  let formData3 = new FormData(form3);
  if (error === 0){
    form3.classList.add('_sending')
    
    let response = await fetch ('sendmail.php',{
      method: 'POST',
      body: formData3
    });
    if (response.ok){
      let result = await response.json();
      window.location = "/thanks.html";
      form3.reset();
      form3.classList.remove('_sending')


    } else{
      alert('Ошибка!')
      form3.classList.remove('_sending')
    }
  } else{
    alert ('Заполните обязательные поля')
  }

}
async function formSend4 (e){
  e.preventDefault();

  let error = formValidate4(form4);
  let formData4 = new FormData(form4);
  if (error === 0){
    form4.classList.add('_sending')
    
    let response = await fetch ('sendmail.php',{
      method: 'POST',
      body: formData4
    });
    if (response.ok){
      let result = await response.json();
      window.location = "/thanks.html";
      form4.reset();
      form4.classList.remove('_sending')


    } else{
      alert('Ошибка!')
      form4.classList.remove('_sending')
    }
  } else{
    alert ('Заполните обязательные поля')
  }

}
async function formSend5 (e){
  e.preventDefault();

  let error = formValidate5(form5);
  let formData5 = new FormData(form5);
  if (error === 0){
    form4.classList.add('_sending')
    
    let response = await fetch ('sendmail.php',{
      method: 'POST',
      body: formData5
    });
    if (response.ok){
      let result = await response.json();
      window.location = "/thanks.html";
      form5.reset();
      form5.classList.remove('_sending')


    } else{
      alert('Ошибка!')
      form5.classList.remove('_sending')
    }
  } else{
    alert ('Заполните обязательные поля')
  }

}
async function formSend6 (e){
  e.preventDefault();

  let error = formValidate6(form6);
  let formData6 = new FormData(form6);
  if (error === 0){
    form4.classList.add('_sending')
    
    let response = await fetch ('sendmail.php',{
      method: 'POST',
      body: formData6
    });
    if (response.ok){
      let result = await response.json();
      window.location = "/thanks.html";
      form6.reset();
      form6.classList.remove('_sending')


    } else{
      alert('Ошибка!')
      form6.classList.remove('_sending')
    }
  } else{
    alert ('Заполните обязательные поля')
  }

}



function formValidate(e){
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input)

    if(input.classList.contains('_tel')){
      if(telTest(input)){
        formAddError(input);
        error++;
      }
    }else {
      if (input.value=== ''){
        formAddError(input);
        error++;
      }
    }

    
  }
  return error;
}


function formValidate2(e){
  let error = 0;
  let formReq = document.querySelectorAll('._req2');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input)

    if(input.classList.contains('_tel')){
      if(telTest(input)){
        formAddError(input);
        error++;
      }
    }else {
      if (input.value=== ''){
        formAddError(input);
        error++;
      }
    }

    
  }
  return error;
}function formValidate3(e){
  let error = 0;
  let formReq = document.querySelectorAll('._req3');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input)

    if(input.classList.contains('_tel')){
      if(telTest(input)){
        formAddError(input);
        error++;
      }
    }else {
      if (input.value=== ''){
        formAddError(input);
        error++;
      }
    }

    
  }
  return error;
}function formValidate4(e){
  let error = 0;
  let formReq = document.querySelectorAll('._req4');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input)

    if(input.classList.contains('_tel')){
      if(telTest(input)){
        formAddError(input);
        error++;
      }
    }else {
      if (input.value=== ''){
        formAddError(input);
        error++;
      }
    }

    
  }
  return error;
}
function formValidate5(e){
  let error = 0;
  let formReq = document.querySelectorAll('._req5');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input)

    if(input.classList.contains('_tel')){
      if(telTest(input)){
        formAddError(input);
        error++;
      }
    }else {
      if (input.value=== ''){
        formAddError(input);
        error++;
      }
    }

    
  }
  return error;
}
function formValidate6(e){
  let error = 0;
  let formReq = document.querySelectorAll('._req6');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input)

    if(input.classList.contains('_tel')){
      if(telTest(input)){
        formAddError(input);
        error++;
      }
    }else {
      if (input.value=== ''){
        formAddError(input);
        error++;
      }
    }

    
  }
  return error;
}

  
  function formAddError(input){
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }

  function formRemoveError(input){
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }
  function telTest(input){
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
  }
})




