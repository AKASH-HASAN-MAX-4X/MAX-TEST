module.exports.config = {
  name: "me",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "AKASH",
  description: "admon only",
  commandCategory: "admin only",
  usages: "admin only",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.postimg.cc/gkvDQfMY/1686479434754.jpg",
"https://i.postimg.cc/nLx1nTPv/1704452349866.jpg",
"https://i.postimg.cc/9M506Ngh/FB-IMG-1683789301630.jpg",
"https://i.postimg.cc/pT4CMxbd/IMG-20230705-WA0013.jpg",
"https://i.postimg.cc/657cc8ZG/IMG-20230705-WA0014.jpg",
"https://i.postimg.cc/442wp6Yg/IMG-20230705-WA0015.jpg",
"https://i.postimg.cc/Twp0s1sS/IMG-20230705-WA0018.jpg",
"https://i.postimg.cc/1zWMMwvw/IMG-20230705-WA0019.jpg",
"https://i.postimg.cc/d3fBvYb1/IMG-20240129-WA0038.jpg",
"https://i.postimg.cc/cHXh9YTf/IMG-20240129-WA0039.jpg",
"https://i.postimg.cc/xC0g3gG0/IMG-20240129-WA0040.jpg",
"https://i.postimg.cc/pLF0WmXt/IMG-20240129-WA0041.jpg",
"https://i.postimg.cc/MpCFVyrT/IMG-20240129-WA0042.jpg",
"https://i.postimg.cc/tT5SK8RZ/IMG-20240129-WA0043.jpg",
"https://i.postimg.cc/d3NW1dyJ/IMG-20240129-WA0045.jpg",
"https://i.postimg.cc/tC7ScrKJ/IMG-20240129-WA0046.jpg",
"https://i.postimg.cc/CKb6NzW4/IMG-20240129-WA0047.jpg",
"https://i.postimg.cc/MKGNSZQW/IMG-20240129-WA0048.jpg",
"https://i.postimg.cc/d35fypzP/IMG-20240129-WA0049.jpg",
"https://i.postimg.cc/QtrvGppP/IMG-20240129-WA0050.jpg",
"https://i.postimg.cc/2SVs4jkH/IMG-20240129-WA0051.jpg",
"https://i.postimg.cc/xTTD1yWV/IMG-20240129-WA0052.jpg",
"https://i.postimg.cc/7ZdpXvbq/IMG-20240129-WA0053.jpg",
"https://i.postimg.cc/PJXcNTVQ/IMG-20240129-WA0054.jpg",
"https://i.postimg.cc/C1GTzvhS/IMG-20240129-WA0055.jpg",
"https://i.postimg.cc/Gtb0YktY/IMG-20240129-WA0056.jpg",
"https://i.postimg.cc/QdzrP9YG/IMG-20240129-WA0057.jpg",
"https://i.postimg.cc/Yqb76y1S/IMG-20240129-WA0058.jpg",
"https://i.postimg.cc/tRdpTgJW/IMG-20240129-WA0059.jpg",
"https://i.postimg.cc/X7V3y0Bh/IMG-20240129-WA0060.jpg",
"https://i.postimg.cc/QCDDb24F/IMG-20240129-WA0061.jpg",
"https://i.postimg.cc/rpvMd05C/IMG-20240129-WA0062.jpg",
"https://i.postimg.cc/XJCNxcnz/IMG-20240130-WA0041.jpg",
"https://i.postimg.cc/rww87L8W/IMG-20240130-WA0042.jpg",
"https://i.postimg.cc/15PRcq2v/IMG-20240130-WA0059.jpg",
"https://i.postimg.cc/W154419X/IMG-20240130-WA0060.jpg",
"https://i.postimg.cc/2SDH5zqb/IMG-20230731-091727.jpg",
"https://i.postimg.cc/28vcmq5N/IMG-20230731-091729.jpg",
"https://i.postimg.cc/tCVdPL03/IMG-20230816-121917.jpg",
"https://i.postimg.cc/fW1267Dv/IMG-20231103-174215.jpg",
"https://i.postimg.cc/KzzBYWrg/IMG-20240110-120757.jpg",
"https://i.postimg.cc/wBFDgzJp/IMG-20240110-120814.jpg",
"https://i.postimg.cc/gkqJfD39/Messenger-creation-7159786641634661675.jpg",
"https://i.postimg.cc/6pW3wvh8/Messenger-creation-7159786645143104313.jpg",
"https://i.postimg.cc/Ssn0GyfQ/Miri-Bot-IMG-2327.png",
"https://i.postimg.cc/R0qwS8TJ/Picsart-23-05-21-21-31-59-423.jpg",
"https://i.postimg.cc/6qCrsvfH/Picsart-23-05-27-13-20-21-853.jpg",
"https://i.postimg.cc/g0Bq3d0K/Picsart-23-06-05-01-01-20-921.jpg",
"https://i.postimg.cc/vmmt1DGB/Picsart-23-06-13-22-53-45-323.jpg",
"https://i.postimg.cc/wM1Xwr1d/Picsart-23-09-21-21-35-06-549.jpg",
"https://i.postimg.cc/jd0VzYwK/received-1026552201210191.jpg",
"https://i.postimg.cc/9FZhSQ5r/received-1036941800336406.jpg",
"https://i.postimg.cc/s2Z10Rcm/received-1043003033342380.jpg",
"https://i.postimg.cc/nczFPJVm/received-1053959485408992.jpg",
"https://i.postimg.cc/WtRkX1RM/received-1155445665858032.jpg",
"https://i.postimg.cc/vmw0cGcx/received-1163132717544077.jpg",
"https://i.postimg.cc/Y0BFxSBQ/received-1176303513063788.jpg",
"https://i.postimg.cc/hPq8L2KN/received-1195001481185076.jpg",
"https://i.postimg.cc/137NjBZm/received-1215349665792108.jpg",
"https://i.postimg.cc/m2Xxz1sz/received-1217688715726227.jpg",
"https://i.postimg.cc/DwngTBD1/received-1218858675434563.jpg",
"https://i.postimg.cc/3rtfnMbz/received-1221924005351350.jpg",
"https://i.postimg.cc/5t9nwnSf/received-122569517569951.jpg",
"https://i.postimg.cc/SQLYhkpt/received-1243311819658072.jpg",
"https://i.postimg.cc/zfWXFFzP/received-1244943705974520.jpg",
"https://i.postimg.cc/4dLvbGN5/received-1251308788822921.jpg",
"https://i.postimg.cc/yY5QCmKP/received-1261397301464730.jpg",
"https://i.postimg.cc/nL1Gr7yN/received-1263553844086173.jpg",
"https://i.postimg.cc/tCHfsdw4/received-1294455071158510.jpg",
"https://i.postimg.cc/Nf13DCmX/received-135469861956374.jpg",
"https://i.postimg.cc/yNXCNQYB/received-1368561090596544.jpg",
"https://i.postimg.cc/mg9GvZvP/received-138683271632397.jpg",
"https://i.postimg.cc/25JhVwHc/received-1417333725719210.jpg",
"https://i.postimg.cc/nrmkH5pG/received-143805550942551.jpg",
"https://i.postimg.cc/zvqBBH12/received-1439488160151875.jpg",
"https://i.postimg.cc/FRdbZqdX/received-1459665144566589.jpg",
"https://i.postimg.cc/pLsDtxKt/received-1466415764099401.jpg",
"https://i.postimg.cc/J0jn73gk/received-1555615534963170.jpg",
"https://i.postimg.cc/Hx4RpVzL/received-1557622181257860.jpg",
"https://i.postimg.cc/90ynxzR2/received-1567247813795777.jpg",
"https://i.postimg.cc/BQcTM26b/received-165003206231683.jpg",
"https://i.postimg.cc/02WQkNXZ/received-165897383088725.jpg",
"https://i.postimg.cc/YCTCFsHW/received-1719098161614374.jpg",
"https://i.postimg.cc/j5dmSRFQ/received-175858088329212.jpg",
"https://i.postimg.cc/Dy2JfHvf/received-180068008335429.jpg",
"https://i.postimg.cc/PJMjFS92/received-1802683556589511.jpg",
"https://i.postimg.cc/MTSZPfXZ/received-1841017676081546.jpg",
"https://i.postimg.cc/V6rvpPW4/received-191581707097577.jpg",
"https://i.postimg.cc/3xXcjyMF/received-1934896606704719.jpg",
"https://i.postimg.cc/CLYDBdNg/received-195395030058928.jpg",
"https://i.postimg.cc/RZ4jD1LD/received-197156925585416.jpg",
"https://i.postimg.cc/SxxMd531/received-201081439486037.jpg",
"https://i.postimg.cc/wMnhZkNR/received-204181462461157.jpg",
"https://i.postimg.cc/5NMy7GYq/received-2069491996730492.jpg",
"https://i.postimg.cc/qMZYMfs2/received-213718988052902.jpg",
"https://i.postimg.cc/sgjp81Qc/received-215004624640828.jpg",
"https://i.postimg.cc/WbHNRHtH/received-2206511069491566.jpg",
"https://i.postimg.cc/FFS8FCP6/received-228318906514244.jpg",
"https://i.postimg.cc/KY483hwF/received-229828253073991.jpg",
"https://i.postimg.cc/cJ52Cpyp/received-242111418391001.jpg",
"https://i.postimg.cc/8kLP6HKF/received-247534587747595.jpg",
"https://i.postimg.cc/8cgpYJ5P/received-249419570895079.jpg",
"https://i.postimg.cc/4dSL4Vts/received-250882540709270.jpg",
"https://i.postimg.cc/sxPhHR3q/received-251496360719634.jpg",
"https://i.postimg.cc/tg9mBXpQ/received-251760923527041.jpg",
"https://i.postimg.cc/Sx4hpbkV/received-255046299327574.jpg",
"https://i.postimg.cc/rpT771GH/received-259391013195975.jpg",
"https://i.postimg.cc/RFK6qzJh/received-260721343132907.jpg",
"https://i.postimg.cc/nr2y1C9W/received-2673160292828464.jpg",
"https://i.postimg.cc/pXq9mCrf/received-275418754915449.jpg",
"https://i.postimg.cc/t4cY5gh7/received-276598224801833.jpg",
"https://i.postimg.cc/G2wn301X/received-2802971370010797.jpg",
"https://i.postimg.cc/ZnfT5fH0/received-2943271112578713.jpg",
"https://i.postimg.cc/wMRNXsrq/received-3011499335749802.jpg",
"https://i.postimg.cc/L5PrrNWr/received-3031090210498547.jpg",
"https://i.postimg.cc/5NZ3Rf5K/received-316113439870373.jpg",
"https://i.postimg.cc/G2drJ0SH/received-3193950840707761.jpg",
"https://i.postimg.cc/FFGFpRvm/received-3213064788912221.jpg",
"https://i.postimg.cc/dtpYNZxM/received-3240135312900692.jpg",
"https://i.postimg.cc/fWdkvZLR/received-3320309808242364.jpg",
"https://i.postimg.cc/7h5RSmD5/received-337552855256554.jpg",
"https://i.postimg.cc/wvQqSxsX/received-352531213350767.jpg",
"https://i.postimg.cc/fRm6H2dX/received-368846195036449.jpg",
"https://i.postimg.cc/2SRtBQt5/received-377542107737923.jpg",
"https://i.postimg.cc/YqmV9nbV/received-378665293843799.jpg",
"https://i.postimg.cc/G2LwTFHD/received-392925128991584.jpg",
"https://i.postimg.cc/d09gFh4V/received-405932240935745.jpg",
"https://i.postimg.cc/BvQfX58K/received-406820971363873.jpg",
"https://i.postimg.cc/y63nXJc3/received-4413840982016988.jpg",
"https://i.postimg.cc/9XxVTnPQ/received-4442128805907438.jpg",
"https://i.postimg.cc/wjM1LNRS/received-4584856224971349.jpg",
"https://i.postimg.cc/rwjvXdhF/received-477787010125768.jpg",
"https://i.postimg.cc/RVRSP0z4/received-479927699894332.jpg",
"https://i.postimg.cc/Zqr4dYHG/received-482298136273101.jpg",
"https://i.postimg.cc/k5SLpjtK/received-487203286877956.jpg",
"https://i.postimg.cc/2yXDD1jZ/received-494909318298531.jpg",
"https://i.postimg.cc/wM5qYqy5/received-496362364757681.webp",
"https://i.postimg.cc/7LqSFh59/received-506079577178104.jpg",
"https://i.postimg.cc/ZKBkNKKw/received-509784884156180.jpg",
"https://i.postimg.cc/nM83Bx0W/received-510118660915708.jpg",
"https://i.postimg.cc/g2jWNqDH/received-518892319261077.jpg",
"https://i.postimg.cc/FRWqf2tt/received-527360169297431.jpg",
"https://i.postimg.cc/sfL9M3Lf/received-543054824433552.jpg",
"https://i.postimg.cc/s2RRsdzw/received-546540043120445.jpg",
"https://i.postimg.cc/jjWJ0fsz/received-553416273633400.jpg",
"https://i.postimg.cc/DZZpKBSx/received-558374021932009.jpg",
"https://i.postimg.cc/zDPZ3R5L/received-558648705133129.webp",
"https://i.postimg.cc/15Lkrh8s/received-559953495379446.webp",
"https://i.postimg.cc/nr9dXrY7/received-570779047376126.jpg",
"https://i.postimg.cc/2jtMCRFh/received-576027863524781.jpg",
"https://i.postimg.cc/jqWKHhM6/received-577369740511322.jpg",
"https://i.postimg.cc/nzP7910S/received-579860117296827.jpg",
"https://i.postimg.cc/PxYh1X4G/received-580084516533496.jpg",
"https://i.postimg.cc/2S70bPvH/received-583486740396600.jpg",
"https://i.postimg.cc/dQCmZbc8/received-591099686143266.jpg",
"https://i.postimg.cc/VknRy2Df/received-599298712347974.jpg",
"https://i.postimg.cc/ZRGnhsfm/received-600889401047408.jpg",
"https://i.postimg.cc/JhyR4cHz/received-601449757717528.jpg",
"https://i.postimg.cc/HLf8pLxF/received-6042568979130182.jpg",
"https://i.postimg.cc/255gzzJd/received-604908124236395.jpg",
"https://i.postimg.cc/d0R4CgyH/received-611177027585905.jpg",
"https://i.postimg.cc/4xk61BZr/received-615465586127855.jpg",
"https://i.postimg.cc/xdgp7W1k/received-617124456256185.jpg",
"https://i.postimg.cc/G2KRXMZz/received-617508086960626.jpg",
"https://i.postimg.cc/66CnpCCc/received-6179281862185917.jpg",
"https://i.postimg.cc/vmjHWSwn/received-618458055981910.jpg",
"https://i.postimg.cc/0yK890w2/received-623999595282415.jpg",
"https://i.postimg.cc/vZ2QsSBK/received-624922068502096.jpg",
"https://i.postimg.cc/QdFMHrRD/received-627012964972037.jpg",
"https://i.postimg.cc/KzMLLMwZ/received-6385557754842055.jpg",
"https://i.postimg.cc/WpdYWYL3/received-677594206977606.jpg",
"https://i.postimg.cc/qqW5wyMj/received-685363923104185.jpg",
"https://i.postimg.cc/wMrSrnF5/received-702248048121532.jpg",
"https://i.postimg.cc/zfR11z4L/received-714407406281885.jpg",
"https://i.postimg.cc/d33b4JRt/received-718650412937056.jpg",
"https://i.postimg.cc/RhG0nCSS/received-746913560447874.jpg",
"https://i.postimg.cc/wvXMgcns/received-760861732239957.jpg",
"https://i.postimg.cc/90247Nyp/received-763869202099695.jpg",
"https://i.postimg.cc/YCRxqQKZ/received-773168770914842.jpg",
"https://i.postimg.cc/T3LsKk0F/received-779835393398716.jpg",
"https://i.postimg.cc/J7BVDzhP/received-785094538813732.jpg",
"https://i.postimg.cc/TP8T15Vj/received-794414337876532.jpg",
"https://i.postimg.cc/Gtj4JJQ1/received-811775223235269.jpg",
"https://i.postimg.cc/Rh0By7mm/received-863677167869925.jpg",
"https://i.postimg.cc/tRzGbmvz/received-866177968056918.jpg",
"https://i.postimg.cc/8k499fsK/received-873047207165811.jpg",
"https://i.postimg.cc/fL84cV9r/received-901915221036460.jpg",
"https://i.postimg.cc/Fs7vxVGg/received-915538142893238.jpg",
"https://i.postimg.cc/FzFrmtj2/received-916021495949638.jpg",
"https://i.postimg.cc/Kz6PsNBk/received-917700112137491.jpg",
"https://i.postimg.cc/HxHvPTm1/received-922986578920556.jpg",
"https://i.postimg.cc/XqYH4xX2/received-925127308796837.jpg",
"https://i.postimg.cc/DzjksWsY/received-927332374754187.jpg",
"https://i.postimg.cc/ZRGQF6qj/received-929627368350844.jpg",
"https://i.postimg.cc/X785w3Hy/received-951454029382177.jpg",
"https://i.postimg.cc/L665FPDn/received-956577548269918.jpg",
"https://i.postimg.cc/sXqk6tTY/received-978005946527359.jpg",
"https://i.postimg.cc/XYg0j1vW/received-982522782730820.jpg",
"https://i.postimg.cc/vBgjV0Gc/received-991054118969942.jpg",
"https://i.postimg.cc/Gh0KMcx7/replicate-prediction-cbnfdhrb6nm6ijqhhkvdm2de2q.png",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Do you need $200 to see the photo?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`ʜɪ ᴛʜᴇɴʀ ɪᴛ’s ᴍᴇ : ᴍᴅ ᴊᴀʜɪᴅ ʜᴀsᴀɴ ʀᴀᴊɪʙ\n ᴍʏ ᴛᴏᴛᴀʟ ɪᴍɢ :${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
