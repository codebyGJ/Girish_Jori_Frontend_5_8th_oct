

/*document.addEventListener("DOMContentLoaded", () => {
    let clickedImages = 0;
    let totalDiceValue = 0;

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const image4 = document.getElementById("image4");
    const form = document.getElementById("registration-form");
    const message = document.getElementById("message");
    const name= document.getElementById("name"); 
    const username=document.getElementById("username");   

    image1.addEventListener("click", () => {
        
   
        form.style.display = "block";
        image1.style.pointerEvents = "none";  
        message.innerText = "Fill your Details ";
        clickedImages++;
    });

 

    image2.addEventListener("click", () => {
        if (clickedImages < 1 ) {
            message.innerText = "Complete step 1.";
        }
        else if(name.value==="" || username.value===""){
            message.innerText="Please Submit your details."
        }
        else {
            
            message.innerText = `Name: ${name.value}, Username: ${username.value}  ------------ Try your luck!!! `;
            image2.style.pointerEvents = "none"; 
            clickedImages++;
        }
    });

    image3.addEventListener("click", () => {
        if (clickedImages < 2) {
            message.innerText = "Complete Step 2.";
        } else if (clickedImages < 5) {
            
            const diceValue = Math.floor(Math.random() * 6) + 1;
            totalDiceValue += diceValue;
            message.innerText = `Dice Rolled: ${diceValue}, Your Score: ${totalDiceValue}`;
            clickedImages++;
            
            if (clickedImages === 5 && totalDiceValue > 10) {
                image4.style.pointerEvents = "auto"; 
            }
        } else {
            message.innerText = "Limits Excedded.";
        }
    });

    image4.addEventListener("click", () => {
        if (clickedImages < 5) {
            message.innerText = " Complete steps 3.";
        } else {
            
            const couponCode = generateCouponCode();
            message.innerText = `Coupon Code: ${couponCode}`;
            image4.style.pointerEvents = "none"; 
        }
    });

    function generateCouponCode() {
        
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    }
});*/
///////////////////////////////////Other project data delete it later /////////////////////////////////////////////////////
function Vehicle(vehicleType) {
    this.vehicleType = vehicleType;
}
Vehicle.prototype.blowhorn = function(){
    console.log('Peep! Peep!');
}


//Bus
function Bus(make){
Vehicle.call(this , 'Bus');
this.make = make;
}
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.noOfWheels = 6;
Bus.prototype.accelerateBus = function(){
    console.log('Accelerating Bus!!');
}
Bus.prototype.brakeBus = function(){
    console.log('braking Bus!!');
}

//Car
function Car(make){
    Vehicle.call(this , 'Car');
    this.make = make;
    }
    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.noOfWheels = 4;
    Car.prototype.accelerateCar = function(){
        console.log('Accelerating Car!!');
    }
    Car.prototype.brakeCar = function(){
        console.log('braking Car!!');
    }

    //Bike
    function Bike(make){
        Vehicle.call(this , 'Bike');
        this.make = make;
        }
        Bike.prototype = Object.create(Vehicle.prototype);
        Bike.prototype.noOfWheels = 2;
        Bike.prototype.accelerateBike = function(){
            console.log('Accelerating Bike!!');
        }
        Bike.prototype.brakeBike = function(){
            console.log('braking Bike!!');
        }

        const myCar = new Car('Audi');
        console.log(myCar);




