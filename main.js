var stundent_list=[];
function submit()
{ var name_1=document.getElementById("name_1").value; 
var name_2=document.getElementById("name_2").value; 
var name_3=document.getElementById("name_3").value; 
var name_4=document.getElementById("name_4").value; 
var name_5=document.getElementById("name_5").value;  
stundent_list.push(name_1);
stundent_list.push(name_2);
stundent_list.push(name_3);
stundent_list.push(name_4);
stundent_list.push(name_5);
console.log(stundent_list);
document.getElementById("display_names").innerHTML=stundent_list;


document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";

}


function sort() { stundent_list.sort(); console.log(stundent_list); document.getElementById("display_names").innerHTML = stundent_list; }

