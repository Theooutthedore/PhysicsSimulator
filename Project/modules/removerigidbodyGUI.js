function removeRigidbodyGUI() {
    const removeRB = document.getElementsByClassName("remove");
    
    //disallow deleting first object for now
    removeRB[0].style.display = "none";
    
    //adding event listeners for all remove rigidbody buttons
    for(let i=0;i<removeRB.length;i++){
        removeRB[i].addEventListener("click", function () { onclick(i) });
    }
}

function onclick(intIndex){
    var expandable = document.getElementsByClassName("expandable");
    var newRBc = document.getElementById("newRBc");

    expandable[intIndex].style.display = "none";
    newRBc.style.display = "block";
}

export default removeRigidbodyGUI;