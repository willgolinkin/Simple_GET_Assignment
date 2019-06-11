'use strict';

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    //change to call displayResults function
    //.then(responseJson => console.log(responseJson))
    .then(responseJson => displayResults(responseJson))
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

//using for loop
function displayResults(responseJson) {
    const imageList = responseJson.message;
    console.log(imageList);
    //imageURLs empty string
    let imageUrls = "";
  
    //for loop to iterate through imageList and return img src for each new image
    for (let i = 0; i < imageList.length; i++) {
      imageUrls += `<img src="${imageList[i]}" class="loadedImages">`;
    };

    //log output image srcs
    console.log(imageUrls);

  
  //replace images with imageUruls
    $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
};


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});