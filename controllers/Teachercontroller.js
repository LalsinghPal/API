class Teachercontroller{
    static  display=async(req,res)=>{
        try {
            res.send("hello teacher")
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=Teachercontroller