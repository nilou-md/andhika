const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6289505198571'] //ur owner number
global.ownernomer = "6289505198571" //ur owner number2
global.ownername = "Andhika" //ur owner name
global.ytname = "-" //ur yt chanel name
global.socialm = "-" //ur github or insta name
global.location = "Indonesia, lampung, Kotabumi" //ur location

//new
global.botname = "Nilou Botz - MD Beta"
global.ownernumber = '6289505198571'
global.ownername = '6289505198571'
global.ownerNumber = ["6289505198571@s.whatsapp.net"]
global.ownerweb = "-"
global.websitex = "-"
global.wagc = "-"
global.themeemoji = '🥀'
global.wm = "owner Andhika"
global.botscript = 'Sprivate' //script link
global.packname = "stiker buatan Nilou Botz-MD Beta"
global.author = "Nilou\n\n\nA whatsapp bot Created by\Andhika Development\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6289505198571"
global.creator = "6289505198571@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Permintaan Telah Berhasil',
    admin: 'cmn bsa admin ya!!',
    botAdmin: 'jadiin admin dulu dong _-',
    premime: 'maaf ya,tapi kamu belum premium',
    owner: 'Fitur ini khusus owner kesayanganku!!!',
    group: 'Fitur cmn buat grub!!',
    private: 'Fitur pribadi kak',
    bot: 'Fitur Khusus Bot Kesayangan Owner',
    wait: 'Lagi Proses,Tunggu Bentar Ga lama kok',
    linkm: 'linknya mn?',
    endLimit: 'Yah Limitmu abis,nunggu dulu 12 jam kalo gak minta sama owner kesayanganku>_<',
    nsfw: 'NFSW Blom Aktif loo...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})