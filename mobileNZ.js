window.addEventListener("load", function () {
  var phoneNumberInput = document.getElementById("phoneNumber");

  phoneNumberInput.addEventListener("input", formatPhoneNumber);

  function formatPhoneNumber() {
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, "");

    if (phoneNumber.length > 10) {
      phoneNumber = phoneNumber.slice(0, 10);
    }

    var formattedPhoneNumber = formatAsGenericPhoneNumber(phoneNumber);

    phoneNumberInput.value = formattedPhoneNumber;
  }

  function formatAsGenericPhoneNumber(number) {
    if (number.length >= 7) {
      return (
        number.substring(0, 3) +
        " " +
        number.substring(3, 6) +
        " " +
        number.substring(6)
      );
    } else if (number.length >= 4) {
      return number.substring(0, 3) + " " + number.substring(3);
    } else if (number.length >= 1) {
      return number.substring(0, 3);
    } else {
      return "";
    }
  }
});
