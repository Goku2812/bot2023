import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ πΎ π΄π½π»π°π²π΄ π³π΄ π°π»πΆππ½π° π²π°π½π²πΈπΎπ½ πΎ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_β³Sα΄ α΄sα΄α΄ α΄Κα΄α΄α΄sα΄Ι΄α΄α΄ Sα΄ α΄α΄α΄Ιͺα΄...β³_*`, m)  
let json = await res.json()
let aa = conn.sendMessage(m.chat, { audio: { url: json.result.audio }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
if (!aa) return conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_β³Sα΄ α΄sα΄α΄ α΄Κα΄α΄α΄sα΄Ι΄α΄α΄ Sα΄ α΄ Ιͺα΄α΄α΄...β³_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `*Ι’α΄α΄α΄ Κα΄α΄*`, m)}
} catch (e) {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
