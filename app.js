var b1, b2, b3, b4, b5, b6, b7, b8, b9, counter = 0;
var arr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];


function childCreation() {

    var a1 = document.createElement("div");
    a1.setAttribute("id", "first");
    a1.setAttribute("onClick", "play(id)");
    var b1 = document.getElementById("parent");
    b1.appendChild(a1);

    var a2 = document.createElement("div");
    a2.setAttribute("id", "second");
    a2.setAttribute("onClick", "play('second')");
    b1.appendChild(a2);

    var a3 = document.createElement("div");
    a3.setAttribute("id", "third");
    a3.setAttribute("onClick", "play('third')");
    b1.appendChild(a3);

    var a4 = document.createElement("div");
    a4.setAttribute("id", "fourth");
    a4.setAttribute("onClick", "play('fourth')");
    b1.appendChild(a4);

    var a5 = document.createElement("div");
    a5.setAttribute("id", "fifth");
    a5.setAttribute("onClick", "play('fifth')");
    b1.appendChild(a5);


    var a6 = document.createElement("div");
    a6.setAttribute("id", "sixth");
    a6.setAttribute("onClick", "play('sixth')");
    b1.appendChild(a6);


    var a7 = document.createElement("div");
    a7.setAttribute("id", "seventh");
    a7.setAttribute("onClick", "play('seventh')");
    b1.appendChild(a7);


    var a8 = document.createElement("div");
    a8.setAttribute("id", "eigth");
    a8.setAttribute("onClick", "play('eigth')");
    b1.appendChild(a8);


    var a9 = document.createElement("div");
    a9.setAttribute("id", "ninth");
    a9.setAttribute("onClick", "play('ninth')");
    b1.appendChild(a9);

}


function play(id) {
    document.getElementById(id).innerHTML = arr[counter];
    counter++;

    b1 = document.getElementById('first').innerHTML;
    b2 = document.getElementById('second').innerHTML;
    b3 = document.getElementById('third').innerHTML;
    b4 = document.getElementById('fourth').innerHTML;
    b5 = document.getElementById('fifth').innerHTML;
    b6 = document.getElementById('sixth').innerHTML;
    b7 = document.getElementById('seventh').innerHTML;
    b8 = document.getElementById('eigth').innerHTML;
    b9 = document.getElementById('ninth').innerHTML;

    if ((b1 == 'X' && b4 == 'X' && b7 == 'X') ||
        (b1 == 'X' && b5 == 'X' && b9 == 'X') ||
        (b1 == 'X' && b2 == 'X' && b3 == 'X') ||
        (b2 == 'X' && b5 == 'X' && b8 == 'X') ||
        (b3 == 'X' && b6 == 'X' && b9 == 'X') ||
        (b4 == 'X' && b5 == 'X' && b6 == 'X') ||
        (b7 == 'X' && b8 == 'X' && b9 == 'X')) {
        document.getElementById("message").innerHTML = "Player1 won!";
        toggleModal();
    }
    else if ((b1 == 'O' && b4 == 'O' && b7 == 'O') ||
        (b1 == 'O' && b5 == 'O' && b9 == 'O') ||
        (b1 == 'O' && b2 == 'O' && b3 == 'O') ||
        (b2 == 'O' && b5 == 'O' && b8 == 'O') ||
        (b3 == 'O' && b6 == 'O' && b9 == 'O') ||
        (b4 == 'O' && b5 == 'O' && b6 == 'O') ||
        (b7 == 'O' && b8 == 'O' && b9 == 'O')) {
        document.getElementById("message").innerHTML = "Player2 won!";
        toggleModal();


    }


}





function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        location.reload();
    }
}


