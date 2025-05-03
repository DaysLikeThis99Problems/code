const express=require('express');
const app=express();
const {MongoClient,ServerApiVersion}=require('mongodb')
const PORT=5000;
//Password: KeNtcQxXY3lj0ZCr
//username: poshiyasoham2765
//Password of Cluster0: 8WBGP0EawhwBsr5P
//mongodb url: mongodb+srv://poshiyasoham2765:KeNtcQxXY3lj0ZCr@learning-db-cluster.r1lhk.mongodb.net/studentDB
//mongodb+srv://poshiyasoham2765:<db_password>@cluster0.dw2sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//connect to mongodb
//1. Create the client
const client =new MongoClient("mongodb+srv://poshiyasoham2765:Soham123@cluster0.dw2sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    },
});

//function to connect
const connectDB=async()=>{
    try{
        await client.connect();
        console.log("MongoDB Connected successfully");
        //1. Database name(school);
        const database=client.db('100ham');
        //2. Collections (books)
        const students=database.collection('students');

        //---Write operations----//
        //1.insertOne()
        // const result=await students.insertOne({
        //     name: "Agnes",
        //     age: 20,
        //     subjects:["Math","Physics"],
        // });
        //2.insertMany()
        // const result=await students.insertOne([]
        // {
        //     name: "John",
        //     age: 20,
        //     subjects:["Math","English"],
        // },{
        //     name: "Doe",
        //    age: 22,
        //    subjects:["Physics","English"],
        // }
        // ]);

        //----Read operations----//
        //Find()
            // const resultCursor=students.find();
            // const results=await resultCursor.toArray();
        //findOne()
            //const result=await students.findOne({name:'Agnes'});

        //!----UPDATE OPERATIONS----
    //! updateOne()
    // const result = await students.updateOne(
    //   { name: "Agnes" },
    //   { $set: { name: "Alice" } }
    // );
    // console.log(result);

    //! updateMany()
    // const result = await students.updateMany(
    //   { grade: "B" },
    //   { $set: { pass: true } }
    // );

    //! findOneAndUpdate()
    // const result = await students.findOneAndUpdate(
    //   { name: "Emmanuel" },
    //   { $set: { name: "Emmanuel2" } }
    // );
    // console.log(result);

    //!----DELETE OPERATIONS----
    //! deleteOne()
    // const result = await students.deleteOne({
    //   name: "Emmanuel2",
    // });
    // console.log(result);
    //! deleteMany()
    // const result = await students.deleteMany({
    //   grade: "B",
    // });
    // console.log(result);
    //! findOneAndDelete()
    // const result = await students.findOneAndDelete({
    //   name: "Prince",
    // });
    // console.log(result);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
//Run the function
connectDB();

//start the server
app.listen(PORT,()=>console.log('Server is running on port:'+PORT));