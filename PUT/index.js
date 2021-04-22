//import {getHttpRequest} from './E_httpRequest.JS';





function send(event) {
  event.preventDefault();




  let link1 = 'https://mockbin.com/request';
  let inputText = document.getElementById("value").value;

  let request = new XMLHttpRequest();
  request.open('POST', link1);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(inputText);

  console.log("in input " + inputText);

  request.onreadystatechange = () => {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
      let postDataReceived = JSON.parse(request.responseText);
      console.log(postDataReceived);

      let postDataResult = document.getElementById("result");
      postDataResult.textContent = postDataReceived.postData.text;
      console.log("quesque on a recu " + postDataReceived.postData.text);
    }
    // else {

    //       alert('Il y a eu un problème avec la requête.'+request.status);
    //       console.log('Il y a eu un problème avec la requête.'+request.status);

    //   }
  }

}

let submitForm = document.getElementsByTagName("form");
submitForm[0].addEventListener('submit', send);

//2

//let submitForm = document.getElementById("form");
//submitForm.addEventListener('submit', send,FALSE);
//submitForm.addEventListener('submit', send,TRUE);
