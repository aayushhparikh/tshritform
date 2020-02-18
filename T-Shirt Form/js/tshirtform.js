//tshirt selection section
 var t_shirt_price = new Array();
 t_shirt_price["redShirt"]=5.50;
 t_shirt_price["blueShirt"]=7.99;
 t_shirt_price["yellowShirt"]=9.50;
 t_shirt_price["greenShirt"]=11.50;

var t_shirt_quantity = new Array();
t_shirt_quantity["1"] = 1;
t_shirt_quantity["2"] = 2;
t_shirt_quantity["3"] = 3;
t_shirt_quantity["4"] = 4;
t_shirt_quantity["5"] = 5;
t_shirt_quantity["6"] = 6;
t_shirt_quantity["7"] = 7;
t_shirt_quantity["8"] = 8;
t_shirt_quantity["9"] = 9;
t_shirt_quantity["10"] = 10;

var t_shirt_sizes = new Array(); 
t_shirt_sizes["XS"] = 1;
t_shirt_sizes["S"] = 1;
t_shirt_sizes["M"] = 1;
t_shirt_sizes["L"] = 1;
t_shirt_sizes["XL"] = 1;
t_shirt_sizes["XXL"] = 1;
t_shirt_sizes["XXXL"] = 1;


function getTShirtPrice()
{  
    var TshirtSizePrice=0;

    var theForm = document.forms["tshirts"];

    var selectedTshirt = theForm.elements["selectedTShirt"];

    for(var i = 0; i < selectedTshirt.length; i++)
    {
      
        if(selectedTshirt[i].checked)
        {
   
           
            TshirtSizePrice = t_shirt_price[selectedTshirt[i].value];
          
            break;
        }
    }
  
    return TshirtSizePrice;
}

function getTShirtQuantity() { 

	var tshirtquantity=0;

	var theForm = document.forms["tshirts"];
	var selectedquantity = theForm.elements["quantity"];

	tshirtquantity = t_shirt_quantity[selectedquantity.value];

	return tshirtquantity;

}

function getTShirtSize() { 

	var tshirtsize=0;

	var theForm = document.forms["tshirts"];
	var selectedsize = theForm.elements["size"];

	tshirtsize = t_shirt_sizes[selectedsize.value];

	return tshirtsize;

}


function total() { 

	var total = (getTShirtPrice() * getTShirtQuantity() * getTShirtSize());
	console.log(total);
	var tax = total*.13;
	totalTaxed = total + tax;

	var divobj = document.getElementById('totalPrice');
	divobj.style.display='block';
	divobj.innerHTML = "Total Price for the t-shirt is $" + totalTaxed;


}

function validate(){
  var creditcardnum = document.getElementById("creditcardnum").value;
  var securitycode = document.getElementById("securitycode").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(isNaN(creditcardnum) || creditcardnum.length != 10){
    text = "Please Enter valid Credit Cardnumber";
    error_message.innerHTML = text;
    return false;
  }
   if(isNaN(securitycode) || securitycodelength != 3){
   text = "Please Enter valid Security Code";
   error_message.innerHTML = text;
   return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

