require("dotenv").config();
const fetch = require("node-fetch");
const Discord=require("discord.js");
let client = new Discord.Client();
const prefix = "&";



client.on("ready", () => console.log("Larei was here!"));//Bot aktif olunca, konsola yazılcak mesaj. Tırnak içindeki yazıyı değiştirebilirsiniz.
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") return message.channel.send(`Pong! \`${client.ws.ping}ms\``);

    if (cmd === "youtube") {
        
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.member.voice.channel.id)
        if (!channel || channel.type !== "voice") return message.channel.send("**Hata, lütfen `.izle <sesli_kanal_id>` şeklinde kullanınız.**");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("**Hata, 'Davet Oluştur' yetkisi bulunamadı.**");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channeinvitel.send("**Hata, YouTube başlatılamadı.**");
                message.channel.send(`Tıkla: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("**Hata, YouTube başlatılamadı.**");
            })
    }
});




function karistir(dizi) {
  dizi.sort(() => Math.random() - 0.5);
}



var dizi1 = ["Sabah yürek yemiş buraya gelmiş!",
    "Benim adım bomba soyadım ölüm lan!",
    "Benim dayımın çocukları var ya mermiye kafa atıyor!",
    "Altın kapılarımız kan oldu Tayfun",
    "Ne güzel Umre’ye gidecektim!",
    "Zinadan kaçın diyor kaçın!",
    "Allah versin kardeşim!",
    "Keşke bu arkadaşa bir şey yedirip, içirmeseydik!",
    "Ver coşkuyu kolonlar inlesin.",
    "Bizi böyle gördünüz Karamürsel Sepetimi Sandınız?",
    "Hayırdır İngiltere Prensi’yle mi konuşuyorum?",
    "Koyunda güzel bir ismimiz olsun.",
    "Bizi bitirdin be!",
    "Sıkılıyorum Sabri, Bunalıyorum",
    "Sen paraları karılarla ye, ama Sabri abinin kuşunu düşünme.",
    "Ulan İşin varsa vergi levhan nerde a ibine",
    "Bak kardeşim sen güzel bir kardeşe benziyorsun. benim yaşım 50. bak götüme. bak bak bak iyi bak. donum görünüyor. donum olmasa bizzat götümün kendisi görünecek. kız arkadaşının arabası pislenmesin diye bu galoşları giydirdin yolda şıkır şıkır yürüyoruz. he. biz ağzımızı açıp şikayet etmiyoruz da sen mi şikayet ediyorsun he. bak kardeşim güzel kardeşim canım kardeşim benimle bir daha sakın polemiğe girme.",
    "Asansör düğmesi misali içine kaçmış",
    "Adam doğru söylüyor sabri bey. yeni trend bu. sadomazo diyorlar buna",
    "kızım gel bakayım ; +buyurun sabri bey ; - bu adam sana kaydı mı, kaymadı mı?",];



var kutup = {"&karayan":"Ya tarih yazıcaz ya tarih olucaz!",
"&sudiş":"Ben sinirli değilim!",
"&damliş":"Hangi renk şapka öreyim?",
"&cecene":"Gel damla ders çalışalım.",
"&fatik":"Sj",
"&yamur":"Mizaj",
"&rumeys":"Şu çocuk çok tatlı keşke çoçuğum olsa",
"&zenoras":"Ben genshine kaçıyom",
"&muti":"Bu film çok güzel agaa",             
};

let map = ["ascent","breeze","bind","split","haven","icebox"]
let s = 0;
let ks = 0;
client.on("message",message =>{
   const allUsers = client.users.cache;
   
  if (message.content.indexOf(prefix) !== 0) return;
   const args = message.content.slice(prefix.length).trim().split(" ");
   const cmd = args.shift().toLowerCase();
  if(cmd === "kolpacino") {
    karistir(dizi1);
    message.channel.send(dizi1[0])
  } 

   if(cmd==='fatiketokat') {
    message.channel.send(`Her tokat fatike bir teselli,tokat sayisi: ${s}`)
    s+=1
   }
   if(cmd==='purge') {
    message.channel.send(`?purge 3`)
 
   }
    
    if(cmd==='map') {
    karistir(map)
    message.channel.send(`Seçilen map: ${map[0]}`)
    
   }

  if(cmd==='fatikeopucuk') {
    message.channel.send(`Her opucuk fatike bir teselli,opucuk sayisi: ${ks}`)
    ks+=1
   }
  if(cmd==='15temmuzdanerdeydin') {
    message.channel.send(`15 Temmuzda nerdeydin lan ?!!`)
  
   }
  
   let yazankisi = message.author.username;

   if(cmd==='acil') {
    let mesaj = args.join(" ")
    allUsers.forEach(e => { if(!e.bot ) e.send(`${mesaj} -${yazankisi}`)})
   }
   
   let j = 1;
   let argumans = []; 
   if(cmd==='acilozel') {
    let sayi = parseInt(args[0])
    for(var i=0; i < sayi; i++){
      argumans.push(args[j]);
      j++;
      console.log(allUsers)
      console.log(client.user)
    }
    let ozelmesaj = [];
    for(var i=0; i < argumans.length; i++){
      for(;j < args.length; j++){
       ozelmesaj += args[j]+" ";
      }
      allUsers.forEach(e => { if(e.username.toLowerCase() == argumans[i] ) e.send(`-------------------------------------------------------------------------\n${ozelmesaj}-${yazankisi}\n-------------------------------------------------------------------------`)})
    }
   }
  if (cmd === 'whatk') {
    message.reply(message.author.displayAvatarURL());
  }
  if(cmd==='miqky') {
    message.channel.send("SELAM")
  }
 })

client.login("ODM1NDgxMDQ2MjA3NTYxNzY4.YIQEWw.CxweRR9hRW6k0pQviE8jsH27iEc");
