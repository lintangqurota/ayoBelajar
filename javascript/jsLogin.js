
function validasi(){
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    if
    ( username == "user" && password == "12345"){
      return
      true;
    }
    else if(username =="" || password ==""){
      alert("Masukkan Username=user dan password=12345 sebagai inputan");
      return false;
    }
    else{
      alert("Username dan password SALAH! Masukkan Username=user dan password=12345 sebagai inputan");
      return false;
    }
}