//Credit By HBMods-OFC
const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.AntiCallBot = true // false a i dah chuan, rawn call-tu che automatic a block a ni lovang
global.GroupWcMsg = false // false a i dah chuan welcome message i off ang
global.autoTyping = false // true a i dah chuan i type la a lang ang
global.autoRecord = false // true a i dah chuan Voice record angin i lang ang
global.public = true // false ah i dah chuan nang chauhin i hmang thei ang
global.autoread = true // true a i dah chuan message zawng zawng read vek zelin a awm ang 
global.autoread_status = true // true a i dah chuan auto status view in a awm ang

//info
global.owner = ['918787651195'] // I phone number in thlak rawh
global.ownernumber = '918787651195' // I phone number in thlak rawh
global.ownername = "Awmtea Polythene" // I hming dah tel bawk la
global.location = "India, Mizoram, Serchhip" // I awmna hmun daha
global.botname = "Flex" // I bot hming tur dah la
global.ownerweb = "https://youtube.com/@awmtea-polythene"
global.themeemoji = '🤖'
global.creator = "918787651195@s.whatsapp.net" // @ symbol hmaa number hi i phone number in thlak rawh

global.ownerNumber = ["918787651195@s.whatsapp.net"]// @ symbol hmaa number hi i phone number in thlak rawh
global.prefixc = ['/'] // Prefix a tana hman theih loh tur symbolise a awm nuala, i bot a work a lo a nih chuan i thlak mai dawn nia
global.sessionName = 'session'

// Sticker Pack Name
global.packname = "Sticker By"
global.author = "Flex"

//BUTTON INPUT 
global.buttonyt = "SUBSCRIBE"
global.buttonyturl = "https://youtube.com/@awmtea-polythene"
global.buttonig = "Follow Us:)"
global.buttonigurl = "https://www.instagram.com/awmtea._.polythene"
//_______________________________________________
global.defaultpp = 'https://telegra.ph/file/b314b8aa729e7b16f2090.jpg'
//messages
global.mess = {
    success: '\n*©Flex*!', 
    admin: 'He features hi chu admin-te chauh hman thei tur a siam a ni!',
    botAdmin: 'Admin-ah min dah hmasa phawt la chuan ka ti thei ang!',
    owner: 'He features hi a neitu chauh hman thei tura siam a ni!',
    group: 'Hei chu group-ah chauh hman thei tura siam a ni!',
    private: 'Hei chu private chat-ah chauh hman thei tura siam a ni!',
    bot: 'Hei chu kei mah chauh hman thei tur a siam a ni',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
