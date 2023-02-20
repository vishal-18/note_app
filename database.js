const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notepadDB", {useNewUrlParser:true, useUnifiedTopology:true},(err)=> {
  if(err)   console.log(err);
});

const NotesSchema = mongoose.Schema({
    title : String,
    description : String,
        
})

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;