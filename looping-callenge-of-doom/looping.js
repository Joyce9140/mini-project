// Loop 1
document.write('<div class="head">Loop 1</div>')
for (i=0; i<5; i++){
    document.write('<p class="info">Everything can fly!</p>')
}

// Loop2
document.write('<div class="head">Loop 2</div>')
for(i=0; i<5; i++){
    document.write(i)
    document.write("<br>")
}

// Loop 3 
document.write('<div class="head">Loop 3</div>')
for(i=15; i<33; i = i+3){
    document.write(i)
    document.write("<br>")
}

// Loop 4
document.write('<div class="head">Loop 4</div>')
for (i=0; i<4; i++){
    for (j=0; j<4; j++){
        document.write("O")
    }
    document.write("O")
    document.write("<br>")
}

//Loop 5
document.write('<div class="head">Loop 5</div>')
for (i=1; i<=7; i++){
    for (j=1; j<=i;j++){
        document.write("E")
    }
    document.write("<br>")
}

// Loop 6
document.write('<div class="head">Loop 6</div>')
for (i=1; i<=7; i++){
    for (j=7; j>i;j--){
        document.write("~")
    }
    for (j=1; j<=i;j++){
        document.write("E ")
    }
    document.write("<br>")
}

// Loop 7 
document.write('<div class="head">Loop 7</div>')
for (i=1; i<=7; i++){
    for (j=1; j<=i;j++){
        for(k=2; k<=j; k++){
            document.write("E")
        }
        document.write("E")
        document.write("<br>")
    }
    document.write("<br>")
}

