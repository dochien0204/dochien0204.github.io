function chuanHoa(name) 
{
    name = name.trim();
    name = name.replace(/\s+/g, ' ');
    for(let item of name)
    {
        if(item >= '0' && item <= '9')
            name = name.replace(item, "");
    }
    name = name.toLowerCase();
    a = name.split(" ");
    str ="";
    a.forEach(element => {
        str += element.substr(0,1).toUpperCase() + element.substring(1) + " ";
    });
    return str;
}


const case1 = "    hOang Bui   ";
const case2 = " hOANG      BUI   hOang     ";
const case3 = "23traN    dUOng23     ";
console.log(chuanHoa(case1));
console.log(chuanHoa(case2));
console.log(chuanHoa(case3));
