//audio
var mySong = new Audio("audio/FunnyMusic.mp3") // unable to play
var BGS = new Audio("audio/Jail.mp3")
var BGM = new Audio("audio/court.mp3")
var normalFail = new Audio("audio/normalFail.mp3")
var endingFail = new Audio ("audio/endingFail.mp3")
var pass = new Audio("audio/Pass.mp3")

//Home Page
function start(){
    document.querySelector (".story").innerHTML = 
    `<p class="content">
        Unfortunately, your investment fail and you bankruptcy. In order to gain more money, you attempts to break into a 
        bank, built in the middle of a desert. You stand next to a wall and ponders how to break inside.
    </p>
    <p class="feel"></p>
    <img class="images" src="images/de94at4-25383707-05ad-41f8-9b23-6723695c51bf.png">
    <div class="choice">
        <button onclick="n1()" class="button">Shovel</button>
        <button onclick="n2()" class="button">Explosives</button>
        <button onclick="n3()" class="button">Teleporter</button>
        <button onclick="n4()" class="button">Laser</button>
        <button onclick="n5()" class="button">Wrecking Ball</button>
        <button onclick="n6()" class="button">Disguise</button>
    </div>`
    mySong.play()
}

//Shovel
function n1(){
    mySong.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `
        <p class="fail title">FAIL</p>
        <p class="result">Never dig straight down</p>
        <button onclick="retry1()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 13rem;
        }

        .result{
            font-size: 4rem;
            font-family: 'Bangers', cursive;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//Explosives
function n2(){
    mySong.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `
        <p class="fail title">FAIL</p>
        <p class="result">Handle with care</p>
        <button onclick="retry1()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 13rem;
        }

        .result{
            font-size: 5.6rem;
            font-family: 'Bangers', cursive;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//Teleporter
function n3(){
    mySong.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `
        <p class="fail title">FAIL</p>
        <p class="result">It's emergent techology. <br> I'm sure I will get better.</p>
        <button onclick="retry1()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 13rem;
        }

        .result{
            font-size: 3.7rem;
            font-family: 'Bangers', cursive;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//Laser
function n4(){
    mySong.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail title">FAIL</p>
    <p class="result">Open Sesame >_<</p>
    <button onclick="retry1()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 5.6rem;
            font-family: 'Bangers', cursive;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//Wrecking Ball
function n5(){
    mySong.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `
        <p class="fail title">FAIL</p>
        <p class="result">There's no construction <br> scheduled for today.</p>
        <button onclick="retry1()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 13rem;
        }

        .result{
            font-size: 4rem;
            font-family: 'Bangers', cursive;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//---------------------------------------------------------------------------------------------------------------------------------------//
//Disguise
function n6(){
    document.querySelector (".story").innerHTML = 
    `<p class="content">
        You grab out a money bag and hide inside the bag. A armor cash carrier passes by. Two persons come off from the car. 
        "Hehh? How did we lose one?" "I think we should throw it in the back, just  to be safe?" They throw you in the back of the cash carrier. 
    </p>
    <button onclick="n7()" class="button">Continue</button>
    <img class="images" src="images/Bank_Truck_Remastered_HD.png">
    
    <style>
        .images{
            width: 37rem;
        }
    </style>`
}
//---------------------------------------------------------------------------------------------------------------------------------------//

//Retry
function retry1(){
    mySong.load()
    mySong.play()
    document.querySelector (".story").innerHTML = 
    ` <p class="content">
        Unfortunately, your investment fail and you bankruptcy. In order to gain more money, you attempts to break into a 
        bank, built in the middle of a desert. You stand next to a wall and ponders how to break inside.
    </p>
    <p class="feel"></p>
    <img class="images" src="images/de94at4-25383707-05ad-41f8-9b23-6723695c51bf.png">
    <div class="choice">
        <button onclick="n1()" class="button">Shovel</button>
        <button onclick="n2()" class="button">Explosives</button>
        <button onclick="n3()" class="button">Teleporter</button>
        <button onclick="n4()" class="button">Laser</button>
        <button onclick="n5()" class="button">Wrecking Ball</button>
        <button onclick="n6()" class="button">Disguise</button>
    </div>`
}


//Restart
function restart(){
    location.reload()
    mySong.load()
    mySong.play()
}

//Storyline
function n7(){
    document.querySelector (".story").innerHTML = 
    `<p class="content">
        Congratulations. You successfully make into the coffers of a bank.
    </p>
    <img class="images" src="https://i.pinimg.com/originals/98/be/fb/98befbb23d7c2c75a88062c333f605bb.gif">
    <button onclick="n8()" class="button">Continue</button>

    <style>
        .images{
            padding-right: 10rem
        }
    </style>`
}

//Storyline
function n8(){
    document.querySelector (".story").innerHTML = 
    `<p class="content">
        "Ha! Don't Move!" Suddenly, somebody yelled at you. "Oh! God!" you think as he get arrested by the police.<br>
    </p>
    <button onclick="n9()" class="button">Continue</button>
    <img class="images" src="images/Richard_Wilkins.png">
    
    <style>
        .images{
            width: 15rem;
        }

        .button{
            margin-right: 25rem;
            margin-left: 25rem;
        }
    </style>`
}




//Choices
function n9(){
    // mySong.pause()
    BGS.play()
    document.querySelector (".story").innerHTML = 
    `<label 6class="switch">
        <input type="checkbox" id="toggleon">
        <span class="slider round"></span>
    </label>
    
    <p class="content">
        You are now imprisoned inside the West Mesa Penitentiary due to your crime. "Oi, you!" One official says, "You're free to go."
        You smile. "Hen-haha..." Suddenly, the official laughs. "That's fun." <br> <br> The official continues, "But you've got a package." They 
        throw the package inside your room. "Don't get your hopes up. We've already checked if for anything useful. Haven't we, Dave." 
        "What? Yeah, yeah! Of course, I checked it. I mean, if I didn't check it, I'd lose my job, and I don't want to lose my job. 
        Heheh...heh..." You get closer to the package as the officicals leave. You open the box and see a cake in it. As you getting ready
        to enjoy it, the cake suddenly open. You put your hand in it. 
    </p>
    <button onclick="n10()" class="button">File</button>
    <button onclick="n11()" class="button">NrG Drink</button>
    <button onclick="n12()" class="button">Teleporter</button>
    <button onclick="n13()" class="button">Rocket Launcher</button>
    <button onclick="n14()" class="button">Cellphone</button>
    <img class="images" src="images/672b55f8-ec93-4354-8bde-bc0a013a338a.webp">

    <style>
        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .title{
            color: white;
        }

        .images{
            width: 40rem;
            padding-bottom: 4rem;
        }  

      
    </style>`
}

//---------------------------------------------------------------------------------------------------------------------------------------//
//File
function n10(){
    document.querySelector (".story").innerHTML = 
    `<p class="content"> Now, you have two choices: go with cell door or the window?</p>
    <button onclick="n15()" class="button">Cell door</button>
    <button onclick="n16()" class="button">Window</button>
    
    <style>
      .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .title{
            color: white;
        }

        .content{
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 2rem;
            font-family: 'Baloo 2', cursive;
            font-size: 3rem;
        }
    </style>`
}
//---------------------------------------------------------------------------------------------------------------------------------------//

//NrG Drink
function n11(){
    BGS.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail">FAIL</p>
    <p class="result">NrG-Side effect include: Nausea, Headaches, Rapid Heartrate and possibilities of Stroke or Heart Attack. <br>
    <p class="feel"> Hmm... Well that's good to know. </p>
    </p>
    
    <button onclick="retry()" class="button">Retry</button>    
    <style>
        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .title{
            color: white;
        }

        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 2rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;

            display: flex;
            justify-content: center;
        }

        .feel{
            font-size: 1.5rem;
            font-family: 'Bangers', cursive;
            padding-left: 10rem;
            padding-right: 10rem;
            padding-top: 2rem;

            display: flex;
            justify-content: center;
        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//Teleporter
function n12(){
    BGS.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail title">FAIL</p>
    <p class="result">You just can't seem to get the hang of that thing can you?</p>
    <button onclick="retry()" class="button">Retry</button>    
    <style>
        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .title{
            color: white;
        }

        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 3rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//Rocket Launcher
function n13(){
    BGS.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail title">FAIL</p>
    <p class="result">Uh... Way to aim buddy...</p>
    <button onclick="retry()" class="button">Retry</button>    
    <style>
        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .title{
            color: white;
        }

        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 4rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
    </style>`
}

//---------------------------------------------------------------------------------------------------------------------------------------//
//Cellphone
function n14(){
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        You find an cellphone. You open it and call your lawyer in order to gain a chance to prove the polices are wrong. 
    </p>
    <button onclick="n21()" class="button">Continue</button>
    <img class="images" src="images/Henry_uses_cellphone.png">
    <style>
        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .images{
            width: 30rem;
            padding-left: 20rem;
            padding-right: 20rem;
            padding-bottom: 4rem;
        }
    </style>`
}
//--------------------------------------------------------------------------------------------------------------------------------------//

//Retry
function retry(){
    BGS.load()
    BGS.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content">
        You are now imprisoned inside the West Mesa Penitentiary due to your crime. "Oi, you!" One official says, "You're free to go."
        You smile. "Hen-haha..." Suddenly, the official laughs. "That's fun." <br> <br> The official continues, "But you've got a package." They 
        throw the package inside your room. "Don't get your hopes up. We've already checked if for anything useful. Haven't we, Dave." 
        "What? Yeah, yeah! Of course, I checked it. I mean, if I didn't check it, I'd lose my job, and I don't want to lose my job. 
        Heheh...heh..." You get closer to the package as the officicals leave. You open the box and see a cake in it. As you getting ready
        to enjoy it, the cake suddenly open. You put your hand in it. 
    </p>
    <button onclick="n10()" class="button">File</button>
    <button onclick="n11()" class="button">NrG Drink</button>
    <button onclick="n12()" class="button">Teleporter</button>
    <button onclick="n13()" class="button">Rocket Launcher</button>
    <button onclick="n14()" class="button">Cellphone</button>
    <img class="images" src="images/672b55f8-ec93-4354-8bde-bc0a013a338a.webp">

    <style>
        .images{
            width: 40rem;
            padding-bottom: 4rem;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .title{
            color: white;
        }
    </style>`
}

//--------------------------------------------------------------------------------------------------------------------------------------//
//Cell door
function n15(){
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        Look out! You are been chase by the guard. To get rid of them, you hide in the storage room. Now, what should you do?
    </p>
    <button onclick="n17()" class="button">Belt of Grenades</button>    
    <button onclick="n18()" class="button">Chair</button>    
    <img class="images" src="images/unnamed.png">
    <style>
        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .images{
            padding-bottom: 4rem;
        }
    </style>`
}
//--------------------------------------------------------------------------------------------------------------------------------------//

//Window
function n16(){
    BGS.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail">FAIL</p>
    <p class="result">Protip: Look before you leap.</p>
    <button onclick="retry2()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 3rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;;
        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }

        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }
    </style>`
}

//Retry2
function retry2(){
    BGS.load()
    BGS.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content"> Now, you have two choices: go with cell door or the window?</p>
    <button onclick="n15()" class="button">Cell door</button>
    <button onclick="n16()" class="button">Window</button>
    
    <style>
        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .content{
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 2rem;
            font-family: 'Baloo 2', cursive;
            font-size: 3rem;
        }
    </style>`
}


//Belt of Grenades
function n17(){
    BGS.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail">FAIL</p>
    <p class="result">Uhh... I don't even know what to say about that one...</p>
    <button onclick="retry3()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 4rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }

        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }
    </style>`
}

//--------------------------------------------------------------------------------------------------------------------------------------//
//Chair
function n18(){
    document.querySelector (".story").innerHTML = 
    `<p class="content"> You use the chair to climb into the air duct. Now you have two choices: Left or Right?
    <button onclick="n19()" class="button">Left</button>    
    <button onclick="n20()" class="button">Right</button>
    
    <style>
        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }
    </style>`
}
//--------------------------------------------------------------------------------------------------------------------------------------//

//Retry3
function retry3(){
    BGS.load()
    BGS.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        Look out! You are been chase by the guard. To get rid of them, you hide in the storage room. Now, what should you do?
    </p>
    <button onclick="n17()" class="button">Belt of Grenades</button>    
    <button onclick="n18()" class="button">Chair</button>    
    <img class="images" src="images/unnamed.png">
    <style>
        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .images{
            padding-bottom: 4rem;
        }
    </style>`
}

//Left
function n19(){
    BGS.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail">FAIL</p>
    <p class="result">Suddenly, you fall and find yourself at the middle of the guard's rest room...</p>
    <button onclick="retry4()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 14rem;
        }

        .result{
            font-size: 3rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;;
        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }

        .content{
            font-size: 4rem;
        }

        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }
    </style>`
}

//--------------------------------------------------------------------------------------------------------------------------------------//
//Right -- Ending 1
function n20(){
    pass.play()
    document.querySelector (".story").innerHTML = 
    `<p class="heading"> CONGRATULATIONS!!!</p>
    <p class="content">You successfully make to the outside of the jail and escape with the plungers foundin the wooden box.</p>
    <button onclick="restart()" class="button">Start Over</button>    
    <img class="images" src="https://media.tenor.com/images/4d4d4a9e9e0e6b32e362c0786511bf8a/tenor.gif">
    <style>
        .heading{
            font-family: 'Acme', sans-serif;
            font-size: 4rem;
            color: rgb(255,215,0);
            font-weight: bold;
            font-style: italic;
        }

        .content{
            font-weight: bold;
            font-style: italic;
            font-size: 2rem;
        }

        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .button{
            padding-right: 5rem;
            padding-left: 5rem;
        }
    </style>`
}
//--------------------------------------------------------------------------------------------------------------------------------------//

//Retry 4
function retry4(){
    BGS.load()
    BGS.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content"> You use the chair to climb into the air duct. Now you have two choices: Left or Right?
    <button onclick="n19()" class="button">Left</button>    
    <button onclick="n20()" class="button">Right</button>
    
    <style>
        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }
    </style>`
}


//Story line
function n21(){
    BGS.pause()
    BGM.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        <strong>Setember 9th, 12:53PM <br> District Court <br> Courtroom No.4</strong> <br><br>
        Judge: "Witness, please continue your testimony." <br> <br>
        Police: "OK. I was riding alongside with my partner in the armored van, but suddenly... spotted a bag on the side 
        of the road. We got out and eventually decided to throw the bag in with the others. We didn't know there was 
        something hiding in there." <br> <br>
        Your lawyer: "OBJECTION!! So the defendant crawled into that bag in order to break into the bank, is  that correct?" <br><br>
        Polices' lawyer: "Is it not obvious?" <br><br>
        Your lawyer: "Is it really that obvious? I have proof that the defendant didn't hide himself in that bag." <br> <br>
        Judge: "Well, then... what are you  waiting for? Present this evidence already!" <br> <br>
    </p>
    <button onclick="n22()" class="button">Attorney's Badge</button>
    <button onclick="n23()" class="button">Disguising Bag</button>
    <button onclick="n22()" class="button">Floor Plan of Bank</button>
    <button onclick="n22()" class="button">Mysterious Device</button>
    <button onclick="n22()" class="button">Doctor's Analysis</button>
    
    <style>
        .button{
            font-size: 1.2rem;
        }

        .title{
            color: black;
        }

        .container{
            background-image: url("images/maxresdefault (1).jpg");
        }
    </style>`
}

//Attorney's Bedge, Floor Plan of Bank, Mysterious Device, Doctor's analysis
function n22(){
    BGM.pause()
    normalFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        Your lawyer: "Take that!" <br><br>
        Judge: "What is that?" <br><br>
        Your lawyer: "It's evidence." <br><br>
        Judge: "And how exactly does this prove anything?" <br><br>
        Your lawyer: "Well, I...Heh, I was just kidding, lemme tr-" <br><br>
        Judge: "There is no time for jokes. I see no reason to further prolong this trial. I find the defendant..." <br><br>
    </p>
    <button onclick="n25()" class="button">Continue</button>
    
    <style>
        .button{
            font-size: 1.2rem;
        }

        .title{
            color: black;
        }

        .container{
            background-image: url("images/maxresdefault (1).jpg");
        }
    </style>`
}

//Disguising Bag
function n23(){
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        Your lawyer: "Take that!" <br><br>
        Judge: "Is-is that the bag the defendant hid in?" <br><br>
        Your lawyer: "Yes, but there's one thing that's been bothreing me. If the defendant really was hiding in this bag, then...
        How did he tie  the knot from outside of the bag?!" <br><br>
        Polices' lawyer: "What?" <br><br>
        Your lawyer: "He was inside the bag, it'd be impossible for him to tie that knot on the outside!" <br><br>
        Judge: "But then, how did he do it?" <br><br>
        Your lawyer: "It's simple. He didn't." <br><br>
        Polices' lawyer: "Hwah!What are you saying?" <br><br>
    </p>
    <button onclick="n24()" class="button">Continue</button>

    <style>
        .button{
            font-size: 1.2rem;
        }

        .title{
            color: black;
        }

        .container{
            background-image: url("images/maxresdefault (1).jpg");
        }
    </style>`
}

//Story line
function n24(){
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        Your lawyer: "I'm saying my client wasn't hiding that bag at all! He was stuffed in there by this verywitness!" <br><br>
        Police: "Whaaa-!?" <br><br>
        Your lawyer: "As you can see by this doctor's analysis, the defendant had taken quiet the beating. While he was in the bag, he was 
        unconscious!" <br><br>
        Polices' lawyer: "Thi-This is absurd!" <br><br>
        Your lawyer: "The witness was attempting to dispose of the body. He left the defendant in the bag, knowing he'drive by it on the 
        way back to the bank. When the witness and his partner passed the bag, he convinced his partner to throw the bag in with the others." <br><br>
        Judge: "But-but why would he do that?" <br><br>
        Your lawyer: "Why, to dispose of the body, of course. There are millions of bags of money in that bank and the witness knew it 
        would take a long time before the victim was found. But unfortunately, for the witness...His victim woke up and tried to escape from his tomb.
        He was arrested on the spot, and the witness thought everything was over. But it's backto haunt him now!" <br><br>
        Police: "You guys can't-you can't-you, erngh- This can't be happening to meeeeee!" <br><br>

        Judge: "Well, that certainly was an interesting trail. However, I am now ready to deliver my vedict. I find the defendant..." <br><br>
    </p>
    <button onclick="n26()" class="button">Continue</button>

    <style>
        .button{
            font-size: 1.2rem;
        }

        .title{
            color: black;
        }

        .container{
            background-image: url("images/maxresdefault (1).jpg");
        }
    </style>`
}

//Retry5
function retry5(){
    BGM.load()
    BGM.play()
    document.querySelector (".story").innerHTML = 
    `<p class="content"> 
        <strong>Setember 9th, 12:53PM <br> District Court <br> Courtroom No.4</strong> <br><br>
        Judge: "Witness, please continue your testimony." <br> <br>
        Police: "OK. I was riding alongside with my partner in the armored van, but suddenly... spotted a bag on the side 
        of the road. We got out and eventually decided to throw the bag in with the others. We didn't know there was 
        something hiding in there." <br> <br>
        Your lawyer: "OBJECTION!! So the defendant crawled into that bag in order to break into the bank, is  that correct?" <br><br>
        Polices' lawyer: "Is it not obvious?" <br><br>
        Your lawyer: "Is it really that obvious? I have proof that the defendant didn't hide himself in that bag." <br> <br>
        Judge: "Well, then... what are you  waiting for? Present this evidence already!" <br> <br>
    </p>
    <button onclick="n22()" class="button">Attorney's Badge</button>
    <button onclick="n23()" class="button">Disguising Bag</button>
    <button onclick="n22()" class="button">Floor Plan of Bank</button>
    <button onclick="n22()" class="button">Mysterious Device</button>
    <button onclick="n22()" class="button">Doctor's Analysis</button>
    
    <style>
        .button{
            font-size: 1.2rem;
        }

        .title{
            color: black;
        }

        .container{
            background-image: url("images/maxresdefault (1).jpg");
        }
    </style>`
}

//Guilty
function n25(){
    BGM.pause()
    endingFail.play()
    document.querySelector (".story").innerHTML = 
    `<p class="fail">GUILT</p>
    <p class="result">What kind of third-rate lawyer did you hire?</p>
    <button onclick="retry5()" class="button">Retry</button>    
    <style>
        .fail{
            font-family: 'Bangers', cursive;
            color: red;
            font-size: 12rem;
        }

        .result{
            font-size: 2.5rem;
            font-family: 'Bangers', cursive;
            padding-left: 2rem;
            padding-right: 2rem;;

        }
        
        .button{
            padding-right: 5rem;
            padding-left: 5rem;
            padding-bottom: 0rem;
        }
        .button{
        font-size: 1.2rem;
        }

        .title{
        color: black;
        }

        .container{
        background-image: url("images/maxresdefault (1).jpg");
        }
    </style>`
}

//Not Guilty
function n26(){
    BGM.pause()
    pass.play()
    document.querySelector (".story").innerHTML = 
    `<p class="heading"> NOT GUILTY!!!</p>
    <p class="content">Congratulation! You successfully win the trial and is now free to go.</p>
    <button onclick="restart()" class="button">Start Over</button>    
    <img class="images" src="https://media.tenor.com/images/4d4d4a9e9e0e6b32e362c0786511bf8a/tenor.gif">
    <style>
        .heading{
            font-family: 'Acme', sans-serif;
            font-size: 4rem;
            color: rgb(255,215,0);
            font-weight: bold;
            font-style: italic;
        }

        .content{
            font-weight: bold;
            font-style: italic;
            font-size: 2rem;
        }

        .title{
            color: white;
        }

        .container{
            background-image: url("images/EtP_Henry's_Cell.png");
        }

        .button{
            padding-right: 5rem;
            padding-left: 5rem;
        }
    </style>`
}