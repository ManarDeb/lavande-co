(function(){
var WA='21658049848';
var $=function(id){return document.getElementById(id)};
var nav=$('nav'),menu=$('menu');
menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
function update(){
var v=function(id){return $(id).value.trim()};
var l=['Bonjour Lavande & Co,','Je voudrais commander une box '+v('box-select')+'.'];
if(v('name'))l.push('Prénom : '+v('name'));
if(v('occasion'))l.push('Occasion : '+v('occasion'));
if(v('card'))l.push('Message sur la carte : '+v('card'));
$('send').href='https://wa.me/'+WA+'?text='+encodeURIComponent(l.join('\n'));
}
['name','box-select','occasion','card'].forEach(function(id){$(id).addEventListener('input',update);$(id).addEventListener('change',update)});
document.querySelectorAll('[data-box]').forEach(function(b){b.addEventListener('click',function(){$('box-select').value=b.getAttribute('data-box');update();$('commander').scrollIntoView()})});
update();
})();
