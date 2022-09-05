$(function() {
  $('#field_428741_1_4').keyup(function() {
      this.value = this.value.toUpperCase();
  });
});

$("#field_428741_1_4").change(function () {
  var inputvalues11 = $(this).val();
  var regex11 = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  
  if (!regex.test(inputvalues11)) {
      $("#field_428741_1_4").val("");
      alert("Invalid PAN No");
      return regex11.test(inputvalues11);
  }
});

$(function() {
  $('#exam_details_1').keyup(function() {
      this.value = this.value.toUpperCase();
  });
});
