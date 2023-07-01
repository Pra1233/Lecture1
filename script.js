const post=[
    {title:'post1',createdAt:new Date().getTime()},
    {title:'post2',body:'Tis is post2,',createdAt: new Date().getTime()}
];
let intervalid=0;

function getpost(){
    clearInterval(intervalid);
   intervalid= setTimeout(()=>{
  let output='';
  post.forEach((p)=>{
    output+=`<h1>${p.title}--lastupdated${(new Date().getTime()-p.createdAt)/1000} sec</h1>` 
  });
  document.body.innerHTML=output;
  
    },1000)
}

function createpost(t,callback){
    setTimeout(()=>{
    post.push({...t,createdAt:new Date().getTime()});
    callback();
    },2000);
}

function create4post(p,callback){
    setTimeout(()=>{
post.push({...p,createdAt:new Date().getTime()});//we are also pushing date
callback();
    },6000);
}
// getpost();
createpost({title:'post3',body:'this4'},getpost);
create4post({title:'Post 4',body:'this is post 4'},getpost);
