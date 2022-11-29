const {createApp} = Vue;
createApp({
    data(){
        return{
            newTasks:"",
            error :false ,
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
                ]
        }
    },
    methods:{
        addTask(){
            if(this.newTasks.length < 5 || this.newtasks === '') {
                this.error = true;
            }
            else{
                this.tasks.push({text:this.newTasks});
                this.error = false;
            }
            }
           
           
    }
}).mount("#app")