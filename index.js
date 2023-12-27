
let verses = [
    {
        book:"John 16:33",
        verse:"In the world you will have tribulation. But take heart; I have overcome the world."
    },
    {
        book:"Mithali 3:5-6.",
        verse:"Mtumaini bwana kwa moyo wako wote, wala usitegemee ufahamu wako mwenyewe; Katika njia zako zote mtambue, naye atazielekeza njia zako."
    },
    {
        book:"Isaiah 41:13",
        verse:"For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.'"
    },
    {
        book:"Psalm 94:18–19",
        verse:"When I thought, 'My foot slips,' Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul."
    },
    {
        book:"Philippians 2:3–4",
        verse:"Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others."
    },
    {
        book:"Marko 11:24.",
        verse:" Kwa hiyo nawaambieni, mnaposali na kuomba kitu, aminini kwmba mmekipokea, nanyi mtapewa."
    },
    {
        book:"KAG mailinne",
        verse:"We pray that the following Bible verses will encourage you and remind you of the hope we have in Christ."
    }

];

let homeVerse = document.querySelector(".home-verse");
homeVerse.innerHTML = `
<h3>${verses[0].book}</h3>
<p>${verses[0].verse}</p>
`;

let count = 0;
setInterval(function() {

    if(count < verses.length) {
        count++;
    }
    else {
        count = 0;
    }
    homeVerse.innerHTML = `
        <h3>${verses[count].book}</h3>
        <p>${verses[count].verse}</p>
    `;
},10000);


function loaded() {

    // homeVerse.innerHTML = verses[]
    
}
