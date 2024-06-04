import express from "express";
import pg from "pg";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { title } from "process";
import { configDotenv } from "dotenv";
import db from "./DBConfig.js";

configDotenv();

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// let notesData = [
//     {
//         id: 1,
//         title: "The Art of Mindfulness",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A soluta est cum temporibus suscipit tenetur cumque excepturi reprehenderit, perspiciatis nemo, voluptatibus sed molestiae numquam et accusantium, qui architecto? Non, magnam.",
//         date: "29-5-2024",
//         imageUrl: "https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         noteUrl: "the_art_of_mindfulness",
//     },
//     {
//         id: 2,
//         title: "Time Management",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A soluta est cum temporibus suscipit tenetur cumque excepturi reprehenderit, perspiciatis nemo, voluptatibus sed molestiae numquam et accusantium, qui architecto? Non, magnam.",
//         date: "29-5-2024",
//         imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         noteUrl: "time_management",
//     },
//     {
//         id: 3,
//         title: "The effect of Surroundings",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A soluta est cum temporibus suscipit tenetur cumque excepturi reprehenderit, perspiciatis nemo, voluptatibus sed molestiae numquam et accusantium, qui architecto? Non, magnam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. A soluta est cum temporibus suscipit tenetur cumque excepturi reprehenderit, perspiciatis nemo, voluptatibus sed molestiae numquam et accusantium, qui architecto? Non, magnam.",
//         date: "30-05-2024",
//         imageUrl: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         noteUrl: "the_effect_of_surroundings",
//     },
// ];


// db.connect();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Get all notes
app.get("/notes", async (req, res) => {

    const result = await db.query("SELECT * FROM notes");

    notesData = result.rows;

    const currentHour = new Date().getHours();

    console.log("Hour: ", currentHour);

    let wish;
    if(currentHour >= 0 && currentHour < 12){
        wish = "Morning";
    } else if(currentHour >= 12 && currentHour < 17){
        wish = "Afternoon";
    } else {
        wish = "Evening";
    }

    res.render("notes.ejs", { notesData: notesData , wish});
});

// Get new note
app.get("/newnote", (req, res) => {
    res.render("newNote.ejs");
});

// POST new note
app.post("/newnote", async (req, res) => {
    console.log("BODY: ", req.body);

    const postedData = req.body;

    const currentDay = new Date();
    const currentDayFormatted = `${currentDay.getDate()}-${currentDay.getMonth()}-${currentDay.getFullYear()}`;
    const newNoteUrl = req.body.title.toLowerCase().replace(/\s+/g, '_');

    const response = await db.query("INSERT INTO notes (title, info, date, imageurl, noteurl) VALUES ($1, $2, $3, $4, $5);", [postedData.title, postedData.info, currentDayFormatted, postedData.imageUrl, newNoteUrl]);

    console.log(response);


    res.status(200).redirect("/notes");

});

// Get single note
app.get("/:title", async (req, res) => {
    const reqTitle = req.params.title;

    const result = await db.query("SELECT * FROM notes WHERE noteurl = $1",[reqTitle]);

    const reqNote = result.rows[0];
    res.render("note.ejs", { noteData: reqNote });
});

// Edit a note
app.get("/edit/:title", async (req, res) => {
    const reqTitle = req.params.title;

    const result = await db.query("SELECT * FROM notes");
    notesData = result.rows;

    const reqNote = notesData.find((note) => note.noteurl === reqTitle);

    res.render("editNote.ejs", { noteData: reqNote });
});

app.post("/edit/:title", async (req, res) => {
    const reqTitle = req.params.title;

    const result = await db.query("SELECT * FROM notes");
    notesData = result.rows;

    const userEditedObj = req.body;
    
    const currentDay = new Date();
    const currentDayFormatted = `${currentDay.getDate()}-${currentDay.getMonth()}-${currentDay.getFullYear()}`;
    const editedNoteUrl = userEditedObj.title.toLowerCase().replace(/\s+/g, '_');
    const reqNoteResult = await db.query("SELECT * FROM notes WHERE noteurl = $1",[reqTitle]);
    const reqNote = reqNoteResult.rows[0];
    const editedImageUrl = userEditedObj.imageUrl || reqNote.imageurl;

    const response = await db.query("UPDATE notes SET title = $1, info = $2, date = $3, imageurl = $4, noteurl = $5 WHERE noteurl = $6;", [userEditedObj.title, userEditedObj.info, currentDayFormatted, editedImageUrl, editedNoteUrl, reqTitle]);

    res.status(200).redirect("/notes");
});

app.get("/delete/:title", async (req, res) => {
    const reqTitleUrl = req.params.title;

    const response = await db.query("DELETE FROM notes WHERE noteurl = $1", [reqTitleUrl]);

    res.redirect("/notes");
});

app.listen(port, (req, res) => {
    console.log("Server is listening on port ", port);
}); 