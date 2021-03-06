---
layout: page
title: "JavaScript aggregation_info function"
comments: true
sharing: true
footer: true
alias:
- /functions/view/aggregation_info:799
- /functions/view/aggregation_info
- /functions/view/799
- /functions/aggregation_info:799
- /functions/799
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's aggregation_info

{% codeblock objaggregation/aggregation_info.js lang:js https://raw.github.com/kvz/phpjs/master/functions/objaggregation/aggregation_info.js raw on github %}
function aggregation_info (obj) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // -    depends on: aggregate_info
  // *     example 1: var A = function () {};
  // *     example 1: A.prop = 5;
  // *     example 1: A.prototype.someMethod = function () {};
  // *     example 1: var b = {};
  // *     example 1: aggregate(b, 'A');
  // *     example 1: aggregation_info(b);
  // *     returns 1: {'A':{methods:['someMethod'], properties:['prop']}}

  return this.aggregate_info(obj);
}
{% endcodeblock %}

 - [view on github](https://github.com/kvz/phpjs/blob/master/functions/objaggregation/aggregation_info.js)
 - [edit on github](https://github.com/kvz/phpjs/edit/master/functions/objaggregation/aggregation_info.js)

### Example 1
This code
{% codeblock lang:js example %}
var A = function () {};
A.prop = 5;
A.prototype.someMethod = function () {};
var b = {};
aggregate(b, 'A');
aggregation_info(b);
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
{'A':{methods:['someMethod'], properties:['prop']}}
{% endcodeblock %}


### Other PHP functions in the objaggregation extension
{% render_partial _includes/custom/objaggregation.html %}
