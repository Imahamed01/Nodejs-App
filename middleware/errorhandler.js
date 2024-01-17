export const errorhandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode)
    {
        case 400:
            res.json({"title": "validation Failed","message":err.message});
            break;
        case 404:
            res.json({"title": "not found","message":err.message});
            res.json({"title": "validation Failed","message":err.message});

            break;

        case 200:
            res.json({"title": "not found","message":"Successful Database entry"});

    }
};