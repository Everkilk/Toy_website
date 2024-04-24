let guest = JSON.parse(localStorage.getItem("guest"));
if(guest.online == 1){
    $('#user').attr("href", "#");
    $('#user div i').attr("class","fa-solid fa-user");
    $('#user div i').css("font-size","22px");
    $('#user div p').remove();
}