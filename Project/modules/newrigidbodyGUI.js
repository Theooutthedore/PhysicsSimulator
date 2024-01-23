function newRigidbodyGUI(){
    const newRB = document.getElementById("newrigidbody");
    newRB.addEventListener("click", function () { onclick() });
}

function onclick(){
    var expandable = document.getElementsByClassName("expandable");
    var newRBc = document.getElementById("newRBc");
    var dispRB = false;

    //show 1st avalable rigidbody 
    for (let i=0;i<4;i++){
        if (expandable[i].style.display == "none"){
            expandable[i].style.display = "block" ;
            break;
        }
    }

    //are max rigid bodies shown
    for(let i=0;i<4;i++){
        if(expandable[i].style.display == "none") {
            dispRB = true;
        }
    }
    //hide button if max rigidbodies shown
    if(!dispRB){
        newRBc.style.display = "none"
    }
}

export default newRigidbodyGUI;