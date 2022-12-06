

document.getElementById("part1Checkbox").addEventListener("click", function(){
    if (document.getElementById("part1Checkbox").checked==true){
        document.getElementById("part2").classList.remove('closed');
    }
    if (document.getElementById("part1Checkbox").checked==false){
        document.getElementById("part2").classList.add("closed");
    }
})

document.getElementById("repeat").addEventListener("click", function(){
    var message1content = document.querySelector('#message1').value;
    console.log(message1content);
    if (document.getElementById("repeat").checked == true){
        document.getElementById("message2").innerHTML = message1content.toUpperCase();
    }
    if (document.getElementById('repeat').checked == false){
        document.getElementById("message2").innerHTML = "";
    }
})


var brokenimage = document.getElementsByTagName("img")[4];
var firstimagesrc = document.getElementsByTagName("img")[0].getAttribute("src");
brokenimage.addEventListener("mouseover", function(){
    console.log("hovered");
    brokenimage.setAttribute("src", firstimagesrc);
})


document.getElementsByTagName("img").forEach(item =>{
    item.setAttribute("tabindex", '0');
})


brokenimage.addEventListener("keydown", function(){
    console.log("hovered");
    brokenimage.setAttribute("src", firstimagesrc);
})