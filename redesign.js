"use strict";
//Immediately Invoked Function Expression to set up event listeners
(function(){
    document.getElementById('buttonRedesign').addEventListener("click", redesignPage, false);
}());

function redesignPage()
{
    //alerts your in redesignPage function
    alert("in function redesignPage");

    //removes specific elements by ID
    let removeNav = document.getElementById("remove_nav");
    removeNav.remove();

    let removeElements1 = document.getElementById("remove_row1");
    removeElements1.remove();

    let removeElements2 = document.getElementById("remove_row2");
    removeElements2.remove();

    let removeElements3 = document.getElementById("remove_row3");
    removeElements3.remove();

    let removeElements4 = document.getElementById("remove_row4");
    removeElements4.remove();
    //
    
    document.body.style.backgroundColor="orange";//styles body to orange background

    let redesignH1 = document.getElementsByTagName('h1');//styles h1 to background purple and font to wingdings
	for (let i=0; i < redesignH1.length; i++)
	{
        redesignH1[i].style.backgroundColor="purple";
        redesignH1[i].style.fontFamily="wingdings";
    }
    
    let redesignPara = document.getElementsByTagName('p');//styles p to color grey, font cursive, transform 1 deg off axis, background blue
	for (let i=0; i < redesignPara.length; i++)
	{
        redesignPara[i].style.color="grey";
        redesignPara[i].style.fontFamily="cursive";
        redesignPara[i].style.transform="skewY(1deg)";
        redesignPara[i].style.backgroundColor="blue";
    }

    let redesignA = document.getElementsByTagName('a');//styles a to text uppercase and border to green
	for (let i=0; i < redesignA.length; i++)
	{
        redesignA[i].style.textTransform="uppercase";
        redesignA[i].style.border="5px solid green";
    }

    //created new div and appended a text node to it
    let createdDiv = document.createElement('div');//1
    let divText = document.createElement("p");//2
    divText.textContent="CREATED PARAGRAPH";
    createdDiv.appendChild(divText);
    document.getElementById('append_div').appendChild(createdDiv);
    createdDiv.style.backgroundColor="red";//color to red

    let divH2 = document.createElement('h2');//3
    divH2.textContent="Merry Xmas";
    divH2.style.color="Green";
    divH2.style.textAlign="center";
    createdDiv.appendChild(divH2);


    //created and appended image
    let divImage = document.createElement('img');//4
    createdDiv.appendChild(divImage);

    //createdDiv.style.backgroundColor="red";
    divImage.src="google.gif";
    divImage.style.border="5px dashed green";
    divImage.style.height="300px";
    divImage.style.width="100%";

    let pageSpace1 = document.createElement('br');//5
    createdDiv.appendChild(pageSpace1);

    let songTitle = document.createElement('h4');//6
    songTitle.textContent="Band Aid - Do They Know Its Christmas";
    songTitle.style.color="Green";
    songTitle.style.textAlign="center";
    songTitle.style.fontWeight="bold";
    createdDiv.appendChild(songTitle);

    let songUrlEmbed = document.createElement('iframe');//7
    songUrlEmbed.src="https://www.youtube-nocookie.com/embed/j3fSknbR7Y4";
    songUrlEmbed.style.border="5px dashed green";
    songUrlEmbed.style.height="315px";
    songUrlEmbed.style.width="100%";
    createdDiv.appendChild(songUrlEmbed);

    let playerTitle = document.createElement('h5');//8
    playerTitle.textContent="Free MP3 - Christmas Song";
    playerTitle.style.textAlign="center";
    playerTitle.style.color="red";
    playerTitle.style.backgroundColor="green";
    playerTitle.style.textShadow=" 2px 4px black";
    createdDiv.appendChild(playerTitle);

    let mp3Song = document.createElement('audio')//9
    mp3Song.src="song.mp3";
    mp3Song.style.backgroundColor="green";
    mp3Song.setAttribute("controls", "controls");
    mp3Song.style.width="100%";
    mp3Song.style.margin="0 auto";
    createdDiv.appendChild(mp3Song);

    let pageSpace2 = document.createElement('br');//10
    createdDiv.appendChild(pageSpace2);

    let pageSpace3 = document.createElement('br');//11
    createdDiv.appendChild(pageSpace3);



    let trackerTitle = document.createElement('h2');//12
    trackerTitle.textContent="Santa Tracker - Google";
    trackerTitle.style.color="green";
    trackerTitle.style.textAlign="center";
    trackerTitle.style.fontFamily="cursive";
    trackerTitle.style.border="6px dashed green";
    createdDiv.appendChild(trackerTitle);


    let santaTracker = document.createElement('iframe')//13
    santaTracker.src="https://santatracker.google.com/";
    santaTracker.style.width="100%"
    santaTracker.style.height="500px";
    santaTracker.style.border="5px dashed red";
    santaTracker.style.backgroundColor="green";
    createdDiv.appendChild(santaTracker);
}




































