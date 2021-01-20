const mongoose= require ('mongoose')

mongoose.connect('mongodb+srv://matiasgomez:34921901mfg@cluster0.torgr.mongodb.net/mytinerary?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=> console.log("database connected"))
.catch(error=> console.log(error))