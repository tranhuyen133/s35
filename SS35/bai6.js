function check() {
    var id = document.getElementById(`id`).value;
    var name = document.getElementById(`name`).value;
    var age = parseInt(document.getElementById(`age`).value);
    var phone = document.getElementById(`phone`).value;
    var email = document.getElementById(`email`).value;
    console.log(id.length, name.length, age, phone.length, email);
    if (
      id.length > 6 &&
      name.length > 0 &&
      age >= 18 &&
      phone.length == 10 &&
      email.includes("@gmail.com")
    ) {
      console.log("hop le");
    } else {
      console.log(" 0 hop le");
    }
  }