
import './App.css'

function App() {
    const age: number = 16;

    for(let i:number = 1; i <= age; i++){
            console.log(i);
        }

    if(age >= 18){
        console.log("You are an adult, you are aloud to drink alcohol now. Congrats!");
    } else {
        console.log("You are not an adult, you are not aloud to drink alcohol. Sorry!")
        console.log("You have to wait " + (18 - age) + " years to drink alcohol.");
        console.log("Smoke weed instead! It's better for you :)");
    }

    const score:number = 0;

    if (score !== 0 && !isNaN(score)) {
        console.log("Score is availible: " + score);
    }

    if(score){
        console.log("Score is evaluated as truthy.");
    } else {
        console.log("Score is evaluated as falsy.");
    }

    const username:string = '';
    if(username){
        console.log("Username is available.");
    } else {
        console.log("Username is evaluated as falsy.");
    }

    const isAdmin:boolean = false;
    if(isAdmin){
        console.log("isAdmin is evaluated as truthy.");
    } else {
        console.log("isAdmin is false.");
    }


    const spaceBetween:string = ' ';
    const star:string = '*';
    const  n:number = 5;
    let tree:string = '';
    for(let i:number = 0; i < n; i++){
        tree += spaceBetween.repeat(n - i) + star.repeat(i + 1) + star.repeat(i) +'\n';
    }
    let counter:number = n;
    while(counter > 0){
    tree += spaceBetween.repeat(n) + star + '\n';
    counter--;
}
console.log(tree);


    /*let tree:string = '';
    for (let i:number = 0; i < n; i++) {
        tree += spaceBetween.repeat(n - i - 1) + star.repeat(i + 1) + star.repeat(i) + '\n';
    }

    let counter:number = n;
    while (counter > 0) {
        tree += spaceBetween.repeat(n - 1) + star + '\n';
        counter--;
    }
    console.log(tree);*/





    return (
        <>
            <pre>{tree}</pre>

        </>
    )
}

export default App