function myFunction() {
    var totalPrice = parseFloat(document.getElementById("myNum").value);
    var percentage = parseFloat(document.getElementById("percent").value);

    var convertToPercentage = (percentage/100) * 100;

    var total = totalPrice + convertToPercentage;


    document.getElementById("result").innerHTML = "$"+parseFloat(total);
}