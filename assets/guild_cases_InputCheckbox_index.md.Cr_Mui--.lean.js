import{p as h,C as p,o as n,b as k,d as r,c as d,j as a,a as i,H as c,a1 as E}from"./chunks/framework.DioSGhIs.js";const o={__name:"case1",setup(e){const t=h([{value:"check01",label:"选项01"},{value:"check02",label:"选项02"}]);return(s,u)=>{const l=p("mx-checkbox");return n(),k(l,{data:t.value},null,8,["data"])}}},m=JSON.parse('{"title":"MxCheckbox 多选框","description":"","frontmatter":{},"headers":[],"relativePath":"guild/cases/InputCheckbox/index.md","filePath":"guild/cases/InputCheckbox/index.md"}'),b={name:"guild/cases/InputCheckbox/index.md"},y=r({...b,setup(e){return(t,s)=>(n(),d("div",null,[s[0]||(s[0]=a("h1",{id:"mxcheckbox-多选框",tabindex:"-1"},[i("MxCheckbox 多选框 "),a("a",{class:"header-anchor",href:"#mxcheckbox-多选框","aria-label":'Permalink to "MxCheckbox 多选框"'},"​")],-1)),s[1]||(s[1]=a("p",null,[i("Checkbox 多选框 "),a("br")],-1)),s[2]||(s[2]=a("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(o),s[3]||(s[3]=E(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-checkbox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;checkList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-checkbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> checkList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;check01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选项01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;check02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选项02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><h2 id="component-api" tabindex="-1">Component API <a class="header-anchor" href="#component-api" aria-label="Permalink to &quot;Component API&quot;">​</a></h2><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>allow</td><td>能否编辑</td><td>R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值</td><td>W</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>示例 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>类型 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table>`,8))]))}});export{m as __pageData,y as default};
