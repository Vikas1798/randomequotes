
const arrayOfQuotes = [
{
    'author':'',
    'quote':"click again"
    },
{
    'author':'--Louis L’Amour',
    'quote':"Start writing, no matter what. The water does not flow until the faucet is turned on."
},
{
    'author':'--Steven Pressfield',
    'quote':"Start before you’re ready."
},

{
    'author': "--Ray Bradbury",
    'quote':"First, find out what your hero wants, then just follow him!"
},
{
    'author':"--Anne McCaffrey",
    'quote':"Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences." 
    }
       ,
       {
        'author':"--Brian Kernighan",
        'quote':" Don't comment bad code - rewrite it. "
       }
       ,
       {
        'author':"--Ken Thompson",
        'quote':"One of my most productive days was throwing away 1000 lines of code. "
       },
       {
        'author':"--Bill Gates",
        'quote':"The computer was born to solve problems that did not exist before. "
       },
       {
        'author':"--Mark Zuckerberg",
        'quote':" People don't care about what you say, they care about what you build. "
       },
       {
        'author':"--John Johnson",
        'quote':" First, solve the problem.Then write the code. "
       }

];

function genQuotes(){
    const random= Number.parseInt(Math.random()*arrayOfQuotes.length);
    console.log(random);
    document.querySelector('#quoteOutput').textContent=`${arrayOfQuotes[random].quote}`;
    document.querySelector('#authorOutput').textContent=`${arrayOfQuotes[random].author}`;
}

const arrayOfQuotes2 = [
    {
        'author':'',
        'quote':"click again"
       },
    {
     'author':'',
     'quote':"जिनमें अकेले चलने का होंसला होता हैं, उनके पीछे एक दिन काफिला होता हैं।"
    },
    {
     'author':'',
     'quote':"सफलता हमारा परिचय दुनिया को करवाती है और असफलता हमें दुनिया का परिचय करवाती है।"
    },
   
    {
     'author': "",
     'quote':"सपने वो नहीं है जो हम नींद में देखते है, सपने वो है जो हमको नींद नहीं आने देते"
    },
    {
        'author':"",
        'quote':"अपने लक्ष्य को ऊँचा रखो और तब तक मत रुकोजब तक आप इसे हासिल नहीं कर लेते है" 
       }
       ,
       {
        'author':"",
        'quote':"अगर आप रेत पर अपने कदमो के निशान छोड़ना चाहते है तो..! एक ही उपाय है, अपने कदम पीछे मत खिचिए "
       }
       ,
       {
        'author':"",
        'quote':"अपनी किसी से तुलना मत करो, जैसे चांद और सूरज की तुलना नहीं की जा सकती क्योंकि यह दोनों अपने वक्त पर चमकते हैं।"
       },
       {
        'author':"",
        'quote':" सिर्फ मरी हुई मछली को पानी का बहाव चलाती है जिस मछली में जान होती है वह अपना रास्ता खुद बनाती है।  "
       },
       {
        'author':"",
        'quote':"अच्छा बोलने से बेहतर है कि हम कुछ अच्छा करें "
       },
       {
        'author':"",
        'quote':" हम कई बार असफल हो सकते है लेकिन हार नहीं सकते। "
       }

];

function gen2Quotes(){
    const random= Number.parseInt(Math.random()*arrayOfQuotes2.length);
    console.log(random);
    document.querySelector('#quote2Output').textContent=`${arrayOfQuotes2[random].quote}`;
    document.querySelector('#author2Output').textContent=`${arrayOfQuotes2[random].author}`;
}
