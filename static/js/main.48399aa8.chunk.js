(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,s,t){a.exports={profile:"Profile_profile__1R-Zf",description:"Profile_description__36jfM",avatar:"Profile_avatar__2gZ43",name:"Profile_name__2n5ZD",tag:"Profile_tag__hOl7R",location:"Profile_location__2eoiO",stats:"Profile_stats__2UPjr",stats_item:"Profile_stats_item__vosGd",border:"Profile_border__3lGYF",label:"Profile_label__2zUWB",quantity:"Profile_quantity__McQQL"}},function(a,s,t){a.exports={friendList:"FriendList_friendList__KfCD9",item:"FriendList_item__1J--W",status:"FriendList_status__3fAZ4",statusTrue:"FriendList_statusTrue__2bPJ6",statusFalse:"FriendList_statusFalse__3e5bR",avatar:"FriendList_avatar__TE5Qu",name:"FriendList_name__6Vl6M"}},function(a){a.exports=JSON.parse('{"name":"Maksym Dzhafarov","tag":"dzhafarovm","location":"Kryvyi Rig, Ukraine","avatar":"https://avatars.githubusercontent.com/u/76589055?v=4","stats":{"followers":4449,"views":4.448,"likes":4447}}')},function(a,s,t){a.exports={statistics:"Statistics_statistics__14q7E",title:"Statistics_title__1_jBo",stat_list:"Statistics_stat_list__3kYH8",item:"Statistics_item__3qzk_",label:"Statistics_label__2hihT",percentage:"Statistics_percentage__3t93_"}},,,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Larisa","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Nikiforovna","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ivan","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Kesha","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Petrovna","isOnline":false,"id":1284}]')},,,,,,function(a,s,t){},function(a,s,t){"use strict";t.r(s);var e=t(5),i=t.n(e),c=t(7),n=t.n(c),l=t(1),r=t.n(l),o=t(0);function _(a){var s=a.name,t=a.tag,e=a.location,i=a.avatar,c=a.followers,n=a.views,l=a.likes;return Object(o.jsxs)("div",{className:r.a.profile,children:[Object(o.jsxs)("div",{className:r.a.description,children:[Object(o.jsx)("img",{src:i,alt:s,className:r.a.avatar}),Object(o.jsx)("p",{className:r.a.name,children:s}),Object(o.jsxs)("p",{className:r.a.tag,children:["@",t]}),Object(o.jsx)("p",{className:r.a.location,children:e})]}),Object(o.jsxs)("ul",{className:r.a.stats,children:[Object(o.jsxs)("li",{className:r.a.stats_item,children:[Object(o.jsx)("span",{className:r.a.label,children:"Followers"}),Object(o.jsx)("span",{className:r.a.quantity,children:c})]}),Object(o.jsxs)("li",{className:"".concat(r.a.stats_item," ").concat(r.a.border),children:[Object(o.jsx)("span",{className:r.a.label,children:"Views"}),Object(o.jsx)("span",{className:r.a.quantity,children:n})]}),Object(o.jsxs)("li",{className:r.a.stats_item,children:[Object(o.jsx)("span",{className:r.a.label,children:"Likes"}),Object(o.jsx)("span",{className:r.a.quantity,children:l})]})]})]})}var d=t(3),m=t(4),j=t.n(m);function b(a){var s=a.title,t=a.stats;return Object(o.jsxs)("section",{className:j.a.statistics,children:[Object(o.jsx)("h2",{className:j.a.title,children:s}),Object(o.jsx)("ul",{className:j.a.stat_list,children:t.map((function(a){return Object(o.jsxs)("li",{className:j.a.item,children:[Object(o.jsx)("span",{className:j.a.label,children:a.label}),Object(o.jsxs)("span",{className:j.a.percentage,children:[a.percentage,"%"]})]},a.id)}))})]})}var p=t(8),v=t(2),f=t.n(v);function u(a){var s=a.friends;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{className:f.a.friendList,children:s.map((function(a){return a.isOnline?Object(o.jsxs)("li",{className:f.a.item,children:[Object(o.jsx)("span",{className:"".concat(f.a.status," ").concat(f.a.statusTrue)}),Object(o.jsx)("img",{className:f.a.avatar,src:a.avatar,alt:a.name,width:"48"}),Object(o.jsx)("p",{className:f.a.name,children:a.name})]},a.id):Object(o.jsxs)("li",{className:f.a.item,children:[Object(o.jsx)("span",{className:"".concat(f.a.status," ").concat(f.a.statusFalse)}),Object(o.jsx)("img",{className:f.a.avatar,src:a.avatar,alt:a.name,width:"48"}),Object(o.jsx)("p",{className:f.a.name,children:a.name})]},a.id)}))})})}var h=t(9);function O(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(_,{name:d.name,tag:d.tag,location:d.location,avatar:d.avatar,followers:d.stats.followers,views:d.stats.views,likes:d.stats.likes}),Object(o.jsx)(b,{title:"Upload stats",stats:p}),Object(o.jsx)(u,{friends:h})]})}t(15);n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.48399aa8.chunk.js.map