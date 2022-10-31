const URL = 'http://localhost:5000/amigos';

function showFriends() {
  $('#lista').empty();
  $.get(`${URL}`, (friends) => {
    friends.forEach((e) => {
      $('#lista').append(`
        <tr>
          <td id='${e.id}'> ${e.id} </td>
          <td> ${e.name} </td>
          <td> ${e.age} </td>
          <td> ${e.email} </td>
        </tr>
        `);
    });
  });
}

function searchFriends() {
  let id = $('#input').val();

  $('#amigo').empty();

  if (id) {
    $.get(`${URL}/${id}`, (friend) => {
      $('#amigo').append(`
      <tr>
        <td id='${friend.id}'> ${friend.id} </td>
        <td> ${friend.name} </td>
        <td> ${friend.age} </td>
        <td> ${friend.email} </td>
      </tr>
      `);

      $('#input').val('');
    });
  } else {
    $('#amigo').text('Ingresa un ID');
  }
}

function deleteFriend() {
  let id = $('#inputDelete').val();
  let friend;

  if (id) {
    $.get(`${URL}/${id}`, (f) => {
      friend = f;
    });

    $.ajax({
      url: `${URL}/${id}`,
      type: 'DELETE',
      success: () => {
        $('#success').text(`Ya no eres más amigo de ${friend.name}.`);
        $('#inputDelete').val('');
        showFriends();
      },
    });
  }
}

$('#boton').click(showFriends);
$('#search').click(searchFriends);
$('#delete').click(deleteFriend);
