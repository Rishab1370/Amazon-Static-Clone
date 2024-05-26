function qty(){
    //alert("hii");
    var qun=document.getElementById("item").value;
    //alert(qun);
    var or_prize=document.getElementById("prize").innerHTML;
    //alert(or_prize);
    var grand_total= qun * or_prize;
    //alert(grand_total);
    document.getElementById("item1").innerHTML=qun;
    document.getElementById("item2").innerHTML=qun;
    document.getElementById("total1").innerHTML=grand_total;
    document.getElementById("total2").innerHTML=grand_total;

}