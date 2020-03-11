import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/events',function(req,res){
    let obj = {
        "related events": [
            {
                "event_title": "blockchain",
                "event_location": "coimbatore",
                "event_date": "02-03-2020",
            },
            {
                "event_title": "blockchain tech",
                "event_location": "coimbatore",
                "event_date": "05-03-2020"
            }
        ],
        "description": "this is a blockchain event"
    };
    res.send(obj);
});


app.listen(8000,()=>{console.log("listening on port 8000...")});
