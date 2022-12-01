/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
navigator.notification.prompt

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    
}


let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let baban = localStorage.getItem('mils')

setInterval (console.log(baban),100)

document.getElementById('startTimer').addEventListener('click', ()=>{
    var timerButton = document.getElementById("startTimer")
    if (milliseconds+seconds+minutes+hours > 0){
        clearInterval(int);
        [milliseconds,seconds,minutes,hours] = [0,0,0,0];
        timerButton.style.backgroundColor = "Green"
        timerButton.textContent = "Start"
        console.log('fuck')
    } else {
        timerButton.style.backgroundColor = "Red"
        timerButton.textContent = "Stop"
        
        int = setInterval(displayTimer,10);
        var today = new Date();   
        var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    

        var datett = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

        var time = today.getHours() + ":" + today.getMinutes();
        
        var presstime  = new Date();  
    }

//document.getElementById("gmtTime").innerHTML= time;
//document.getElementById("gmtDate").innerHTML= date;
//
document.getElementById("gmtDate").innerHTML= date+' '+ time;

localStorage.setItem('alttid',date+' '+time)


/* i write some saving mechanincs - fuck me////  
log 1: i get save but brain not big enough to see 

log 2: i realize brain not big and go get monster and rewrote my code FUCK

log 3: it`s always   3 try it works i can save fuck me man now time to access

*/
//localStorage.setItem('lastt', document.getElementById("gmtTime").innerHTML);//
localStorage.setItem('lastd', presstime);
// lasttt is the one that we use on fuction
localStorage.setItem('lasdd',datett)

const lastdate = localStorage.getItem('lastd');
// console.log(lastdate)




    
});

/*document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});
*/
/*
document.getElementById('startTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '000 : 00 : 00 : 00 ';
});
*/
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
  

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;

//  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
 localStorage.setItem('curtimer', timerRef.innerHTML);
 const eyeoftiger = localStorage.getItem('curtimer');
 
 
 


}
 



 
// sweet caroline
const target = {
    clicked: 0,
    currentFollowers: 90,
    btn: document.querySelector("#startTimer"),
    fw: document.querySelector("span.followers")
  };
  
  const follow = () => {
    target.clicked += 1;
    target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
  
    if (target.clicked % 2 === 0) {
      target.currentFollowers -= 1;
      target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
    } else {
      target.currentFollowers += 1;
    }
  
    target.fw.textContent = target.currentFollowers;
    target.btn.classList.toggle("following");
  };
  
//mega button potato idkw but dosent work when this is gone 
// console.log(target.btn)


/*this is how i load  btw the way the function is called is in html body on load*/ 

function load()
    {
        //const lasttime = localStorage.getItem('lastt');
        const presstimea = localStorage.getItem('alttid');
        //document.getElementById("gmtTime").innerHTML = lasttime;
        document.getElementById("gmtDate").innerHTML = presstimea;
        const eyeoftiger = localStorage.getItem('curtimer');

        var timerButton = document.getElementById("startTimer")
    if (baban < 0){
        clearInterval(int);
        [milliseconds,seconds,minutes,hours] = [0,0,0,0];
        timerButton.style.backgroundColor = "Green"
        timerButton.textContent = "Start"
        console.log('fuck')
    } else {
        timerButton.style.backgroundColor = "Red"
        timerButton.textContent = "Stop"
        console.log('you done fucked up')
        console.log(baban)

        



       
    }}
//time potato
function calculatediffrecence() {
const lastdate = localStorage.getItem('lastd');
 

const date1 = new Date(lastdate);
const date2 = new Date;
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 




localStorage.setItem('mils',diffTime)
// console.log(localStorage.getItem('mils'))

}
setInterval(calculatediffrecence, 1);


function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  }
 

 const timermil = localStorage.getItem('mils')


 function anan(){
    const timermil = localStorage.getItem('mils')

    // console.log(msToTime(timermil))
    localStorage.setItem('timerplugin',msToTime(timermil))
    timerRef.innerHTML = localStorage.getItem('timerplugin')


 }

 setInterval(anan,1)

 
 


function initMap() {
    const uluru = { lat: -25.344, lng: 131.031 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;


  