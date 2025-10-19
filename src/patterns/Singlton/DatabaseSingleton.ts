class DatabaseSingleton {
   private static instance: DatabaseSingleton;
   private connection : string;

   private constructor() {
     // simulate DB connection
     this.connection = "Database connected at " + new Date().toLocaleDateString();
   }

   // Method to get the singleton instance
   public static getInstance(): DatabaseSingleton {
    if(!DatabaseSingleton.instance){
        DatabaseSingleton.instance = new DatabaseSingleton();
    }
    return DatabaseSingleton.instance; 
   }

   public getConnection(): string {
    return this.connection;
   }

}

export default DatabaseSingleton;