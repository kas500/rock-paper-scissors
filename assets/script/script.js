var rock = {
    source: "./assets/images/rock.png",
    index: 1
}

var paper = {
    source: "./assets/images/paper.png",
    index: 2
}

var scissors = {
    source: "./assets/images/scissors.png",
    index: 2
}

var statistic = {
    win: 0,
    lost: 0,
    tie: 0
}

var hands_array = [rock, paper, scissors];
var results_array = ["You win!", "You lost!", "Tie"];

function round(element){
    document.querySelector('p').textContent = "";
    document.getElementById("battle_your").src = element.src;
    var your_selection_index = element.getAttribute("value");
    comp_selection_index = Math.floor(Math.random()*hands_array.length);
    document.getElementById("battle_comp").src = hands_array[comp_selection_index].source;
    document.getElementById("show_statistics").style.setProperty("visibility", "visible");
    if(your_selection_index>comp_selection_index){
        console.log(document.querySelector('p').textContent);
    }

    if(your_selection_index==comp_selection_index){
        statistic.tie++;
        document.querySelector('p').textContent = results_array[2];
    }
    else if(your_selection_index==0 && comp_selection_index==1){
        statistic.lost++;
        document.querySelector('p').textContent = results_array[1];
    }  
    else if(your_selection_index==0 && comp_selection_index==2){
        statistic.win++;
        document.querySelector('p').textContent = results_array[0];
    }
    else if(your_selection_index==1 && comp_selection_index==0){
        document.querySelector('p').textContent = results_array[0];
        statistic.win++;
    }
    else if(your_selection_index==1 && comp_selection_index==2){
        document.querySelector('p').textContent = results_array[1];
        statistic.lost++;
    }
    else if(your_selection_index==2 && comp_selection_index==0){
        console.log(results_array[1]);
        statistic.lost++;
        document.querySelector('p').textContent = results_array[1];
    }
    else if(your_selection_index==2 && comp_selection_index==1){
        console.log(results_array[0]);
        statistic.win++;
        document.querySelector('p').textContent = results_array[0];
    }
}

function statistics(){
    alert("Win: "+statistic.win +"\nLost: "+statistic.lost+"\nTie: "+statistic.tie);
}

function reset(){
    window.location.reload();
}

