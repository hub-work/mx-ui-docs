import{p as h,C as d,o as n,b as k,d as o,c,j as s,a as e,H as E,a1 as g}from"./chunks/framework.DioSGhIs.js";const m={__name:"case1",setup(l){const t=h();return(a,i)=>{const r=d("mx-date-picker-range");return n(),k(r,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=p=>t.value=p)},null,8,["modelValue"])}}},y=JSON.parse('{"title":"MxDatePickerRange 日期区间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"guild/cases/InputDatePickerRange/index.md","filePath":"guild/cases/InputDatePickerRange/index.md"}'),u={name:"guild/cases/InputDatePickerRange/index.md"},v=o({...u,setup(l){return(t,a)=>(n(),c("div",null,[a[0]||(a[0]=s("h1",{id:"mxdatepickerrange-日期区间选择器",tabindex:"-1"},[e("MxDatePickerRange 日期区间选择器 "),s("a",{class:"header-anchor",href:"#mxdatepickerrange-日期区间选择器","aria-label":'Permalink to "MxDatePickerRange 日期区间选择器"'},"​")],-1)),a[1]||(a[1]=s("p",null,[e("用于选择一段日期 "),s("br")],-1)),a[2]||(a[2]=s("h2",{id:"选择一段日期",tabindex:"-1"},[e("选择一段日期 "),s("a",{class:"header-anchor",href:"#选择一段日期","aria-label":'Permalink to "选择一段日期"'},"​")],-1)),a[3]||(a[3]=s("p",null,"选择某一个段区间的日期",-1)),E(m),a[4]||(a[4]=g(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-date-picker-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dateVal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-date-picker-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dateVal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details><h2 id="component-api" tabindex="-1">Component API <a class="header-anchor" href="#component-api" aria-label="Permalink to &quot;Component API&quot;">​</a></h2><p>MxDatePickerRange 组件API可参考 Element-plus 中的组件文档：<a href="https://element-plus.org/zh-CN/component/date-picker.html#api" target="_blank" rel="noreferrer">参考文档</a></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>allow</td><td>能否编辑</td><td>R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值</td><td>W</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>示例 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>类型 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table>`,9))]))}});export{y as __pageData,v as default};
