import "./styles.css";
import React from "react";

const lessons = [
  {
    title: "Devanagari is Phonetic",
    content: `Devanagari is a phonetic script, meaning each letter has a unique sound. Unlike the English alphabet, where letters can have different sounds, Devanagari letters consistently represent the same sound.`,
  },
  {
    title: "Devanagari Is a Syllabary",
    content: `Devanagari is classified as a syllabary because each letter makes up a syllable of the word. Letters do not have names; they are called by the sound they make.`,
  },
  {
    title: "The Letter क (ka)",
    content: `The letter क represents the sound 'ka', as in 'cut'. It consists of a horizontal bar and a vertical bar with a circle on the left and a line curving around on the right.`,
    practice: [
      "कARATE OFTEN INVOLVES कIकING.",
      "THE कRAZY कAT कAUGHT THE SकARED MOUSE.",
      "कOMPUTERS कEEP HELPING कOMMUNIकATION.",
      "कAN I कARRY THE कAR कEYS?",
    ],
  },
  {
    title: "The Letter य (ya)",
    content: `The letter य represents the sound 'ya', as in 'yum'. It has a horizontal bar on top and a vertical bar, resembling a bent 'y'.`,
    practice: [
      "I यEARN FOR THE यEARS OF यORE.",
      "I LIKE यAMS.",
      "MY यARD HAS MANY यAMS, यET I'M HUNGRY.",
    ],
  },
  {
    title: "The Letter र (ra)",
    content: `The letter र represents the sound 'ra', similar to a trilled 'r'. It resembles the capital letter 'R' without the vertical bar.`,
    practice: [
      "रANDY रEALLY LIKE TO रEAD AND रITE HINDI.",
      "रON TOरE HIS रAINCOAT ON THE TरAIN.",
      "WILL YOU रUN TO THE रAILरOAD TरACKS NEAर THIS रOAD?",
    ],
  },
  {
    title: "The Letter म (ma)",
    content: `The letter म represents the sound 'ma', as in 'majority'. It has sharp corners and right angles, different from य.`,
    practice: [
      "WILL मIKE मAKE THE NEXT मAYOR?",
      "मAYBE मARCEY WILL HAVE THE मAJORITY.",
      "FORम THE FRAमEWORK मETER BY मETER.",
    ],
  },
  {
    title: "Forming Words with Devanagari",
    content: `Now that we've learned four Devanagari letters already, let's look at how we can put them together into actual words. Remember, Devanagari is phonetic, and each letter forms a syllable of the word. The letter क makes the 'ka' sound, य makes the 'ya' sound, र makes the 'ra' sound, and म makes the 'ma' sound.`,
    practice: ["रम", "मक", "यम"],
  },
  {
    title: "The Letter आ (ā)",
    content: `The letter आ represents the sound 'ā', as in 'part'. Its mātrā (ा) is a straight line descending from the horizontal bar.`,
    practice: [
      "WHAT आRE YOU STARTING?",
      "APPLES TASTE आWESOME.",
      "आRE आLL THESE BOXES आWKWARD?",
      "WHERE आRE आALL THE OLD आXEN?",
    ],
  },
  {
    title: "The Letter अ (a)",
    content: `The letter अ represents the sound 'a', as in 'alone'. It has no mātrā; each consonant acts as if it is followed by the mātrā of अ if not followed by another vowel.`,
    practice: [
      "THIS IS अNOTHER अCCOUNT.",
      "WHERE आRE THE आRT BOOKS?",
      "आRE YOU अNOTHER अPOSTLE?",
      "अPART FROM आRTHUR, THEY आRE आLL अBUSIVE.",
    ],
  },
  {
    title: "The Letter प (pa)",
    content: `The letter प represents the sound 'pa', similar to the 'p' in 'spin'. It resembles a backwards 'P' with a flattened top.`,
    practice: ["आप", "आराम", "पर", "या", "कम", "काम", "राम"],
  },
  {
    title: "The Letter स (sa)",
    content: `The letter स represents the sound 'sa', as in 'sit'. It has many curves, resembling a pit of snakes.`,
    practice: ["साका", "मास", "रसा", "असाम", "आयस"],
  },
  {
    title: "The Letter न (na)",
    content: `The letter न represents the sound 'na', as in 'nail'. It has a horizontal bar, a vertical line, and a small hook, resembling a nail driven into a wall.`,
    practice: ["नाम", "नमक", "पन्ना", "करना", "काम करना", "पाना"],
  },
  {
    title: "The Letter ग (ga)",
    content: `The letter ग represents the sound 'ga', as in 'gimmick'. It looks similar to न but with the short bar extended vertically from the horizontal bar.`,
    practice: ["गरम", "गाना", "अगर", "मगर", "अगर-मगर करना", "आग"],
  },
  {
    title: "The Letter त (ta)",
    content: `The letter त represents the sound 'ta', as in 'team'. It is a dental letter, pronounced with the tongue touching the teeth.`,
    practice: ["तारा", "गात", "मत", "रास्ता", "आत्मा"],
  },
  {
    title: "The Letter ह (ha)",
    content: `The letter ह represents the sound 'ha', as in 'ahead'. It resembles a laughing hyena's head.`,
    practice: ["हमारा", "होना", "रहना", "पहन्ना", "कहाँ", "महात्मा"],
  },
  {
    title: "The Letter ल (la)",
    content: `The letter ल represents the sound 'la', as in 'leap'. It is a dental letter, pronounced with the tongue touching the teeth.`,
    practice: ["लगना", "लोग", "लौकना", "महल", "साल", "हलका", "अलोना"],
  },
  {
    title: "The Letter ए (e)",
    content: `The letter ए represents the sound 'e', as in 'cable'. Its mātrā (े) is a mark slanting upward to the left.`,
    practice: [
      "एक",
      "एलान",
      "लेना",
      "एहसान करना",
      "नमस्ते",
      "कें-कें",
      "पहले आप",
    ],
  },
  {
    title: "The Letter ऐ (ai)",
    content: `The letter ऐ represents the sound 'ai', as in 'hen'. Its mātrā (ै) is a mark slanting upward to the left with an extra slash.`,
    practice: ["ऐयार", "है", "ऐसा", "कैसा", "मैं"],
  },
  {
    title: "The Letter व (va)",
    content: `The letter व represents the sound 'va', as in 'vast'. It is pronounced with the upper teeth touching the lower lip, similar to the English 'v' sound.`,
    practice: ["वस्त्र", "वह", "वकील", "वृक्ष"],
  },
  {
    title: "The Letter फ (pha)",
    content: `The letter फ represents the sound 'pha', as in 'phone'. It is an aspirated 'p' sound, produced with a burst of air.`,
    practice: ["फूल", "फर", "फसल", "फोटोग्राफ"],
  },
  {
    title: "The Letter ध (dha)",
    content: `The letter ध represents the sound 'dha', as in 'the'. It is a voiced dental aspirated sound.`,
    practice: ["धन", "धूम्रपान", "धरा", "ध्यान"],
  },
  {
    title: "The Letter भ (bha)",
    content: `The letter भ represents the sound 'bha', as in 'bhakti'. It is an aspirated 'b' sound.`,
    practice: ["भक्त", "भवन", "भाषा", "भालू"],
  },
];

/***
Hindi  आ like ant pincer

Sounds you make when ant bite 
अ
आ
ओ
औ
अं
अः

Remember how ant pincer were attached to crutch,it was hanging with this crutch

We take that away, it falls on it butt, says u**add bolder from ATLA

Now someone is trying to pull it down farther add a clip someone falling in abyss or well
उ
[u]
ऊ
[oo]
ए
[a]
ऐ
[ae]

This looks like an ankle say the a with swag , aaaa add emunaella south african sound


क
Cut the infinity sign,using a katana....or youbcan think it of as T cutting the nine

ख ulta rabbit looking for khana(food) or khel, add picture of smashing rabbit head play

ग - looks like a music note gao gana,gu gu gaga lady gaga


Rember the ant pincer 
घ here we Gate keep the ant pincer, gate keep 

Here's a tip you may think just imagine you adding a lil bit airy H with to get the sound

च- looks like a bird chrip like a bird, use tweet bird sugn

छ- looks like madu makhi ka chata

ज- reverse bird,it seems jet lagged sticking, jaan chali gai, jaal mein fans gai, the chriper ka jackpot of insects so eating them from the tree trunk

झ jheel pe dam lagao, hijack the lake ,reverse bird down with swing by a rope,befriends a snake 
ट bird is tired 
ठ bird is tired and taxes, it's taking a toll, should be commit crimes tax fraud but that may leads getting hanged

ड- down to pray down like japanes sitting with knees bent 


त- cup in spanish is taza
प- raise your cups
फ- f the cups and taza
थ- the swan is thanking for the cup

द- rember the tired bird it's dead now

ध rember the chata - let's roll the honey using roller in use the dhanush

न- singing note again nail it on the wall

ब- baby in the belly
व- no baby , but very fat

म- manly cup

भ- bhai ka cup, bros cup,bears cup bhalu ka cup, 

य- your cup

र- inverted r bro
[r]

स- r+cup ki surgery hogai
श- srushuta na surgery ki

ष- sharted cup
ह- crab hand gonba get you and crab be like captian hook ha ha

क्ष- tired bird en tangled,in shitty ways, he'll become a kshatriya to avenge

त्र- triple legs cool dude

ऋ- triple legs dude hanging out with tired tangled bire khatriya , but let's get blessing from Rishi first

ज्ञ- tired bired with legs down ,seeks Gyan from rishi
*/

const Lesson = ({ title, content, practice }) => (
  <div className="lesson">
    <h3>{title}</h3>
    <p>{content}</p>
    {practice && (
      <>
        <h4>Practice:</h4>
        <ul>
          {practice.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Learn Hindi</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#lessons">Lessons</a>
            </li>
            <li>
              <a href="#exercises">Exercises</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>
            Start your journey to learning Hindi with our comprehensive lessons
            and interactive exercises. Discover the beauty of the Devanagari
            script and the phonetic nature of the Hindi language.
          </p>
        </section>
        <section id="lessons">
          <h2>Lessons</h2>
          {lessons.map((lesson, index) => (
            <Lesson key={index} {...lesson} />
          ))}
        </section>
        <section id="exercises">
          <h2>Exercises</h2>
          <p>
            Interactive exercises to practice reading and writing Devanagari
            letters will be added soon.
          </p>
        </section>
        <section id="resources">
          <h2>Resources</h2>
          <p>
            Downloadable content and links to additional resources will be added
            soon.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Learn Hindi</p>
      </footer>
    </div>
  );
};

export default App;
