export const projects=[
{name:'Race Low Poly',type:'Game',status:'Live',progress:92,reach:'18.4k',deploy:'8 min'},
{name:'PedalZTR',type:'Mobile',status:'Building',progress:74,reach:'4.8k',deploy:'2 min'},
{name:'Studio Atlas',type:'Platform',status:'Live',progress:100,reach:'12.1k',deploy:'22 min'},
{name:'ZTR Cloud',type:'Infrastructure',status:'Live',progress:88,reach:'32 srv',deploy:'5 min'},
{name:'Night Drive',type:'Game',status:'Review',progress:61,reach:'beta',deploy:'1 h'},
{name:'ZTR Music',type:'Bot',status:'Live',progress:96,reach:'3 guilds',deploy:'14 min'}]
export const deployments=[
{id:'#1842',project:'Race Low Poly',branch:'main',commit:'c7d91ae',status:'Live',duration:'42s',author:'Julio'},
{id:'#1841',project:'Studio Atlas',branch:'main',commit:'29bd8f1',status:'Live',duration:'1m 18s',author:'Julio'},
{id:'#1840',project:'PedalZTR',branch:'release',commit:'a9410cd',status:'Building',duration:'2m 04s',author:'Julio'},
{id:'#1839',project:'Night Drive',branch:'dev',commit:'ab77c20',status:'Failed',duration:'28s',author:'Julio'},
{id:'#1838',project:'ZTR Cloud',branch:'main',commit:'e02f61b',status:'Live',duration:'54s',author:'System'}]
export const traffic=[
{time:'00h',requests:2200,builds:4},{time:'04h',requests:1800,builds:2},{time:'08h',requests:5400,builds:8},
{time:'12h',requests:8900,builds:12},{time:'16h',requests:11200,builds:9},{time:'20h',requests:7600,builds:6},{time:'24h',requests:6100,builds:5}]
export const events=[
['agora','Release #1842 promovida para LIVE','Race Low Poly'],
['2 min','Build isolado iniciado','PedalZTR · release'],
['11 min','Health check aprovado','Studio Atlas'],
['18 min','Novo domínio provisionado','games.ztrcompany.site'],
['31 min','Backup automático concluído','ZTR Cloud'],
['1 h','Rollback preservou release anterior','Night Drive']]
