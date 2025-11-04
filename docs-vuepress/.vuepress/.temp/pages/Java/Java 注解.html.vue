<template><div><h2 id="java注解" tabindex="-1"><a class="header-anchor" href="#java注解"><span>Java注解</span></a></h2>
<table>
<thead>
<tr>
<th>注解名</th>
<th>作用</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Override</td>
<td>用来重写父类中的定义的方法</td>
<td>Static 和 private 里面的方法不能被重写</td>
</tr>
<tr>
<td>@RequestParam</td>
<td>集合方式请求参数名与集合变量名相同</td>
<td>通过 @RequestParam 绑定集合关系</td>
</tr>
<tr>
<td>@PathVariable</td>
<td>路径参数标注</td>
<td>@RequestMapping(&quot;/path/{id}&quot;)<br/>public String path(@PathVariable Integer id) {<br/>    System.<em>out</em>.println(id);<br/>    return &quot;ok&quot;;<br/>}</td>
</tr>
<tr>
<td>@RequestParam</td>
<td>默认值注解</td>
<td>public Result page(<br/>@RequestParam(defaultValue = &quot;1&quot;) Integer page,<br/>@RequestParam(defaultValue = &quot;10&quot;) Integer pageSize)</td>
</tr>
<tr>
<td>@JsonProperty(&quot;uType&quot;)</td>
<td>当定义uId,uName,uType的情况，可以使用这个注解来<br/>指定转义， 否则可能会出现前端传值，但是后端接收不到的情况</td>
<td>//    目前类型  1送养 2寻宠  3溜宠物<br/>@JsonProperty(&quot;uType&quot;)<br/>private String uType;</td>
</tr>
<tr>
<td>@JsonIgnore</td>
<td><a href="https://so.csdn.net/so/search?q=%E5%AE%9E%E4%BD%93%E7%B1%BB&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">实体类</a>字段加@JsonIgnore注解 可以 不返回给前端</td>
<td>@JsonIgnore<br/>private int pageNum;<br/>@JsonIgnore<br/>private int pageSize;</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>注解</th>
<th>支持的类型</th>
<th>支持的请求类型</th>
<th>支持的Content-Type</th>
<th>请求示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>@PathVariable</td>
<td>url</td>
<td>GET</td>
<td>所有</td>
<td id="">/test/</td>
</tr>
<tr>
<td>@RequestParam</td>
<td>url</td>
<td>GET</td>
<td>所有</td>
<td>/test?id=1</td>
</tr>
<tr>
<td>@RequestBody</td>
<td>Body</td>
<td>POST/PUT/DELETE/PATCH</td>
<td>json</td>
<td “id”:1=""></td>
</tr>
</tbody>
</table>
</div></template>


