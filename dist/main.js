!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);function a(t){Object(r.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},function(t,e,n){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(2),a=n(1),i=n(0);function o(t,e){Object(i.a)(2,arguments);var n=Object(a.a)(t).getTime(),o=Object(r.a)(e);return new Date(n+o)}},function(t,e,n){const r=n(6),a=n(7),i=n(8),o=new Date,u=t=>0===Math.round(t),c=t=>t>=.49&&t<=.51,s=t=>{const{phase:e}=r.getMoonIllumination(t);return e};t.exports={moonPhases:()=>{const t=[];for(let e=0;e<44640;e++){const n=a(o,e),r=s(n);(u(r)||c(r))&&t.push({phase:r,date:i(n,"yyyy-MM-dd HH:mm",{timeZone:"Europe/Moscow"})})}const e=t.reduce((t,e)=>t.phase<e.phase&&u(t.phase)?t:e),n=t.filter(t=>c(t.phase)).reduce((t,e)=>t.phase>e.phase?t:e);return{currentPhase:s(o),new:e.date,full:n.date}}}},function(t,e,n){"use strict";n.r(e);var r=n(4);Object(r.moonPhases)()},function(t,e,n){!function(){"use strict";var e=Math.PI,n=Math.sin,r=Math.cos,a=Math.tan,i=Math.asin,o=Math.atan2,u=Math.acos,c=e/180;function s(t){return new Date(864e5*(t+.5-2440588))}function d(t){return function(t){return t.valueOf()/864e5-.5+2440588}(t)-2451545}var f=23.4397*c;function l(t,e){return o(n(t)*r(f)-a(e)*n(f),r(t))}function h(t,e){return i(n(e)*r(f)+r(e)*n(f)*n(t))}function m(t,e,i){return o(n(t),r(t)*n(e)-a(i)*r(e))}function g(t,e,a){return i(n(e)*n(a)+r(e)*r(a)*r(t))}function w(t,e){return c*(280.16+360.9856235*t)-e}function b(t){return c*(357.5291+.98560028*t)}function v(t){return t+c*(1.9148*n(t)+.02*n(2*t)+3e-4*n(3*t))+102.9372*c+e}function y(t){var e=v(b(t));return{dec:h(e,0),ra:l(e,0)}}var p={getPosition:function(t,e,n){var r=c*-n,a=c*e,i=d(t),o=y(i),u=w(i,r)-o.ra;return{azimuth:m(u,a,o.dec),altitude:g(u,a,o.dec)}}},M=p.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];p.addTime=function(t,e,n){M.push([t,e,n])};function T(t,n,r){return 9e-4+(t+n)/(2*e)+r}function O(t,e,r){return 2451545+t+.0053*n(e)-.0069*n(2*r)}function C(t,e,a,i,o,c,s){return O(T(function(t,e,a){return u((n(t)-n(e)*n(a))/(r(e)*r(a)))}(t,a,i),e,o),c,s)}function P(t){var e=c*(134.963+13.064993*t),a=c*(93.272+13.22935*t),i=c*(218.316+13.176396*t)+6.289*c*n(e),o=5.128*c*n(a),u=385001-20905*r(e);return{ra:l(i,o),dec:h(i,o),dist:u}}function x(t,e){return new Date(t.valueOf()+864e5*e/24)}p.getTimes=function(t,n,r){var a,i,o,u,f,l=c*-r,m=c*n,g=function(t,n){return Math.round(t-9e-4-n/(2*e))}(d(t),l),w=T(0,l,g),y=b(w),p=v(y),P=h(p,0),x=O(w,y,p),D={solarNoon:s(x),nadir:s(x-.5)};for(a=0,i=M.length;a<i;a+=1)f=x-((u=C((o=M[a])[0]*c,l,m,P,g,y,p))-x),D[o[1]]=s(f),D[o[2]]=s(u);return D},p.getMoonPosition=function(t,e,i){var u=c*-i,s=c*e,f=d(t),l=P(f),h=w(f,u)-l.ra,b=g(h,s,l.dec),v=o(n(h),a(s)*r(l.dec)-n(l.dec)*r(h));return b+=function(t){return t<0&&(t=0),2967e-7/Math.tan(t+.00312536/(t+.08901179))}(b),{azimuth:m(h,s,l.dec),altitude:b,distance:l.dist,parallacticAngle:v}},p.getMoonIllumination=function(t){var e=d(t||new Date),a=y(e),i=P(e),c=u(n(a.dec)*n(i.dec)+r(a.dec)*r(i.dec)*r(a.ra-i.ra)),s=o(149598e3*n(c),i.dist-149598e3*r(c)),f=o(r(a.dec)*n(a.ra-i.ra),n(a.dec)*r(i.dec)-r(a.dec)*n(i.dec)*r(a.ra-i.ra));return{fraction:(1+r(s))/2,phase:.5+.5*s*(f<0?-1:1)/Math.PI,angle:f}},p.getMoonTimes=function(t,e,n,r){var a=new Date(t);r?a.setUTCHours(0,0,0,0):a.setHours(0,0,0,0);for(var i,o,u,s,d,f,l,h,m,g,w,b,v,y=.133*c,M=p.getMoonPosition(a,e,n).altitude-y,T=1;T<=24&&(i=p.getMoonPosition(x(a,T),e,n).altitude-y,h=((d=(M+(o=p.getMoonPosition(x(a,T+1),e,n).altitude-y))/2-i)*(l=-(f=(o-M)/2)/(2*d))+f)*l+i,g=0,(m=f*f-4*d*i)>=0&&(w=l-(v=Math.sqrt(m)/(2*Math.abs(d))),b=l+v,Math.abs(w)<=1&&g++,Math.abs(b)<=1&&g++,w<-1&&(w=b)),1===g?M<0?u=T+w:s=T+w:2===g&&(u=T+(h<0?b:w),s=T+(h<0?w:b)),!u||!s);T+=2)M=o;var O={};return u&&(O.rise=x(a,u)),s&&(O.set=x(a,s)),u||s||(O[h>0?"alwaysUp":"alwaysDown"]=!0),O},t.exports=p}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(2),a=n(3),i=n(0);function o(t,e){Object(i.a)(2,arguments);var n=Object(r.a)(e);return Object(a.a)(t,6e4*n)}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return V}));var r=n(1),a=n(0);function i(t){Object(a.a)(1,arguments);var e=Object(r.a)(t);return!isNaN(e)}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var c={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function f(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var c,s=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(s)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(s)})),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(s.length)}}}var l,h={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof o[t]?o[t]:1===e?o[t].one:o[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(t,e,n,r){return s[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(l.matchPattern);if(!a)return null;var i=a[0],o=n.match(l.parsePattern);if(!o)return null;var u=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:f({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:f({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},m=n(2),g=n(3);function w(t,e){Object(a.a)(2,arguments);var n=Object(m.a)(e);return Object(g.a)(t,-n)}function b(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var v={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):b(n+1,2)},d:function(t,e){return b(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return b(t.getUTCHours()%12||12,e.length)},H:function(t,e){return b(t.getUTCHours(),e.length)},m:function(t,e){return b(t.getUTCMinutes(),e.length)},s:function(t,e){return b(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),e.length)}};function y(t){Object(a.a)(1,arguments);var e=1,n=Object(r.a)(t),i=n.getUTCDay(),o=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function p(t){Object(a.a)(1,arguments);var e=Object(r.a)(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=y(i),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var c=y(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function M(t){Object(a.a)(1,arguments);var e=p(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=y(n);return r}function T(t,e){Object(a.a)(1,arguments);var n=e||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:Object(m.a)(o),c=null==n.weekStartsOn?u:Object(m.a)(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=Object(r.a)(t),d=s.getUTCDay(),f=(d<c?7:0)+d-c;return s.setUTCDate(s.getUTCDate()-f),s.setUTCHours(0,0,0,0),s}function O(t,e){Object(a.a)(1,arguments);var n=Object(r.a)(t,e),i=n.getUTCFullYear(),o=e||{},u=o.locale,c=u&&u.options&&u.options.firstWeekContainsDate,s=null==c?1:Object(m.a)(c),d=null==o.firstWeekContainsDate?s:Object(m.a)(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(i+1,0,d),f.setUTCHours(0,0,0,0);var l=T(f,e),h=new Date(0);h.setUTCFullYear(i,0,d),h.setUTCHours(0,0,0,0);var g=T(h,e);return n.getTime()>=l.getTime()?i+1:n.getTime()>=g.getTime()?i:i-1}function C(t,e){Object(a.a)(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:Object(m.a)(i),u=null==n.firstWeekContainsDate?o:Object(m.a)(n.firstWeekContainsDate),c=O(t,e),s=new Date(0);s.setUTCFullYear(c,0,u),s.setUTCHours(0,0,0,0);var d=T(s,e);return d}var P="midnight",x="noon",D="morning",j="afternoon",S="evening",U="night";function k(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+b(i,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+b(Math.abs(t)/60,2):E(t,e)}function E(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}var Y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v.y(t,e)},Y:function(t,e,n,r){var a=O(t,r),i=a>0?a:1-a;return"YY"===e?b(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):b(i,e.length)},R:function(t,e){return b(p(t),e.length)},u:function(t,e){return b(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){var o=function(t,e){Object(a.a)(1,arguments);var n=Object(r.a)(t),i=T(n,e).getTime()-C(n,e).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):b(o,e.length)},I:function(t,e,n){var i=function(t){Object(a.a)(1,arguments);var e=Object(r.a)(t),n=y(e).getTime()-M(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(i,{unit:"week"}):b(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v.d(t,e)},D:function(t,e,n){var i=function(t){Object(a.a)(1,arguments);var e=Object(r.a)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=n-i;return Math.floor(o/864e5)+1}(t);return"Do"===e?n.ordinalNumber(i,{unit:"dayOfYear"}):b(i,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return b(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return b(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return b(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?x:0===a?P:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?S:a>=12?j:a>=4?D:U,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v.s(t,e)},S:function(t,e){return v.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return E(a);case"XXXXX":case"XXX":default:return E(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return E(a);case"xxxxx":case"xxx":default:return E(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+k(a,":");case"OOOO":default:return"GMT"+E(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+k(a,":");case"zzzz":default:return"GMT"+E(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return b(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return b((r._originalDate||t).getTime(),e.length)}};function N(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function q(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var H={p:q,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return N(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",N(a,e)).replace("{{time}}",q(i,e))}};function z(t){return t.getTime()%6e4}function X(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+z(e))%6e4:z(e))}var F=["D","DD"],L=["YY","YYYY"];function Q(t){return-1!==F.indexOf(t)}function G(t){return-1!==L.indexOf(t)}function B(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,I=/''/g,J=/[a-zA-Z]/;function V(t,e,n){Object(a.a)(2,arguments);var o=String(e),u=n||{},c=u.locale||h,s=c.options&&c.options.firstWeekContainsDate,d=null==s?1:Object(m.a)(s),f=null==u.firstWeekContainsDate?d:Object(m.a)(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=c.options&&c.options.weekStartsOn,g=null==l?0:Object(m.a)(l),b=null==u.weekStartsOn?g:Object(m.a)(u.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var v=Object(r.a)(t);if(!i(v))throw new RangeError("Invalid time value");var y=X(v),p=w(v,y),M={firstWeekContainsDate:f,weekStartsOn:b,locale:c,_originalDate:v},T=o.match(R).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,c.formatLong,M):t})).join("").match(A).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var a=Y[r];if(a)return!u.useAdditionalWeekYearTokens&&G(n)&&B(n,e,t),!u.useAdditionalDayOfYearTokens&&Q(n)&&B(n,e,t),a(p,n,c.localize,M);if(r.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function K(t){return t.match(_)[1].replace(I,"'")}}]);