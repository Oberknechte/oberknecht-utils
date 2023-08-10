"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFancyText = void 0;
const __1 = require("../");
const fancyTexts = [
    {
        ignore: true,
        name: "0",
        chars: "abcdefghijklmnopqrstuvwxqz",
        nums: "0123456789",
        tags: [],
    },
    {
        name: "1",
        chars: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔮𝔷",
        nums: "0123456789",
        tags: [],
    },
    {
        name: "2",
        chars: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖖𝖟",
        nums: "0123456789",
        tags: [],
    },
    {
        name: "3",
        chars: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝓺𝔃",
        nums: "0123456789",
        tags: ["cursive"],
    },
    {
        name: "4",
        chars: "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓆𝓏",
        nums: "𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫",
        tags: ["cursive"],
    },
    {
        name: "5",
        chars: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕢𝕫",
        nums: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡",
        tags: ["double"],
    },
    {
        name: "6",
        chars: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｑｚ",
        nums: "０１２３４５６７８９",
        tags: ["wide"],
    },
    {
        name: "7",
        chars: "​🇦​​🇧​​🇨​​🇩​​🇪​​🇫​​🇬​​🇭​​🇮​​🇯​​🇰​​🇱​​🇲​​🇳​​🇴​​🇵​​🇶​​🇷​​🇸​​🇹​​🇺​​🇻​​🇼​​🇽​​🇶​​🇿​",
        nums: "0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣",
        tags: [],
    },
    {
        name: "8",
        chars: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅀🅉",
        nums: "0123456789",
        tags: [],
    },
    {
        name: "9",
        chars: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆀🆉",
        nums: "0123456789",
        tags: [],
    },
    {
        name: "10",
        chars: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓠⓩ",
        nums: "⓪①②③④⑤⑥⑦⑧⑨",
        tags: [],
    },
    {
        name: "11",
        chars: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐪𝐳",
        nums: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",
        tags: ["bold"],
    },
    {
        name: "12",
        chars: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝗾𝘇",
        nums: "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵",
        tags: ["bold"],
    },
    {
        name: "13",
        chars: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘲𝘻",
        nums: "0123456789",
        tags: ["cursive"],
    },
    {
        name: "14",
        chars: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙦𝙯",
        nums: "0123456789",
        tags: ["bold", "cursive"],
    },
    {
        name: "15",
        chars: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚚𝚣",
        nums: "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿",
        tags: [],
    },
];
function toFancyText(s, name) {
    let r = (0, __1.recreate)(s ?? "");
    const randomNameNum = (0, __1.randomNum)(1, fancyTexts.length - 1);
    const name_ = name?.toString() ?? fancyTexts[randomNameNum].name;
    const defaultChars = fancyTexts[0];
    const selectedChars = fancyTexts.filter((a) => a.name === name_)[0] ?? fancyTexts[randomNameNum];
    const defaultCharsAll = [...defaultChars.chars, ...defaultChars.nums];
    const selectedCharsAll = [...selectedChars.chars, ...selectedChars.nums];
    defaultCharsAll.forEach((char, i) => {
        r = r.replace(new RegExp(`${char}`, "g"), selectedCharsAll[i]);
    });
    return r;
}
exports.toFancyText = toFancyText;
