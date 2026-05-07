import{_ as C,c as i,a as s,F as g,h as m,f as T,e as b,w as A,v as L,m as w,n as v,r,A as x,o as l,t as M}from"./index-CALSF-v7.js";const B={class:"ask-ai-page"},I={class:"ai-nav"},$={class:"ai-chips"},V=["onClick"],H={key:0,class:"ai-msg__avatar"},N=["innerHTML"],j={key:0,class:"ai-msg ai-msg--left"},D={class:"ai-input-bar"},F={class:"ai-input-bar__inner"},K="我还在学习中，暂时无法回答这个问题。您可以试试问我关于小明今天的在校表现、午餐情况、作业完成情况等问题。",Q={__name:"AskAI",setup(R){const o=r(null),t=r(""),c=r(!1),p=r([]),k=["今天表现怎么样？","午餐吃了什么？","这周作业完成情况？","有没有被老师表扬？"],f={"今天表现怎么样？":`今天小明表现很棒！✨

📌 07:32 准时到校，比班级平均早3分钟
📌 7节课全部到课，课堂互动积极
📌 午餐消费¥8.50，营养均衡
📌 获得"本周数学之星"荣誉🏆
📌 16:30 正常离校

整体评分：95分，表现优秀！`,"午餐吃了什么？":`近3天午餐记录：

📅 周三 - 红烧排骨+青菜+米饭 ¥9.00
📅 周四 - 青椒肉丝+番茄蛋汤+米饭 ¥8.50
📅 周五 - 糖醋里脊+紫菜蛋汤+米饭 ¥10.50

💡 本周午餐消费趋势稳定，日均¥9.17。周五消费最高，看来糖醋里脊是小明的最爱！`,"这周作业完成情况？":`本周作业完成情况：

✅ 语文：5/5 全部按时提交
✅ 数学：5/5 全部按时提交
✅ 英语：4/5 1次迟交（周三）
✅ 科学：3/3 全部按时提交

📊 总完成率：94%
📝 数学作业多次获得A+评价
⚠️ 英语听读作业建议加强`,"有没有被老师表扬？":`本周表扬记录：

🏆 周三 数学课 - 李老师
"小明解题思路清晰，方法很棒！"

🏆 周三 整体 - 获得数学之星
"本周数学课堂表现优异，作业全对！"

🏆 周五 美术课 - 周老师
"今天的画作色彩搭配很棒，创意十足！"

🌟 本周共获得3次表扬，继续保持！`};function h(e){return e.replace(/\n/g,"<br>").replace(/📌/g,'<span class="msg-icon">📌</span>').replace(/✅/g,'<span class="msg-icon">✅</span>').replace(/⚠️/g,'<span class="msg-icon">⚠️</span>').replace(/📅/g,'<span class="msg-icon">📅</span>').replace(/💡/g,'<span class="msg-icon">💡</span>').replace(/📊/g,'<span class="msg-icon">📊</span>').replace(/📝/g,'<span class="msg-icon">📝</span>').replace(/🏆/g,'<span class="msg-icon">🏆</span>').replace(/🌟/g,'<span class="msg-icon">🌟</span>').replace(/✨/g,'<span class="msg-icon">✨</span>')}function u(){x(()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight)})}function y(e){t.value=e,d()}function d(){const e=t.value.trim();!e||c.value||(p.value.push({role:"user",content:e}),t.value="",u(),c.value=!0,u(),setTimeout(()=>{c.value=!1;const a=f[e]||K;p.value.push({role:"ai",content:a}),u()},1500))}return(e,a)=>(l(),i("div",B,[s("div",I,[s("span",{class:"ai-nav__back",onClick:a[0]||(a[0]=n=>e.$router.back())},"←"),a[2]||(a[2]=s("span",{class:"ai-nav__title"},"问问AI",-1)),a[3]||(a[3]=s("span",{class:"ai-nav__avatar"},"🤖",-1))]),s("div",{class:"ai-chat",ref_key:"chatContainer",ref:o},[a[5]||(a[5]=s("div",{class:"ai-msg ai-msg--left"},[s("div",{class:"ai-msg__avatar"},"🤖"),s("div",{class:"ai-msg__bubble ai-msg__bubble--ai"},[s("p",null,"您好！我是AI助手小智，可以帮您了解小明在校的情况。试试问我："),s("ul",null,[s("li",null,"小明今天表现怎么样？"),s("li",null,"最近午餐都吃了什么？"),s("li",null,"这周数学课表现如何？")])])],-1)),s("div",$,[(l(),i(g,null,m(k,n=>s("span",{class:"ai-chip",key:n,onClick:_=>y(n)},M(n),9,V)),64))]),(l(!0),i(g,null,m(p.value,(n,_)=>(l(),i("div",{key:_,class:v(["ai-msg",[`ai-msg--${n.role}`]])},[n.role==="ai"?(l(),i("div",H,"🤖")):b("",!0),s("div",{class:v(["ai-msg__bubble",[`ai-msg__bubble--${n.role}`]])},[s("span",{innerHTML:h(n.content)},null,8,N)],2)],2))),128)),c.value?(l(),i("div",j,[...a[4]||(a[4]=[T('<div class="ai-msg__avatar" data-v-2dccd7d9>🤖</div><div class="ai-msg__bubble ai-msg__bubble--ai ai-msg__bubble--typing" data-v-2dccd7d9><span class="typing-dot" data-v-2dccd7d9></span><span class="typing-dot" data-v-2dccd7d9></span><span class="typing-dot" data-v-2dccd7d9></span></div>',2)])])):b("",!0)],512),s("div",D,[s("div",F,[A(s("input",{class:"ai-input-bar__input","onUpdate:modelValue":a[1]||(a[1]=n=>t.value=n),placeholder:"输入您想了解的问题...",onKeyup:w(d,["enter"])},null,544),[[L,t.value]]),s("button",{class:v(["ai-input-bar__btn",{"ai-input-bar__btn--active":t.value.trim()}]),onClick:d},[...a[6]||(a[6]=[s("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none"},[s("path",{d:"M22 2L11 13",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M22 2L15 22L11 13L2 9L22 2Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)])])]))}},q=C(Q,[["__scopeId","data-v-2dccd7d9"]]);export{q as default};
