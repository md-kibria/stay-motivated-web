const motivationalSentencesBn = [
    "এগিয়ে যাও! <br/> (Go Ahead)",
    "নিজের স্বপ্ন পূরণ করুন! <br/> (Chase Your Dreams)",
    "নিজেকে বিশ্বাস করুন! <br/> (Believe in Yourself)",
    "আপনি সমর্থ আছেন! <br/> (You Are Capable)",
    "অবসর নেই! <br/> (No Retreat)",
    "সাহসী থাকুন! <br/> (Stay Brave)",
    "সাফল্যের দিকে যান! <br/> (Head to Success)",
    "কাজ করুন! <br/> (Take Action)",
    "আপনি অর্জন করতে পারেন! <br/> (You Can Achieve)",
    "আপনার লক্ষ্য নির্ধারণ করুন! <br/> (Set Your Goals)",
    "যদি প্রতিক্রিয়া না পাওয়া হয়, তবে আপনি এগিয়ে যান! <br/> (If No Response, Move Forward)",
    "অসফলতা, সফলতার দিকে যাত্রা শুরু করে! <br/> (Failure Starts the Journey to Success)",
    "সফলতা পেতে হলে আপনাকে এগিয়ে যেতে হবে! <br/> (To Succeed, You Must Move Forward)",
    "যদি আপনি কিছু চান, তবে প্রথমে এটি পাবার জন্য কাজ করুন! <br/> (If You Want Something, Try for It First)",
    "আপনি যদি স্বপ্ন দেখতে চান, তবে এটি অর্জন করতে পারেন! <br/> (If You Want to Dream, You Can Achieve It)",
    "আপনার উদ্দেশ্য সম্পর্কে সতর্ক থাকুন! <br/> (Be Mindful of Your Goals)",
    "যেটি সম্পর্কে আপনি চিন্তা করেন, তা আছে! <br/> (What You Think About, Exists)",
    "আপনি যা মনে করেন বা চিন্তা করেন, আপনি তা-ই হচ্ছেন! <br/> (As You Think, You Become)",
    "আপনি যা কিছু চান, প্রথমে তা অর্জন করার জন্য কাজ করুন! <br/> (What You Desire, Try It First)",
    "আপনি আপনার আত্মবিশ্বাস পাবেন! <br/> (You Will Gain Confidence)",
    "যত্ন নেবেন! <br/> (Take Care)",
    "জীবন সুন্দর! <br/> (Life Is Beautiful)",
    "সফল হও! <br/> (Be Successful)",
    "ইচ্ছা থাকলে, উপায় হয়! <br/> (Where There's a Will, There's a Way)",
    "কঠোর পরিশ্রম করুন! <br/> (Work Hard)",
    "আপনি এটি পাবেন! <br/> (You Will Get It)",
    "সাফল্য আসবে! <br/> (Success Will Come)",
    "দৃঢ় থাকুন! <br/> (Stay Strong)",
    "আপনার স্বপ্ন পূরণ করুন! <br/> (Fulfill Your Dreams)",
    "আপনার প্রাথমিকতা নির্ধারণ করুন! <br/> (Set Your Priorities)",
    "আপনি অর্জন করতে পারেন! <br/> (You Can Achieve)",
    "যেখানে চাই, সেখানে পাও! <br/> (Desire Equals Achievement)",
    "আপনি পারেন! <br/> (You Can)",
    "যদি চাও, তবে পেতে হবে! <br/> (If You Want It, You Have to Get It)",
    "আপনি সাফল্য প্রাপ্ত করতে পারেন! <br/> (You Can Achieve Success)",
    "আপনি ব্যক্তি সম্পাদন করতে পারেন! <br/> (You Can Make a Difference)",
    "আপনি যা চান, তা পেতে পারেন! <br/> (You Can Get What You Want)",
    "আপনি আপনার লক্ষ্যে পৌঁছাতে পারেন! <br/> (You Can Reach Your Goals)",
    "সফল হও! <br/> (Be Successful)",
    "আপনার স্বপ্ন পূরণ করুন! <br/> (Fulfill Your Dreams)",
    "সাফল্যের সহযোগিতা প্রয়োজন! <br/> (Success Requires Collaboration)",
    "কাজ করুন! <br/> (Get to Work)",
    "আপনি পারেন! <br/> (You Can Do It)",
    "অবস্থান নেই! <br/> (No Excuses)",
    "আপনি সম্পাদন করতে পারেন! <br/> (You Can Achieve)",
    "আপনি যেখানে চান, তা পেতে পারেন! <br/> (You Can Get Where You Want)",
    "আপনি যা চান, তা পেতে পারেন! <br/> (You Can Get What You Want)",
    "যদি চাও, তবে পেতে হবে! <br/> (If You Want It, You Have to Get It)",
    "আপনি সাফল্য অর্জন করতে পারেন! <br/> (You Can Achieve Success)",
    "আপনি আলাদা কিছু করতে পারেন! <br/> (You Can Make a Difference)",
    "আপনি যা চান, তাই পাবেন! <br/> (You Can Get What You Want)",
    "আপনি আপনার লক্ষ্যে পৌঁছাতে পারবেন! <br/> (You Can Reach Your Goals)",
    "আপনি সফল হতে পারবেন! <br/> (You Can Be Successful)",
    "আপনি সফলতা অর্জন করতে পারবেন! <br/> (You Can Achieve Success)",
    "সফল থাকুন! <br/> (Stay Successful)",
    "আপনি যদি চান, তবে আপনাকে তা পেতে হবে! <br/> (If You Want It, You Have to Get It)",
    "সফল থাকুন! <br/> (Stay Successful)"
  ];
  

const motivationalSentencesEn = [
    "Never give up!",
    "Keep going!",
    "Dream big!",
    "Stay strong!",
    "You can do it!",
    "Believe in yourself!",
    "Stay focused!",
    "Chase your dreams!",
    "Embrace change!",
    "Stay positive!",
    "Push your limits!",
    "Find your passion!",
    "Keep moving forward!",
    "Rise above!",
    "Stay determined!",
    "Work hard!",
    "Inspire others!",
    "Never quit!",
    "Be fearless!",
    "Think positive!",
    "Seize the day!",
    "Stay motivated!",
    "Find your purpose!",
    "Stay hungry!",
    "Stay humble!",
    "Stay patient!",
    "Stay courageous!",
    "Stay bold!",
    "Stay kind!",
    "Stay grateful!",
    "Stay persistent!",
    "Stay authentic!",
    "Stay relentless!",
    "Stay ambitious!",
    "Stay creative!",
    "Stay innovative!",
    "Stay consistent!",
    "Stay disciplined!",
    "Stay unstoppable!",
    "Stay confident!",
    "Stay true!",
    "Stay hopeful!",
    "Stay inspired!",
    "Stay resilient!",
    "Stay enthusiastic!",
    "Stay original!",
    "Stay unique!",
    "Stay extraordinary!",
    "Stay extraordinary!",
    "Stay limitless!",
    "Stay extraordinary!",
    "Stay limitless!",
    "Stay focused!",
    "Stay passionate!",
    "Stay fearless!",
    "Stay relentless!",
    "Stay unstoppable!",
    "Stay driven!",
    "Stay authentic!",
    "Stay patient!",
    "Stay bold!",
    "Stay confident!",
    "Stay kind!",
    "Stay grateful!",
    "Stay humble!",
    "Stay true!",
    "Stay hopeful!",
    "Stay disciplined!",
    "Stay consistent!",
    "Stay motivated!",
    "Stay inspired!",
    "Stay determined!",
    "Stay positive!",
    "Stay enthusiastic!",
    "Stay ambitious!",
    "Stay original!",
    "Stay creative!",
    "Stay innovative!",
    "Stay relentless!",
    "Stay passionate!",
    "Stay focused!",
    "Stay resilient!",
    "Stay authentic!",
    "Stay driven!",
    "Stay unstoppable!",
    "Stay limitless!",
    "Stay extraordinary!",
    "Stay courageous!",
    "Stay patient!",
    "Stay bold!",
    "Stay confident!",
    "Stay kind!",
    "Stay grateful!",
    "Stay humble!",
    "Stay true!",
    "Stay hopeful!",
    "Stay disciplined!",
    "Stay consistent!",
    "Stay motivated!",
    "Stay inspired!",
    "Stay determined!",
    "Stay positive!",
    "Stay enthusiastic!",
    "Stay ambitious!",
    "Stay original!",
    "Stay creative!",
    "Stay innovative!",
    "Stay relentless!",
    "Stay passionate!",
    "Stay focused!",
    "Stay resilient!",
    "Stay authentic!",
    "Stay driven!",
    "Stay unstoppable!",
    "Stay limitless!",
    "Stay extraordinary!",
    "Stay courageous!",
    "Stay patient!",
    "Stay bold!",
    "Stay confident!",
    "Stay kind!",
    "Stay grateful!",
    "Stay humble!",
    "Stay true!",
    "Stay hopeful!",
    "Stay disciplined!",
    "Stay consistent!"
  ];

const msgName = document.querySelector('#msg-name');
const msg = document.querySelector('#msg');
const mmsg = document.querySelector('#mmsg');
const refreshBtn = document.querySelector('#rfs');
const resetBtn = document.querySelector('#rst');
const settingBtn = document.querySelector('#btn-stngs');
const closeBtn = document.querySelector('#cls');
const settingIcon = document.querySelector('#stn-icon');
const settings = document.querySelector('.stngs');

const color = document.querySelector('#color');
const font = document.querySelector('#font');
const name = document.querySelector('#name');
const isShow = document.querySelector('#is-show');

const en = document.querySelector('#en');
const bn = document.querySelector('#bn');

const defaultColor = '#7B73F2'
let deColor = '';
let username = '';
let isName = false;
let lang = 'en';
let speechArray = motivationalSentencesEn;

// Initialiaze
addEventListener('load', () => {
    // set language
    if(localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');

        if(lang === 'bn') {
            bn.className = 'active';
            speechArray = motivationalSentencesBn;
        } else {
            en.className = 'active';
            speechArray = motivationalSentencesEn;
        }
    } else {
        en.className = 'active';
    }

    // show first message
    setMsg();

    // set color
    if(localStorage.getItem('color')) {
        deColor = localStorage.getItem('color');
        color.value = deColor;
        setColor(deColor);
    } else {
        deColor = defaultColor;
        color.value = defaultColor;
        setColor(defaultColor);
    }

    // set name
    if(localStorage.getItem('name')) {
        username = localStorage.getItem('name');
        name.value = username;
        setName(username);
    }
    
    // set is-name
    if(localStorage.getItem('isName')) {
        isName = true;
        isShow.checked = true;
        setName(username);
    } else {
        isName = false;
        isShow.checked = false;
        setName();
    }

    // set font size
    if(localStorage.getItem('font')) {
        msg.style.fontSize = localStorage.getItem('font') + 'px';
        font.value = localStorage.getItem('font');
    }

    
})

// Handle refresh button
refreshBtn.addEventListener('click', () => {
    setMsg();
})

// Handle setting button
settingBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
    settingIcon.classList.toggle('anim');
})

// Handle close button
closeBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
    settingIcon.classList.toggle('anim');
})

// Handle color reset button
resetBtn.addEventListener('click', () => {
    setColor(defaultColor);
    color.value = defaultColor;
    localStorage.setItem('color', defaultColor);
})

// Handle color picker
color.addEventListener('input', (e) => {
    deColor = e.target.value;
    localStorage.setItem('color', e.target.value);
    
    setColor(e.target.value)
})

// Handle font size range
font.addEventListener('input', (e) => {
    msg.style.fontSize = e.target.value + 'px';
    localStorage.setItem('font', e.target.value);
})

// Handle input name
name.addEventListener('input', (e) => {
    username = e.target.value;
    
    localStorage.setItem('name', username);
    if(isName) {
        setName(username);
    }
})

// Handle is show name
isShow.addEventListener('change', function(){
    if(this.checked) {
        isName = true;
        localStorage.setItem('isName', isName);
        setName(username)
    } else {
        isName = false;
        localStorage.setItem('isName', '');
        setName()
    }
})

// Handle lang english
en.addEventListener('click', (e) => {
    en.classList.add('active');
    bn.classList.remove('active');

    lang = 'en'
    speechArray = motivationalSentencesEn;
    setMsg(speechArray);
    localStorage.setItem('lang', 'en');
})

// Handle lang bengali
bn.addEventListener('click', (e) => {
    en.classList.remove('active');
    bn.classList.add('active');
   
    lang = 'bn'
    speechArray = motivationalSentencesBn;
    setMsg(speechArray);
    localStorage.setItem('lang', 'bn');
})



/**
 * Utility functions 
 */
function setName(name=null) {
    if(name) {
        msgName.innerHTML = name + ', ';
    } else {
        msgName.innerHTML ='';
    }
}

function setColor(color) {
    msg.style.color = color;
    refreshBtn.style.background = color + '80';
    settingBtn.style.background = color + '80';
    resetBtn.style.background = color + '80';
}

function setMsg(speech) { 
    if(speech) {
        mmsg.innerHTML = speech[Math.floor(Math.random()*speech.length)+1];
    } else {
        mmsg.innerHTML = speechArray[Math.floor(Math.random()*speechArray.length)+1];
    }
}
