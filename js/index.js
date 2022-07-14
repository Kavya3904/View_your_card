




// changing color of the card

var Card_color = document.getElementById("cardid");
// function changecolor(){
// var Red=Math.floor( Math.random()*255);
// var Blue=Math.floor( Math.random()*255);
// var Green=Math.floor( Math.random()*255);
// var random_color= 'rgb(' + Red + ',' + Green + ',' + Blue + ')';
// return random_color;
// }


 Card_color.addEventListener("click",()=>{
    var Red=Math.floor( Math.random()*255);
    var Blue=Math.floor( Math.random()*255);
    var Green=Math.floor( Math.random()*255);
    var random_color= 'rgb(' + Red + ',' + Green + ',' + Blue + ')'; 
    document.getElementById('cardid').style.backgroundColor="random_color";
 })



var up_image = '';
var up_signature = '';





var Image_input = document.getElementById('image_entered');
Image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        up_image = reader.result;
        document.getElementById('displayimgs').style.backgroundImage = `url(${up_image})`
    });



    reader.readAsDataURL(this.files[0]);


});

var Siganture_input = document.getElementById('signature_uploading');

Siganture_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        up_signature = reader.result;
        document.getElementById('displaysignature').style.backgroundImage = `url(${up_signature})`;
    })
    reader.readAsDataURL(this.files[0]);
})


var submitbtn = document.getElementById('enterbtnid');
submitbtn.addEventListener('change', displayvalue);
console.log(Name);


function displayvalue() {
   

    var Name = document.getElementById('Personnameid').value;
    var Phone = document.getElementById('Phoneid').value;
    var Place = document.getElementById('Placeid').value;
    var Dofb = document.getElementById('Dobid').value;
    var Acno = document.getElementById('Accnid').value;





    console.log(Name);

    document.getElementById('getname').innerHTML = Name;
    document.getElementById('getphone').innerHTML = Phone;
    document.getElementById('getplace').innerHTML = Place;
    document.getElementById('getdob').innerHTML = Dofb;
    document.getElementById('getaccno').innerHTML = Acno;

    if (Name != '') {
        document.getElementById('cardid').style.display = "block";
        document.getElementById('output_heading').style.display = "none"
        setTimeout(Changenametonull, 1000);
    }


    // && Phone != '' && Place != ''&& Dofb != ''&&  Acno != '' 

    


}

function Changenametonull() {
    document.getElementById('Personnameid').value = "";
    document.getElementById('Phoneid').value = "";
    document.getElementById('Placeid').value = "";
    document.getElementById('Dobid').value = "";
    document.getElementById('Accnid').value = "";


}