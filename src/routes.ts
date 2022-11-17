import { Request, Response } from "express";
import createCourseService from "./createCourseService";

export function createCourse(req:Request,res: Response){
    createCourseService.execute({
        name:"NodeJS",
        educator:"Gabriel",
        duration:10
});
createCourseService.execute({
    name:"ReactJS",
    educator:"Diego"
});
    return res.send();
}