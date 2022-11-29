const {createApp} = Vue;
createApp({
    data(){
        return{
            newTasks:"",
            error:false,
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
                ]
        }
    },
    methods:{
        addTask(event){
            event.preventDefault();
            if(this.newTasks.lenght < 5 || this.newTasks === "") {
                this.error = true;
            }
            else{
                this.tasks.push({text:this.newTasks});
                this.error = false;
            }
            this.newTasks = "";
            },
            deleteTask(indice){
                this.tasks.splice(indice,1);
            }
           
           
    }
}).mount("#app")