function expandable(intIndex,boolDoExpand) {
    var dd = document.getElementsByClassName("dd");
    var expanded = document.getElementsByClassName("expanded");
    var unexpanded = document.getElementsByClassName("unexpanded");

    //collapses everything
    for (let i = 0; i < dd.length;i++){
        expanded[i].style.display = "none";
        unexpanded[i].style.display = "block";
        dd[i].style.display = "none";
    }

    //clicked dd expands if needed
    if(boolDoExpand){
        expanded[intIndex].style.display = "block";
        unexpanded[intIndex].style.display = "none";
        dd[intIndex].style.display = "block";
    }
}

function propGUIinitiate(){
    //opens first dd on load
    expandable(0,true);

    const expanded = document.getElementsByClassName("expanded");
    const unexpanded = document.getElementsByClassName("unexpanded");
    
    for (let i = 0; i < expanded.length; i++) {
        expanded[i].addEventListener("click", function () { expandable(i, false) });
        unexpanded[i].addEventListener("click", function () { expandable(i, true) });
    }
    console.log("initiated");
}




export default propGUIinitiate;
//export {expandable};