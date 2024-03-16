function simplifyPath(path: string): string {
    
    const canoPath : string[] = path.split('/');
    console.log(canoPath);
    const resultPath: string[] = []
    for(let i=0;i< canoPath.length; i++){
        if(canoPath[i] == "." || canoPath[i] == ""  ) continue;
        else if(canoPath[i] == ".." ){
            resultPath.pop();
            continue;
        }
        resultPath.push(canoPath[i]);
    }
    
    return "/"+resultPath.join("/")
};