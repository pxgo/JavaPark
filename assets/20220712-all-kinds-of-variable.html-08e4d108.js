const n=JSON.parse('{"key":"v-47f54e6a","path":"/java-tutorial/javase-series/20220712-all-kinds-of-variable.html","title":"成员变量、实例变量、静态变量、局部变量","lang":"zh-CN","frontmatter":{"isOriginal":true,"order":1,"category":["Java 基础"],"tag":["Java"],"description":"成员变量、实例变量、静态变量、局部变量 共勉 不要哀求，学会争取。若是如此，终有所获。 前言 学习 Java 的过程中，一开始很容易被这些各种变量绕晕，这篇博客主要介绍了这几种变量之间的关系和区别。 实例 package com.cunyu.demo public class Demo { private String name; //成员变量、实例变量 private int age; //成员变量、实例变量 private int ID; //成员变量、实例变量 public static final String school = \\"卡塞尔学院\\"; //成员变量、静态变量(类变量) public static String level = \\"SSS\\"; //成员变量、静态变量(类变量) public int getAge() { return age; } public int getId() { return ID; } public String getName() { return name; } public void setAge(int age) { this.age = age; } public void setId(int ID) { this.ID = ID; } public void setName(String name) { this.name = name; } public void study(){ String subject1 = \\"屠龙\\"; //局部变量 String subject2 = \\"炼金术\\"; //局部变量 System.out.println(\\"学习科目： \\" + subject1 + \\"、\\" + subject2); } public static void main(String[] args) { Demo demo = new Demo(); demo.setAge(23); demo.setId(14000001); demo.setName(\\"楚子航\\"); System.out.println(\\"ID: \\" + demo.getId() + \\"Age: \\" + demo.getAge() + \\"Name: \\" + demo.getName()); System.out.print(\\"主修科目： \\"); demo.study(); System.out.println(\\"学院：\\" + Demo.school); System.out.println(\\"等级：\\" + Demo.level); } }","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/java-tutorial/javase-series/20220712-all-kinds-of-variable.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"成员变量、实例变量、静态变量、局部变量"}],["meta",{"property":"og:description","content":"成员变量、实例变量、静态变量、局部变量 共勉 不要哀求，学会争取。若是如此，终有所获。 前言 学习 Java 的过程中，一开始很容易被这些各种变量绕晕，这篇博客主要介绍了这几种变量之间的关系和区别。 实例 package com.cunyu.demo public class Demo { private String name; //成员变量、实例变量 private int age; //成员变量、实例变量 private int ID; //成员变量、实例变量 public static final String school = \\"卡塞尔学院\\"; //成员变量、静态变量(类变量) public static String level = \\"SSS\\"; //成员变量、静态变量(类变量) public int getAge() { return age; } public int getId() { return ID; } public String getName() { return name; } public void setAge(int age) { this.age = age; } public void setId(int ID) { this.ID = ID; } public void setName(String name) { this.name = name; } public void study(){ String subject1 = \\"屠龙\\"; //局部变量 String subject2 = \\"炼金术\\"; //局部变量 System.out.println(\\"学习科目： \\" + subject1 + \\"、\\" + subject2); } public static void main(String[] args) { Demo demo = new Demo(); demo.setAge(23); demo.setId(14000001); demo.setName(\\"楚子航\\"); System.out.println(\\"ID: \\" + demo.getId() + \\"Age: \\" + demo.getAge() + \\"Name: \\" + demo.getName()); System.out.print(\\"主修科目： \\"); demo.study(); System.out.println(\\"学院：\\" + Demo.school); System.out.println(\\"等级：\\" + Demo.level); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-27T01:05:55.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2023-08-27T01:05:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"成员变量、实例变量、静态变量、局部变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-27T01:05:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]},{"level":2,"title":"各变量联系与区别","slug":"各变量联系与区别","link":"#各变量联系与区别","children":[{"level":3,"title":"成员变量","slug":"成员变量","link":"#成员变量","children":[]},{"level":3,"title":"实例变量","slug":"实例变量","link":"#实例变量","children":[]},{"level":3,"title":"静态变量(类变量)","slug":"静态变量-类变量","link":"#静态变量-类变量","children":[]},{"level":3,"title":"局部变量","slug":"局部变量","link":"#局部变量","children":[]},{"level":3,"title":"成员变量 VS 局部变量","slug":"成员变量-vs-局部变量","link":"#成员变量-vs-局部变量","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693098355000,"updatedTime":1693098355000,"contributors":[{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"java-tutorial/javase-series/20220712-all-kinds-of-variable.md","localizedDate":"2023年8月27日","excerpt":"<h1> 成员变量、实例变量、静态变量、局部变量</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">共勉</p>\\n<p>不要哀求，学会争取。若是如此，终有所获。</p>\\n</div>\\n<h2> 前言</h2>\\n<p>学习 Java 的过程中，一开始很容易被这些各种变量绕晕，这篇博客主要介绍了这几种变量之间的关系和区别。</p>\\n<h2> 实例</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>cunyu<span class=\\"token punctuation\\">.</span>demo</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Demo</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">//成员变量、实例变量</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">//成员变量、实例变量</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> <span class=\\"token constant\\">ID</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">//成员变量、实例变量</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">String</span> school <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"卡塞尔学院\\"</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">//成员变量、静态变量(类变量)</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">String</span> level <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"SSS\\"</span><span class=\\"token punctuation\\">;</span>    <span class=\\"token comment\\">//成员变量、静态变量(类变量)</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">getAge</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> age<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">getId</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token constant\\">ID</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">getName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> name<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setAge</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age <span class=\\"token operator\\">=</span> age<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setId</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> <span class=\\"token constant\\">ID</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">ID</span> <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">ID</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setName</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">study</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">String</span> subject1 <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"屠龙\\"</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">//局部变量</span>\\n            <span class=\\"token class-name\\">String</span> subject2 <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"炼金术\\"</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//局部变量</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"学习科目： \\"</span> <span class=\\"token operator\\">+</span> subject1 <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"、\\"</span> <span class=\\"token operator\\">+</span> subject2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Demo</span> demo <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Demo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAge</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">23</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setId</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">14000001</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setName</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"楚子航\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"ID: \\"</span> <span class=\\"token operator\\">+</span> demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getId</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"Age: \\"</span> <span class=\\"token operator\\">+</span> demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAge</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"Name: \\"</span> <span class=\\"token operator\\">+</span> demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"主修科目： \\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        demo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">study</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"学院：\\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token class-name\\">Demo</span><span class=\\"token punctuation\\">.</span>school<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"等级：\\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token class-name\\">Demo</span><span class=\\"token punctuation\\">.</span>level<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}');export{n as data};
