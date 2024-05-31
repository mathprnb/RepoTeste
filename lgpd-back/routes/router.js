import express from "express";

const router = express.Router();

import userController from "../routes/UserController.js"
import teacherController from "../routes/TeacherController.js"
import courseController from "../routes/CourseController.js"
import evaluationController from "../routes/EvaluationController.js"

router.get("/", function(req, res){
    console.log("Oi");
    res.status(200).json({message: "Sucesso"});
})

router.use("/", userController);
router.use("/", teacherController);
router.use("/", courseController);
router.use("/", evaluationController);

export default router;