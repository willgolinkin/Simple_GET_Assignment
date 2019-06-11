'use strict';

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json());
    //change to call displayResults function
    //.then(responseJson => console.log(responseJson))
    .then(responseJson) => displayResults(responseJson);
    .catch(error => alert('Something went wrong. Try again later.'));
}

function checkValidForm(inputVal) {
  if(inputVal >= 1 && inputVal <= 50) {
    return true;
  } else {
    return false;
  }
};

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const resultNum = $('#num').val();
    if(checkValidForm(resultNum)) {
      console.log(`Results to retrieve: ${resultNum}`);
      getDogImage(resultNum);
    } else {
      alert('Sorry, you must enter a number between 1 and 50.')
    }
  });
}

/*function displayResults(responseJson) {
  /*console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    //use forEach, map, or for loop to produce each image 
    responseJson.forEach(function(element) {
    `<img src="${responseJson.message}" class="results-img">`
    });
  )
  //display the results section
  $('.results').removeClass('hidden');
}*/

//using forEach
function displayResults(responseJson) {
    const imageList = responseJson.message;
    console.log(imageList);
    //replace the existing image with the new one
    $('.newDog').replaceWith(
      //use forEach, map, or for loop to produce each image 
    let imageUrls = "";
  
    imageList.forEach(function(element) {
      imageUrls += `<img src="${imageList[element]}" alt="generated dog image # ${x+1}" class="loadedImages">`;
    });
  
    $('images').replaceWith(${imageUrls});
    //display the results section
    /*$('.results').removeClass('hidden');*/
  };

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

/*
'use strict';

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function checkValidForm(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}

function displayResults(responseJson) {
  const imageList = responseJson.message;
  console.log(imageList);
  let imageUrls = "";

  for (let x = 0;x < imageList.length;x++) {
    imageUrls += `<img src="${imageList[x]}" alt="Generated dog image # ${x+1}" class="loadedImages">`;
  }

  console.log(imageUrls);

  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const resultNum = $('#num').val();
    if(checkValidForm(resultNum)) {
      console.log(`Results to retrieve: ${resultNum}`);
      getDogImage(resultNum);
    }
    else {
      alert('Sorry, you must enter a number between 1 and 50. Try again.')
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
*/