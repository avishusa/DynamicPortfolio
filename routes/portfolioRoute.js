const router = require('express').Router();
const { Intro, About, Project, Contact, Experience, Course } = require('../models/portfolioModel');

//API for getting all the data
router.get('/get-portfolio-data', async (req, res) => {

    try {

        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            courses: courses
        });

    } catch (error) {
        res.status(500).send(error);
    }
})

//API for upadting intro
router.post("/update-intro",async(req,res)=>{
    try {
        const intro = await Intro.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        )
        res.status(200).send({
            data:intro,
        success:true,
    message:"Intro updated successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
})

//API for upadting about
router.post("/update-about",async(req,res)=>{
    try {
        const about = await About.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        )
        res.status(200).send({
            data:about,
        success:true,
    message:"Intro updated successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
})

//Add Experience

router.post("/add-experience", async (req,res)=>{
    try {
        const experience=new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data:experience,
            success: true,
            message:"Experience added successfully"
        })
    } catch (error) {
        res.status.send(error);
        console.log(error)
    }
})

//update experience
router.post("/update-experience", async (req,res)=>{

    try {
        const experience = await Experience.findByIdAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data : experience,
            success : true,
            message: "Experience updated successfully"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete experience

router.post("/delete-experience", async (req,res)=>{

    try {
        const experience = await Experience.findByIdAndDelete(
            {_id:req.body._id}
        );
        res.status(200).send({
            data : experience,
            success : true,
            message: "Experience deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//Add project

router.post("/add-project", async (req,res)=>{
    try {
        const project=new Project(req.body);
        await project.save();
        res.status(200).send({
            data:project,
            success: true,
            message:"Project added successfully"
        })
    } catch (error) {
        res.status.send(error);
        console.log(error)
    }
})

//update project
router.post("/update-project", async (req,res)=>{

    try {
        const project = await Project.findByIdAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data : project,
            success : true,
            message: "Project updated successfully"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete project

router.post("/delete-project", async (req,res)=>{

    try {
        const project = await Project.findByIdAndDelete(
            {_id:req.body._id}
        );
        res.status(200).send({
            data : project,
            success : true,
            message: "Project deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;
