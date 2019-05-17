
var a;
var l;
var li;
var btn;
var btnText;
var btn1;
var btn1Text;
function add()
{
    
   
     a=document.getElementById("val");
     l=document.getElementById("list");
     li=document.createElement("LI");
     btn=document.createElement("Button");
     btn1=document.createElement("Button");
     btnText=document.createTextNode("Delete");
     btn1Text=document.createTextNode("Edit");
     var icon = document.createElement("icon");
    //  btn1.appendChild(btn1Text);
  
   
    btn.setAttribute("class", "del");
    btn1.setAttribute("class", "edit");
    btn.innerHTML='<i class="material-icons" id="icon-dlt">delete</i>';
    btn1.innerHTML='<i class="material-icons" id="icon-edit">edit</i>';
    btn.onclick=function () {
        var li=this.parentNode;
        var ul=li.parentNode;
        swal("Remove item!", "list removed from Todo", "warning");
        ul.removeChild(li);
        
      }
      btn1.onclick=function(){
          var edit=prompt("What you want to edit");
          var li=this.parentNode;
          var ul=li.parentNode;
          
       console.log (  li.innerHTML=edit);
       
    li.appendChild(btn);
    li.appendChild(btn1);
    list.appendChild(li);
            
          
           
    //  var edittxt=document.createTextNode(edit.value);
    //    listtext.appendChild(edittxt);

      }
    var text=document.createTextNode(val.value);
    if(val.value==="")
    {
        swal("Empty list!", "Please insert something", "info");
    }
    else{
        swal("Done!", "Added in your Todo!", "success");
    li.appendChild(text);
    li.appendChild(btn);
    li.appendChild(btn1);
    list.appendChild(li);
    val.value="";
}
}
function del()
{
var b=document.getElementById("list");
alert("Are you sure?");
b.innerHTML="";

}
