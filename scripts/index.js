window.onload = function(){
  var el, data = {length:0},dict = [],
      sence = document.getElementById('sence'),
      huase = ['ac','ad','ah','as'],
      guize = {1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
  while( data.length !== 52){
    var t1  = huase[Math.floor(Math.random()*4)];
    var t2  = 1 + Math.floor(Math.random()*13);
    var id = t1 + ':' + t2;
    if( !data[id] ){
      data[id] = true;
      data.length += 1; dict.push(id);
    }
  }
  for ( i = 0;  i < 53;  i++){
    if(i == 28){
      el = document.createElement('div');
      el.setAttribute('class','clear');
      sence.appendChild(el);
      continue;
    }
    el = document.createElement('div');
    el.setAttribute('class','puke');
    var str = (i>28)?dict[i-1]:dict[i];
    el.innerHTML = guize[str.split(':')[1]];
    el.setAttribute('data',str.split(':')[1]);
    el.style.background = 'url(./images/western_'+str.split(':')[0]+'.png)';
    if( str.split(':')[0] == 'ad' || str.split(':')[0] == 'ah'){
      el.style.color = 'rgb(133,21,20)';
    }
    if(i>28){
      el.style.position = 'absolute';
      el.style.top = '1800px';
      el.style.left = '30px';
    }
    sence.appendChild(el);
  }
  var compare = [false,false];
  var xiaochu  = function(){
    if(compare[0] && compare[1] && compare[0].n + compare[1].n == 13){
      sence.removeChild(compare[0].d);
      sence.removeChild(compare[1].d);
      compare = [false,false];
      return true;
    }
    return false;
  };

  var tmp;
  sence.onclick = function(e){
    if(e.target == this){return;}
    el = e.target;
    var dd = Number(el.getAttribute('data'));
    if(dd == 13){
      sence.removeChild(el);return;
    }
    if(!compare[0] && !compare[1]){
      compare[0] = {};
      compare[0].n = dd;
      compare[0].d = el;
      el.style.boxShadow = '0 0 10px black';
      tmp  = el;
    }else{
      compare[1] = {};
      compare[1].n = dd;
      compare[1].d = el;
      if( !xiaochu() ){
        compare[0].d.style.boxShadow = 'none';
        compare[1].d.style.boxShadow = 'none';
        compare = [false,false];
      };
    }
    console.log(compare);
  };
};
