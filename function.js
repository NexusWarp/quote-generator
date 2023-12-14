function clickbtn(){

    let quotes =["Believe you can, and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",

    "Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill",
    
    "The only way to do great work is to love what you do. - Steve Jobs",
    
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown"]

    // let btn = document.getElementById('btn');
    let text= document.getElementById("quote");
    const minNumber = 1; 
    const maxNumber = 10; 

    let randomNumber = minNumber + (maxNumber-minNumber)*Math.random();
    let randomNumber1 = Math.floor(randomNumber);
   
    text.innerText = quotes[randomNumber1];
}