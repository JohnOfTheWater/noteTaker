(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#noteControls').hide();
    $('#createNote').click(showNewNote);
    $('#newNote').click(newNote);
    $('#register').click(registerNewUser);
    $('#login').click(loginUser);
  }



//---------NotesPage-------------------------//
//---------Animation-------------------------//
  function showNewNote(){
    var text = $('#createNote').text();
    if(text === 'New Note'){
      $('#createNote').text('close');
    }else{
      $('#createNote').text('New Note');
    }
    $('#title').focus();
    $('#noteControls').fadeToggle('slow');
  }
//---------Create New Note-------------------------//

  function newNote(event){
    debugger;
    var url = '/notes';
    var type = 'POST';
    var data = $('#noteControls').serialize();
    var success = pippo;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function pippo(data){
    if(data){
      alert('note saved!');
      window.location.replace('/notes');
    }else{
      alert('Error, please try again!');
    }
  }

//---------Register/Login----------------------//
  function registerNewUser(event){
    var url = '/register';
    var type = 'POST';
    var data = $('#userControls').serialize();
    var success = returnHome;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function loginUser(){
    var url = '/login';
    var type = 'POST';
    var data = $('#userControls').serialize();
    var success = returnHome;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function returnHome(data){
    if(data.result){
      window.location.replace('/');
    }else{
      alert('Error, please try again!');
    }
  }

})();


