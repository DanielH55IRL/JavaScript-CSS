let removeNav = document.getElementById("remove_nav");//removes nav
removeNav.remove();

let removeElements1 = document.getElementById("remove_row1");//removes other div
removeElements1.remove();

let removeElements2 = document.getElementById("remove_row2");//removes other div
removeElements2.remove();

let createdDiv1 = document.createElement('div');//creates div and binds created div as child
document.getElementById('append_div_eu').appendChild(createdDiv1);

let createdDiv2 = document.createElement('div');//creates div and binds created div as child
document.getElementById('append_div_christmas').appendChild(createdDiv2);

document.body.style.backgroundColor="cyan";//styles body to orange background

(function(){
    document.getElementById('euBtn').addEventListener("click", processJSON1, false);//starts the function on mouseclick
})();

function processJSON1()//Processes 1st json endpoint
{
    fetch("https://api.npoint.io/3b9c2e4ac11a92e86373")//eu countries endpoint
     .then(response => response.json())
    .then(json1 => 
    {
        processData1(json1);
    });
}

function processData1(jsonData1)
{
    for(let i=0; i<jsonData1.length; i++)
    {
        let myCountry = document.createElement('p');//creates a text element to place the json in
        myCountry.style.fontFamily='Roboto';//styles the json
        myCountry.style.color='black';
        myCountry.style.backgroundColor="lightgray";
        myCountry.style.width="50%";
        myCountry.style.border="2px solid black";
        myCountry.style.fontWeight='bold';
        myCountry.textContent = 'Name: ' + jsonData1[i].name + ', Code: ' + jsonData1[i].code;//assigns text content to the p element for the json to populate
        createdDiv1.appendChild(myCountry);//appends to created div1
    }
}




(function(){
    document.getElementById('christmasBtn').addEventListener("click", processJSON2, false);//starts the function on mouseclick
})();

function processJSON2()//Processes 2nd json endpoint
{
    fetch("https://api.npoint.io/e74c2663287aad693506")//christmas songs endpoint
     .then(response => response.json())
    .then(data2 => 
    {
        processData2(data2);
    });
}

function processData2(jsonData2)
{
    for(let i=0; i<jsonData2.length; i++)
    {
        let myTitle = document.createElement('h1');//creates a text element to place the json name in
        let myVideo = document.createElement('iframe');//creates a text element to place the json embed video url in
        myTitle.textContent = jsonData2[i].name;//assigns text content to h1 element from the JSON 
        myVideo.src = jsonData2[i].url;//assigns link to the iframe element from the JSON
        createdDiv2.appendChild(myTitle);//appends to the created div
        createdDiv2.appendChild(myVideo);//appends to the created div

        myTitle.style.color="red";//styles the song name json
        myTitle.style.textShadow="2px 2px green"

        myVideo.style.width="80%";//styles the video json
        myVideo.style.height="600px";
        myVideo.style.border="15px dashed red";
        myVideo.style.backgroundColor="green";
    }
}

