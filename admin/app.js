var express = require('express');
var mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
var userModel = require('./models/userModel');
var excelToJson = require('convert-excel-to-json');
var bodyParser = require('body-parser');
const fs = require('fs')
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
//connect to db  
mongoose.connect('mongodb+srv://muslimeow:havana2123@musli.whiz5r1.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err))
//init app  
var app = express();
//set the template engine  
app.set('view engine', 'ejs');
//fetch data from the request  
app.use(bodyParser.urlencoded({ extended: false }));
//static folder  
app.use(express.static(path.resolve(__dirname, 'public')));
//route for Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Upload excel file and import to mongodb
app.post('/uploadfile', upload.single("uploadfile"), (req, res) => {
  importExcelData2MongoDB(__dirname + '/public/uploads/' + req.file.filename);
  console.log(res, 'RES');
});
// Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath) {
  // -> Read Excel File to Json Data
  const excelData = excelToJson({
    sourceFile: filePath,
    sheets: [{
      // Excel Sheet Name
      name: 'TDSheet',
      // Header Row -> be skipped and will not be present at our result object.
      header: {
        rows: 1
      },
      // Mapping columns to keys
      columnToKey: {
        A: 'category',
        B: 'subcategory',
        C: 'type',
        D: 'title',
        E: 'images',
        F: 'cost',
        G: 'brend',
        H: 'description',
      }
    }]
  });
  // -> Log Excel Data to Console
  console.log(excelData, "excelData");
  /**
  { 
  Customers:
  [ 
  { _id: 1, name: 'Kavin Smith', address: 'Massachusetts', age: 23 },
  { _id: 2, name: 'Thomas Johnson', address: 'New York', age: 27 },
  { _id: 3, name: 'Katherin Carter', address: 'Washington DC', age: 26 },
  { _id: 4, name: 'Jack London', address: 'Nevada', age: 33 },
  { _id: 5, name: 'Jason Bourne', address: 'California', age: 36 } 
  ] 
  }
  */
  // Insert Json-Object to MongoDB
  userModel.insertMany(excelData.TDSheet).then((err, data) => {
    console.log(data, 'Data')
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
  fs.unlinkSync(filePath);
}
//assign port  
var port = process.env.PORT || 4000;
app.listen(port, () => console.log('server run at port ' + port));


module.exports = app;
