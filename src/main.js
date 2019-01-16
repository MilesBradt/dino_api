import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DinoSpam } from './dino.js';

$(document).ready(function() {

  let dinoNames = new DinoSpam();
  let promise = dinoNames.getDinoNames();
  console.log(promise);
  promise.then(function(response) {
    console.log(response);

    document.getElementById("output").innerHTML = response;
  }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });


});
