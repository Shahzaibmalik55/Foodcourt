/**
 * Created by Shahzaib on 14-Feb-15.*/

////////////////////////////DELIVERY PAGE CODE////////////////////////////////////////////////////////////////////
    var amount = 100;
document.getElementById('price').value = "Rs :" + amount;

document.getElementById('order').value +=  sessionStorage.getItem("mc1");
document.getElementById('order').value +=  sessionStorage.getItem("mc2");
document.getElementById('order').value +=  sessionStorage.getItem("mc3");
document.getElementById('order').value +=  sessionStorage.getItem("mc4");
document.getElementById('order').value +=  sessionStorage.getItem("mc5");
document.getElementById('order').value +=  sessionStorage.getItem("mc6");
document.getElementById('order').value +=  sessionStorage.getItem("mc7");
document.getElementById('order').value +=  sessionStorage.getItem("mc8");
document.getElementById('order').value +=  sessionStorage.getItem("mc9");
//function compare() {
//    var value = document.getElementById('order').value += sessionStorage.getItem("mc1");
//    if (value == null || value == '') {
//        document.getElementById('order').value += '';
//    }
//    else if (value && (typeof value) == String) {
//        document.getElementById('order').value += value;
//
//    }

//document.getElementById('order').value += sessionStorage.getItem("mc1");
//document.getElementById('order').value += sessionStorage.getItem("mc2");

//function compare(arr,val){
//    if(val){
//        for(var i = 0 ;i<arr.length;i++){
//            if(val == arr[i]){
//                document.getElementById('order').value = val;
//            }else{
//                document.getElementById('order').value = '';
//            }
//        }
//    }
//}

////////////////////////////DELIVERY PAGE CODE END////////////////////////////////////////////////////////////////////////

 //RESTURANTS ORDER ADDING BUTTON
function insert1(txt,amount) {
    var txt = document.getElementById('item1').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item1').innerHTML = "Added";
        document.getElementById('item1').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc1", "chicken burger with fries,");
        return txt;
        return amount;
    }
    else if(txt == "Added"){
        document.getElementById('item1').innerHTML = "+Add";
        document.getElementById('item1').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc1", " ");
    }
}
function insert2() {
    var txt = document.getElementById('item2').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item2').innerHTML = "Added";
        document.getElementById('item2').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc2", "Spicy grilled beef burger,");

    }
    else if(txt == "Added")
    {
        document.getElementById('item2').innerHTML = "+Add";
        document.getElementById('mc2').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc2", " ");
    }
}
function insert3() {
    var txt = document.getElementById('item3').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item3').innerHTML = "Added";
        document.getElementById('item3').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc3", "Turkish Chiken burger with fries");
    }
    else if(txt == "Added"){
        document.getElementById('item3').innerHTML = "+Add";
        document.getElementById('item3').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc3", " ");
    }
}
function insert4() {
    var txt = document.getElementById('item4').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item4').innerHTML = "Added";
        document.getElementById('item4').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc4", "Beef cheese burger with fries,");
    }
    else if(txt == "Added"){
        document.getElementById('item4').innerHTML = "+Add";
        document.getElementById('item4').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc4", " ");
    }
}
function insert5() {
    var txt = document.getElementById('item5').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item5').innerHTML = "Added";
        document.getElementById('item5').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc5", "Chiken Big burger with fries,");
    }
    else if(txt == "Added"){
        document.getElementById('item5').innerHTML = "+Add";
        document.getElementById('item5').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc5", " ");
    }
}
function insert6() {
    var txt = document.getElementById('item6').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item6').innerHTML = "Added";
        document.getElementById('item6').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc6", "Chikhen Broost with fries,");
    }
    else if(txt == "Added"){
        document.getElementById('item6').innerHTML = "+Add";
        document.getElementById('item6').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc6", " ");
    }
}
function insert7() {
    var txt = document.getElementById('item7').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item7').innerHTML = "Added";
        document.getElementById('item7').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc7", "Double decker chikhen burger with fries,");
    }
    else if(txt == "Added"){
        document.getElementById('item7').innerHTML = "+Add";
        document.getElementById('item7').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc7", " ");
    }
}
function insert8() {
    var txt = document.getElementById('item8').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item8').innerHTML = "Added";
        document.getElementById('item8').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc8", "Crispy burger with fries,");
    }
    else if(txt == "Added"){
        document.getElementById('item8').innerHTML = "+Add";
        document.getElementById('item8').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc8", "chicken burger with fries,");
    }
}
function insert9() {
    var txt = document.getElementById('item9').innerHTML;
    if (txt == "+Add")
    {
        document.getElementById('item9').innerHTML = "Added";
        document.getElementById('item9').style.backgroundColor = 'silver';
        sessionStorage.setItem("mc9", "Double decker beef burger with fries,");
    }
    else if(txt == "Added"){
        document.getElementById('item9').innerHTML = "+Add";
        document.getElementById('item9').style.backgroundColor = 'coral';
        sessionStorage.setItem("mc9", " ");
    }
}
////////////////////////RESTURANTS ORDER ADDING BUTTON END////////////////////////////////////////////////////////////

//////////////////////////DEALS ORDER ADDINGS BUTTONS/////////////////////////////////////////////////////////////////

function add1() {
    var txt = document.getElementById('deal1').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal1').value = "Added";
        document.getElementById('deal1').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal1').value = "+ADD";
        document.getElementById('deal1').style.backgroundColor = 'steelblue'
    }
}
function add2() {
    var txt = document.getElementById('deal2').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal2').value = "Added";
        document.getElementById('deal2').style.backgroundColor = 'silver';
    }
    else if(txt == "Added"){
        document.getElementById('deal2').value = "+ADD";
        document.getElementById('deal2').style.backgroundColor = 'steelblue'
    }
}
function add3() {
    var txt = document.getElementById('deal3').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal3').value = "Added";
        document.getElementById('deal3').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal3').value = "+ADD";
        document.getElementById('deal3').style.backgroundColor = 'steelblue'
    }
}
function add4() {
    var txt = document.getElementById('deal4').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal4').value = "Added";
        document.getElementById('deal4').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal4').value = "+ADD";
        document.getElementById('deal4').style.backgroundColor = 'steelblue'
    }
}
function add5() {
    var txt = document.getElementById('deal5').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal5').value = "Added";
        document.getElementById('deal5').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal5').value = "+ADD";
        document.getElementById('deal5').style.backgroundColor = 'steelblue'
    }
}
function add6() {
    var txt = document.getElementById('deal6').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal6').value = "Added";
        document.getElementById('deal6').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal6').value = "+ADD";
        document.getElementById('deal6').style.backgroundColor = 'steelblue'
    }
}
function add7() {
    var txt = document.getElementById('deal7').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal7').value = "Added";
        document.getElementById('deal7').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal7').value = "+ADD";
        document.getElementById('deal7').style.backgroundColor = 'steelblue'
    }
}
function add8() {
    var txt = document.getElementById('deal8').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal8').value = "Added";
        document.getElementById('deal8').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal8').value = "+ADD";
        document.getElementById('deal8').style.backgroundColor = 'steelblue'
    }
}
function add9() {
    var txt = document.getElementById('deal9').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal9').value = "Added";
        document.getElementById('deal9').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal9').value = "+ADD";
        document.getElementById('deal9').style.backgroundColor = 'steelblue'
    }
}
function add10() {
    var txt = document.getElementById('deal10').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal10').value = "Added";
        document.getElementById('deal10').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal10').value = "+ADD";
        document.getElementById('deal10').style.backgroundColor = 'steelblue'
    }
}
function add11() {
    var txt = document.getElementById('deal11').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal11').value = "Added";
        document.getElementById('deal11').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal11').value = "+ADD";
        document.getElementById('deal11').style.backgroundColor = 'steelblue'
    }
}
function add12() {
    var txt = document.getElementById('deal12').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal12').value = "Added";
        document.getElementById('deal12').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal12').value = "+ADD";
        document.getElementById('deal12').style.backgroundColor = 'steelblue'
    }
}
function add13() {
    var txt = document.getElementById('deal13').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal13').value = "Added";
        document.getElementById('deal13').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal13').value = "+ADD";
        document.getElementById('deal13').style.backgroundColor = 'steelblue'
    }
}
function add14() {
    var txt = document.getElementById('deal14').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal14').value = "Added";
        document.getElementById('deal14').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal14').value = "+ADD";
        document.getElementById('deal14').style.backgroundColor = 'steelblue'
    }
}
function add15() {
    var txt = document.getElementById('deal15').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal15').value = "Added";
        document.getElementById('deal15').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal15').value = "+ADD";
        document.getElementById('deal15').style.backgroundColor = 'steelblue'
    }
}
function add16() {
    var txt = document.getElementById('deal16').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal16').value = "Added";
        document.getElementById('deal16').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal16').value = "+ADD";
        document.getElementById('deal16').style.backgroundColor = 'steelblue'
    }
}
function add17() {
    var txt = document.getElementById('deal17').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal17').value = "Added";
        document.getElementById('deal17').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal17').value = "+ADD";
        document.getElementById('deal17').style.backgroundColor = 'steelblue'
    }
}
function add18() {
    var txt = document.getElementById('deal18').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal18').value = "Added";
        document.getElementById('deal18').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal18').value = "+ADD";
        document.getElementById('deal18').style.backgroundColor = 'steelblue'
    }
}
function add19() {
    var txt = document.getElementById('deal19').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal19').value = "Added";
        document.getElementById('deal19').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal19').value = "+ADD";
        document.getElementById('deal19').style.backgroundColor = 'steelblue'
    }
}
function add20() {
    var txt = document.getElementById('deal20').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal20').value = "Added";
        document.getElementById('deal20').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal20').value = "+ADD";
        document.getElementById('deal20').style.backgroundColor = 'steelblue'
    }
}
function add21(){
    var txt = document.getElementById('deal21').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal21').value = "Added";
        document.getElementById('deal21').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal21').value = "+ADD";
        document.getElementById('deal21').style.backgroundColor = 'steelblue'
    }
}
function add22() {
    var txt = document.getElementById('deal22').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal22').value = "Added";
        document.getElementById('deal22').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal22').value = "+ADD";
        document.getElementById('deal22').style.backgroundColor = 'steelblue'
    }
}
function add23() {
    var txt = document.getElementById('deal23').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal23').value = "Added";
        document.getElementById('deal23').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal23').value = "+ADD";
        document.getElementById('deal23').style.backgroundColor = 'steelblue'
    }
}
function add24() {
    var txt = document.getElementById('deal24').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal24').value = "Added";
        document.getElementById('deal24').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal24').value = "+ADD";
        document.getElementById('deal24').style.backgroundColor = 'steelblue'
    }
}
function add25() {
    var txt = document.getElementById('deal25').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal25').value = "Added";
        document.getElementById('deal25').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal25').value = "+ADD";
        document.getElementById('deal25').style.backgroundColor = 'steelblue'
    }
}
function add26() {
    var txt = document.getElementById('deal26').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal26').value = "Added";
        document.getElementById('deal26').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal26').value = "+ADD";
        document.getElementById('deal26').style.backgroundColor = 'steelblue'
    }
}
function add27() {
    var txt = document.getElementById('deal27').value;
    if (txt == "+ADD")
    {
        document.getElementById('deal27').value = "Added";
        document.getElementById('deal27').style.backgroundColor = 'silver'
    }
    else if(txt == "Added"){
        document.getElementById('deal27').value = "+ADD";
        document.getElementById('deal27').style.backgroundColor = 'steelblue'
    }
}
//DEALS ORDER ADDINGS BUTTONS END