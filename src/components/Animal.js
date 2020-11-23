export class Animal{
    constructor(name,age,color,liveLoaction){
        this.name= name
        this.age = age
        this.color = color
        this.liveLoaction = liveLoaction
    }



    getinfo(){
        console.log(`Aimal Info`);
        console.log(`Name ${this.name}`);
        console.log(`Age ${this.age}`);
        console.log(`Color ${this.color}`);
        console.log(`Loaction ${this.liveLocation}`);

    }
}

