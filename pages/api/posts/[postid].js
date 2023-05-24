export default function handler(req , res ){
    const {query} = req;
    console.log(query);
    return res.status(200).json({postid: query.postid})
}