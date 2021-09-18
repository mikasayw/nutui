System.register(["./vendor-legacy.f7dff871.js"],(function(s){"use strict";var t,a,n;return{setters:[function(s){t=s.e,a=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},p=[n('<h1>Input 输入框</h1><h3>介绍</h3><p>单行输入框</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Input,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Input,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Input);\napp.use(Icon);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><p>双向绑定</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val1&quot;</span>\n      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>\n      @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;focus&quot;</span>\n      @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;blur&quot;</span>\n      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>\n    /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span>\n      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val0&quot;</span>\n      <span class="hljs-attr">:require-show</span>=<span class="hljs-string">&quot;true&quot;</span>\n      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>\n      @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;clear&quot;</span>\n    /&gt;</span>\n</code></pre><h3>禁用和只读</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val2&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>  <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;标题：&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val3&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">readonly</span>=<span class="hljs-string">&quot;true&quot;</span>  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;标题：&quot;</span>/&gt;</span>\n</code></pre><h3>限制输入长度</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val4&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">max-length</span>=<span class="hljs-string">&quot;7&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;限制7&quot;</span> /&gt;</span>\n</code></pre><h3>其他类型</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val0&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;密码&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val5&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;整数&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val6&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;支持小数点的输入&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;数字&quot;</span>/&gt;</span>\n</code></pre><h3>代码</h3><pre><code class="language-html">import { reactive } from &#39;vue&#39;;\nexport default {\n  setup() {\n    const state = reactive({\n      val0: &#39;&#39;,\n      val1: &#39;初始数据&#39;,\n      val2: &#39;禁止修改&#39;,\n      val3: &#39;readonly 只读&#39;,\n      val4: &#39;&#39;,\n      val5: &#39;&#39;,\n      val6: &#39;&#39;,\n      val7: &#39;&#39;,\n      val8: &#39;文案&#39;\n    });\n    setTimeout(function() {\n      state.val1 = &#39;异步数据&#39;;\n    }, 2000);\n    const change = (value: string | number,event:Event) =&gt; {\n      console.log(&#39;change: &#39;, value,event);\n    };\n    const focus = (value: string | number,event:Event) =&gt; {\n      console.log(&#39;focus:&#39;, value,event);\n    };\n    const blur = (value: string | number,event:Event) =&gt; {\n      console.log(&#39;blur:&#39;, value,event);\n    };\n    const clear = (value: string | number) =&gt; {\n      console.log(&#39;clear:&#39;, value);\n    };\n\n    return {\n      state,\n      change,\n      blur,\n      clear,\n      focus\n    };\n  }\n}\n</code></pre><h3>Prop</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>输入值，双向绑定</td><td>String</td><td>-</td></tr><tr><td>type</td><td>类型，可选值为 <code>text</code> <code>number</code> 等</td><td>String</td><td><code>text</code></td></tr><tr><td>placeholder</td><td>为空时占位符</td><td>String</td><td>-</td></tr><tr><td>label</td><td>左侧文案</td><td>String</td><td>-</td></tr><tr><td>require-show</td><td>左侧*号是否展示</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>max-length</td><td>限制最长输入字符</td><td>String、Number</td><td>-</td></tr><tr><td>clearable</td><td>展示清除icon</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>text-align</td><td>文本位置,可选值<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入内容时触发</td><td>val ,event</td></tr><tr><td>focus</td><td>聚焦时触发</td><td>val ,event</td></tr><tr><td>blur</td><td>失焦时触发</td><td>val ,event</td></tr><tr><td>clear</td><td>点击清空时触发</td><td>val</td></tr></tbody></table>',21)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(a(),t("div",l,p)))})}}}));
